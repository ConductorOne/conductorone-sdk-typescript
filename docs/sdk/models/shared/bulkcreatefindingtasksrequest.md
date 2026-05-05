# BulkCreateFindingTasksRequest

The BulkCreateFindingTasksRequest message.

## Example Usage

```typescript
import { BulkCreateFindingTasksRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: BulkCreateFindingTasksRequest = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `policyId`                                                                           | *string*                                                                             | :heavy_minus_sign:                                                                   | Optional policy ID to use for the created tasks. Defaults to the app's grant policy. |
| `refs`                                                                               | [shared.FindingRef](../../../sdk/models/shared/findingref.md)[]                      | :heavy_minus_sign:                                                                   | Individual finding references to create tasks for (by-ID mode).                      |
| `findingSearchRequest`                                                               | [shared.FindingSearchRequest](../../../sdk/models/shared/findingsearchrequest.md)    | :heavy_minus_sign:                                                                   | The FindingSearchRequest message.                                                    |