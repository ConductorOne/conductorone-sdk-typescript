# C1ApiTaskV1TaskServiceCreateResourceActionTaskResponse

## Example Usage

```typescript
import { C1ApiTaskV1TaskServiceCreateResourceActionTaskResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiTaskV1TaskServiceCreateResourceActionTaskResponse = {
  contentType: "<value>",
  statusCode: 298459,
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                           | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response content type for this operation                                                                           |
| `statusCode`                                                                                                            | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | HTTP response status code for this operation                                                                            |
| `rawResponse`                                                                                                           | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                   | :heavy_check_mark:                                                                                                      | Raw HTTP response; suitable for custom response parsing                                                                 |
| `taskServiceCreateResourceActionResponse`                                                                               | [shared.TaskServiceCreateResourceActionResponse](../../../sdk/models/shared/taskservicecreateresourceactionresponse.md) | :heavy_minus_sign:                                                                                                      | The TaskServiceCreateResourceActionResponse returns the created action task with optional expanded related objects.     |