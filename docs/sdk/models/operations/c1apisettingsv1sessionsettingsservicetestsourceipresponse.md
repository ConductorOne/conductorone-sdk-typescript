# C1ApiSettingsV1SessionSettingsServiceTestSourceIPResponse

## Example Usage

```typescript
import { C1ApiSettingsV1SessionSettingsServiceTestSourceIPResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiSettingsV1SessionSettingsServiceTestSourceIPResponse = {
  contentType: "<value>",
  statusCode: 869924,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `contentType`                                                                     | *string*                                                                          | :heavy_check_mark:                                                                | HTTP response content type for this operation                                     |
| `statusCode`                                                                      | *number*                                                                          | :heavy_check_mark:                                                                | HTTP response status code for this operation                                      |
| `rawResponse`                                                                     | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)             | :heavy_check_mark:                                                                | Raw HTTP response; suitable for custom response parsing                           |
| `testSourceIPResponse`                                                            | [shared.TestSourceIPResponse](../../../sdk/models/shared/testsourceipresponse.md) | :heavy_minus_sign:                                                                | Successful response                                                               |