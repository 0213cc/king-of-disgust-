# Github 开源项目数据可视化大屏

本项目是一个基于 Vue 3 的 Github 开源项目数据可视化大屏展示系统。通过调用 OpenDigger API，实时展示 Github 项目的各项数据指标，包括 Star、Fork、Issue、PR 等数据的统计和分析。

## 技术栈

### 前端框架
- Vue 3.2.13 - 渐进式 JavaScript 框架
- Vue Router 4.5.0 - 官方路由管理器
- Vuex 4.1.0 - 状态管理模式和库

### UI 组件
- Element Plus 2.4.0 - 基于 Vue 3 的组件库
- DataV 2.10.0 - 数据可视化组件库

### 可视化工具
- ECharts 5.5.1 - 开源可视化图表库
- echarts-wordcloud 2.1.0 - 词云图插件
- echarts-liquidfill 3.1.0 - 水球图插件

### 开发工具
- Vue CLI - 项目脚手架
- Sass/SCSS - CSS 预处理器
- ESLint - 代码检查工具

### 网络请求
- Axios 1.7.9 - 基于 promise 的 HTTP 库

### 其他工具
- v-scale-screen 2.3.0 - 大屏自适应组件
- core-js - JavaScript 标准库

### 构建工具
- @vue/cli-service - Vue CLI 的核心服务
- babel - JavaScript 编译器
- sass-loader - Sass 加载器

### 开发环境
- Node.js >= 14.0.0
- npm 包管理器
- Chrome 浏览器 (推荐)

## 环境依赖

- Node.js >= 14.0.0
- Vue 3.2.13
- ECharts 5.5.1
- DataV 2.10.0
- Element Plus 2.4.0
- Axios 1.7.9

## 目录结构描述
├── README.md // 帮助文档
├── public // 静态资源
├── src // 源代码目录
│ ├── assets // 资源文件
│ │ ├── Bg.gif // 背景图
│ │ └── scss // 样式文件
│ ├── components // 组件目录
│ │ ├── echart // 图表组件
│ │ │ ├── cardchart // 时间序列分布图
│ │ │ ├── codeChangeChart // 代码变更统计
│ │ │ ├── databox // 数据统计组件
│ │ │ ├── rainfallChart // 关系图表
│ │ │ └── stream // 流数据图表
│ │ └── wordCloud // 词云图组件
│ ├── router // 路由配置
│ ├── store // Vuex状态管理
│ ├── utils // 工具函数
│ └── view // 页面视图
├── vue.config.js // Vue 配置文件
└── package.json // 项目依赖配置

## 功能特性

1. 数据展示
   - Star、Fork、Issue、PR 等核心指标实时展示
   - 数据液体填充效果
   - 自适应布局设计

2. 图表展示
   - 时间序列分布图
   - 代码变更统计图
   - 贡献者词云图
   - 项目活跃度分析

3. 交互功能
   - 项目搜索和切换
   - 图表数据联动
   - 自适应缩放

## 使用说明

1. 安装依赖
    npm install
2. 开发环境运行
    npm run serve

## 项目特点

1. 响应式设计
   - 使用 vw、vh 等相对单位
   - 支持各种分辨率自适应

2. 性能优化
   - 组件按需加载
   - 图表性能优化
   - 数据缓存处理

3. 代码规范
   - ESLint 规范
   - 组件化开发
   - TypeScript 支持

## 注意事项

1. 确保网络能够访问 Github API
2. 建议使用 Chrome 浏览器访问
3. 推荐使用 1920*1080 及以上分辨率
