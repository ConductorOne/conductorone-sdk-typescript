# BulkCreateFindingTasksRequest

The BulkCreateFindingTasksRequest message.

## Example Usage

```typescript
import { BulkCreateFindingTasksRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: BulkCreateFindingTasksRequest = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `policyId`                                                                        | *string*                                                                          | :heavy_minus_sign:                                                                | The policyId field.                                                               |
| `refs`                                                                            | [shared.FindingRef](../../../sdk/models/shared/findingref.md)[]                   | :heavy_minus_sign:                                                                | The refs field.                                                                   |
| `findingSearchRequest`                                                            | [shared.FindingSearchRequest](../../../sdk/models/shared/findingsearchrequest.md) | :heavy_minus_sign:                                                                | The FindingSearchRequest message.                                                 |