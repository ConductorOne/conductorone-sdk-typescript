# RetryAutomationExecutionsResponse

The RetryAutomationExecutionsResponse message.

## Example Usage

```typescript
import { RetryAutomationExecutionsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RetryAutomationExecutionsResponse = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `results`                                                                                               | [shared.RetryAutomationExecutionResult](../../../sdk/models/shared/retryautomationexecutionresult.md)[] | :heavy_minus_sign:                                                                                      | One result per requested execution, in request order.                                                   |