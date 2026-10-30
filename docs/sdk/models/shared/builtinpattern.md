# BuiltInPattern

BuiltInPattern references a ConductorOne-maintained DLP pattern.
 The specific pattern and its configuration are encoded as a oneof.

This message contains a oneof named config. Only a single field of the following list may be set at a time:
  - piiRedaction
  - creditCardBlocking
  - queryScopeLimit
  - writeAuthorization
  - sensitiveFileGuard
  - toolOutputSizeGuard
  - secretsMasking
  - linkFilter
  - encodedContentGuard
  - promptInjectionScan
  - blockOutput
  - blockToolCall
  - preToolBlock


## Example Usage

```typescript
import { BuiltInPattern } from "conductorone-sdk-typescript/sdk/models/shared";

let value: BuiltInPattern = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `blockOutput`                                                                               | [shared.BlockOutputConfig](../../../sdk/models/shared/blockoutputconfig.md)                 | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `blockToolCall`                                                                             | [shared.BlockToolCallConfig](../../../sdk/models/shared/blocktoolcallconfig.md)             | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `creditCardBlocking`                                                                        | [shared.CreditCardBlockingConfig](../../../sdk/models/shared/creditcardblockingconfig.md)   | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `encodedContentGuard`                                                                       | [shared.EncodedContentGuardConfig](../../../sdk/models/shared/encodedcontentguardconfig.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `linkFilter`                                                                                | [shared.LinkFilterConfig](../../../sdk/models/shared/linkfilterconfig.md)                   | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `piiRedaction`                                                                              | [shared.PIIRedactionConfig](../../../sdk/models/shared/piiredactionconfig.md)               | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `preToolBlock`                                                                              | [shared.PreToolBlockConfig](../../../sdk/models/shared/pretoolblockconfig.md)               | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `promptInjectionScan`                                                                       | [shared.PromptInjectionScanConfig](../../../sdk/models/shared/promptinjectionscanconfig.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `queryScopeLimit`                                                                           | [shared.QueryScopeLimitConfig](../../../sdk/models/shared/queryscopelimitconfig.md)         | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `secretsMasking`                                                                            | [shared.SecretsMaskingConfig](../../../sdk/models/shared/secretsmaskingconfig.md)           | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `sensitiveFileGuard`                                                                        | [shared.SensitiveFileGuardConfig](../../../sdk/models/shared/sensitivefileguardconfig.md)   | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `toolOutputSizeGuard`                                                                       | [shared.ToolOutputSizeGuardConfig](../../../sdk/models/shared/tooloutputsizeguardconfig.md) | :heavy_minus_sign:                                                                          | N/A                                                                                         |
| `writeAuthorization`                                                                        | [shared.WriteAuthorizationConfig](../../../sdk/models/shared/writeauthorizationconfig.md)   | :heavy_minus_sign:                                                                          | N/A                                                                                         |