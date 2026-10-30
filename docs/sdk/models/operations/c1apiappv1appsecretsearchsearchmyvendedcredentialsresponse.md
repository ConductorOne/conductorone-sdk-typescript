# C1ApiAppV1AppSecretSearchSearchMyVendedCredentialsResponse

## Example Usage

```typescript
import { C1ApiAppV1AppSecretSearchSearchMyVendedCredentialsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppSecretSearchSearchMyVendedCredentialsResponse = {
  contentType: "<value>",
  statusCode: 702990,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `searchAppSecretsWithAlertCountResponse`                                                                              | [shared.SearchAppSecretsWithAlertCountResponse](../../../sdk/models/shared/searchappsecretswithalertcountresponse.md) | :heavy_minus_sign:                                                                                                    | Successful response                                                                                                   |