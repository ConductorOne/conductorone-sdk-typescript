# ListFindingTransformationRulesResponse

The ListFindingTransformationRulesResponse message.

## Example Usage

```typescript
import { ListFindingTransformationRulesResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListFindingTransformationRulesResponse = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `list`                                                                                        | [shared.FindingTransformationRule](../../../sdk/models/shared/findingtransformationrule.md)[] | :heavy_minus_sign:                                                                            | The list field.                                                                               |
| `nextPageToken`                                                                               | *string*                                                                                      | :heavy_minus_sign:                                                                            | The nextPageToken field.                                                                      |