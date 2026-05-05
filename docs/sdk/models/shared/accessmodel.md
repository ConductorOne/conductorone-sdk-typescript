# AccessModel

How this app models access. Derived during uplift from the app's resource type traits.
 Sparse ACL feature.

## Example Usage

```typescript
import { AccessModel } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AccessModel = "APP_ACCESS_MODEL_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"APP_ACCESS_MODEL_UNSPECIFIED" | "APP_ACCESS_MODEL_CLASSIC" | "APP_ACCESS_MODEL_HYBRID" | "APP_ACCESS_MODEL_SPARSE" | Unrecognized<string>
```