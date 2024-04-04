# GetAppUsageControlsResponse

The GetAppUsageControlsResponse message contains the retrieved AppUsageControls object.


## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `appUsageControls`                                                              | [shared.AppUsageControls](../../../sdk/models/shared/appusagecontrols.md)       | :heavy_minus_sign:                                                              | The AppUsageControls object describes some peripheral configuration for an app. |
| `hasUsageData`                                                                  | *boolean*                                                                       | :heavy_minus_sign:                                                              | HasUsageData is false if the access entitlement for this app has no usage data. |