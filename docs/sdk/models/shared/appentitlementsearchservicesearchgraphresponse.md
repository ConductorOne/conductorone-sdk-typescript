# AppEntitlementSearchServiceSearchGraphResponse

SearchGraph response. Contains a subgraph of nodes and edges.

## Example Usage

```typescript
import { AppEntitlementSearchServiceSearchGraphResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppEntitlementSearchServiceSearchGraphResponse = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `edges`                                                       | [shared.GraphEdge](../../../sdk/models/shared/graphedge.md)[] | :heavy_minus_sign:                                            | The edges field.                                              |
| `hasMore`                                                     | *boolean*                                                     | :heavy_minus_sign:                                            | The hasMore field.                                            |
| `nodes`                                                       | [shared.GraphNode](../../../sdk/models/shared/graphnode.md)[] | :heavy_minus_sign:                                            | The nodes field.                                              |
| `pageToken`                                                   | *string*                                                      | :heavy_minus_sign:                                            | The pageToken field.                                          |
| `pathsReturned`                                               | *number*                                                      | :heavy_minus_sign:                                            | The pathsReturned field.                                      |
| `truncatedNodeIds`                                            | *string*[]                                                    | :heavy_minus_sign:                                            | The truncatedNodeIds field.                                   |