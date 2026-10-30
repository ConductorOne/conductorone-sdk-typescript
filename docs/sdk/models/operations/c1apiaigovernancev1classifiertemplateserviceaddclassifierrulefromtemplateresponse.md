# C1ApiAiGovernanceV1ClassifierTemplateServiceAddClassifierRuleFromTemplateResponse

## Example Usage

```typescript
import {
  C1ApiAiGovernanceV1ClassifierTemplateServiceAddClassifierRuleFromTemplateResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAiGovernanceV1ClassifierTemplateServiceAddClassifierRuleFromTemplateResponse =
    {
      contentType: "<value>",
      statusCode: 79693,
    };
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `addClassifierRuleFromTemplateResponse`                                                                             | [shared.AddClassifierRuleFromTemplateResponse](../../../sdk/models/shared/addclassifierrulefromtemplateresponse.md) | :heavy_minus_sign:                                                                                                  | Successful response                                                                                                 |