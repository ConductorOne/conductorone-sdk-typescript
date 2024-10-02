# C1ApiSettingsV1AWSExternalIDSettingsGetResponse

## Example Usage

```typescript
import { C1ApiSettingsV1AWSExternalIDSettingsGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSettingsV1AWSExternalIDSettingsGetResponse = {
  contentType: "<value>",
  statusCode: 502,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `contentType`                                                                             | *string*                                                                                  | :heavy_check_mark:                                                                        | HTTP response content type for this operation                                             |
| `statusCode`                                                                              | *number*                                                                                  | :heavy_check_mark:                                                                        | HTTP response status code for this operation                                              |
| `rawResponse`                                                                             | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                     | :heavy_check_mark:                                                                        | Raw HTTP response; suitable for custom response parsing                                   |
| `getAWSExternalIDResponse`                                                                | [shared.GetAWSExternalIDResponse](../../../sdk/models/shared/getawsexternalidresponse.md) | :heavy_minus_sign:                                                                        | Successful response                                                                       |