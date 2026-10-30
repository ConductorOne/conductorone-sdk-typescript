# EdgeServiceListInferenceCatalogResponse

EdgeServiceListInferenceCatalogResponse contains every catalog entry.

## Example Usage

```typescript
import { EdgeServiceListInferenceCatalogResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeServiceListInferenceCatalogResponse = {};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `capabilitySummary`                                                                              | [shared.EdgeCapabilitySummary](../../../sdk/models/shared/edgecapabilitysummary.md)              | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `entries`                                                                                        | [shared.EdgeInferenceCatalogEntry](../../../sdk/models/shared/edgeinferencecatalogentry.md)[]    | :heavy_minus_sign:                                                                               | The entries field.                                                                               |
| `families`                                                                                       | [shared.EdgeInferenceModelFamily](../../../sdk/models/shared/edgeinferencemodelfamily.md)[]      | :heavy_minus_sign:                                                                               | C1's registered models grouped by family, with the ways an Edge can serve each.                  |
| `tiers`                                                                                          | [shared.EdgeInferenceTierOption](../../../sdk/models/shared/edgeinferencetieroption.md)[]        | :heavy_minus_sign:                                                                               | The model each C1 tier currently uses for the caller's tenant. A tier with no model is left out. |