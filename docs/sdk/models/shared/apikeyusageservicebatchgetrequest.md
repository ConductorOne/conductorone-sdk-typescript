# APIKeyUsageServiceBatchGetRequest

The APIKeyUsageServiceBatchGetRequest message.

## Example Usage

```typescript
import { APIKeyUsageServiceBatchGetRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: APIKeyUsageServiceBatchGetRequest = {};
```

## Fields

| Field                                                                                                                                                                              | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `apiKeys`                                                                                                                                                                          | [shared.APIKeyRef](../../../sdk/models/shared/apikeyref.md)[]                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                 | The API keys to report on. Keys the caller may not view, including any system_client reference from a caller who is not a rate limit administrator, are omitted from the response. |