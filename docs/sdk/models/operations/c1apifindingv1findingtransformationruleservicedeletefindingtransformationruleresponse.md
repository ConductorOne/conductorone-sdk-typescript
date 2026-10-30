# C1ApiFindingV1FindingTransformationRuleServiceDeleteFindingTransformationRuleResponse

## Example Usage

```typescript
import {
  C1ApiFindingV1FindingTransformationRuleServiceDeleteFindingTransformationRuleResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiFindingV1FindingTransformationRuleServiceDeleteFindingTransformationRuleResponse =
    {
      contentType: "<value>",
      statusCode: 938961,
    };
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response content type for this operation                                                                           |
| `statusCode`                                                                                                            | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response status code for this operation                                                                            |
| `rawResponse`                                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                   | :heavy_check_mark:                                                                                                      | Raw HTTP response; suitable for custom response parsing                                                                 |
| `deleteFindingTransformationRuleResponse`                                                                               | [shared.DeleteFindingTransformationRuleResponse](../../../sdk/models/shared/deletefindingtransformationruleresponse.md) | :heavy_minus_sign:                                                                                                      | Successful response                                                                                                     |