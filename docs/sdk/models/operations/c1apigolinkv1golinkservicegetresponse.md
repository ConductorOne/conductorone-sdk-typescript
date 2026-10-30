# C1ApiGolinkV1GoLinkServiceGetResponse

## Example Usage

```typescript
import { C1ApiGolinkV1GoLinkServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiGolinkV1GoLinkServiceGetResponse = {
  contentType: "<value>",
  statusCode: 623553,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |
| `goLinkServiceGetResponse`                                                                | [shared.GoLinkServiceGetResponse](../../../sdk/models/shared/golinkservicegetresponse.md) | :heavy_minus_sign:                                                                        | Successful response                                                                       |