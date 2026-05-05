# GoogleWorkspaceProviderConfig

GoogleWorkspaceProviderConfig configures sending via Google Workspace Gmail API
 using domain-wide delegation with a service account.
 Requires: customer Workspace super admin grants DWD to the service account's
 OAuth client ID for the gmail.send scope.

## Example Usage

```typescript
import { GoogleWorkspaceProviderConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GoogleWorkspaceProviderConfig = {};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `delegatedUser`                                                                                                                                     | *string*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                  | The Workspace user email to impersonate via domain-wide delegation.<br/> Typically a dedicated sender like noreply@customer.com.                    |
| `serviceAccountJson`                                                                                                                                | *string*                                                                                                                                            | :heavy_minus_sign:                                                                                                                                  | Service account JSON credentials. Write-only: accepted on create/update, never returned in Get.<br/> Empty on update means "keep existing credentials". |