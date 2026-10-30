# EdgeInferenceServeOption

EdgeInferenceServeOption is one way an Edge can serve a registered model: a catalog variant and the exact
 upstream model id to send through it.

## Example Usage

```typescript
import { EdgeInferenceServeOption } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeInferenceServeOption = {};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `catalogEntryId`                                                                                                  | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Catalog entry (provider) id.                                                                                      |
| `catalogVariantId`                                                                                                | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Catalog variant id within the entry.                                                                              |
| `nativeFormat`                                                                                                    | [shared.EdgeInferenceServeOptionNativeFormat](../../../sdk/models/shared/edgeinferenceserveoptionnativeformat.md) | :heavy_minus_sign:                                                                                                | Client format the option serves.                                                                                  |
| `region`                                                                                                          | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | AWS region the target uses; empty for API-key providers.                                                          |
| `upstreamModelId`                                                                                                 | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Upstream model id to send.                                                                                        |