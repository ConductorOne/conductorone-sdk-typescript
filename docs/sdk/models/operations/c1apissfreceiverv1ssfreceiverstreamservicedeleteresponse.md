# C1ApiSSFReceiverV1SSFReceiverStreamServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiSSFReceiverV1SSFReceiverStreamServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSSFReceiverV1SSFReceiverStreamServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 653793,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `ssfReceiverStreamServiceDeleteResponse`                                                                              | [shared.SSFReceiverStreamServiceDeleteResponse](../../../sdk/models/shared/ssfreceiverstreamservicedeleteresponse.md) | :heavy_minus_sign:                                                                                                    | SSFReceiverStreamServiceDeleteResponse is empty on success.                                                           |