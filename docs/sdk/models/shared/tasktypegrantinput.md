# TaskTypeGrantInput

The TaskTypeGrant message indicates that a task is a grant task and all related details.

## Example Usage

```typescript
import { TaskTypeGrantInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskTypeGrantInput = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `grantDuration`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `outcomeTime`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `source`                                                                                      | [shared.TaskGrantSource](../../../sdk/models/shared/taskgrantsource.md)                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |