# C1ApiIamV1RolesUpdateResponse

## Example Usage

```typescript
import { C1ApiIamV1RolesUpdateResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiIamV1RolesUpdateResponse = {
  contentType: "<value>",
  statusCode: 226,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `contentType`                                                                   | *string*                                                                        | :heavy_check_mark:                                                              | HTTP response content type for this operation                                   |
| `statusCode`                                                                    | *number*                                                                        | :heavy_check_mark:                                                              | HTTP response status code for this operation                                    |
| `rawResponse`                                                                   | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)           | :heavy_check_mark:                                                              | Raw HTTP response; suitable for custom response parsing                         |
| `updateRolesResponse`                                                           | [shared.UpdateRolesResponse](../../../sdk/models/shared/updaterolesresponse.md) | :heavy_minus_sign:                                                              | UpdateRolesResponse is the response message containing the updated role.        |