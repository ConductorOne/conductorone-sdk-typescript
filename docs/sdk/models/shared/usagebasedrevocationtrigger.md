# UsageBasedRevocationTrigger

The UsageBasedRevocationTrigger message.

This message contains a oneof named cold_start_schedule. Only a single field of the following list may be set at a time:
  - runImmediately
  - runDelayed


## Example Usage

```typescript
import { UsageBasedRevocationTrigger } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UsageBasedRevocationTrigger = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The appId field.                                                                              |
| `enabledAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `excludedGroupRefs`                                                                           | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)[]                 | :heavy_minus_sign:                                                                            | The excludedGroupRefs field.                                                                  |
| `excludedUserRefs`                                                                            | [shared.UserRef](../../../sdk/models/shared/userref.md)[]                                     | :heavy_minus_sign:                                                                            | The excludedUserRefs field.                                                                   |
| `includeUsersWithNoActivity`                                                                  | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | The includeUsersWithNoActivity field.                                                         |
| `runDelayed`                                                                                  | [shared.RunDelayed](../../../sdk/models/shared/rundelayed.md)                                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `runImmediately`                                                                              | [shared.RunImmediately](../../../sdk/models/shared/runimmediately.md)                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `targetedAppUserTypes`                                                                        | [shared.TargetedAppUserTypes](../../../sdk/models/shared/targetedappusertypes.md)[]           | :heavy_minus_sign:                                                                            | The targetedAppUserTypes field.                                                               |
| `targetedEntitlementRefs`                                                                     | [shared.AppEntitlementRef](../../../sdk/models/shared/appentitlementref.md)[]                 | :heavy_minus_sign:                                                                            | The targetedEntitlementRefs field.                                                            |
| `unusedForDays`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | The unusedForDays field.                                                                      |