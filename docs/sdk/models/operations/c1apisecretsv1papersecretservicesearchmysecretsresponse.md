# C1ApiSecretsV1PaperSecretServiceSearchMySecretsResponse

## Example Usage

```typescript
import { C1ApiSecretsV1PaperSecretServiceSearchMySecretsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSecretsV1PaperSecretServiceSearchMySecretsResponse = {
  contentType: "<value>",
  statusCode: 371294,
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `paperSecretServiceSearchResponse`                                                                        | [shared.PaperSecretServiceSearchResponse](../../../sdk/models/shared/papersecretservicesearchresponse.md) | :heavy_minus_sign:                                                                                        | Search response for user's own secrets                                                                    |