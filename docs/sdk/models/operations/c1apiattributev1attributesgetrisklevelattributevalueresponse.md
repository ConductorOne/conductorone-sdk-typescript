# C1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponse

## Example Usage

```typescript
import { C1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAttributeV1AttributesGetRiskLevelAttributeValueResponse = {
  contentType: "<value>",
  statusCode: 929280,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `getRiskLevelAttributeValueResponse`                                                                          | [shared.GetRiskLevelAttributeValueResponse](../../../sdk/models/shared/getrisklevelattributevalueresponse.md) | :heavy_minus_sign:                                                                                            | Successful response                                                                                           |