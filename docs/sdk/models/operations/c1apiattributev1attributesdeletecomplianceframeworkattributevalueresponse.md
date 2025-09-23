# C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponse

## Example Usage

```typescript
import { C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAttributeV1AttributesDeleteComplianceFrameworkAttributeValueResponse = {
    contentType: "<value>",
    statusCode: 523011,
  };
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                           | *string*                                                                                                                                | :heavy_check_mark:                                                                                                                      | HTTP response content type for this operation                                                                                           |
| `statusCode`                                                                                                                            | *number*                                                                                                                                | :heavy_check_mark:                                                                                                                      | HTTP response status code for this operation                                                                                            |
| `rawResponse`                                                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                   | :heavy_check_mark:                                                                                                                      | Raw HTTP response; suitable for custom response parsing                                                                                 |
| `deleteComplianceFrameworkAttributeValueResponse`                                                                                       | [shared.DeleteComplianceFrameworkAttributeValueResponse](../../../sdk/models/shared/deletecomplianceframeworkattributevalueresponse.md) | :heavy_minus_sign:                                                                                                                      | Successful response                                                                                                                     |