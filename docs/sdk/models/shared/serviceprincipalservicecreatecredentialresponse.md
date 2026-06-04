# ServicePrincipalServiceCreateCredentialResponse

The ServicePrincipalServiceCreateCredentialResponse message.

## Example Usage

```typescript
import { ServicePrincipalServiceCreateCredentialResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ServicePrincipalServiceCreateCredentialResponse = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `clientSecret`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | The client secret. Shown exactly once at creation -- cannot be retrieved again.               |
| `credential`                                                                                  | [shared.ServicePrincipalCredential](../../../sdk/models/shared/serviceprincipalcredential.md) | :heavy_minus_sign:                                                                            | N/A                                                                                           |