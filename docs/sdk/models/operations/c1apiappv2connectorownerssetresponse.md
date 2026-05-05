# C1ApiAppV2ConnectorOwnersSetResponse

## Example Usage

```typescript
import { C1ApiAppV2ConnectorOwnersSetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2ConnectorOwnersSetResponse = {
  contentType: "<value>",
  statusCode: 389604,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | HTTP response content type for this operation                                                     |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | HTTP response status code for this operation                                                      |
| `rawResponse`                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                             | :heavy_check_mark:                                                                                | Raw HTTP response; suitable for custom response parsing                                           |
| `setConnectorOwnersV2Response`                                                                    | [shared.SetConnectorOwnersV2Response](../../../sdk/models/shared/setconnectorownersv2response.md) | :heavy_minus_sign:                                                                                | SetConnectorOwnersV2Response is the empty response for setting connector owners.                  |