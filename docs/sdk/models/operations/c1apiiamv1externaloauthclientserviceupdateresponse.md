# C1ApiIamV1ExternalOAuthClientServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiIamV1ExternalOAuthClientServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiIamV1ExternalOAuthClientServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 176153,
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                             | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response content type for this operation                                                                             |
| `statusCode`                                                                                                              | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response status code for this operation                                                                              |
| `rawResponse`                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                     | :heavy_check_mark:                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                   |
| `externalOAuthClientServiceUpdateResponse`                                                                                | [shared.ExternalOAuthClientServiceUpdateResponse](../../../sdk/models/shared/externaloauthclientserviceupdateresponse.md) | :heavy_minus_sign:                                                                                                        | Successful response                                                                                                       |