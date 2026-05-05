# RequestCatalogManagementServiceCreateRequestEnrollmentBehavior

Defines how to handle the request policies of the entitlements in the catalog during enrollment.

## Example Usage

```typescript
import { RequestCatalogManagementServiceCreateRequestEnrollmentBehavior } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RequestCatalogManagementServiceCreateRequestEnrollmentBehavior =
  "REQUEST_CATALOG_ENROLLMENT_BEHAVIOR_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"REQUEST_CATALOG_ENROLLMENT_BEHAVIOR_UNSPECIFIED" | "REQUEST_CATALOG_ENROLLMENT_BEHAVIOR_BYPASS_ENTITLEMENT_REQUEST_POLICY" | "REQUEST_CATALOG_ENROLLMENT_BEHAVIOR_ENFORCE_ENTITLEMENT_REQUEST_POLICY" | Unrecognized<string>
```