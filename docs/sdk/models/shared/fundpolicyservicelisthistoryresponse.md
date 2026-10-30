# FundPolicyServiceListHistoryResponse

The FundPolicyServiceListHistoryResponse message.

## Example Usage

```typescript
import { FundPolicyServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FundPolicyServiceListHistoryResponse = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `list`                                                                                  | [shared.FundPolicyHistoryEntry](../../../sdk/models/shared/fundpolicyhistoryentry.md)[] | :heavy_minus_sign:                                                                      | The list field.                                                                         |
| `nextPageToken`                                                                         | *string*                                                                                | :heavy_minus_sign:                                                                      | The nextPageToken field.                                                                |