# C1ApiIamV1ExternalOAuthClientServiceRotateSecretResponse

## Example Usage

```typescript
import { C1ApiIamV1ExternalOAuthClientServiceRotateSecretResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiIamV1ExternalOAuthClientServiceRotateSecretResponse = {
  contentType: "<value>",
  statusCode: 736885,
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                         | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | HTTP response content type for this operation                                                                                         |
| `statusCode`                                                                                                                          | *number*                                                                                                                              | :heavy_check_mark:                                                                                                                    | HTTP response status code for this operation                                                                                          |
| `rawResponse`                                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                 | :heavy_check_mark:                                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                                               |
| `externalOAuthClientServiceRotateSecretResponse`                                                                                      | [shared.ExternalOAuthClientServiceRotateSecretResponse](../../../sdk/models/shared/externaloauthclientservicerotatesecretresponse.md) | :heavy_minus_sign:                                                                                                                    | Successful response                                                                                                                   |