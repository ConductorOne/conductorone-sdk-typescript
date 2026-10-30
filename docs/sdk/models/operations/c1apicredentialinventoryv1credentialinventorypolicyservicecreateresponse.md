# C1ApiCredentialInventoryV1CredentialInventoryPolicyServiceCreateResponse

## Example Usage

```typescript
import { C1ApiCredentialInventoryV1CredentialInventoryPolicyServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiCredentialInventoryV1CredentialInventoryPolicyServiceCreateResponse = {
    contentType: "<value>",
    statusCode: 774982,
  };
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                         | *string*                                                                                                                              | :heavy_check_mark:                                                                                                                    | HTTP response content type for this operation                                                                                         |
| `statusCode`                                                                                                                          | *number*                                                                                                                              | :heavy_check_mark:                                                                                                                    | HTTP response status code for this operation                                                                                          |
| `rawResponse`                                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                 | :heavy_check_mark:                                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                                               |
| `credentialInventoryPolicyServiceCreateResponse`                                                                                      | [shared.CredentialInventoryPolicyServiceCreateResponse](../../../sdk/models/shared/credentialinventorypolicyservicecreateresponse.md) | :heavy_minus_sign:                                                                                                                    | Successful response                                                                                                                   |