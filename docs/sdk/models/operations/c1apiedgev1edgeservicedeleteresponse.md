# C1ApiEdgeV1EdgeServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 206886,
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                          | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | HTTP response content type for this operation                                                                                          |
| `statusCode`                                                                                                                           | *number*                                                                                                                               | :heavy_check_mark:                                                                                                                     | HTTP response status code for this operation                                                                                           |
| `rawResponse`                                                                                                                          | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                  | :heavy_check_mark:                                                                                                                     | Raw HTTP response; suitable for custom response parsing                                                                                |
| `edgeServiceDeleteResponse`                                                                                                            | [shared.EdgeServiceDeleteResponse](../../../sdk/models/shared/edgeservicedeleteresponse.md)                                            | :heavy_minus_sign:                                                                                                                     | EdgeServiceDeleteResponse confirms deletion. The Edge's entitlement<br/> stack cascade-deletes; a replacement Edge mints an all-new stack. |