# HistoryActor

HistoryActor is a typed reference to whoever performed the change.
 kind mirrors the storage-model ActorKind enum; user_id is set when
 kind corresponds to a user principal (API / SUPPORT) so the frontend
 can resolve the user via its own avatar / lookup hooks. Protos
 reference objects by id; the frontend renders / caches itself.

 The raw passport fields (token_id / principal_id) intentionally do not
 leave the server. Non-user actors (workflow, connector, internal) are
 identified by `kind` alone; correlating IDs (workflow_run_id, etc.)
 flow through `HistoryAnnotation` instead of being plucked into the
 actor message.

## Example Usage

```typescript
import { HistoryActor } from "conductorone-sdk-typescript/sdk/models/shared";

let value: HistoryActor = {};
```

## Fields

| Field                                                                                                                                                                                                   | Type                                                                                                                                                                                                    | Required                                                                                                                                                                                                | Description                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `kind`                                                                                                                                                                                                  | [shared.Kind](../../../sdk/models/shared/kind.md)                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                      | The kind field.                                                                                                                                                                                         |
| `userId`                                                                                                                                                                                                | *string*                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                      | Bare KSUID. Set when kind = ACTOR_KIND_API or ACTOR_KIND_SUPPORT.<br/> Empty otherwise. The frontend resolves user_id → display name via<br/> the same lookup paths it uses elsewhere (avatars, mentions, ...). |