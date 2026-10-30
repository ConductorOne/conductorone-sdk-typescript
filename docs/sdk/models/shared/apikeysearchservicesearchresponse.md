# APIKeySearchServiceSearchResponse

The APIKeySearchServiceSearchResponse message.

## Example Usage

```typescript
import { APIKeySearchServiceSearchResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: APIKeySearchServiceSearchResponse = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `list`                                                                               | [shared.APIKey](../../../sdk/models/shared/apikey.md)[]                              | :heavy_minus_sign:                                                                   | The list of API keys matching the search criteria.                                   |
| `nextPageToken`                                                                      | *string*                                                                             | :heavy_minus_sign:                                                                   | A token to retrieve the next page of results, or empty if there are no more results. |