# RequestCatalogType

The type of this access profile: CATALOG (shown as Catalog in the UI),
 BUNDLE (Role), or CATALOG_AND_BUNDLE (Hybrid). UNSPECIFIED means the
 profile has not been assigned a type yet; it behaves as Hybrid.

 To change the type, call Update with "type" in the update mask and send
 CATALOG, BUNDLE, or CATALOG_AND_BUNDLE. Settings the new type doesn't
 support must be turned off first; PlanTypeChange lists them. Changing the
 type requires access profile types to be enabled for your tenant.

## Example Usage

```typescript
import { RequestCatalogType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: RequestCatalogType = "REQUEST_CATALOG_TYPE_PROFILE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"REQUEST_CATALOG_TYPE_UNSPECIFIED" | "REQUEST_CATALOG_TYPE_CATALOG" | "REQUEST_CATALOG_TYPE_PROFILE" | "REQUEST_CATALOG_TYPE_CATALOG_AND_BUNDLE" | "REQUEST_CATALOG_TYPE_BUNDLE" | Unrecognized<string>
```