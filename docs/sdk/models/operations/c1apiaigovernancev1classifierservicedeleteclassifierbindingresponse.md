# C1ApiAiGovernanceV1ClassifierServiceDeleteClassifierBindingResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1ClassifierServiceDeleteClassifierBindingResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1ClassifierServiceDeleteClassifierBindingResponse =
  {
    contentType: "<value>",
    statusCode: 496097,
  };
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |
| `deleteClassifierBindingResponse`                                                                       | [shared.DeleteClassifierBindingResponse](../../../sdk/models/shared/deleteclassifierbindingresponse.md) | :heavy_minus_sign:                                                                                      | Successful response                                                                                     |