# FundRuleServiceListHistoryResponse

The FundRuleServiceListHistoryResponse message.

## Example Usage

```typescript
import { FundRuleServiceListHistoryResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FundRuleServiceListHistoryResponse = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `list`                                                                              | [shared.FundRuleHistoryEntry](../../../sdk/models/shared/fundrulehistoryentry.md)[] | :heavy_minus_sign:                                                                  | The list field.                                                                     |
| `nextPageToken`                                                                     | *string*                                                                            | :heavy_minus_sign:                                                                  | The nextPageToken field.                                                            |