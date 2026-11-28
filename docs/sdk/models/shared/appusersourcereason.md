# AppUserSourceReason

Why a record is on its account.

This message contains a oneof named reason. Only a single field of the following list may be set at a time:
  - created
  - ruleMatch
  - merged
  - legacy
  - resourceIdMatch


## Example Usage

```typescript
import { AppUserSourceReason } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUserSourceReason = {};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `created`                                                                                                     | [shared.AppUserSourceReasonCreated](../../../sdk/models/shared/appusersourcereasoncreated.md)                 | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `legacy`                                                                                                      | [shared.AppUserSourceReasonLegacy](../../../sdk/models/shared/appusersourcereasonlegacy.md)                   | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `merged`                                                                                                      | [shared.AppUserSourceReasonMerged](../../../sdk/models/shared/appusersourcereasonmerged.md)                   | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `placedAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                 | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `resourceIdMatch`                                                                                             | [shared.AppUserSourceReasonResourceIdMatch](../../../sdk/models/shared/appusersourcereasonresourceidmatch.md) | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |
| `ruleMatch`                                                                                                   | [shared.AppUserSourceReasonRuleMatch](../../../sdk/models/shared/appusersourcereasonrulematch.md)             | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |