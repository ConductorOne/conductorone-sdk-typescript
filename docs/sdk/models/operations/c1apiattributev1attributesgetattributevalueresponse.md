# C1ApiAttributeV1AttributesGetAttributeValueResponse

## Example Usage

```typescript
import { C1ApiAttributeV1AttributesGetAttributeValueResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAttributeV1AttributesGetAttributeValueResponse = {
  contentType: "<value>",
  statusCode: 582020,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | HTTP response content type for this operation                                               |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | HTTP response status code for this operation                                                |
| `rawResponse`                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                       | :heavy_check_mark:                                                                          | Raw HTTP response; suitable for custom response parsing                                     |
| `getAttributeValueResponse`                                                                 | [shared.GetAttributeValueResponse](../../../sdk/models/shared/getattributevalueresponse.md) | :heavy_minus_sign:                                                                          | GetAttributeValueResponse is the response for getting an attribute value by id.             |