# SearchAppResourcesRequest

Search app resources based on filters specified in the request body.

## Example Usage

```typescript
import { SearchAppResourcesRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAppResourcesRequest = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `appId`                                                                 | *string*                                                                | :heavy_minus_sign:                                                      | The app ID to restrict the search to.                                   |
| `appUserIds`                                                            | *string*[]                                                              | :heavy_minus_sign:                                                      | A list of app user IDs to restrict the search by.                       |
| `excludeDeletedResourceBindings`                                        | *boolean*                                                               | :heavy_minus_sign:                                                      | If true, exclude resources whose bindings have been deleted.            |
| `excludeResourceIds`                                                    | *string*[]                                                              | :heavy_minus_sign:                                                      | A list of resource IDs to exclude from the search results.              |
| `excludeResourceTypeTraitIds`                                           | *string*[]                                                              | :heavy_minus_sign:                                                      | A list of resource type trait IDs to exclude from the search.           |
| `ownerUserIds`                                                          | *string*[]                                                              | :heavy_minus_sign:                                                      | A list of C1 user IDs to filter resources by ownership.                 |
| `pageSize`                                                              | *number*                                                                | :heavy_minus_sign:                                                      | The maximum number of results to return per page.                       |
| `pageToken`                                                             | *string*                                                                | :heavy_minus_sign:                                                      | The token for fetching the next page of results.                        |
| `query`                                                                 | *string*                                                                | :heavy_minus_sign:                                                      | Fuzzy search the display name of resources.                             |
| `refs`                                                                  | [shared.AppResourceRef](../../../sdk/models/shared/appresourceref.md)[] | :heavy_minus_sign:                                                      | A list of specific app resource references to restrict the search to.   |
| `resourceIds`                                                           | *string*[]                                                              | :heavy_minus_sign:                                                      | A list of resource IDs to restrict the search to.                       |
| `resourceTypeIds`                                                       | *string*[]                                                              | :heavy_minus_sign:                                                      | A list of resource type IDs to restrict the search by.                  |
| `resourceTypeTraitIds`                                                  | *string*[]                                                              | :heavy_minus_sign:                                                      | A list of resource type trait IDs to restrict the search by.            |