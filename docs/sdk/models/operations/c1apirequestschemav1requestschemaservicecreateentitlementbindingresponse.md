# C1ApiRequestSchemaV1RequestSchemaServiceCreateEntitlementBindingResponse

## Example Usage

```typescript
import { C1ApiRequestSchemaV1RequestSchemaServiceCreateEntitlementBindingResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiRequestSchemaV1RequestSchemaServiceCreateEntitlementBindingResponse = {
    contentType: "<value>",
    statusCode: 508516,
  };
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                     | *string*                                                                                                                                          | :heavy_check_mark:                                                                                                                                | HTTP response content type for this operation                                                                                                     |
| `statusCode`                                                                                                                                      | *number*                                                                                                                                          | :heavy_check_mark:                                                                                                                                | HTTP response status code for this operation                                                                                                      |
| `rawResponse`                                                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                             | :heavy_check_mark:                                                                                                                                | Raw HTTP response; suitable for custom response parsing                                                                                           |
| `requestSchemaServiceCreateEntitlementBindingResponse`                                                                                            | [shared.RequestSchemaServiceCreateEntitlementBindingResponse](../../../sdk/models/shared/requestschemaservicecreateentitlementbindingresponse.md) | :heavy_minus_sign:                                                                                                                                | Successful response                                                                                                                               |