# C1ApiSystemlogV1ExportsSearchServiceSearchResponse

## Example Usage

```typescript
import { C1ApiSystemlogV1ExportsSearchServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSystemlogV1ExportsSearchServiceSearchResponse = {
  contentType: "<value>",
  statusCode: 680868,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `exportsSearchServiceSearchResponse`                                                                          | [shared.ExportsSearchServiceSearchResponse](../../../sdk/models/shared/exportssearchservicesearchresponse.md) | :heavy_minus_sign:                                                                                            | Successful response                                                                                           |