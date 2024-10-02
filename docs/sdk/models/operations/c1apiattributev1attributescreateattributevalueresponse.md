# C1ApiAttributeV1AttributesCreateAttributeValueResponse

## Example Usage

```typescript
import { C1ApiAttributeV1AttributesCreateAttributeValueResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAttributeV1AttributesCreateAttributeValueResponse = {
  contentType: "<value>",
  statusCode: 506,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | HTTP response content type for this operation                                                     |
| `statusCode`                                                                                      | *number*                                                                                          | :heavy_check_mark:                                                                                | HTTP response status code for this operation                                                      |
| `rawResponse`                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                             | :heavy_check_mark:                                                                                | Raw HTTP response; suitable for custom response parsing                                           |
| `createAttributeValueResponse`                                                                    | [shared.CreateAttributeValueResponse](../../../sdk/models/shared/createattributevalueresponse.md) | :heavy_minus_sign:                                                                                | CreateAttributeValueResponse is the response for creating an attribute value.                     |