# C1ApiFunctionsV1FunctionsServiceCommitResponse

## Example Usage

```typescript
import { C1ApiFunctionsV1FunctionsServiceCommitResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiFunctionsV1FunctionsServiceCommitResponse = {
  contentType: "<value>",
  statusCode: 661087,
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                         | *string*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response content type for this operation                                                         |
| `statusCode`                                                                                          | *number*                                                                                              | :heavy_check_mark:                                                                                    | HTTP response status code for this operation                                                          |
| `rawResponse`                                                                                         | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                 | :heavy_check_mark:                                                                                    | Raw HTTP response; suitable for custom response parsing                                               |
| `functionsServiceCommitResponse`                                                                      | [shared.FunctionsServiceCommitResponse](../../../sdk/models/shared/functionsservicecommitresponse.md) | :heavy_minus_sign:                                                                                    | Successful response                                                                                   |