# 项目配置

## 项目类型

静态博客网站，基于 GitHub Pages 托管，纯 HTML/CSS/JS 构建。

## 技术栈

- HTML5 + CSS3 + Vanilla JavaScript
- Google Fonts (Inter, Noto Serif SC)
- 无框架依赖，轻量级架构

## 目录结构

- `/` — 主页入口
- `articles/` — 技术文章
- `projects/` — 项目展示
- `assets/` — 静态资源 (css, js)

## 开发规范

1. 所有页面使用中文内容 (`lang="zh-CN"`)
2. CSS 变量定义在 `assets/css/style.css` 中
3. JS 逻辑放在 `assets/js/main.js`
4. 文章和项目页面放在对应目录下，包含 `index.html`

## GitHub Pages 部署

推送到 `main` 分支后自动部署，无需额外配置。

## 页面验证流程（Playwright + 截图）

本地启动服务后，使用以下流程验证页面：

### Step 1: 启动测试服务器
```bash
python -m http.server 8765
```

### Step 2: 页面验证步骤
1. **导航** → `browser_navigate` 打开页面
2. **快照** → `browser_snapshot` 检查元素结构
3. **截图** → `browser_run_code` + `page.screenshot()` 保存截图
4. **识图** → `mcp__MiniMax__understand_image` 分析截图内容

### Step 3: 截图保存位置
- 文件名格式: `screenshots/功能名-状态-YYYY-MM-DD.png`
- 例如: `screenshots/filter-article-2026-05-05.png`
- 保存在项目根目录的 screenshots/ 文件夹

### Step 4: 筛选功能测试（完整流程）
每个筛选状态都必须单独验证，缺一不可：

1. **点击筛选按钮** → `browser_click`
2. **快照确认** → `browser_snapshot` 验证 DOM 变化
3. **截图保存** → `browser_run_code` + `page.screenshot()`
4. **识图分析** → `mcp__MiniMax__understand_image` 验证视觉表现

示例 — 测试"文章"筛选：
```
点击"文章"按钮 → snapshot(确认只剩2篇) → screenshot → understand_image(确认按钮激活态正确)
```

### Step 5: 验证完成后
- 必须关闭测试服务器
- 截图保留供后续对比参考

### 本次验证记录
| 日期 | 页面 | 结果 |
|------|------|------|
| 2026-05-05 | 首页 | 通过 |
| 2026-05-05 | 筛选功能-文章 | 通过 |
| 2026-05-05 | 筛选功能-项目 | 通过 |
| 2026-05-05 | 筛选功能-全部 | 通过 |

## CLAUDE.md 维护说明

- 本文件由 tangwt 创建
- 项目结构调整时同步更新
- 验证流程规范于 2026-05-05 追加
