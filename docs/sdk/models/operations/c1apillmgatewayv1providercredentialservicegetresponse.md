# C1ApiLlmGatewayV1ProviderCredentialServiceGetResponse

## Example Usage

```typescript
import { C1ApiLlmGatewayV1ProviderCredentialServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiLlmGatewayV1ProviderCredentialServiceGetResponse = {
  contentType: "<value>",
  statusCode: 117726,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `getProviderCredentialResponse`                                                                     | [shared.GetProviderCredentialResponse](../../../sdk/models/shared/getprovidercredentialresponse.md) | :heavy_minus_sign:                                                                                  | Successful response                                                                                 |