# C1ApiIamV1PersonalClientServiceGetResponse

## Example Usage

```typescript
import { C1ApiIamV1PersonalClientServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiIamV1PersonalClientServiceGetResponse = {
  contentType: "<value>",
  statusCode: 404,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                             | *string*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response content type for this operation                                                             |
| `statusCode`                                                                                              | *number*                                                                                                  | :heavy_check_mark:                                                                                        | HTTP response status code for this operation                                                              |
| `rawResponse`                                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                     | :heavy_check_mark:                                                                                        | Raw HTTP response; suitable for custom response parsing                                                   |
| `personalClientServiceGetResponse`                                                                        | [shared.PersonalClientServiceGetResponse](../../../sdk/models/shared/personalclientservicegetresponse.md) | :heavy_minus_sign:                                                                                        | Successful response                                                                                       |