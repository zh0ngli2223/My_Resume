// 简历数据文件 - 便于维护和修改

// 技能标签数据
export interface Skill {
  name: string
  color?: string
  level?: string // 技能掌握程度描述
}

// 项目数据
export interface Project {
  title: string
  role: string
  desc: string
  techStack: string[]
  detail: string
}

// 经历数据（用于时间轴）
export interface Experience {
  time: string
  title: string
  description: string
}

// 联系方式数据
export interface Contact {
  email: string
  phone: string
  github: string
  wechatQrCode: string
}

// 技能标签数组
export const skills: Skill[] = [
  { name: 'HTML5', level: '熟练掌握' },
  { name: 'CSS3', level: '熟练掌握' },
  { name: 'JavaScript(ES6+)', level: '熟练掌握' },
  { name: 'TypeScript', level: '熟练掌握' },
  { name: 'Vue3全家桶(Vue Router、Pinia、Composition API)', level: '熟悉掌握' },
  { name: 'uni-app', level: '熟悉掌握' },
  { name: 'ECharts', level: '熟悉掌握' },
  { name: 'Git', level: '熟悉掌握' },
  { name: 'Vite', level: '了解使用' },
  { name: 'Webpack', level: '了解使用' },
  { name: 'Axios', level: '熟悉掌握' },
  { name: '微信开发者工具', level: '熟悉掌握' },
  { name: 'Claude Code', level: '熟悉使用' }
]

// 项目数组
export const projects: Project[] = [
  {
    title: '个人简历小程序（AI 辅助开发）',
    role: '独立开发',
    desc: '独立开发求职简历展示小程序，实现个人信息、项目经历等基础交互展示',
    techStack: ['uni-app', 'Vue3', 'TypeScript', '微信开发者工具', 'Claude Code'],
    detail: '实现首页技能标签云动态配色 + 点击交互；项目页卡片式分层展示；关于我页左右交替时间轴展示经历；联系页一键复制 + 振动反馈获取联系方式。AI 快速搭建原型、优化交互细节高效调试问题、规范 TS 代码与注释，大幅提升开发效率与代码质量。'
  },
  {
    title: 'Vue3 后台管理系统',
    role: '前端开发',
    desc: '基于 Vue3 的企业级单页面后台管理系统，Mock.js 模拟后端数据',
    techStack: ['Vue3', 'Vite', 'Pinia', 'Vue Router', 'Element-Plus', 'Axios', 'ECharts', 'Mock.js'],
    detail: '实现动态权限路由、多页签管理、数据可视化、用户管理等核心功能。使用 Vite 搭建架构，配置 Vue Router 实现动态权限路由与多页签管理；封装 Axios 请求模块，统一拦截处理，集成 Mock.js 生成模拟数据，Pinia 实现全局状态管理。'
  },
  {
    title: '小程序点单项目（原型开发）',
    role: '前端开发',
    desc: '餐饮类小程序点单项目原型开发，完成前端核心界面与基础业务逻辑搭建',
    techStack: ['uni-app'],
    detail: '基于 uni-app 完成小程序整体布局与样式搭建，开发首页轮播图、菜品分类等核心组件；开发登录/注册页面，实现表单校验，完成前端基础身份认证逻辑。'
  }
]

// 经历数组（时间轴展示）
export const experiences: Experience[] = [
  {
    time: '2021.09 - 2024.06',
    title: '赣州师范高等专科学校 | 专科 | 计算机应用技术',
    description: '系统学习计算机基础知识，为本科阶段深入学习打下坚实基础。'
  },
  {
    time: '2023.09 - 2023.11',
    title: '小程序点单项目原型开发',
    description: '餐饮类小程序点单项目原型开发，完成前端核心界面与基础业务逻辑搭建。'
  },
  {
    time: '2024.09 - 2026.06',
    title: '南昌应用技术师范学院 | 本科 | 计算机科学与技术',
    description: '担任班级学习委员三年，负责师生沟通与教学事务协调，培养责任心与团队协作能力；独立代讲计算机课程一周，完成备课、授课全流程，提升信息提炼与公开表达能力。'
  },
  {
    time: '2025.07 - 2025.09',
    title: 'Vue3后台管理系统开发',
    description: '基于Vue3的企业级单页面后台管理系统，实现动态权限路由、多页签管理、数据可视化等核心功能。'
  },
  {
    time: '2026.03',
    title: '个人简历小程序开发',
    description: '独立开发求职简历展示小程序，部署CCSwitch连接longCat模型调用ClaudeCode深度结合AI编程工具提效，落地前端+AI开发实践。'
  }
]

// 联系方式
export const contact: Contact = {
  email: '1374384177@qq.com',
  phone: '17870607263',
  github: 'https://github.com/zh0ngli2223',
  wechatQrCode: '/static/wx.jpg'
}