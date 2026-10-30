# C1ApiFundsV1FundAssignmentServiceUnsuspendResponse

## Example Usage

```typescript
import { C1ApiFundsV1FundAssignmentServiceUnsuspendResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiFundsV1FundAssignmentServiceUnsuspendResponse = {
  contentType: "<value>",
  statusCode: 418971,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `fundAssignmentServiceUnsuspendResponse`                                                                              | [shared.FundAssignmentServiceUnsuspendResponse](../../../sdk/models/shared/fundassignmentserviceunsuspendresponse.md) | :heavy_minus_sign:                                                                                                    | Successful response                                                                                                   |