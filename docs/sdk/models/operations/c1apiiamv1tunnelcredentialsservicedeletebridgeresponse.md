# C1ApiIamV1TunnelCredentialsServiceDeleteBridgeResponse

## Example Usage

```typescript
import { C1ApiIamV1TunnelCredentialsServiceDeleteBridgeResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiIamV1TunnelCredentialsServiceDeleteBridgeResponse = {
  contentType: "<value>",
  statusCode: 288619,
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                     | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response content type for this operation                                                                                     |
| `statusCode`                                                                                                                      | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response status code for this operation                                                                                      |
| `rawResponse`                                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                             | :heavy_check_mark:                                                                                                                | Raw HTTP response; suitable for custom response parsing                                                                           |
| `tunnelCredentialsServiceDeleteBridgeResponse`                                                                                    | [shared.TunnelCredentialsServiceDeleteBridgeResponse](../../../sdk/models/shared/tunnelcredentialsservicedeletebridgeresponse.md) | :heavy_minus_sign:                                                                                                                | Empty response body. Status code indicates success.                                                                               |