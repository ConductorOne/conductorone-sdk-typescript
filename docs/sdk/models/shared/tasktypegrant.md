# TaskTypeGrant

The TaskTypeGrant message indicates that a task is a grant task and all related details.

## Example Usage

```typescript
import { TaskTypeGrant } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskTypeGrant = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `appEntitlementId`                                                                                   | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The ID of the app entitlement.                                                                       |
| `appId`                                                                                              | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The ID of the app.                                                                                   |
| `appUserId`                                                                                          | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The ID of the app user.                                                                              |
| `grantDuration`                                                                                      | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `identityUserId`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The ID of the user.                                                                                  |
| `outcome`                                                                                            | [shared.TaskTypeGrantOutcome](../../../sdk/models/shared/tasktypegrantoutcome.md)                    | :heavy_minus_sign:                                                                                   | The outcome of the grant.                                                                            |
| `outcomeTime`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `taskGrantSource`                                                                                    | [shared.TaskGrantSource](../../../sdk/models/shared/taskgrantsource.md)                              | :heavy_minus_sign:                                                                                   | The TaskGrantSource message tracks which external URL was the source of the specificed grant ticket. |