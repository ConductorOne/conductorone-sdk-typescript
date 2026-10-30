# C1ApiRoleMiningManagementV1RoleMiningManagementServiceEvaluateEntitlementSelectionResponse

## Example Usage

```typescript
import {
  C1ApiRoleMiningManagementV1RoleMiningManagementServiceEvaluateEntitlementSelectionResponse,
} from "conductorone-sdk-typescript/sdk/models/operations";

let value:
  C1ApiRoleMiningManagementV1RoleMiningManagementServiceEvaluateEntitlementSelectionResponse =
    {
      contentType: "<value>",
      statusCode: 226940,
    };
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                     | *string*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response content type for this operation                                                                     |
| `statusCode`                                                                                                      | *number*                                                                                                          | :heavy_check_mark:                                                                                                | HTTP response status code for this operation                                                                      |
| `rawResponse`                                                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                             | :heavy_check_mark:                                                                                                | Raw HTTP response; suitable for custom response parsing                                                           |
| `evaluateEntitlementSelectionResponse`                                                                            | [shared.EvaluateEntitlementSelectionResponse](../../../sdk/models/shared/evaluateentitlementselectionresponse.md) | :heavy_minus_sign:                                                                                                | EvaluateEntitlementSelectionResponse contains the exact impact of the<br/> resolved entitlement selection.        |