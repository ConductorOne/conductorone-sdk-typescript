# C1ApiEdgeV1EdgeServiceListUsableEdgesResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServiceListUsableEdgesResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServiceListUsableEdgesResponse = {
  contentType: "<value>",
  statusCode: 183708,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `edgeServiceListUsableEdgesResponse`                                                                          | [shared.EdgeServiceListUsableEdgesResponse](../../../sdk/models/shared/edgeservicelistusableedgesresponse.md) | :heavy_minus_sign:                                                                                            | EdgeServiceListUsableEdgesResponse contains currently authorized connection targets.                          |