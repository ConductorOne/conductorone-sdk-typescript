# PayloadFindingDispatch

The PayloadFindingDispatch message.

## Example Usage

```typescript
import { PayloadFindingDispatch } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PayloadFindingDispatch = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `dispatchId`                                                                                             | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The FindingDispatch row recording this execution.                                                        |
| `finding`                                                                                                | [shared.Finding](../../../sdk/models/shared/finding.md)                                                  | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |
| `findingId`                                                                                              | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The finding that matched the routing rule.                                                               |
| `payloadTemplate`                                                                                        | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The dispatcher's rendered payload template. Empty when the dispatcher used<br/> the default finding payload. |
| `ruleId`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | The routing rule whose match caused this dispatch.                                                       |