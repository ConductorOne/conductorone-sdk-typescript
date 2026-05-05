# C1ApiTaskV1TaskActionsServiceSkipStepResponse

## Example Usage

```typescript
import { C1ApiTaskV1TaskActionsServiceSkipStepResponse } from "conductorone-sdk-typescript/sdk/models/operations";

let value: C1ApiTaskV1TaskActionsServiceSkipStepResponse = {
  contentType: "<value>",
  statusCode: 702868,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `contentType`                                                                                                        | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | HTTP response content type for this operation                                                                        |
| `statusCode`                                                                                                         | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | HTTP response status code for this operation                                                                         |
| `rawResponse`                                                                                                        | [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)                                                | :heavy_check_mark:                                                                                                   | Raw HTTP response; suitable for custom response parsing                                                              |
| `taskServiceActionResponse`                                                                                          | [shared.TaskServiceActionResponse](../../../sdk/models/shared/taskserviceactionresponse.md)                          | :heavy_minus_sign:                                                                                                   | A generic response for task action endpoints, containing the updated task and the ID of the action that was created. |