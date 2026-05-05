# ResourceType

The category of the resource type (e.g., ROLE, GROUP, LICENSE).

## Example Usage

```typescript
import { ResourceType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ResourceType = "LICENSE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ROLE" | "GROUP" | "LICENSE" | "PROJECT" | "CATALOG" | "CUSTOM" | "VAULT" | "PROFILE_TYPE" | Unrecognized<string>
```