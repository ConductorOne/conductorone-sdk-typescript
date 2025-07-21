# C1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponse

## Example Usage

```typescript
import { C1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAutomationsV1AutomationSearchServiceSearchAutomationsResponse =
  {
    contentType: "<value>",
    statusCode: 322999,
  };
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `contentType`                                                                               | *string*                                                                                    | :heavy_check_mark:                                                                          | HTTP response content type for this operation                                               |
| `statusCode`                                                                                | *number*                                                                                    | :heavy_check_mark:                                                                          | HTTP response status code for this operation                                                |
| `rawResponse`                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                       | :heavy_check_mark:                                                                          | Raw HTTP response; suitable for custom response parsing                                     |
| `searchAutomationsResponse`                                                                 | [shared.SearchAutomationsResponse](../../../sdk/models/shared/searchautomationsresponse.md) | :heavy_minus_sign:                                                                          | Successful response                                                                         |