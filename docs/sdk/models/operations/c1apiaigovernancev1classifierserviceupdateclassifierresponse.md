# C1ApiAiGovernanceV1ClassifierServiceUpdateClassifierResponse

## Example Usage

```typescript
import { C1ApiAiGovernanceV1ClassifierServiceUpdateClassifierResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAiGovernanceV1ClassifierServiceUpdateClassifierResponse = {
  contentType: "<value>",
  statusCode: 213724,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |
| `updateClassifierResponse`                                                                | [shared.UpdateClassifierResponse](../../../sdk/models/shared/updateclassifierresponse.md) | :heavy_minus_sign:                                                                        | Successful response                                                                       |