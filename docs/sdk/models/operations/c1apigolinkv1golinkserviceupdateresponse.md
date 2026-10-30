# C1ApiGolinkV1GoLinkServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiGolinkV1GoLinkServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiGolinkV1GoLinkServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 219065,
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `contentType`                                                                                   | *string*                                                                                        | :heavy_check_mark:                                                                              | HTTP response content type for this operation                                                   |
| `statusCode`                                                                                    | *number*                                                                                        | :heavy_check_mark:                                                                              | HTTP response status code for this operation                                                    |
| `rawResponse`                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                           | :heavy_check_mark:                                                                              | Raw HTTP response; suitable for custom response parsing                                         |
| `goLinkServiceUpdateResponse`                                                                   | [shared.GoLinkServiceUpdateResponse](../../../sdk/models/shared/golinkserviceupdateresponse.md) | :heavy_minus_sign:                                                                              | Successful response                                                                             |