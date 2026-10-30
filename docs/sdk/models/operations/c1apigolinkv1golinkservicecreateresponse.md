# C1ApiGolinkV1GoLinkServiceCreateResponse

## Example Usage

```typescript
import { C1ApiGolinkV1GoLinkServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiGolinkV1GoLinkServiceCreateResponse = {
  contentType: "<value>",
  statusCode: 399259,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `contentType`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | HTTP response content type for this operation                                                   |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | HTTP response status code for this operation                                                    |
| `rawResponse`                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                           | :heavy_check_mark:                                                                              | Raw HTTP response; suitable for custom response parsing                                         |
| `goLinkServiceCreateResponse`                                                                   | [shared.GoLinkServiceCreateResponse](../../../sdk/models/shared/golinkservicecreateresponse.md) | :heavy_minus_sign:                                                                              | Successful response                                                                             |