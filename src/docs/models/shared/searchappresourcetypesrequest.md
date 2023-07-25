# SearchAppResourceTypesRequest

 The SearchAppResourceTypesRequest message.



## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `appIds`                                                        | *string*[]                                                      | :heavy_minus_sign:                                              |  A list of app IDs to restrict the search by.<br/>              |
| `excludeResourceTypeIds`                                        | *string*[]                                                      | :heavy_minus_sign:                                              |  A list of resource type IDs to exclude from the search.<br/>   |
| `excludeResourceTypeTraitIds`                                   | *string*[]                                                      | :heavy_minus_sign:                                              |  A list of resource type trait IDs to exclude from the search.<br/> |
| `pageSize`                                                      | *number*                                                        | :heavy_minus_sign:                                              | The pageSize field.                                             |
| `pageToken`                                                     | *string*                                                        | :heavy_minus_sign:                                              | The pageToken field.                                            |
| `query`                                                         | *string*                                                        | :heavy_minus_sign:                                              |  Fuzzy search the display name of resource types.<br/>          |
| `resourceTypeIds`                                               | *string*[]                                                      | :heavy_minus_sign:                                              |  A list of resource type IDs to restrict the search by.<br/>    |
| `resourceTypeTraitIds`                                          | *string*[]                                                      | :heavy_minus_sign:                                              |  A list of resource type trait IDs to restrict the search by.<br/> |