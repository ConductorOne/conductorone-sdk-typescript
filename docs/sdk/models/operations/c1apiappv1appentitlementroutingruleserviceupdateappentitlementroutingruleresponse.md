# C1ApiAppV1AppEntitlementRoutingRuleServiceUpdateAppEntitlementRoutingRuleResponse

## Example Usage

```typescript
import {
  C1ApiAppV1AppEntitlementRoutingRuleServiceUpdateAppEntitlementRoutingRuleResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiAppV1AppEntitlementRoutingRuleServiceUpdateAppEntitlementRoutingRuleResponse =
    {
      contentType: "<value>",
      statusCode: 513339,
    };
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response content type for this operation                                                                           |
| `statusCode`                                                                                                            | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response status code for this operation                                                                            |
| `rawResponse`                                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                   | :heavy_check_mark:                                                                                                      | Raw HTTP response; suitable for custom response parsing                                                                 |
| `updateAppEntitlementRoutingRuleResponse`                                                                               | [shared.UpdateAppEntitlementRoutingRuleResponse](../../../sdk/models/shared/updateappentitlementroutingruleresponse.md) | :heavy_minus_sign:                                                                                                      | Successful response                                                                                                     |