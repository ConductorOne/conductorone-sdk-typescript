# C1ApiAppV2ConnectorOwnersCreateEntitlementOwnerResponse

## Example Usage

```typescript
import { C1ApiAppV2ConnectorOwnersCreateEntitlementOwnerResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV2ConnectorOwnersCreateEntitlementOwnerResponse = {
  contentType: "<value>",
  statusCode: 469779,
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response content type for this operation                                                                           |
| `statusCode`                                                                                                            | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response status code for this operation                                                                            |
| `rawResponse`                                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                   | :heavy_check_mark:                                                                                                      | Raw HTTP response; suitable for custom response parsing                                                                 |
| `createConnectorEntitlementOwnerResponse`                                                                               | [shared.CreateConnectorEntitlementOwnerResponse](../../../sdk/models/shared/createconnectorentitlementownerresponse.md) | :heavy_minus_sign:                                                                                                      | CreateConnectorEntitlementOwnerResponse is the response for creating an entitlement ownership source on a connector.    |