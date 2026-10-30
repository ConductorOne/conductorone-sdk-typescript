# C1ApiEdgeV1EdgeServiceListEgressTrafficEventsRequest

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServiceListEgressTrafficEventsRequest } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServiceListEgressTrafficEventsRequest = {
  appId: "<id>",
  id: "<id>",
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `appId`                                                                                 | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `id`                                                                                    | *string*                                                                                | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `bucket`                                                                                | [operations.QueryParamBucket](../../../sdk/models/operations/queryparambucket.md)       | :heavy_minus_sign:                                                                      | The bucket field.                                                                       |
| `dimension`                                                                             | [operations.QueryParamDimension](../../../sdk/models/operations/queryparamdimension.md) | :heavy_minus_sign:                                                                      | The dimension field.                                                                    |
| `pageSize`                                                                              | *number*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `pageToken`                                                                             | *string*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `since`                                                                                 | *number*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `until`                                                                                 | *number*                                                                                | :heavy_minus_sign:                                                                      | N/A                                                                                     |