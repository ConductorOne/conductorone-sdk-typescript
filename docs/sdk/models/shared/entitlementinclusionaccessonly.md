# EntitlementInclusionAccessOnly

EntitlementInclusionAccessOnly resolves to the system-managed access
 entitlement on every app the subject user has an AppUser on. Use this to
 deprovision app accounts without fanning out to every group, role, or
 permission inside each app — produces at most one revoke ticket per app.

## Example Usage

```typescript
import { EntitlementInclusionAccessOnly } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EntitlementInclusionAccessOnly = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |