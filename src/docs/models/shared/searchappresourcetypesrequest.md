# SearchAppResourceTypesRequest

Search for app resources based on some filters.


## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `appIds`                                                      | *string*[]                                                    | :heavy_minus_sign:                                            | A list of app IDs to restrict the search by.                  |
| `excludeResourceTypeIds`                                      | *string*[]                                                    | :heavy_minus_sign:                                            | A list of resource type IDs to exclude from the search.       |
| `excludeResourceTypeTraitIds`                                 | *string*[]                                                    | :heavy_minus_sign:                                            | A list of resource type trait IDs to exclude from the search. |
| `pageSize`                                                    | *number*                                                      | :heavy_minus_sign:                                            | The pageSize where 10 <= pageSize <= 100, default 25.         |
| `pageToken`                                                   | *string*                                                      | :heavy_minus_sign:                                            | The pageToken field.                                          |
| `query`                                                       | *string*                                                      | :heavy_minus_sign:                                            | Fuzzy search the display name of resource types.              |
| `resourceTypeIds`                                             | *string*[]                                                    | :heavy_minus_sign:                                            | A list of resource type IDs to restrict the search by.        |
| `resourceTypeTraitIds`                                        | *string*[]                                                    | :heavy_minus_sign:                                            | A list of resource type trait IDs to restrict the search by.  |