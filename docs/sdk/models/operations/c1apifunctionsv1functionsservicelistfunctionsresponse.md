# C1ApiFunctionsV1FunctionsServiceListFunctionsResponse

## Example Usage

```typescript
import { C1ApiFunctionsV1FunctionsServiceListFunctionsResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiFunctionsV1FunctionsServiceListFunctionsResponse = {
  contentType: "<value>",
  statusCode: 173871,
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                       | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response content type for this operation                                                                       |
| `statusCode`                                                                                                        | *number*                                                                                                            | :heavy_check_mark:                                                                                                  | HTTP response status code for this operation                                                                        |
| `rawResponse`                                                                                                       | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                               | :heavy_check_mark:                                                                                                  | Raw HTTP response; suitable for custom response parsing                                                             |
| `functionsServiceListFunctionsResponse`                                                                             | [shared.FunctionsServiceListFunctionsResponse](../../../sdk/models/shared/functionsservicelistfunctionsresponse.md) | :heavy_minus_sign:                                                                                                  | Successful response                                                                                                 |