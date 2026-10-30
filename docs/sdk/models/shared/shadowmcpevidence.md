# ShadowMcpEvidence

ShadowMcpEvidence carries counts only -- occurrence detail (which users,
 devices, harnesses) is resolved dynamically, not stored here.

## Example Usage

```typescript
import { ShadowMcpEvidence } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ShadowMcpEvidence = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `deviceCount`                                                               | *number*                                                                    | :heavy_minus_sign:                                                          | Distinct devices observed running the product outside the governed gateway. |
| `userCount`                                                                 | *number*                                                                    | :heavy_minus_sign:                                                          | Distinct users observed running the product outside the governed gateway.   |