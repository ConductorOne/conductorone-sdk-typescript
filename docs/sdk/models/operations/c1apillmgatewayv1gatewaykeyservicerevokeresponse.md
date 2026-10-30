# C1ApiLlmGatewayV1GatewayKeyServiceRevokeResponse

## Example Usage

```typescript
import { C1ApiLlmGatewayV1GatewayKeyServiceRevokeResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiLlmGatewayV1GatewayKeyServiceRevokeResponse = {
  contentType: "<value>",
  statusCode: 996225,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |
| `revokeGatewayKeyResponse`                                                                | [shared.RevokeGatewayKeyResponse](../../../sdk/models/shared/revokegatewaykeyresponse.md) | :heavy_minus_sign:                                                                        | Successful response                                                                       |