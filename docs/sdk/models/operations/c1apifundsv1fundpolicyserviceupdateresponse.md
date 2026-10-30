# C1ApiFundsV1FundPolicyServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiFundsV1FundPolicyServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiFundsV1FundPolicyServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 117436,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |
| `fundPolicyServiceUpdateResponse`                                                                       | [shared.FundPolicyServiceUpdateResponse](../../../sdk/models/shared/fundpolicyserviceupdateresponse.md) | :heavy_minus_sign:                                                                                      | Successful response                                                                                     |