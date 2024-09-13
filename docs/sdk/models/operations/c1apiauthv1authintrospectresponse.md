# C1ApiAuthV1AuthIntrospectResponse

## Example Usage

```typescript
import { C1ApiAuthV1AuthIntrospectResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAuthV1AuthIntrospectResponse = {
  contentType: "<value>",
  statusCode: 944669,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `contentType`                                                                        | *string*                                                                             | :heavy_check_mark:                                                                   | HTTP response content type for this operation                                        |
| `statusCode`                                                                         | *number*                                                                             | :heavy_check_mark:                                                                   | HTTP response status code for this operation                                         |
| `rawResponse`                                                                        | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                | :heavy_check_mark:                                                                   | Raw HTTP response; suitable for custom response parsing                              |
| `introspectResponse`                                                                 | [shared.IntrospectResponse](../../../sdk/models/shared/introspectresponse.md)        | :heavy_minus_sign:                                                                   | IntrospectResponse contains information about the current user who is authenticated. |