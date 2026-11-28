# AppUserMergeRulesServiceResetToDefaultsRequest

The AppUserMergeRulesServiceResetToDefaultsRequest message identifies the application whose rules to reset.

## Example Usage

```typescript
import { AppUserMergeRulesServiceResetToDefaultsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserMergeRulesServiceResetToDefaultsRequest = {};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `expectedRuleSetVersion`                                                                                                                     | *number*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | The rule_set_version the reset is based on. If the stored version differs, the reset<br/> fails with FAILED_PRECONDITION and nothing is changed. |