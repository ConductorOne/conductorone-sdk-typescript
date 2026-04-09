# C1ApiSSFReceiverV1SSFReceiverStreamServiceGetResponse

## Example Usage

```typescript
import { C1ApiSSFReceiverV1SSFReceiverStreamServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSSFReceiverV1SSFReceiverStreamServiceGetResponse = {
  contentType: "<value>",
  statusCode: 260318,
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `ssfReceiverStreamServiceGetResponse`                                                                           | [shared.SSFReceiverStreamServiceGetResponse](../../../sdk/models/shared/ssfreceiverstreamservicegetresponse.md) | :heavy_minus_sign:                                                                                              | Successful response                                                                                             |