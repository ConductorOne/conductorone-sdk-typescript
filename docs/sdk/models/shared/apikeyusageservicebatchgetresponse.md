# APIKeyUsageServiceBatchGetResponse

The APIKeyUsageServiceBatchGetResponse message.

## Example Usage

```typescript
import { APIKeyUsageServiceBatchGetResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: APIKeyUsageServiceBatchGetResponse = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `list`                                                                                  | [shared.APIKeyUsageSummary](../../../sdk/models/shared/apikeyusagesummary.md)[]         | :heavy_minus_sign:                                                                      | Usage for each requested key the caller may view, in request order, without duplicates. |