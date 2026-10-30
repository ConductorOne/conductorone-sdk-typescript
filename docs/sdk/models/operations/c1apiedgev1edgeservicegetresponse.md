# C1ApiEdgeV1EdgeServiceGetResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServiceGetResponse = {
  contentType: "<value>",
  statusCode: 469642,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |
| `edgeServiceGetResponse`                                                              | [shared.EdgeServiceGetResponse](../../../sdk/models/shared/edgeservicegetresponse.md) | :heavy_minus_sign:                                                                    | EdgeServiceGetResponse returns the requested Edge.                                    |