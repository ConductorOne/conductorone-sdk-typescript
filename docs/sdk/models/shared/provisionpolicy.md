# ProvisionPolicy

ProvisionPolicy is a oneOf that indicates how a provision step should be processed.

This message contains a oneof named typ. Only a single field of the following list may be set at a time:
  - connector
  - manual
  - delegated
  - webhook
  - multiStep
  - externalTicket
  - unconfigured
  - action


## Example Usage

```typescript
import { ProvisionPolicy } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ProvisionPolicy = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `action`                                                                                | [shared.ActionProvision](../../../sdk/models/shared/actionprovision.md)                 | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `connector`                                                                             | [shared.ConnectorProvision](../../../sdk/models/shared/connectorprovision.md)           | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `delegated`                                                                             | [shared.DelegatedProvision](../../../sdk/models/shared/delegatedprovision.md)           | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `externalTicket`                                                                        | [shared.ExternalTicketProvision](../../../sdk/models/shared/externalticketprovision.md) | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `manual`                                                                                | [shared.ManualProvision](../../../sdk/models/shared/manualprovision.md)                 | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `multiStep`                                                                             | [shared.MultiStep](../../../sdk/models/shared/multistep.md)                             | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `unconfigured`                                                                          | [shared.UnconfiguredProvision](../../../sdk/models/shared/unconfiguredprovision.md)     | :heavy_minus_sign:                                                                      | N/A                                                                                     |
| `webhook`                                                                               | [shared.WebhookProvision](../../../sdk/models/shared/webhookprovision.md)               | :heavy_minus_sign:                                                                      | N/A                                                                                     |