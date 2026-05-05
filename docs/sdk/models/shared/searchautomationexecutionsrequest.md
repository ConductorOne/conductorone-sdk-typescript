# SearchAutomationExecutionsRequest

The SearchAutomationExecutionsRequest message.

## Example Usage

```typescript
import { SearchAutomationExecutionsRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAutomationExecutionsRequest = {};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `automationTemplateId`                                                                              | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Filter results to executions of this automation template.                                           |
| `executionId`                                                                                       | *number*                                                                                            | :heavy_minus_sign:                                                                                  | Filter results to a specific execution by its numeric identifier.                                   |
| `executionStepStates`                                                                               | [shared.ExecutionStepStates](../../../sdk/models/shared/executionstepstates.md)[]                   | :heavy_minus_sign:                                                                                  | Filter results to executions in any of the specified states.                                        |
| `expandMask`                                                                                        | [shared.AutomationExecutionExpandMask](../../../sdk/models/shared/automationexecutionexpandmask.md) | :heavy_minus_sign:                                                                                  | N/A                                                                                                 |
| `pageSize`                                                                                          | *number*                                                                                            | :heavy_minus_sign:                                                                                  | Maximum number of results to return per page.                                                       |
| `pageToken`                                                                                         | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Pagination token from a previous SearchAutomationExecutionsResponse.                                |
| `query`                                                                                             | *string*                                                                                            | :heavy_minus_sign:                                                                                  | Free-text search query to filter executions.                                                        |
| `refs`                                                                                              | [shared.AutomationExecutionRef](../../../sdk/models/shared/automationexecutionref.md)[]             | :heavy_minus_sign:                                                                                  | Restrict results to specific execution references.                                                  |