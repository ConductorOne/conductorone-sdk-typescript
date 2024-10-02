# ProvisionInstanceState

This property indicates the current state of this step.

## Example Usage

```typescript
import { ProvisionInstanceState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ProvisionInstanceState = "PROVISION_INSTANCE_STATE_DONE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"PROVISION_INSTANCE_STATE_UNSPECIFIED" | "PROVISION_INSTANCE_STATE_INIT" | "PROVISION_INSTANCE_STATE_CREATE_CONNECTOR_ACTIONS_FOR_TARGET" | "PROVISION_INSTANCE_STATE_SENDING_NOTIFICATIONS" | "PROVISION_INSTANCE_STATE_WAITING" | "PROVISION_INSTANCE_STATE_WEBHOOK" | "PROVISION_INSTANCE_STATE_WEBHOOK_WAITING" | "PROVISION_INSTANCE_STATE_EXTERNAL_TICKET" | "PROVISION_INSTANCE_STATE_EXTERNAL_TICKET_WAITING" | "PROVISION_INSTANCE_STATE_DONE" | Unrecognized<string>
```