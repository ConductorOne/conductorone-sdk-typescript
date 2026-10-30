# NhiType

NHI classification when this app user carries the non-human-identity trait.
 Read-only; translated from the model's nhi_trait at the API boundary.

## Example Usage

```typescript
import { NhiType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: NhiType = "APP_USER_NHI_TYPE_APP_REGISTRATION";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"APP_USER_NHI_TYPE_UNSPECIFIED" | "APP_USER_NHI_TYPE_APP_REGISTRATION" | "APP_USER_NHI_TYPE_ASSUMABLE_ROLE" | "APP_USER_NHI_TYPE_MANAGED_IDENTITY" | Unrecognized<string>
```