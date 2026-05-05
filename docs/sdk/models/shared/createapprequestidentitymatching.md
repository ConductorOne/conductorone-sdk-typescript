# CreateAppRequestIdentityMatching

Define the app user identity matching strategy for this app.

## Example Usage

```typescript
import { CreateAppRequestIdentityMatching } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateAppRequestIdentityMatching =
  "APP_USER_IDENTITY_MATCHING_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"APP_USER_IDENTITY_MATCHING_UNSPECIFIED" | "APP_USER_IDENTITY_MATCHING_STRICT" | "APP_USER_IDENTITY_MATCHING_DISPLAY_NAME" | "APP_USER_IDENTITY_MATCHING_CUSTOM" | Unrecognized<string>
```