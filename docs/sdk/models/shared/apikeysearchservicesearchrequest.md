# APIKeySearchServiceSearchRequest

The APIKeySearchServiceSearchRequest message.

## Example Usage

```typescript
import { APIKeySearchServiceSearchRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: APIKeySearchServiceSearchRequest = {};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `pageSize`                                                                                                            | *number*                                                                                                              | :heavy_minus_sign:                                                                                                    | The maximum number of results to return per page.                                                                     |
| `pageToken`                                                                                                           | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | A pagination token returned from a previous Search call.                                                              |
| `query`                                                                                                               | *string*                                                                                                              | :heavy_minus_sign:                                                                                                    | A text query to filter API keys by display name.                                                                      |
| `types`                                                                                                               | [shared.APIKeySearchServiceSearchRequestTypes](../../../sdk/models/shared/apikeysearchservicesearchrequesttypes.md)[] | :heavy_minus_sign:                                                                                                    | The key types to return. When empty, both types are returned.                                                         |