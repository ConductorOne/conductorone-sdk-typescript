# AuthorityKind

Type of configuration that supplied the denying limit.

## Example Usage

```typescript
import { AuthorityKind } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AuthorityKind = "AUTHORITY_KIND_FUND_POLICY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"AUTHORITY_KIND_UNSPECIFIED" | "AUTHORITY_KIND_FUND_POLICY" | "AUTHORITY_KIND_FUND_ASSIGNMENT" | "AUTHORITY_KIND_FUND_RULE" | "AUTHORITY_KIND_TENANT_APP_CAP" | "AUTHORITY_KIND_SUBJECT_APP_LIMIT" | "AUTHORITY_KIND_ENTITLEMENT_BINDING" | "AUTHORITY_KIND_APP_USER" | "AUTHORITY_KIND_USER" | Unrecognized<string>
```