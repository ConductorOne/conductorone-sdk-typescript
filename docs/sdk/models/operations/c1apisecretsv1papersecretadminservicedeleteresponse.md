# C1ApiSecretsV1PaperSecretAdminServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiSecretsV1PaperSecretAdminServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSecretsV1PaperSecretAdminServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 273444,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `paperSecretAdminServiceDeleteResponse`                                                                             | [shared.PaperSecretAdminServiceDeleteResponse](../../../sdk/models/shared/papersecretadminservicedeleteresponse.md) | :heavy_minus_sign:                                                                                                  | Successful response                                                                                                 |