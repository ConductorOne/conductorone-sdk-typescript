# EdgeInferenceCatalogEntry

EdgeInferenceCatalogEntry is a provider that Edge inference routes can target.

## Example Usage

```typescript
import { EdgeInferenceCatalogEntry } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeInferenceCatalogEntry = {};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `channel`                                                                                         | [shared.Channel](../../../sdk/models/shared/channel.md)                                           | :heavy_minus_sign:                                                                                | Release channel; higher values are less stable.                                                   |
| `credentialKind`                                                                                  | [shared.CredentialKind](../../../sdk/models/shared/credentialkind.md)                             | :heavy_minus_sign:                                                                                | The credentialKind field.                                                                         |
| `displayName`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | The displayName field.                                                                            |
| `iconKey`                                                                                         | *string*                                                                                          | :heavy_minus_sign:                                                                                | Key the client maps to a provider icon.                                                           |
| `id`                                                                                              | *string*                                                                                          | :heavy_minus_sign:                                                                                | Entry identifier.                                                                                 |
| `secretContentType`                                                                               | *string*                                                                                          | :heavy_minus_sign:                                                                                | Content type the credential secret must have for API key entries.                                 |
| `variants`                                                                                        | [shared.EdgeInferenceCatalogVariant](../../../sdk/models/shared/edgeinferencecatalogvariant.md)[] | :heavy_minus_sign:                                                                                | The variants field.                                                                               |