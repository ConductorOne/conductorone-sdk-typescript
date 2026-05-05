# ListComplianceFrameworksResponse

ListComplianceFrameworksResponse is the response for listing compliance framework attribute values.

## Example Usage

```typescript
import { ListComplianceFrameworksResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListComplianceFrameworksResponse = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `list`                                                                                 | [shared.AttributeValue](../../../sdk/models/shared/attributevalue.md)[]                | :heavy_minus_sign:                                                                     | The list of compliance framework attribute values.                                     |
| `nextPageToken`                                                                        | *string*                                                                               | :heavy_minus_sign:                                                                     | The token to retrieve the next page of results, or empty if there are no more results. |