# C1ApiEdgeV1EdgeServiceListEgressRuleEntitlementIssuesResponse

## Example Usage

```typescript
import { C1ApiEdgeV1EdgeServiceListEgressRuleEntitlementIssuesResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiEdgeV1EdgeServiceListEgressRuleEntitlementIssuesResponse = {
  contentType: "<value>",
  statusCode: 7313,
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                                 | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | HTTP response content type for this operation                                                                                                 |
| `statusCode`                                                                                                                                  | *number*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | HTTP response status code for this operation                                                                                                  |
| `rawResponse`                                                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                         | :heavy_check_mark:                                                                                                                            | Raw HTTP response; suitable for custom response parsing                                                                                       |
| `edgeServiceListEgressRuleEntitlementIssuesResponse`                                                                                          | [shared.EdgeServiceListEgressRuleEntitlementIssuesResponse](../../../sdk/models/shared/edgeservicelistegressruleentitlementissuesresponse.md) | :heavy_minus_sign:                                                                                                                            | Successful response                                                                                                                           |