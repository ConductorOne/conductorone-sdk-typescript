# AuthoringEventType

Authored transition type, populated for an authored revision event.

## Example Usage

```typescript
import { AuthoringEventType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AuthoringEventType =
  "AUTHORED_EVENT_TYPE_RUNTIME_DEPLOYMENT_CHANGED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"AUTHORED_EVENT_TYPE_UNSPECIFIED" | "AUTHORED_EVENT_TYPE_REVISION_ACTIVATED" | "AUTHORED_EVENT_TYPE_ROLLED_BACK" | "AUTHORED_EVENT_TYPE_SUSPENDED" | "AUTHORED_EVENT_TYPE_RESUMED" | "AUTHORED_EVENT_TYPE_RUNTIME_DEPLOYMENT_CHANGED" | "AUTHORED_EVENT_TYPE_INSTALLATION_LOST" | "AUTHORED_EVENT_TYPE_YANKED" | Unrecognized<string>
```