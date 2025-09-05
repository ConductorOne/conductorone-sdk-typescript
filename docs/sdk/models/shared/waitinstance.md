# WaitInstance

Used by the policy engine to describe an instantiated wait step.

This message contains a oneof named until. Only a single field of the following list may be set at a time:
  - condition
  - untilTime


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
| `condition`                                                                                   | [shared.WaitConditionInstance](../../../sdk/models/shared/waitconditioninstance.md)           | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | The name field.                                                                               |
| `skipped`                                                                                     | [shared.SkippedAction](../../../sdk/models/shared/skippedaction.md)                           | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `startedWaitingAt`                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `state`                                                                                       | [shared.WaitInstanceState](../../../sdk/models/shared/waitinstancestate.md)                   | :heavy_minus_sign:                                                                            | The state field.                                                                              |
| `succeeded`                                                                                   | [shared.ConditionSucceeded](../../../sdk/models/shared/conditionsucceeded.md)                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `timedOut`                                                                                    | [shared.ConditionTimedOut](../../../sdk/models/shared/conditiontimedout.md)                   | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `timeout`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `timeoutDuration`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `untilTime`                                                                                   | [shared.WaitUntilTimeInstance](../../../sdk/models/shared/waituntiltimeinstance.md)           | :heavy_minus_sign:                                                                            | N/A                                                                                           |