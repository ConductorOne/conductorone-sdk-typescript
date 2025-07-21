# C1ApiTaskV1TaskServiceGetResponse

## Example Usage

```typescript
import { C1ApiTaskV1TaskServiceGetResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiTaskV1TaskServiceGetResponse = {
  contentType: "<value>",
  statusCode: 239809,
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                    | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | HTTP response content type for this operation                                                                                    |
| `statusCode`                                                                                                                     | *number*                                                                                                                         | :heavy_check_mark:                                                                                                               | HTTP response status code for this operation                                                                                     |
| `rawResponse`                                                                                                                    | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                            | :heavy_check_mark:                                                                                                               | Raw HTTP response; suitable for custom response parsing                                                                          |
| `taskServiceGetResponse`                                                                                                         | [shared.TaskServiceGetResponse](../../../sdk/models/shared/taskservicegetresponse.md)                                            | :heavy_minus_sign:                                                                                                               | The TaskServiceGetResponse returns a task view which has a task including JSONPATHs to the expanded items in the expanded array. |