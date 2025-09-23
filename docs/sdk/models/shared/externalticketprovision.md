# ExternalTicketProvision

This provision step indicates that we should check an external ticket to provision this entitlement

## Example Usage

```typescript
import { ExternalTicketProvision } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ExternalTicketProvision = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `appId`                                                                           | *string*                                                                          | :heavy_minus_sign:                                                                | The appId field.                                                                  |
| `connectorId`                                                                     | *string*                                                                          | :heavy_minus_sign:                                                                | The connectorId field.                                                            |
| `externalTicketProvisionerConfigId`                                               | *string*                                                                          | :heavy_minus_sign:                                                                | The externalTicketProvisionerConfigId field.                                      |
| `instructions`                                                                    | *string*                                                                          | :heavy_minus_sign:                                                                | This field indicates a text body of instructions for the provisioner to indicate. |