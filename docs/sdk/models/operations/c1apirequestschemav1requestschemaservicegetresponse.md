# C1ApiRequestSchemaV1RequestSchemaServiceGetResponse

## Example Usage

```typescript
import { C1ApiRequestSchemaV1RequestSchemaServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiRequestSchemaV1RequestSchemaServiceGetResponse = {
  contentType: "<value>",
  statusCode: 937452,
};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                           | *string*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response content type for this operation                                                           |
| `statusCode`                                                                                            | *number*                                                                                                | :heavy_check_mark:                                                                                      | HTTP response status code for this operation                                                            |
| `rawResponse`                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                   | :heavy_check_mark:                                                                                      | Raw HTTP response; suitable for custom response parsing                                                 |
| `requestSchemaServiceGetResponse`                                                                       | [shared.RequestSchemaServiceGetResponse](../../../sdk/models/shared/requestschemaservicegetresponse.md) | :heavy_minus_sign:                                                                                      | Successful response                                                                                     |