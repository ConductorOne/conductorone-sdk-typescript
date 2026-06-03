# TaskTypeGrantInput

The TaskTypeGrant message indicates that a task is a grant task and all related details.

## Example Usage

```typescript
import { TaskTypeGrantInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskTypeGrantInput = {};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `taskGrantSource`                                                                                    | [shared.TaskGrantSource](../../../sdk/models/shared/taskgrantsource.md)                              | :heavy_minus_sign:                                                                                   | The TaskGrantSource message tracks which external URL was the source of the specificed grant ticket. |