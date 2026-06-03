# C1ApiDecoyV1DecoyServiceListResponse

## Example Usage

```typescript
import { C1ApiDecoyV1DecoyServiceListResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiDecoyV1DecoyServiceListResponse = {
  contentType: "<value>",
  statusCode: 383556,
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |
| `decoyServiceListResponse`                                                                | [shared.DecoyServiceListResponse](../../../sdk/models/shared/decoyservicelistresponse.md) | :heavy_minus_sign:                                                                        | Successful response                                                                       |