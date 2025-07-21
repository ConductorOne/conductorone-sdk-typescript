# C1ApiAppV1AppResourceServiceGetResponse

## Example Usage

```typescript
import { C1ApiAppV1AppResourceServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppResourceServiceGetResponse = {
  contentType: "<value>",
  statusCode: 95661,
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                            | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | HTTP response content type for this operation                                                                                            |
| `statusCode`                                                                                                                             | *number*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | HTTP response status code for this operation                                                                                             |
| `rawResponse`                                                                                                                            | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                    | :heavy_check_mark:                                                                                                                       | Raw HTTP response; suitable for custom response parsing                                                                                  |
| `appResourceServiceGetResponse`                                                                                                          | [shared.AppResourceServiceGetResponse](../../../sdk/models/shared/appresourceservicegetresponse.md)                                      | :heavy_minus_sign:                                                                                                                       | The app resource service get response contains the app resource view and array of expanded items indicated by the request's expand mask. |