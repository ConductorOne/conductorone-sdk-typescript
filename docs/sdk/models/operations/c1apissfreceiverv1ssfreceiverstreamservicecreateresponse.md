# C1ApiSSFReceiverV1SSFReceiverStreamServiceCreateResponse

## Example Usage

```typescript
import { C1ApiSSFReceiverV1SSFReceiverStreamServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSSFReceiverV1SSFReceiverStreamServiceCreateResponse = {
  contentType: "<value>",
  statusCode: 591317,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `ssfReceiverStreamServiceCreateResponse`                                                                              | [shared.SSFReceiverStreamServiceCreateResponse](../../../sdk/models/shared/ssfreceiverstreamservicecreateresponse.md) | :heavy_minus_sign:                                                                                                    | SSFReceiverStreamServiceCreateResponse returns the created stream and the push auth token in plaintext.               |