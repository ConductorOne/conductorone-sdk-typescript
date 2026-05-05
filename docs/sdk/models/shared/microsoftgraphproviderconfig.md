# MicrosoftGraphProviderConfig

MicrosoftGraphProviderConfig configures sending via Microsoft Graph sendMail API.
 Requires an Azure AD app registration with Mail.Send application permission (admin-consented).

## Example Usage

```typescript
import { MicrosoftGraphProviderConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MicrosoftGraphProviderConfig = {};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `azureTenantId`                                                                                                             | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Customer's Azure AD tenant ID (directory ID).                                                                               |
| `clientId`                                                                                                                  | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | App registration client ID with Mail.Send application permission.                                                           |
| `clientSecret`                                                                                                              | *string*                                                                                                                    | :heavy_minus_sign:                                                                                                          | Client secret. Write-only: accepted on create/update, never returned in Get.<br/> Empty on update means "keep existing secret". |