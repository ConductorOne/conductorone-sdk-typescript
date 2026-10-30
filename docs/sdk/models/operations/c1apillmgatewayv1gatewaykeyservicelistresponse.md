# C1ApiLlmGatewayV1GatewayKeyServiceListResponse

## Example Usage

```typescript
import { C1ApiLlmGatewayV1GatewayKeyServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiLlmGatewayV1GatewayKeyServiceListResponse = {
  contentType: "<value>",
  statusCode: 585211,
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `contentType`                                                                           | *string*                                                                                | :heavy_check_mark:                                                                      | HTTP response content type for this operation                                           |
| `statusCode`                                                                            | *number*                                                                                | :heavy_check_mark:                                                                      | HTTP response status code for this operation                                            |
| `rawResponse`                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                   | :heavy_check_mark:                                                                      | Raw HTTP response; suitable for custom response parsing                                 |
| `listGatewayKeysResponse`                                                               | [shared.ListGatewayKeysResponse](../../../sdk/models/shared/listgatewaykeysresponse.md) | :heavy_minus_sign:                                                                      | Successful response                                                                     |