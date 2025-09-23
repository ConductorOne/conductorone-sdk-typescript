# C1ApiAppV1ConnectorServiceRevokeCredentialResponse

## Example Usage

```typescript
import { C1ApiAppV1ConnectorServiceRevokeCredentialResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1ConnectorServiceRevokeCredentialResponse = {
  contentType: "<value>",
  statusCode: 426577,
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                             | *string*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response content type for this operation                                                                             |
| `statusCode`                                                                                                              | *number*                                                                                                                  | :heavy_check_mark:                                                                                                        | HTTP response status code for this operation                                                                              |
| `rawResponse`                                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                     | :heavy_check_mark:                                                                                                        | Raw HTTP response; suitable for custom response parsing                                                                   |
| `connectorServiceRevokeCredentialResponse`                                                                                | [shared.ConnectorServiceRevokeCredentialResponse](../../../sdk/models/shared/connectorservicerevokecredentialresponse.md) | :heavy_minus_sign:                                                                                                        | Empty response body. Status code indicates success.                                                                       |