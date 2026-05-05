# ListRiskLevelsResponse

ListRiskLevelsResponse is the response for listing risk level attribute values.

## Example Usage

```typescript
import { ListRiskLevelsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListRiskLevelsResponse = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `list`                                                                                 | [shared.AttributeValue](../../../sdk/models/shared/attributevalue.md)[]                | :heavy_minus_sign:                                                                     | The list of risk level attribute values.                                               |
| `nextPageToken`                                                                        | *string*                                                                               | :heavy_minus_sign:                                                                     | The token to retrieve the next page of results, or empty if there are no more results. |