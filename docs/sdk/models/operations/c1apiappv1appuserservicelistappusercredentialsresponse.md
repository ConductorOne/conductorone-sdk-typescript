# C1ApiAppV1AppUserServiceListAppUserCredentialsResponse

## Example Usage

```typescript
import { C1ApiAppV1AppUserServiceListAppUserCredentialsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppUserServiceListAppUserCredentialsResponse = {
  contentType: "<value>",
  statusCode: 288265,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `appUserServiceListCredentialsResponse`                                                                             | [shared.AppUserServiceListCredentialsResponse](../../../sdk/models/shared/appuserservicelistcredentialsresponse.md) | :heavy_minus_sign:                                                                                                  | Successful response                                                                                                 |