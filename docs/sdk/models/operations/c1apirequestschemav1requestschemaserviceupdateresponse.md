# C1ApiRequestSchemaV1RequestSchemaServiceUpdateResponse

## Example Usage

```typescript
import { C1ApiRequestSchemaV1RequestSchemaServiceUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiRequestSchemaV1RequestSchemaServiceUpdateResponse = {
  contentType: "<value>",
  statusCode: 635406,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `requestSchemaServiceUpdateResponse`                                                                          | [shared.RequestSchemaServiceUpdateResponse](../../../sdk/models/shared/requestschemaserviceupdateresponse.md) | :heavy_minus_sign:                                                                                            | Successful response                                                                                           |