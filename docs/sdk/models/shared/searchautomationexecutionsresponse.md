# SearchAutomationExecutionsResponse

The SearchAutomationExecutionsResponse message.

## Example Usage

```typescript
import { SearchAutomationExecutionsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAutomationExecutionsResponse = {};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                                      | [shared.SearchAutomationExecutionsResponseExpanded](../../../sdk/models/shared/searchautomationexecutionsresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                              | The expanded field.                                                                                                             |
| `list`                                                                                                                          | [shared.AutomationExecutionView](../../../sdk/models/shared/automationexecutionview.md)[]                                       | :heavy_minus_sign:                                                                                                              | The list field.                                                                                                                 |
| `nextPageToken`                                                                                                                 | *string*                                                                                                                        | :heavy_minus_sign:                                                                                                              | The nextPageToken field.                                                                                                        |