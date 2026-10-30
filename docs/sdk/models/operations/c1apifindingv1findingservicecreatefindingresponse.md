# C1ApiFindingV1FindingServiceCreateFindingResponse

## Example Usage

```typescript
import { C1ApiFindingV1FindingServiceCreateFindingResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiFindingV1FindingServiceCreateFindingResponse = {
  contentType: "<value>",
  statusCode: 54325,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `contentType`                                                                       | *string*                                                                            | :heavy_check_mark:                                                                  | HTTP response content type for this operation                                       |
| `statusCode`                                                                        | *number*                                                                            | :heavy_check_mark:                                                                  | HTTP response status code for this operation                                        |
| `rawResponse`                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)               | :heavy_check_mark:                                                                  | Raw HTTP response; suitable for custom response parsing                             |
| `createFindingResponse`                                                             | [shared.CreateFindingResponse](../../../sdk/models/shared/createfindingresponse.md) | :heavy_minus_sign:                                                                  | Successful response                                                                 |