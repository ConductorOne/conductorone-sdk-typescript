# FundAssignmentServiceSearchRequest

The FundAssignmentServiceSearchRequest message.

## Example Usage

```typescript
import { FundAssignmentServiceSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FundAssignmentServiceSearchRequest = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `pageSize`                                                                | *number*                                                                  | :heavy_minus_sign:                                                        | The pageSize field.                                                       |
| `pageToken`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | The pageToken field.                                                      |
| `userIds`                                                                 | *string*[]                                                                | :heavy_minus_sign:                                                        | Restrict to these subjects; empty returns every assignment in the tenant. |