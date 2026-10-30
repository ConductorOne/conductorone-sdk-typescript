# CurrentType

The profile's current type. UNSPECIFIED means the profile has not been
 assigned a type yet; it behaves as Hybrid.

## Example Usage

```typescript
import { CurrentType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CurrentType = "REQUEST_CATALOG_TYPE_BUNDLE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"REQUEST_CATALOG_TYPE_UNSPECIFIED" | "REQUEST_CATALOG_TYPE_CATALOG" | "REQUEST_CATALOG_TYPE_PROFILE" | "REQUEST_CATALOG_TYPE_CATALOG_AND_BUNDLE" | "REQUEST_CATALOG_TYPE_BUNDLE" | Unrecognized<string>
```