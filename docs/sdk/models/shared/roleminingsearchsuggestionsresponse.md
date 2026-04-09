# RoleMiningSearchSuggestionsResponse

The RoleMiningSearchSuggestionsResponse message.

## Example Usage

```typescript
import { RoleMiningSearchSuggestionsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RoleMiningSearchSuggestionsResponse = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `list`                                                                                                  | [shared.RoleMiningManagementSuggestion](../../../sdk/models/shared/roleminingmanagementsuggestion.md)[] | :heavy_minus_sign:                                                                                      | The list field.                                                                                         |
| `nextPageToken`                                                                                         | *string*                                                                                                | :heavy_minus_sign:                                                                                      | The nextPageToken field.                                                                                |