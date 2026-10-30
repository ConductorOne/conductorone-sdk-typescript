# FundAssignmentServiceListHistoryResponse

The FundAssignmentServiceListHistoryResponse message.

## Example Usage

```typescript
import { FundAssignmentServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FundAssignmentServiceListHistoryResponse = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `list`                                                                                          | [shared.FundAssignmentHistoryEntry](../../../sdk/models/shared/fundassignmenthistoryentry.md)[] | :heavy_minus_sign:                                                                              | The list field.                                                                                 |
| `nextPageToken`                                                                                 | *string*                                                                                        | :heavy_minus_sign:                                                                              | The nextPageToken field.                                                                        |