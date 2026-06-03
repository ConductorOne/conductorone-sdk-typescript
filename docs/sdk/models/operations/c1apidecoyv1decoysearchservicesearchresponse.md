# C1ApiDecoyV1DecoySearchServiceSearchResponse

## Example Usage

```typescript
import { C1ApiDecoyV1DecoySearchServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiDecoyV1DecoySearchServiceSearchResponse = {
  contentType: "<value>",
  statusCode: 618578,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |
| `decoySearchResponse`                                                           | [shared.DecoySearchResponse](../../../sdk/models/shared/decoysearchresponse.md) | :heavy_minus_sign:                                                              | Successful response                                                             |