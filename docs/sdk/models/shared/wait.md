# Wait

Define a Wait step for a policy to wait on a condition to be met.

This message contains a oneof named until. Only a single field of the following list may be set at a time:
  - condition


## Example Usage

```typescript
import { Wait } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Wait = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `commentOnFirstWait`                                                | *string*                                                            | :heavy_minus_sign:                                                  | The comment to post on first failed check.                          |
| `commentOnTimeout`                                                  | *string*                                                            | :heavy_minus_sign:                                                  | The comment to post if we timeout.                                  |
| `waitCondition`                                                     | [shared.WaitCondition](../../../sdk/models/shared/waitcondition.md) | :heavy_minus_sign:                                                  | The WaitCondition message.                                          |
| `name`                                                              | *string*                                                            | :heavy_minus_sign:                                                  | The name of our condition to show on the task details page          |
| `timeoutDuration`                                                   | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |