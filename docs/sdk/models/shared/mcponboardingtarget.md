# McpOnboardingTarget

McpOnboardingTarget is one server/app the admin chose to govern during the
 AIAM briefing, plus its progress.

## Example Usage

```typescript
import { McpOnboardingTarget } from "conductorone-sdk-typescript/sdk/models/shared";

let value: McpOnboardingTarget = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `displayName`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | Snapshot of the human label at selection time.                                              |
| `id`                                                                                        | *string*                                                                                    | :heavy_minus_sign:                                                                          | Identifies the target within the id space named by kind.                                    |
| `kind`                                                                                      | [shared.McpOnboardingTargetKind](../../../sdk/models/shared/mcponboardingtargetkind.md)     | :heavy_minus_sign:                                                                          | The kind field.                                                                             |
| `mcpServerId`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | The registered MCP server a CATALOG_ENTRY target became, once registered.                   |
| `status`                                                                                    | [shared.McpOnboardingTargetStatus](../../../sdk/models/shared/mcponboardingtargetstatus.md) | :heavy_minus_sign:                                                                          | The status field.                                                                           |