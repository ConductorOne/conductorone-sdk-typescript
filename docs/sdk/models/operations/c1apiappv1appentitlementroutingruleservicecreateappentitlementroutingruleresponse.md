# C1ApiAppV1AppEntitlementRoutingRuleServiceCreateAppEntitlementRoutingRuleResponse

## Example Usage

```typescript
import {
  C1ApiAppV1AppEntitlementRoutingRuleServiceCreateAppEntitlementRoutingRuleResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAppV1AppEntitlementRoutingRuleServiceCreateAppEntitlementRoutingRuleResponse =
    {
      contentType: "<value>",
      statusCode: 842316,
    };
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response content type for this operation                                                                           |
| `statusCode`                                                                                                            | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response status code for this operation                                                                            |
| `rawResponse`                                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                   | :heavy_check_mark:                                                                                                      | Raw HTTP response; suitable for custom response parsing                                                                 |
| `createAppEntitlementRoutingRuleResponse`                                                                               | [shared.CreateAppEntitlementRoutingRuleResponse](../../../sdk/models/shared/createappentitlementroutingruleresponse.md) | :heavy_minus_sign:                                                                                                      | Successful response                                                                                                     |