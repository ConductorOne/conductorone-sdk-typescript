# C1ApiAppV1AppManagedStateServicePromoteResponse

## Example Usage

```typescript
import { C1ApiAppV1AppManagedStateServicePromoteResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiAppV1AppManagedStateServicePromoteResponse = {
  contentType: "<value>",
  statusCode: 829583,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `getAppManagedStateBindingResponse`                                                                         | [shared.GetAppManagedStateBindingResponse](../../../sdk/models/shared/getappmanagedstatebindingresponse.md) | :heavy_minus_sign:                                                                                          | GetAppManagedStateBindingResponse contains the managed state of a discovered application.                   |