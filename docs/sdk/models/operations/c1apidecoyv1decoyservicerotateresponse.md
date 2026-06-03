# C1ApiDecoyV1DecoyServiceRotateResponse

## Example Usage

```typescript
import { C1ApiDecoyV1DecoyServiceRotateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiDecoyV1DecoyServiceRotateResponse = {
  contentType: "<value>",
  statusCode: 480583,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `contentType`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | HTTP response content type for this operation                                                 |
| `statusCode`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | HTTP response status code for this operation                                                  |
| `rawResponse`                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                         | :heavy_check_mark:                                                                            | Raw HTTP response; suitable for custom response parsing                                       |
| `decoyServiceRotateResponse`                                                                  | [shared.DecoyServiceRotateResponse](../../../sdk/models/shared/decoyservicerotateresponse.md) | :heavy_minus_sign:                                                                            | Successful response                                                                           |