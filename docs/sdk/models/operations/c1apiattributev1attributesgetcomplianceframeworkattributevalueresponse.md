# C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponse

## Example Usage

```typescript
import { C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAttributeV1AttributesGetComplianceFrameworkAttributeValueResponse = {
    contentType: "<value>",
    statusCode: 654249,
  };
```

## Fields

| Field                                                                                                                             | Type                                                                                                                              | Required                                                                                                                          | Description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                     | *string*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response content type for this operation                                                                                     |
| `statusCode`                                                                                                                      | *number*                                                                                                                          | :heavy_check_mark:                                                                                                                | HTTP response status code for this operation                                                                                      |
| `rawResponse`                                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                             | :heavy_check_mark:                                                                                                                | Raw HTTP response; suitable for custom response parsing                                                                           |
| `getComplianceFrameworkAttributeValueResponse`                                                                                    | [shared.GetComplianceFrameworkAttributeValueResponse](../../../sdk/models/shared/getcomplianceframeworkattributevalueresponse.md) | :heavy_minus_sign:                                                                                                                | Successful response                                                                                                               |