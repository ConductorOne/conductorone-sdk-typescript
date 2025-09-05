# ListAutomationExecutionsResponse

The ListAutomationExecutionsResponse message.

## Example Usage

```typescript
import { ListAutomationExecutionsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListAutomationExecutionsResponse = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `automationExecutions`                                                            | [shared.AutomationExecution](../../../sdk/models/shared/automationexecution.md)[] | :heavy_minus_sign:                                                                | The automationExecutions field.                                                   |
| `nextPageToken`                                                                   | *string*                                                                          | :heavy_minus_sign:                                                                | The nextPageToken field.                                                          |