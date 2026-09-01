# CodeWithAI — Nuxt 3 单页网站

基于 `index.html` 的样式，使用 Nuxt 3（Vue 3 + Vite + Nitro）重写的单页网站。

## 技术栈

- Nuxt 3（静态站点生成，Nitro `static` preset）
- Vue 3 组合式 API + 自定义指令（`v-reveal` 滚动进场动画）
- 纯 CSS 设计令牌（与原始页面 1:1 还原）

## 本地开发

```bash
npm install
npm run dev        # 本地开发：http://localhost:3000
npm run generate   # 静态构建，产物在 .output/public
npm run preview    # 预览构建产物
```

## 自动提交

当你想提交并部署时，只需对助手说「**帮我提交**」，它会运行自动提交脚本：

```bash
npm run auto:commit           # 自动生成提交信息并提交、推送
npm run auto:commit -- --message "feat: 新增某功能"   # 使用自定义信息
```

脚本逻辑（`scripts/auto-commit.mjs`）：检测变更 → 按变更内容（模块 / 新增·修改·删除）生成中文提交信息 → 暂存 → 提交 → 推送到 GitHub。

## 部署

推送 `main` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages：

- 站点地址：https://xiaohaohao504.github.io/myweb/
- 工作流：`.github/workflows/deploy.yml`

> 首次部署前，请在仓库 **Settings → Pages → Source** 选择 **GitHub Actions**。
