# SkippedAction

The SkippedAction object describes the outcome of a policy step that has been skipped.

## Example Usage

```typescript
import { SkippedAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SkippedAction = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `newPolicyStepId`                                                                             | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the policy step that was created as a result of this skipping.                      |
| `skippedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `userId`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | The UserID of the user who skipped this step.                                                 |