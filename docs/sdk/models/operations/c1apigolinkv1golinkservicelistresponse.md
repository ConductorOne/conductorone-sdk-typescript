# C1ApiGolinkV1GoLinkServiceListResponse

## Example Usage

```typescript
import { C1ApiGolinkV1GoLinkServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiGolinkV1GoLinkServiceListResponse = {
  contentType: "<value>",
  statusCode: 117826,
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | HTTP response content type for this operation                                               |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | HTTP response status code for this operation                                                |
| `rawResponse`                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                       | :heavy_check_mark:                                                                          | Raw HTTP response; suitable for custom response parsing                                     |
| `goLinkServiceListResponse`                                                                 | [shared.GoLinkServiceListResponse](../../../sdk/models/shared/golinkservicelistresponse.md) | :heavy_minus_sign:                                                                          | Successful response                                                                         |