# CreateAppRequestIdentityMatching

Define the app user identity matching strategy for this app.

## Example Usage

```typescript
import { CreateAppRequestIdentityMatching } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateAppRequestIdentityMatching =
  "APP_USER_IDENTITY_MATCHING_UNSPECIFIED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"APP_USER_IDENTITY_MATCHING_UNSPECIFIED" | "APP_USER_IDENTITY_MATCHING_STRICT" | "APP_USER_IDENTITY_MATCHING_DISPLAY_NAME" | Unrecognized<string>
```