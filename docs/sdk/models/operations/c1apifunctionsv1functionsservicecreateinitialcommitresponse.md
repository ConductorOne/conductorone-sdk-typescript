# C1ApiFunctionsV1FunctionsServiceCreateInitialCommitResponse

## Example Usage

```typescript
import { C1ApiFunctionsV1FunctionsServiceCreateInitialCommitResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiFunctionsV1FunctionsServiceCreateInitialCommitResponse = {
  contentType: "<value>",
  statusCode: 4521,
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                   | *string*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response content type for this operation                                                                                   |
| `statusCode`                                                                                                                    | *number*                                                                                                                        | :heavy_check_mark:                                                                                                              | HTTP response status code for this operation                                                                                    |
| `rawResponse`                                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                           | :heavy_check_mark:                                                                                                              | Raw HTTP response; suitable for custom response parsing                                                                         |
| `functionsServiceCreateInitialCommitResponse`                                                                                   | [shared.FunctionsServiceCreateInitialCommitResponse](../../../sdk/models/shared/functionsservicecreateinitialcommitresponse.md) | :heavy_minus_sign:                                                                                                              | Successful response                                                                                                             |