# C1ApiIamV1TunnelCredentialsServiceUpdateBridgeResponse

## Example Usage

```typescript
import { C1ApiIamV1TunnelCredentialsServiceUpdateBridgeResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiIamV1TunnelCredentialsServiceUpdateBridgeResponse = {
  contentType: "<value>",
  statusCode: 49295,
};
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                     | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response content type for this operation                                                                                     |
| `statusCode`                                                                                                                      | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response status code for this operation                                                                                      |
| `rawResponse`                                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                             | :heavy_check_mark:                                                                                                                | Raw HTTP response; suitable for custom response parsing                                                                           |
| `tunnelCredentialsServiceUpdateBridgeResponse`                                                                                    | [shared.TunnelCredentialsServiceUpdateBridgeResponse](../../../sdk/models/shared/tunnelcredentialsserviceupdatebridgeresponse.md) | :heavy_minus_sign:                                                                                                                | Successful response                                                                                                               |