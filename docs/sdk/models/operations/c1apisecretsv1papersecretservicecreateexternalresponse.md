# C1ApiSecretsV1PaperSecretServiceCreateExternalResponse

## Example Usage

```typescript
import { C1ApiSecretsV1PaperSecretServiceCreateExternalResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSecretsV1PaperSecretServiceCreateExternalResponse = {
  contentType: "<value>",
  statusCode: 908642,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `paperSecretServiceCreateResponse`                                                                        | [shared.PaperSecretServiceCreateResponse](../../../sdk/models/shared/papersecretservicecreateresponse.md) | :heavy_minus_sign:                                                                                        | Successful response                                                                                       |