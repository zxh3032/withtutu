# withtutu

> 一张写给未来 AI Agent 产品经理的交互式探索地图。

`withtutu` 是一个面向 AI / AI Agent 产品经理的成长型产品项目。项目希望通过清晰的知识结构、真实工作场景和可操作的互动体验，帮助使用者建立技术直觉，理解研发协作与 AI Agent 体系，并把所学内容带回实际产品工作。

项目按照正常研发流程逐项迭代：每次选择一个明确功能，完成需求确认、设计、开发、测试、记录和验收，再进入下一项功能。尚未确认进入当前迭代的设想不会提前实现。

## 项目方向

项目长期围绕以下方向逐步建设：

- 帮助产品经理理解研发协作、技术概念和交付关系；
- 帮助产品经理理解 AI、LLM、Agent 及相关工程体系；
- 将 AI 产品工作方法沉淀为可理解、可操作的体验；
- 通过互动、练习和实际工具帮助使用者验证理解；
- 在迭代过程中，根据真实使用反馈决定功能优先级。

以上方向用于说明产品定位，不代表所有功能已经进入开发范围。每次实际开发内容以迭代记录为准。

## 技术方案

项目采用单仓库、前后端分目录的方式组织。

以下为技术基线摘要，完整说明和技术选型的权威来源见 [技术选型说明](./docs/技术选型说明.md)。

| 范围 | 技术选择 |
|---|---|
| 前端语言 | TypeScript |
| 前端框架 | Next.js App Router |
| 样式方案 | Tailwind CSS + CSS Variables |
| 动画方案 | Motion for React + CSS |
| 后端语言 | Go |
| 后端框架 | Gin |
| 数据库 | MySQL |
| 缓存 | Redis |

## 项目结构

```text
withtutu/
├── README.md
├── AGENTS.md
├── docs/
│   ├── README.md
│   ├── 技术选型说明.md
│   └── 迭代流程记录.md
├── frontend/
│   ├── .gitignore
│   ├── README.md
│   ├── change-records/
│   ├── eslint.config.mjs
│   ├── next-env.d.ts
│   ├── next.config.ts
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.mjs
│   ├── public/
│   ├── src/
│   ├── tests/
│   └── tsconfig.json
└── backend/
    ├── README.md
    ├── change-records/
    ├── cmd/
    ├── internal/
    ├── migrations/
    └── tests/
```

目录职责：

- `docs/`：存放技术选型和项目迭代记录，目录说明见 [`docs/README.md`](./docs/README.md)；
- `frontend/`：存放 Next.js 前端工程和前端修改记录，目录说明见 [`frontend/README.md`](./frontend/README.md)；
- `backend/`：存放 Go/Gin 后端工程和后端修改记录，目录说明见 [`backend/README.md`](./backend/README.md)；
- `AGENTS.md`：约束后续与大模型协作时的工作方式；
- `change-records/`：分别记录前端和后端的实际代码与逻辑变更。

## 迭代方式

每次迭代应至少经历：

```text
选择功能
→ 明确目标与边界
→ 完成方案设计
→ 开发与测试
→ 记录实际变更
→ 验收
→ 进入下一项功能
```

迭代过程统一记录在 [迭代流程记录](./docs/迭代流程记录.md)。

前端和后端发生代码或逻辑变更时，需要分别在对应的 `change-records/` 目录维护修改记录。统一规则见 [`AGENTS.md`](./AGENTS.md)，目录内的具体说明见前端或后端 `README.md`。

## 当前状态

项目当前已建立前端工程基线，尚未进入业务功能开发：

- 已确定前后端基础技术方向；
- 已建立文档、前端和后端目录；
- 已定义代码分层和修改记录规则；
- 前端已完成 Next.js、TypeScript、Tailwind CSS 和 Motion for React 工程初始化；
- 前端已通过代码检查、类型检查、依赖审计和生产构建；
- 尚未初始化后端依赖；
- 尚未确定首个业务功能迭代。

后续开发以迭代记录中的当前迭代为准。
