# TaskActionInstanceInput

ActionInstance is the API mirror of the internal immutable snapshot of an
 Action captured on a TaskTypeAction at ticket-creation time.

This message contains a oneof named target_ref. Only a single field of the following list may be set at a time:
  - connectorActionRef


## Example Usage

```typescript
import { TaskActionInstanceInput } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TaskActionInstanceInput = {};
```

## Fields

| Field                                                                                                                                                                                                        | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `connectorActionRef`                                                                                                                                                                                         | [shared.ConnectorActionRefInput](../../../sdk/models/shared/connectoractionrefinput.md)                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                           | ConnectorActionRef describes dispatch through a connector's built-in<br/> GrantManagerService Grant / Revoke RPC — i.e. the default connector<br/> operation, used for synthesized tickets like scope-role requests. |