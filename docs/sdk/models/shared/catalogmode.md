# CatalogMode

How the apply pass treats catalog (access profile) bindings on matched
 entitlements. UNSPECIFIED reads as legacy list management; UNMANAGED means
 the rule does not manage the list and only the app's default request
 catalog follows the self-service switch.

## Example Usage

```typescript
import { CatalogMode } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CatalogMode = "APP_ACCESS_REQUEST_DEFAULTS_CATALOG_MODE_MANAGED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"APP_ACCESS_REQUEST_DEFAULTS_CATALOG_MODE_UNSPECIFIED" | "APP_ACCESS_REQUEST_DEFAULTS_CATALOG_MODE_MANAGED" | "APP_ACCESS_REQUEST_DEFAULTS_CATALOG_MODE_UNMANAGED" | Unrecognized<string>
```