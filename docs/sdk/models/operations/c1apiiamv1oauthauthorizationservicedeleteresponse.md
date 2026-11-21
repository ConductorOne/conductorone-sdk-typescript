# C1ApiIamV1OAuthAuthorizationServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiIamV1OAuthAuthorizationServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiIamV1OAuthAuthorizationServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 890661,
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response content type for this operation                                                                           |
| `statusCode`                                                                                                            | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response status code for this operation                                                                            |
| `rawResponse`                                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                   | :heavy_check_mark:                                                                                                      | Raw HTTP response; suitable for custom response parsing                                                                 |
| `oAuthAuthorizationServiceDeleteResponse`                                                                               | [shared.OAuthAuthorizationServiceDeleteResponse](../../../sdk/models/shared/oauthauthorizationservicedeleteresponse.md) | :heavy_minus_sign:                                                                                                      | Successful response                                                                                                     |