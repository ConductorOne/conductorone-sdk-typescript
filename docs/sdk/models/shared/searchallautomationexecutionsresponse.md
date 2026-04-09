# SearchAllAutomationExecutionsResponse

The SearchAllAutomationExecutionsResponse message.

## Example Usage

```typescript
import { SearchAllAutomationExecutionsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SearchAllAutomationExecutionsResponse = {};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `expanded`                                                                                                                            | [shared.SearchAllAutomationExecutionsResponseExpanded](../../../sdk/models/shared/searchallautomationexecutionsresponseexpanded.md)[] | :heavy_minus_sign:                                                                                                                    | The expanded field.                                                                                                                   |
| `list`                                                                                                                                | [shared.AutomationExecutionView](../../../sdk/models/shared/automationexecutionview.md)[]                                             | :heavy_minus_sign:                                                                                                                    | The list field.                                                                                                                       |
| `nextPageToken`                                                                                                                       | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | The nextPageToken field.                                                                                                              |