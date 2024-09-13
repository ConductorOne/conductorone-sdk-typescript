# C1ApiAttributeV1AttributesListAttributeTypesResponse

## Example Usage

```typescript
import { C1ApiAttributeV1AttributesListAttributeTypesResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAttributeV1AttributesListAttributeTypesResponse = {
  contentType: "<value>",
  statusCode: 143353,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `listAttributeTypesResponse`                                                                  | [shared.ListAttributeTypesResponse](../../../sdk/models/shared/listattributetypesresponse.md) | :heavy_minus_sign:                                                                            | ListAttributeTypesResponse is the response for listing attribute types.                       |