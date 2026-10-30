# CredentialIssueTarget

CredentialIssueTarget describes one approved credential request: who receives
 the credential, the terms asked for, and the offering it came from.

## Example Usage

```typescript
import { CredentialIssueTarget } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CredentialIssueTarget = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `duration`                                                            | *string*                                                              | :heavy_minus_sign:                                                    | N/A                                                                   |
| `identityAppUserId`                                                   | *string*                                                              | :heavy_minus_sign:                                                    | The app user tying the recipient to the connector identity.           |
| `identityResourceId`                                                  | *string*                                                              | :heavy_minus_sign:                                                    | The connector-side identity the credential is minted against.         |
| `identityUserId`                                                      | *string*                                                              | :heavy_minus_sign:                                                    | The user who receives the credential and may open its delivery vault. |
| `offeringId`                                                          | *string*                                                              | :heavy_minus_sign:                                                    | The offering the requester selected.                                  |
| `requestCatalogId`                                                    | *string*                                                              | :heavy_minus_sign:                                                    | The Access Profile that published it.                                 |
| `scopes`                                                              | *string*[]                                                            | :heavy_minus_sign:                                                    | Provider permissions approved for this credential.                    |