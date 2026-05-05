# C1ApiSecretsV1PaperSecretAdminServiceRevokeResponse

## Example Usage

```typescript
import { C1ApiSecretsV1PaperSecretAdminServiceRevokeResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSecretsV1PaperSecretAdminServiceRevokeResponse = {
  contentType: "<value>",
  statusCode: 477917,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `paperSecretAdminServiceRevokeResponse`                                                                             | [shared.PaperSecretAdminServiceRevokeResponse](../../../sdk/models/shared/papersecretadminservicerevokeresponse.md) | :heavy_minus_sign:                                                                                                  | Successful response                                                                                                 |