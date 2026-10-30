# AppResourceNhiType

The NHI classification (K3 spine) for this resource. Populated for
 non-human-identity resources; UNSPECIFIED for everything else. Mirrors
 agent_trait: read-only and translated from the model enum at the API boundary.

## Example Usage

```typescript
import { AppResourceNhiType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AppResourceNhiType = "NHI_TYPE_APP_REGISTRATION";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"NHI_TYPE_UNSPECIFIED" | "NHI_TYPE_APP_REGISTRATION" | "NHI_TYPE_ASSUMABLE_ROLE" | "NHI_TYPE_MANAGED_IDENTITY" | Unrecognized<string>
```