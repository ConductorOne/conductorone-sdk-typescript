# GraphEdge

An edge in the access graph.

## Example Usage

```typescript
import { GraphEdge } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GraphEdge = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `hiddenChildren`                                                    | *number*                                                            | :heavy_minus_sign:                                                  | The hiddenChildren field.                                           |
| `isTruncated`                                                       | *boolean*                                                           | :heavy_minus_sign:                                                  | The isTruncated field.                                              |
| `sourceId`                                                          | *string*                                                            | :heavy_minus_sign:                                                  | The sourceId field.                                                 |
| `targetId`                                                          | *string*                                                            | :heavy_minus_sign:                                                  | The targetId field.                                                 |
| `type`                                                              | [shared.GraphEdgeType](../../../sdk/models/shared/graphedgetype.md) | :heavy_minus_sign:                                                  | The type field.                                                     |