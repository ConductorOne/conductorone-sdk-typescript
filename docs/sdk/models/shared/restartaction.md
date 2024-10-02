# RestartAction

The restart action describes the outcome of policy steps for when the task was restarted. This can be applied to multiple steps since restart skips all pending next steps.

## Example Usage

```typescript
import { RestartAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RestartAction = {};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `oldPolicyStepId`                                                                                                                         | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | The step ID that was restarted. Potentially multiple "history" steps will reference this ID to indicate by what step they were restarted. |
| `restartedAt`                                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                             | :heavy_minus_sign:                                                                                                                        | N/A                                                                                                                                       |
| `userId`                                                                                                                                  | *string*                                                                                                                                  | :heavy_minus_sign:                                                                                                                        | The user that submitted the restart action.                                                                                               |