# BuiltInPattern

BuiltInPattern references a ConductorOne-maintained DLP pattern.
 The specific pattern and its configuration are encoded as a oneof.

This message contains a oneof named config. Only a single field of the following list may be set at a time:
  - piiRedaction
  - creditCardBlocking
  - queryScopeLimit
  - writeAuthorization
  - sensitiveFileGuard


## Example Usage

```typescript
import { BuiltInPattern } from "conductorone-sdk-typescript/sdk/models/shared";

let value: BuiltInPattern = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `creditCardBlocking`                                                                      | [shared.CreditCardBlockingConfig](../../../sdk/models/shared/creditcardblockingconfig.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `piiRedaction`                                                                            | [shared.PIIRedactionConfig](../../../sdk/models/shared/piiredactionconfig.md)             | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `queryScopeLimit`                                                                         | [shared.QueryScopeLimitConfig](../../../sdk/models/shared/queryscopelimitconfig.md)       | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `sensitiveFileGuard`                                                                      | [shared.SensitiveFileGuardConfig](../../../sdk/models/shared/sensitivefileguardconfig.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |
| `writeAuthorization`                                                                      | [shared.WriteAuthorizationConfig](../../../sdk/models/shared/writeauthorizationconfig.md) | :heavy_minus_sign:                                                                        | N/A                                                                                       |