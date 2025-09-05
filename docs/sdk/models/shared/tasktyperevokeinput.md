# TaskTypeRevokeInput

The TaskTypeRevoke message indicates that a task is a revoke task and all related details.

## Example Usage

```typescript
import { TaskTypeRevokeInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskTypeRevokeInput = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `outcomeTime`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `source`                                                                                      | [shared.TaskRevokeSource](../../../sdk/models/shared/taskrevokesource.md)                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |