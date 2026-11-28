# SyncChangeTimelineEventKind

Classification of the observed metadata change.

## Example Usage

```typescript
import { SyncChangeTimelineEventKind } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SyncChangeTimelineEventKind = "EVENT_KIND_CURRENT_SYNC_DISABLED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"EVENT_KIND_UNSPECIFIED" | "EVENT_KIND_CONFIG_UPDATED" | "EVENT_KIND_SYNC_RESOURCE_TYPES_UPDATED" | "EVENT_KIND_RELEASE_VERSION_CHANGED" | "EVENT_KIND_AUTHORED_REVISION_EVENT" | "EVENT_KIND_ACTIVATION_BINDING_SEALED" | "EVENT_KIND_CURRENT_SYNC_DISABLED" | Unrecognized<string>
```