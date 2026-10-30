# ResolvedLimit

ResolvedLimit records the historical limit of an admitted account.

This message contains a oneof named kind. Only a single field of the following list may be set at a time:
  - unlimited
  - amount


## Example Usage

```typescript
import { ResolvedLimit } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ResolvedLimit = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `amount`                                                                    | [shared.ResolvedAmount](../../../sdk/models/shared/resolvedamount.md)       | :heavy_minus_sign:                                                          | N/A                                                                         |
| `unlimited`                                                                 | [shared.ResolvedUnlimited](../../../sdk/models/shared/resolvedunlimited.md) | :heavy_minus_sign:                                                          | N/A                                                                         |