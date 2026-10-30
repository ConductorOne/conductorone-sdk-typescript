# AppEntitlementSearchServiceSearchReachableResourcesForUserRequest

SearchReachableResourcesForUser request.

## Example Usage

```typescript
import { AppEntitlementSearchServiceSearchReachableResourcesForUserRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppEntitlementSearchServiceSearchReachableResourcesForUserRequest =
  {};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `appIds`                                                                                                                    | *string*[]                                                                                                                  | :heavy_minus_sign:                                                                                                          | Restrict results to resources belonging to these applications. Empty<br/> searches across every application the user can reach. |
| `pageSize`                                                                                                                  | *number*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Maximum number of results to return per page.                                                                               |
| `pageToken`                                                                                                                 | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Token for fetching the next page of results.                                                                                |
| `query`                                                                                                                     | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Fuzzy search over the resource display name.                                                                                |
| `userId`                                                                                                                    | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | The user whose reachable resources to search.                                                                               |