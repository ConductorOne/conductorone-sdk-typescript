# ServicePrincipalCredentialRef

ServicePrincipalCredentialRef identifies a service principal API key.

## Example Usage

```typescript
import { ServicePrincipalCredentialRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ServicePrincipalCredentialRef = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `clientId`                                                                                                   | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | The key's client ID, without the domain: the part before "@" of the full client ID, e.g. "blue-whale-12345". |