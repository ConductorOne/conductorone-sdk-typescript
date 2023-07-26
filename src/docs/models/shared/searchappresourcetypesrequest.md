# SearchAppResourceTypesRequest

 Search for app resources based on some filters.



## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `appIds`                                                        | *string*[]                                                      | :heavy_minus_sign:                                              |  A list of app IDs to restrict the search by.<br/>              |
| `excludeResourceTypeIds`                                        | *string*[]                                                      | :heavy_minus_sign:                                              |  A list of resource type IDs to exclude from the search.<br/>   |
| `excludeResourceTypeTraitIds`                                   | *string*[]                                                      | :heavy_minus_sign:                                              |  A list of resource type trait IDs to exclude from the search.<br/> |
| `pageSize`                                                      | *number*                                                        | :heavy_minus_sign:                                              |  The pageSize where 10 <= pageSize <= 100, default 25.<br/>     |
| `pageToken`                                                     | *string*                                                        | :heavy_minus_sign:                                              |  The pageToken field.<br/>                                      |
| `query`                                                         | *string*                                                        | :heavy_minus_sign:                                              |  Fuzzy search the display name of resource types.<br/>          |
| `resourceTypeIds`                                               | *string*[]                                                      | :heavy_minus_sign:                                              |  A list of resource type IDs to restrict the search by.<br/>    |
| `resourceTypeTraitIds`                                          | *string*[]                                                      | :heavy_minus_sign:                                              |  A list of resource type trait IDs to restrict the search by.<br/> |