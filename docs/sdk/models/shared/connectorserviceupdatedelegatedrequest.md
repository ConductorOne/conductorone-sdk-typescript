# ConnectorServiceUpdateDelegatedRequest

The ConnectorServiceUpdateDelegatedRequest message contains the fields required to update a connector.

## Example Usage

```typescript
import { ConnectorServiceUpdateDelegatedRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConnectorServiceUpdateDelegatedRequest = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `connector`                                                                     | [shared.ConnectorInput](../../../sdk/models/shared/connectorinput.md)           | :heavy_minus_sign:                                                              | N/A                                                                             |
| `expandMask`                                                                    | [shared.ConnectorExpandMask](../../../sdk/models/shared/connectorexpandmask.md) | :heavy_minus_sign:                                                              | N/A                                                                             |
| `updateMask`                                                                    | *string*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |