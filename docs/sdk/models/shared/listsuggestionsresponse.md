# ListSuggestionsResponse

The ListSuggestionsResponse message.

## Example Usage

```typescript
import { ListSuggestionsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ListSuggestionsResponse = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `list`                                                                                                  | [shared.RoleMiningManagementSuggestion](../../../sdk/models/shared/roleminingmanagementsuggestion.md)[] | :heavy_minus_sign:                                                                                      | The list of role mining suggestions.                                                                    |
| `nextPageToken`                                                                                         | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Token to retrieve the next page of results, empty if no more results.                                   |