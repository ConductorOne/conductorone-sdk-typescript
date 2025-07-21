# WaitInstance

Used by the policy engine to describe an instantiated wait step.

This message contains a oneof named until. Only a single field of the following list may be set at a time:
  - condition


This message contains a oneof named outcome. Only a single field of the following list may be set at a time:
  - succeeded
  - timedOut
  - skipped


## Example Usage

```typescript
import { WaitInstance } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WaitInstance = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `commentOnFirstWait`                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | The comment to post on first failed check.                                                    |
| `commentOnTimeout`                                                                            | *string*                                                                                      | :heavy_minus_sign:                                                                            | The comment to post if we timeout.                                                            |
| `waitConditionInstance`                                                                       | [shared.WaitConditionInstance](../../../sdk/models/shared/waitconditioninstance.md)           | :heavy_minus_sign:                                                                            | Used by the policy engine to describe an instantiated condition to wait on.                   |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name field.                                                                               |
| `skippedAction`                                                                               | [shared.SkippedAction](../../../sdk/models/shared/skippedaction.md)                           | :heavy_minus_sign:                                                                            | The SkippedAction object describes the outcome of a policy step that has been skipped.        |
| `startedWaitingAt`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `state`                                                                                       | [shared.WaitInstanceState](../../../sdk/models/shared/waitinstancestate.md)                   | :heavy_minus_sign:                                                                            | The state field.                                                                              |
| `conditionSucceeded`                                                                          | [shared.ConditionSucceeded](../../../sdk/models/shared/conditionsucceeded.md)                 | :heavy_minus_sign:                                                                            | The ConditionSucceeded message.                                                               |
| `conditionTimedOut`                                                                           | [shared.ConditionTimedOut](../../../sdk/models/shared/conditiontimedout.md)                   | :heavy_minus_sign:                                                                            | The ConditionTimedOut message.                                                                |
| `timeout`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `timeoutDuration`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |