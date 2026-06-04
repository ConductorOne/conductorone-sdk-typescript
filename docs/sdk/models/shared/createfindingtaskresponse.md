# CreateFindingTaskResponse

The CreateFindingTaskResponse message.

## Example Usage

```typescript
import { CreateFindingTaskResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateFindingTaskResponse = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `finding`                                               | [shared.Finding](../../../sdk/models/shared/finding.md) | :heavy_minus_sign:                                      | N/A                                                     |
| `taskId`                                                | *string*                                                | :heavy_minus_sign:                                      | The ID of the created task.                             |