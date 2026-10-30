# TaskTypeRevokeInput

The TaskTypeRevoke message indicates that a task is a revoke task and all related details.

This message contains a oneof named principal. Only a single field of the following list may be set at a time:
  - resource


## Example Usage

```typescript
import { TaskTypeRevokeInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskTypeRevokeInput = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `resource`                                                                | [shared.AppResourceRef](../../../sdk/models/shared/appresourceref.md)     | :heavy_minus_sign:                                                        | N/A                                                                       |
| `source`                                                                  | [shared.TaskRevokeSource](../../../sdk/models/shared/taskrevokesource.md) | :heavy_minus_sign:                                                        | N/A                                                                       |