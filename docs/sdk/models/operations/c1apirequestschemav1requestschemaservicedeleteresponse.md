# C1ApiRequestSchemaV1RequestSchemaServiceDeleteResponse

## Example Usage

```typescript
import { C1ApiRequestSchemaV1RequestSchemaServiceDeleteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiRequestSchemaV1RequestSchemaServiceDeleteResponse = {
  contentType: "<value>",
  statusCode: 407916,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                 | *string*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response content type for this operation                                                                 |
| `statusCode`                                                                                                  | *number*                                                                                                      | :heavy_check_mark:                                                                                            | HTTP response status code for this operation                                                                  |
| `rawResponse`                                                                                                 | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                         | :heavy_check_mark:                                                                                            | Raw HTTP response; suitable for custom response parsing                                                       |
| `requestSchemaServiceDeleteResponse`                                                                          | [shared.RequestSchemaServiceDeleteResponse](../../../sdk/models/shared/requestschemaservicedeleteresponse.md) | :heavy_minus_sign:                                                                                            | Successful response                                                                                           |