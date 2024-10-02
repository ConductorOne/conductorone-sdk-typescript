# C1ApiAttributeV1AttributesDeleteAttributeValueResponse

## Example Usage

```typescript
import { C1ApiAttributeV1AttributesDeleteAttributeValueResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAttributeV1AttributesDeleteAttributeValueResponse = {
  contentType: "<value>",
  statusCode: 504,
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
| `deleteAttributeValueResponse`                                                                    | [shared.DeleteAttributeValueResponse](../../../sdk/models/shared/deleteattributevalueresponse.md) | :heavy_minus_sign:                                                                                | DeleteAttributeValueResponse is the empty response for deleting an attribute value.               |