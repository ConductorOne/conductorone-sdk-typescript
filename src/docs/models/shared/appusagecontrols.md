# AppUsageControls

 The AppUsageControls object describes some peripheral configuration for an app.



## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `appId`                                                                                                                      | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           |  The app that this object belongs to.<br/>                                                                                   |
| `notify`                                                                                                                     | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           |  Whether or not to notify some if they have access to the app, but has not used it within a configurable amount of time.<br/> |
| `notifyAfterDays`                                                                                                            | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           |  The duration in days after which we notify users of nonusage.<br/>                                                          |
| `revoke`                                                                                                                     | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           |  Whether or not to revoke a grant if they have access to the app, but has not used it within a configurable amount of time.<br/> |
| `revokeAfterDays`                                                                                                            | *number*                                                                                                                     | :heavy_minus_sign:                                                                                                           |  The duration in days after which we revoke users that have not used that grant.<br/>                                        |