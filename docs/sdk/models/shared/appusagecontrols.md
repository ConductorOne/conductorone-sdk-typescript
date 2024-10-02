# AppUsageControls

The AppUsageControls object describes some peripheral configuration for an app.

## Example Usage

```typescript
import { AppUsageControls } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppUsageControls = {};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                                    | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The app that this object belongs to.                                                                                       |
| `notify`                                                                                                                   | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | Whether or not to notify some if they have access to the app, but has not used it within a configurable amount of time.    |
| `notifyAfterDays`                                                                                                          | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The duration in days after which we notify users of nonusage.                                                              |
| `revoke`                                                                                                                   | *boolean*                                                                                                                  | :heavy_minus_sign:                                                                                                         | Whether or not to revoke a grant if they have access to the app, but has not used it within a configurable amount of time. |
| `revokeAfterDays`                                                                                                          | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The duration in days after which we revoke users that have not used that grant.                                            |