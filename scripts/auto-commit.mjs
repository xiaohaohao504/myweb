#!/usr/bin/env node
/**
 * auto-commit.mjs — 自动提交脚本
 *
 * 行为：
 *   1. 检测工作区是否有变更（无变更则跳过）
 *   2. 根据变更内容自动生成中文提交信息（支持 --message "自定义信息" 覆盖）
 *   3. 暂存全部变更（遵循 .gitignore）
 *   4. 提交并推送到当前跟踪分支（首次用 origin HEAD 建立跟踪）
 *
 * 用法：
 *   node scripts/auto-commit.mjs
 *   node scripts/auto-commit.mjs --message "feat: 新增某功能"
 *
 * 也可通过 npm 调用：npm run auto:commit
 */

import { execSync } from 'node:child_process'

/** 执行命令并返回 stdout（失败抛出异常） */
function run(cmd, options = {}) {
  return execSync(cmd, { encoding: 'utf-8', stdio: ['ignore', 'pipe', 'pipe'], ...options }).trim()
}

/** 执行命令并返回 stdout，不抛出（用于探测） */
function tryRun(cmd) {
  try {
    return run(cmd)
  } catch {
    return ''
  }
}

const idx = process.argv.indexOf('--message')
const customMessage = idx !== -1 ? process.argv[idx + 1] : ''

function main() {
  // 1. 检测变更
  const status = run('git status --porcelain')
  if (!status) {
    console.log('✓ 没有检测到任何变更，跳过提交。')
    return
  }

  const lines = status.split('\n').filter(Boolean)
  const files = lines.map((l) => l.replace(/^.{1,3}\s/, '').trim())

  // 2. 生成提交信息
  const message = (customMessage && customMessage.trim()) || generateMessage(lines, files)
  if (!message) {
    console.error('✗ 无法生成提交信息。')
    process.exit(1)
  }

  // 3. 暂存全部变更
  run('git add -A')

  // 4. 提交（通过 stdin 传入信息，避免命令行中文编码问题）
  execSync('git commit -F -', { input: `${message}\n`, encoding: 'utf-8' })
  console.log(`✓ 已提交：${message}`)

  // 5. 推送（已跟踪分支直接 push，否则建立跟踪）
  const hasUpstream = tryRun('git rev-parse --abbrev-ref --symbolic-full-name @{u}')
  if (hasUpstream) {
    run('git push')
  } else {
    run('git push -u origin HEAD')
  }
  console.log('✓ 已推送到远程仓库，GitHub Actions 将自动部署。')
}

/** 根据变更内容启发式生成中文提交信息 */
function generateMessage(lines, files) {
  const added = lines.filter((l) => l[0] === 'A' || l[0] === '?').length
  const modified = lines.filter((l) => l[1] === 'M' || l[0] === 'M').length
  const deleted = lines.filter((l) => l[0] === 'D').length
  const renamed = lines.filter((l) => l[0] === 'R').length

  const moduleRules = [
    [/components\/AppHeader/, 'Header 导航'],
    [/components\/AppHero/, 'Hero 首屏'],
    [/components\/AppWorks/, 'Works 作品区'],
    [/components\/WorkCard/, 'Works 作品区'],
    [/components\/AppFooter/, 'Footer 页脚'],
    [/assets\/css/, '全局样式'],
    [/app\.vue/, '根布局'],
    [/nuxt\.config/, 'Nuxt 配置'],
    [/package\.json/, '依赖配置'],
    [/\.github\/workflows\/deploy\.yml/, '部署工作流'],
    [/\.github/, 'GitHub Actions'],
  ]

  const modules = new Set()
  for (const f of files) {
    for (const [re, name] of moduleRules) {
      if (re.test(f)) {
        modules.add(name)
        break
      }
    }
  }
  if (modules.size === 0) modules.add('项目文件')

  // 动词判定
  let verb = 'update'
  if (added && !modified && !deleted && !renamed) verb = 'feat'
  else if (deleted && !added && !modified && !renamed) verb = 'remove'
  else if (renamed && !added && !modified && !deleted) verb = 'refactor'
  else if (files.some((f) => /deploy\.yml|\.github/.test(f)) && added && !modified && !deleted) verb = 'ci'

  const verbMap = {
    feat: '新增',
    update: '更新',
    remove: '移除',
    refactor: '重构',
    ci: '配置',
    chore: '维护'
  }

  const scopeText = [...modules].join('、')
  const detail = describeDetail(added, modified, deleted, renamed)
  return `${verbMap[verb]}：${scopeText}${detail}`
}

function describeDetail(added, modified, deleted, renamed) {
  const parts = []
  if (added) parts.push(`新增 ${added} 个文件`)
  if (modified) parts.push(`修改 ${modified} 个文件`)
  if (deleted) parts.push(`删除 ${deleted} 个文件`)
  if (renamed) parts.push(`重命名 ${renamed} 个文件`)
  return parts.length ? `（${parts.join('、')}）` : ''
}

main()
