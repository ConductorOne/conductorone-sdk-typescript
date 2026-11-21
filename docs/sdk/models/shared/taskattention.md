# TaskAttention

Why an open task cannot progress without intervention.

## Example Usage

```typescript
import { TaskAttention } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskAttention = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `attentionAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `cause`                                                                                       | [shared.TaskAttentionCause](../../../sdk/models/shared/taskattentioncause.md)                 | :heavy_minus_sign:                                                                            | Why the task cannot progress.                                                                 |