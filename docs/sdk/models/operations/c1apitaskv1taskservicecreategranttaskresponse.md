# C1ApiTaskV1TaskServiceCreateGrantTaskResponse

## Example Usage

```typescript
import { C1ApiTaskV1TaskServiceCreateGrantTaskResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiTaskV1TaskServiceCreateGrantTaskResponse = {
  contentType: "<value>",
  statusCode: 438601,
  rawResponse: new Response("{\"message\": \"hello world\"}", {
    headers: { "Content-Type": "application/json" },
  }),
};
```

## Fields

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                                            | *string*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | HTTP response content type for this operation                                                                                            |
| `statusCode`                                                                                                                             | *number*                                                                                                                                 | :heavy_check_mark:                                                                                                                       | HTTP response status code for this operation                                                                                             |
| `rawResponse`                                                                                                                            | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                                    | :heavy_check_mark:                                                                                                                       | Raw HTTP response; suitable for custom response parsing                                                                                  |
| `taskServiceCreateGrantResponse`                                                                                                         | [shared.TaskServiceCreateGrantResponse](../../../sdk/models/shared/taskservicecreategrantresponse.md)                                    | :heavy_minus_sign:                                                                                                                       | The TaskServiceCreateGrantResponse returns a task view which has a task including JSONPATHs to the expanded items in the expanded array. |