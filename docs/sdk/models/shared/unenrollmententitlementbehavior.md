# UnenrollmentEntitlementBehavior

Defines how to handle the revoke policies of the entitlements in the catalog during unenrollment.

## Example Usage

```typescript
import { UnenrollmentEntitlementBehavior } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UnenrollmentEntitlementBehavior =
  "REQUEST_CATALOG_UNENROLLMENT_ENTITLEMENT_BEHAVIOR_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"REQUEST_CATALOG_UNENROLLMENT_ENTITLEMENT_BEHAVIOR_UNSPECIFIED" | "REQUEST_CATALOG_UNENROLLMENT_ENTITLEMENT_BEHAVIOR_BYPASS" | "REQUEST_CATALOG_UNENROLLMENT_ENTITLEMENT_BEHAVIOR_ENFORCE" | Unrecognized<string>
```