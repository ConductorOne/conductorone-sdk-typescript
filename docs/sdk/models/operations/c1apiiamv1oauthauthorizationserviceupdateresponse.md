# C1ApiIamV1OAuthAuthorizationServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiIamV1OAuthAuthorizationServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiIamV1OAuthAuthorizationServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 853678,
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response content type for this operation                                                                           |
| `statusCode`                                                                                                            | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response status code for this operation                                                                            |
| `rawResponse`                                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                   | :heavy_check_mark:                                                                                                      | Raw HTTP response; suitable for custom response parsing                                                                 |
| `oAuthAuthorizationServiceUpdateResponse`                                                                               | [shared.OAuthAuthorizationServiceUpdateResponse](../../../sdk/models/shared/oauthauthorizationserviceupdateresponse.md) | :heavy_minus_sign:                                                                                                      | Successful response                                                                                                     |