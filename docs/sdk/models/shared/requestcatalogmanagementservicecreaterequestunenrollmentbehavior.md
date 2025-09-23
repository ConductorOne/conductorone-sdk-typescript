# RequestCatalogManagementServiceCreateRequestUnenrollmentBehavior

Defines how to handle the revocation of the entitlements in the catalog during unenrollment.

## Example Usage

```typescript
import { RequestCatalogManagementServiceCreateRequestUnenrollmentBehavior } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RequestCatalogManagementServiceCreateRequestUnenrollmentBehavior =
  "REQUEST_CATALOG_UNENROLLMENT_BEHAVIOR_REVOKE_UNJUSTIFIED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"REQUEST_CATALOG_UNENROLLMENT_BEHAVIOR_UNSPECIFIED" | "REQUEST_CATALOG_UNENROLLMENT_BEHAVIOR_LEAVE_ACCESS_AS_IS" | "REQUEST_CATALOG_UNENROLLMENT_BEHAVIOR_REVOKE_ALL" | "REQUEST_CATALOG_UNENROLLMENT_BEHAVIOR_REVOKE_UNJUSTIFIED" | Unrecognized<string>
```