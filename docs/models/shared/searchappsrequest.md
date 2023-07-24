# SearchAppsRequest

 Search Apps by a few properties.



## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `appIds`                                                              | *string*[]                                                            | :heavy_minus_sign:                                                    |  A list of app IDs to restrict the search to.<br/>                    |
| `displayName`                                                         | *string*                                                              | :heavy_minus_sign:                                                    |  Search for apps with an exact match on the display name.<br/>        |
| `excludeAppIds`                                                       | *string*[]                                                            | :heavy_minus_sign:                                                    |  A list of app IDs to remove from the results.<br/>                   |
| `pageSize`                                                            | *number*                                                              | :heavy_minus_sign:                                                    |  The pageSize where 10 <= pageSize <= 100.<br/>                       |
| `pageToken`                                                           | *string*                                                              | :heavy_minus_sign:                                                    |  The pageToken field.<br/>                                            |
| `query`                                                               | *string*                                                              | :heavy_minus_sign:                                                    |  Query the apps with a fuzzy search on display name and description.<br/> |