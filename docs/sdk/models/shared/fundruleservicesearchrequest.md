# FundRuleServiceSearchRequest

The FundRuleServiceSearchRequest message.

## Example Usage

```typescript
import { FundRuleServiceSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FundRuleServiceSearchRequest = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `pageSize`                                                             | *number*                                                               | :heavy_minus_sign:                                                     | The pageSize field.                                                    |
| `pageToken`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | The pageToken field.                                                   |
| `query`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | Case-insensitive search over the rule display name; empty returns all. |