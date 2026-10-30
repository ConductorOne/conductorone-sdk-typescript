# AppEntitlementSearchServiceSearchReachableResourcesForUserResponse

SearchReachableResourcesForUser response. Resources are deduplicated: a
 resource reachable through more than one grant or entitlement appears once.

## Example Usage

```typescript
import { AppEntitlementSearchServiceSearchReachableResourcesForUserResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppEntitlementSearchServiceSearchReachableResourcesForUserResponse =
  {};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `list`                                                                                                                                             | [shared.GraphNode](../../../sdk/models/shared/graphnode.md)[]                                                                                      | :heavy_minus_sign:                                                                                                                                 | The reachable resources, one GraphNode (type = GRAPH_NODE_TYPE_RESOURCE)<br/> per distinct resource. Uses the same node representation as SearchGraph. |
| `nextPageToken`                                                                                                                                    | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | Token for fetching the next page of results.                                                                                                       |