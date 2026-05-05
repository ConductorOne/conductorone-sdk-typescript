# C1ApiSSFReceiverV1SSFReceiverStreamServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiSSFReceiverV1SSFReceiverStreamServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSSFReceiverV1SSFReceiverStreamServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 506302,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                         | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response content type for this operation                                                                         |
| `statusCode`                                                                                                          | *number*                                                                                                              | :heavy_check_mark:                                                                                                    | HTTP response status code for this operation                                                                          |
| `rawResponse`                                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                 | :heavy_check_mark:                                                                                                    | Raw HTTP response; suitable for custom response parsing                                                               |
| `ssfReceiverStreamServiceUpdateResponse`                                                                              | [shared.SSFReceiverStreamServiceUpdateResponse](../../../sdk/models/shared/ssfreceiverstreamserviceupdateresponse.md) | :heavy_minus_sign:                                                                                                    | SSFReceiverStreamServiceUpdateResponse contains the updated SSF receiver stream.                                      |