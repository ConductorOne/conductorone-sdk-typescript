# C1ApiFundsV1FundPolicyServiceFreezeTenantResponse

## Example Usage

```typescript
import { C1ApiFundsV1FundPolicyServiceFreezeTenantResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiFundsV1FundPolicyServiceFreezeTenantResponse = {
  contentType: "<value>",
  statusCode: 44576,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `fundPolicyServiceFreezeTenantResponse`                                                                             | [shared.FundPolicyServiceFreezeTenantResponse](../../../sdk/models/shared/fundpolicyservicefreezetenantresponse.md) | :heavy_minus_sign:                                                                                                  | Successful response                                                                                                 |