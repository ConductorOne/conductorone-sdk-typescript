# SessionRevokedAction

Per-canonical-type action configuration.
 Event types without a config here default to LOG_ONLY.
 Action to take when a session-revoked event is received.

## Example Usage

```typescript
import { SessionRevokedAction } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SessionRevokedAction = "SSF_REVOCATION_ACTION_LOG_ONLY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SSF_REVOCATION_ACTION_UNSPECIFIED" | "SSF_REVOCATION_ACTION_REVOKE_ALL" | "SSF_REVOCATION_ACTION_LOG_ONLY" | Unrecognized<string>
```