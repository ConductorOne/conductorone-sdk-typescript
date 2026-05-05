# ListFindingRoutingRulesResponse

The ListFindingRoutingRulesResponse message.

## Example Usage

```typescript
import { ListFindingRoutingRulesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListFindingRoutingRulesResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `list`                                                                          | [shared.FindingRoutingRule](../../../sdk/models/shared/findingroutingrule.md)[] | :heavy_minus_sign:                                                              | The list field.                                                                 |
| `nextPageToken`                                                                 | *string*                                                                        | :heavy_minus_sign:                                                              | The nextPageToken field.                                                        |