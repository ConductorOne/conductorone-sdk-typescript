# RequestCatalogManagementServiceCreateRequestUnenrollmentEntitlementBehavior

Defines how to handle the revoke policies of the entitlements in the catalog during unenrollment.

## Example Usage

```typescript
import { RequestCatalogManagementServiceCreateRequestUnenrollmentEntitlementBehavior } from "conductorone-sdk-typescript/sdk/models/shared";

let value:
  RequestCatalogManagementServiceCreateRequestUnenrollmentEntitlementBehavior =
    "REQUEST_CATALOG_UNENROLLMENT_ENTITLEMENT_BEHAVIOR_ENFORCE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"REQUEST_CATALOG_UNENROLLMENT_ENTITLEMENT_BEHAVIOR_UNSPECIFIED" | "REQUEST_CATALOG_UNENROLLMENT_ENTITLEMENT_BEHAVIOR_BYPASS" | "REQUEST_CATALOG_UNENROLLMENT_ENTITLEMENT_BEHAVIOR_ENFORCE" | Unrecognized<string>
```