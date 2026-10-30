# C1ApiAiGovernanceV1ClassifierTemplateServiceListClassifierTemplatesResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1ClassifierTemplateServiceListClassifierTemplatesResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAiGovernanceV1ClassifierTemplateServiceListClassifierTemplatesResponse =
    {
      contentType: "<value>",
      statusCode: 391707,
    };
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |
| `listClassifierTemplatesResponse`                                                                       | [shared.ListClassifierTemplatesResponse](../../../sdk/models/shared/listclassifiertemplatesresponse.md) | :heavy_minus_sign:                                                                                      | Successful response                                                                                     |