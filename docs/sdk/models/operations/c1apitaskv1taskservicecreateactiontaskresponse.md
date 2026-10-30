# C1ApiTaskV1TaskServiceCreateActionTaskResponse

## Example Usage

```typescript
import { C1ApiTaskV1TaskServiceCreateActionTaskResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiTaskV1TaskServiceCreateActionTaskResponse = {
  contentType: "<value>",
  statusCode: 986126,
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                               | *string*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response content type for this operation                                                               |
| `statusCode`                                                                                                | *number*                                                                                                    | :heavy_check_mark:                                                                                          | HTTP response status code for this operation                                                                |
| `rawResponse`                                                                                               | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                       | :heavy_check_mark:                                                                                          | Raw HTTP response; suitable for custom response parsing                                                     |
| `taskServiceCreateActionResponse`                                                                           | [shared.TaskServiceCreateActionResponse](../../../sdk/models/shared/taskservicecreateactionresponse.md)     | :heavy_minus_sign:                                                                                          | The TaskServiceCreateActionResponse returns the created action task with optional expanded related objects. |