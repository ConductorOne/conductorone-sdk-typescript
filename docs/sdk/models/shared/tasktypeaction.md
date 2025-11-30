# TaskTypeAction

The TaskTypeAction message.

## Example Usage

```typescript
import { TaskTypeAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskTypeAction = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `actionId`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the action to execute.                                                              |
| `formValues`                                                                                  | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `outcome`                                                                                     | [shared.Outcome](../../../sdk/models/shared/outcome.md)                                       | :heavy_minus_sign:                                                                            | The outcome field.                                                                            |
| `outcomeTime`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |