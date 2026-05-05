# C1ApiSSFReceiverV1SSFReceiverEventSearchServiceSearchResponse

## Example Usage

```typescript
import { C1ApiSSFReceiverV1SSFReceiverEventSearchServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSSFReceiverV1SSFReceiverEventSearchServiceSearchResponse = {
  contentType: "<value>",
  statusCode: 655170,
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                   | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response content type for this operation                                                                                   |
| `statusCode`                                                                                                                    | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response status code for this operation                                                                                    |
| `rawResponse`                                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                           | :heavy_check_mark:                                                                                                              | Raw HTTP response; suitable for custom response parsing                                                                         |
| `ssfReceiverEventSearchServiceSearchResponse`                                                                                   | [shared.SSFReceiverEventSearchServiceSearchResponse](../../../sdk/models/shared/ssfreceivereventsearchservicesearchresponse.md) | :heavy_minus_sign:                                                                                                              | SSFReceiverEventSearchServiceSearchResponse contains the matching events and a pagination token.                                |