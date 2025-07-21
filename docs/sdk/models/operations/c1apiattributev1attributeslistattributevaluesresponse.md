# C1ApiAttributeV1AttributesListAttributeValuesResponse

## Example Usage

```typescript
import { C1ApiAttributeV1AttributesListAttributeValuesResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAttributeV1AttributesListAttributeValuesResponse = {
  contentType: "<value>",
  statusCode: 757702,
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                       | *string*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response content type for this operation                                                       |
| `statusCode`                                                                                        | *number*                                                                                            | :heavy_check_mark:                                                                                  | HTTP response status code for this operation                                                        |
| `rawResponse`                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                               | :heavy_check_mark:                                                                                  | Raw HTTP response; suitable for custom response parsing                                             |
| `listAttributeValuesResponse`                                                                       | [shared.ListAttributeValuesResponse](../../../sdk/models/shared/listattributevaluesresponse.md)     | :heavy_minus_sign:                                                                                  | ListAttributeValuesResponse is the response for listing attribute values for a given AttributeType. |