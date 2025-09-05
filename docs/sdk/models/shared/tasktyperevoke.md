# TaskTypeRevoke

The TaskTypeRevoke message indicates that a task is a revoke task and all related details.

## Example Usage

```typescript
import { TaskTypeRevoke } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskTypeRevoke = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `appEntitlementId`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the app entitlement.                                                                |
| `appId`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the app.                                                                            |
| `appUserId`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the app user.                                                                       |
| `identityUserId`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the user.                                                                           |
| `outcome`                                                                                     | [shared.TaskTypeRevokeOutcome](../../../sdk/models/shared/tasktyperevokeoutcome.md)           | :heavy_minus_sign:                                                                            | The outcome of the revoke.                                                                    |
| `outcomeTime`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `source`                                                                                      | [shared.TaskRevokeSource](../../../sdk/models/shared/taskrevokesource.md)                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |