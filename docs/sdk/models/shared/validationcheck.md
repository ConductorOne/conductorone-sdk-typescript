# ValidationCheck

ValidationCheck for client-side validation rules.

This message contains a oneof named check. Only a single field of the following list may be set at a time:
  - call
  - and
  - or


## Example Usage

```typescript
import { ValidationCheck } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ValidationCheck = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `and`                                                             | [shared.AndCheck](../../../sdk/models/shared/andcheck.md)         | :heavy_minus_sign:                                                | N/A                                                               |
| `call`                                                            | [shared.FunctionCall](../../../sdk/models/shared/functioncall.md) | :heavy_minus_sign:                                                | N/A                                                               |
| `or`                                                              | [shared.OrCheck](../../../sdk/models/shared/orcheck.md)           | :heavy_minus_sign:                                                | N/A                                                               |