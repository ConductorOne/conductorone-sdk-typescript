# C1ApiAppV1AppEntitlementSearchServiceSearchGraphResponse

## Example Usage

```typescript
import { C1ApiAppV1AppEntitlementSearchServiceSearchGraphResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppEntitlementSearchServiceSearchGraphResponse = {
  contentType: "<value>",
  statusCode: 524025,
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                         | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | HTTP response content type for this operation                                                                                         |
| `statusCode`                                                                                                                          | *number*                                                                                                                              | :heavy_check_mark:                                                                                                                    | HTTP response status code for this operation                                                                                          |
| `rawResponse`                                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                 | :heavy_check_mark:                                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                                               |
| `appEntitlementSearchServiceSearchGraphResponse`                                                                                      | [shared.AppEntitlementSearchServiceSearchGraphResponse](../../../sdk/models/shared/appentitlementsearchservicesearchgraphresponse.md) | :heavy_minus_sign:                                                                                                                    | SearchGraph response. Contains a subgraph of nodes and edges.                                                                         |