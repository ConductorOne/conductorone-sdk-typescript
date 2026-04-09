# C1ApiSSFReceiverV1SSFReceiverEventServiceListResponse

## Example Usage

```typescript
import { C1ApiSSFReceiverV1SSFReceiverEventServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSSFReceiverV1SSFReceiverEventServiceListResponse = {
  contentType: "<value>",
  statusCode: 485829,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `ssfReceiverEventServiceListResponse`                                                                           | [shared.SSFReceiverEventServiceListResponse](../../../sdk/models/shared/ssfreceivereventservicelistresponse.md) | :heavy_minus_sign:                                                                                              | Successful response                                                                                             |