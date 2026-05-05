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
| `andCheck`                                                        | [shared.AndCheck](../../../sdk/models/shared/andcheck.md)         | :heavy_minus_sign:                                                | AndCheck requires all checks to pass.                             |
| `functionCall`                                                    | [shared.FunctionCall](../../../sdk/models/shared/functioncall.md) | :heavy_minus_sign:                                                | FunctionCall represents a client-side function invocation.        |
| `orCheck`                                                         | [shared.OrCheck](../../../sdk/models/shared/orcheck.md)           | :heavy_minus_sign:                                                | OrCheck requires at least one check to pass.                      |