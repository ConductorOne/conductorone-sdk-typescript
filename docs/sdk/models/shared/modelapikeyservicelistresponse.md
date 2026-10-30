# ModelAPIKeyServiceListResponse

The ModelAPIKeyServiceListResponse message.

## Example Usage

```typescript
import { ModelAPIKeyServiceListResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ModelAPIKeyServiceListResponse = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `keys`                                                            | [shared.ModelAPIKey](../../../sdk/models/shared/modelapikey.md)[] | :heavy_minus_sign:                                                | The requested model API keys (metadata only, no secrets).         |
| `nextPageToken`                                                   | *string*                                                          | :heavy_minus_sign:                                                | Pagination token for the next page of results.                    |