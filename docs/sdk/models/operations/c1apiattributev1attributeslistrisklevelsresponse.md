# C1ApiAttributeV1AttributesListRiskLevelsResponse

## Example Usage

```typescript
import { C1ApiAttributeV1AttributesListRiskLevelsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAttributeV1AttributesListRiskLevelsResponse = {
  contentType: "<value>",
  statusCode: 723811,
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `contentType`                                                                         | *string*                                                                              | :heavy_check_mark:                                                                    | HTTP response content type for this operation                                         |
| `statusCode`                                                                          | *number*                                                                              | :heavy_check_mark:                                                                    | HTTP response status code for this operation                                          |
| `rawResponse`                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                 | :heavy_check_mark:                                                                    | Raw HTTP response; suitable for custom response parsing                               |
| `listRiskLevelsResponse`                                                              | [shared.ListRiskLevelsResponse](../../../sdk/models/shared/listrisklevelsresponse.md) | :heavy_minus_sign:                                                                    | Successful response                                                                   |