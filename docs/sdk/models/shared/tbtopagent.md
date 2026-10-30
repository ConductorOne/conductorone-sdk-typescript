# TBTopAgent

TBTopAgent is one source_principal group.

## Example Usage

```typescript
import { TBTopAgent } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TBTopAgent = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `allowedCount`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | The allowedCount field.                                                  |
| `callCount`                                                              | *string*                                                                 | :heavy_minus_sign:                                                       | The callCount field.                                                     |
| `deniedCount`                                                            | *string*                                                                 | :heavy_minus_sign:                                                       | The deniedCount field.                                                   |
| `requestBytes`                                                           | *string*                                                                 | :heavy_minus_sign:                                                       | request_bytes is sum(counter_request_bytes) -- bytes the agent sent out. |
| `responseBytes`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | The responseBytes field.                                                 |
| `sourcePrincipal`                                                        | *string*                                                                 | :heavy_minus_sign:                                                       | The sourcePrincipal field.                                               |
| `sourcePrincipalKind`                                                    | *string*                                                                 | :heavy_minus_sign:                                                       | The sourcePrincipalKind field.                                           |