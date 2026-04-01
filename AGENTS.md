# Slay the Spire 2 Guide - 项目上下文

## 项目概述

这是一个面向海外市场的 Slay the Spire 2 Early Access 攻略网站落地页。网站专注于提供 Necrobinder 职业的 Build 构建、游戏机制解析和新手入门指南。

## 目标用户

- 已购买 Early Access 的核心玩家（需要攻略和 Build 参考）
- 正在观望的潜在购买者（想了解游戏是否值得购买）

## 核心功能

1. **卡组构建指南** - 最强 Build 的核心卡牌、关键遗物、打法思路
2. **英雄介绍** - Necrobinder 职业机制、专属状态效果、开局策略
3. **新手 Tips** - 避坑指南和快速上手技巧
4. **邮箱订阅** - 收集种子用户，提供免费的策略 PDF
5. **Coming Soon** - 预告未来功能（卡牌数据库、遗物列表、BOSS 攻略）

## 版本技术栈

- **Framework**: Next.js 16 (App Router)
- **Core**: React 19
- **Language**: TypeScript 5
- **UI Components**: shadcn/ui (基于 Radix UI)
- **Styling**: Tailwind CSS 4
- **Fonts**: Inter (正文), Oswald (标题)

## 目录结构

```
├── public/                    # 静态资源
├── scripts/                   # 构建与启动脚本
├── src/
│   ├── app/
│   │   ├── layout.tsx         # 根布局 (SEO 元数据)
│   │   ├── page.tsx           # 首页
│   │   ├── globals.css        # 全局样式 (深色主题)
│   │   ├── pdf/page.tsx       # PDF 下载页面
│   │   ├── robots.ts          # 爬虫规则
│   │   └── sitemap.ts         # 站点地图
│   ├── components/
│   │   ├── sections/          # 页面板块组件
│   │   │   ├── HeroSection.tsx
│   │   │   ├── BuildsSection.tsx
│   │   │   ├── NecrobinderSection.tsx
│   │   │   ├── TipsSection.tsx
│   │   │   ├── ComingSoonSection.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── GoogleAnalytics.tsx # GA4 集成
│   │   └── ui/                # Shadcn UI 组件库
│   ├── hooks/
│   └── lib/
├── .env.example               # 环境变量示例
├── next.config.ts
├── package.json
└── tsconfig.json
```

## 设计规范

### 配色方案
- 主背景: `#121212` (深灰蓝)
- 卡片背景: `#1a1a1d`
- 主要强调色: `#4ade80` (荧光绿 - 呼应 Necrobinder)
- 文字: `#f5f5f5` (主文字), `#a3a3a3` (次级文字)
- 边框: `#333333`

### 字体
- 标题: Oswald (硬朗有力)
- 正文: Inter (高可读性)

### 交互
- 卡片悬浮效果 (上浮 + 阴影)
- 按钮 hover 动效
- 平滑滚动

## SEO 配置

- **Title**: `Slay the Spire 2 Builds & Tier List | Necrobinder Guide`
- **Description**: `Updated daily! Find the best Slay the Spire 2 builds, Necrobinder starter decks, and Early Access tier lists. Get your free strategy PDF now.`
- **关键词**: Slay the Spire 2, STS2, Necrobinder, builds, tier list, deck guide, Early Access

## 环境变量

```env
# Google Analytics 4
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# ConvertKit (可选)
NEXT_PUBLIC_CONVERTKIT_FORM_ID=
NEXT_PUBLIC_CONVERTKIT_API_KEY=
```

## 包管理规范

**仅允许使用 pnpm** 作为包管理器。

常用命令：
- `pnpm dev` - 启动开发服务器 (端口 5000)
- `pnpm build` - 构建生产版本
- `pnpm start` - 启动生产服务器

## 部署说明

项目设计为部署到 Vercel：
1. 连接 GitHub 仓库
2. 导入项目到 Vercel
3. 配置自定义域名: `slaythespire2.me`
4. 设置环境变量 (GA4 ID)

## 未来扩展计划

- [ ] 完整卡牌数据库
- [ ] 遗物 Tier List
- [ ] BOSS 攻略页面
- [ ] 交互式卡组构建器
- [ ] 用户登录系统
- [ ] 社区分享功能

## 开发规范

- 使用 'use client' 标记客户端组件
- 避免在 JSX 中直接使用动态数据 (防止 Hydration 错误)
- 组件命名使用 PascalCase
- 样式优先使用 Tailwind CSS 类名
