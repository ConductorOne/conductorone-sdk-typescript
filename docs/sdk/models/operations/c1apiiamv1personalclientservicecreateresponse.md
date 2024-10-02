# C1ApiIamV1PersonalClientServiceCreateResponse

## Example Usage

```typescript
import { C1ApiIamV1PersonalClientServiceCreateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiIamV1PersonalClientServiceCreateResponse = {
  contentType: "<value>",
  statusCode: 510,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                   | *string*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response content type for this operation                                                                   |
| `statusCode`                                                                                                    | *number*                                                                                                        | :heavy_check_mark:                                                                                              | HTTP response status code for this operation                                                                    |
| `rawResponse`                                                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                           | :heavy_check_mark:                                                                                              | Raw HTTP response; suitable for custom response parsing                                                         |
| `personalClientServiceCreateResponse`                                                                           | [shared.PersonalClientServiceCreateResponse](../../../sdk/models/shared/personalclientservicecreateresponse.md) | :heavy_minus_sign:                                                                                              | The PersonalClientServiceCreateResponse message contains the created personal client and client secret.         |