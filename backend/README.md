# backend 目录总览

> 本文件记录后端目录的整体结构、各文件夹职责和依赖方向。后端目录结构发生变化时，必须同步更新本文件。

## 技术基线

以下为后端技术摘要，完整技术选型以 [`docs/技术选型说明.md`](../docs/技术选型说明.md) 为准。

- 语言：Go；
- HTTP 框架：Gin；
- 数据库：MySQL；
- 缓存：Redis。

## 目录结构

```text
backend/
├── README.md
├── change-records/
├── cmd/
│   └── server/
├── internal/
│   ├── bootstrap/
│   ├── config/
│   ├── domain/
│   ├── application/
│   ├── transport/
│   │   └── http/
│   │       ├── handler/
│   │       ├── middleware/
│   │       └── router/
│   ├── infrastructure/
│   │   ├── persistence/
│   │   │   └── mysql/
│   │   └── cache/
│   │       └── redis/
│   └── shared/
├── migrations/
└── tests/
    └── integration/
```

## 目录说明

| 路径 | 内容与职责 |
|---|---|
| `README.md` | 当前后端目录的结构总览、分层职责和依赖规则 |
| `change-records/` | 后端接口、业务逻辑、数据和缓存修改记录 |
| `cmd/server/` | Go HTTP 服务启动入口，只负责启动和退出流程 |
| `internal/bootstrap/` | 创建并组装配置、数据库、缓存、服务和路由依赖 |
| `internal/config/` | 环境配置的读取、默认值和启动校验 |
| `internal/domain/` | 领域实体、业务规则以及由外层实现的接口 |
| `internal/application/` | 一个完整业务用例的流程编排和事务边界 |
| `internal/transport/http/handler/` | Gin Handler，处理参数、调用用例并输出响应 |
| `internal/transport/http/middleware/` | Gin 中间件，例如日志、恢复和后续认证能力 |
| `internal/transport/http/router/` | Gin 路由注册和路由分组 |
| `internal/infrastructure/persistence/mysql/` | MySQL 数据访问接口的具体实现 |
| `internal/infrastructure/cache/redis/` | Redis 缓存接口的具体实现 |
| `internal/shared/` | 后端内部跨层复用且不属于具体业务的基础能力 |
| `migrations/` | 可追踪、可按顺序执行的 MySQL 结构变更 |
| `tests/integration/` | 验证 HTTP、MySQL、Redis 等组合行为的集成测试 |

## 依赖方向

```text
transport → application → domain
infrastructure ───────→ domain
bootstrap → transport / application / infrastructure
```

- `domain` 不依赖 Gin、MySQL 或 Redis；
- `application` 只通过领域接口使用数据和外部能力；
- `transport` 负责 HTTP 协议转换，不实现业务规则；
- `infrastructure` 实现领域层定义的 MySQL、Redis 等接口；
- `bootstrap` 在最外层完成具体实现的组装；
- Gin 的 `Context` 不能传入 application、domain 或 infrastructure。

## 修改记录规则

后端发生源代码、配置、脚本、测试、接口、数据结构、数据库、缓存或业务逻辑变化时，在 `change-records/` 中记录：

```text
YYYYMMDD_功能变动.md
```

同一迭代、同一功能只维护一份记录，文件名使用首次修改日期；跨日期继续修改时，在原记录中追加带时间的内容。独立功能或范围发生实质变化时创建新记录，并与相关记录相互链接。

每份记录至少包含修改时间、修改原因、修改范围、涉及文件、实际变更、逻辑变化、数据库或缓存变化、验证结果、已知风险与后续事项。没有数据库或缓存变化时明确写“无”。

当前记录：

- `20260713_后端目录分层初始化.md`：建立后端初始分层；
- `20260713_目录总览文件补充.md`：增加本目录总览文件及维护规则。

## 维护规则

- 新增、删除、移动或重命名一级、二级目录时更新本文件；
- 新增服务入口、基础设施或共享能力时说明其职责和依赖方向；
- 新增具体业务包后，在目录树和目录说明中补充；
- 实际代码文件无需全部罗列，但启动入口、配置入口和关键基础设施文件应说明；
- 目录总览更新应与结构变更在同一次迭代中完成。
