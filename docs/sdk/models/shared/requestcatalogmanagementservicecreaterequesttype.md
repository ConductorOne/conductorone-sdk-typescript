# RequestCatalogManagementServiceCreateRequestType

The type of access profile to create: CATALOG (shown as Catalog in the
 UI), BUNDLE (Role), or CATALOG_AND_BUNDLE (Hybrid). Omit it or send
 UNSPECIFIED to create a Hybrid profile.

## Example Usage

```typescript
import { RequestCatalogManagementServiceCreateRequestType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RequestCatalogManagementServiceCreateRequestType =
  "REQUEST_CATALOG_TYPE_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"REQUEST_CATALOG_TYPE_UNSPECIFIED" | "REQUEST_CATALOG_TYPE_CATALOG" | "REQUEST_CATALOG_TYPE_PROFILE" | "REQUEST_CATALOG_TYPE_CATALOG_AND_BUNDLE" | "REQUEST_CATALOG_TYPE_BUNDLE" | Unrecognized<string>
```