# ConfiguredSessionRevokedAction

Step 3: Action preview.
 The action configured for session-revoked events on this stream.

## Example Usage

```typescript
import { ConfiguredSessionRevokedAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConfiguredSessionRevokedAction = "SSF_REVOCATION_ACTION_LOG_ONLY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SSF_REVOCATION_ACTION_UNSPECIFIED" | "SSF_REVOCATION_ACTION_REVOKE_ALL" | "SSF_REVOCATION_ACTION_LOG_ONLY" | Unrecognized<string>
```