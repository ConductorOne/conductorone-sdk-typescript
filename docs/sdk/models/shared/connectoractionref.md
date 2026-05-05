# ConnectorActionRef

ConnectorActionRef describes dispatch through a connector's built-in
 GrantManagerService Grant / Revoke RPC — i.e. the default connector
 operation, used for synthesized tickets like scope-role requests.

## Example Usage

```typescript
import { ConnectorActionRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConnectorActionRef = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `appId`                                                     | *string*                                                    | :heavy_minus_sign:                                          | The app whose connector handles the operation.              |
| `connectorId`                                               | *string*                                                    | :heavy_minus_sign:                                          | The connector that will execute the Grant / Revoke.         |
| `operation`                                                 | [shared.Operation](../../../sdk/models/shared/operation.md) | :heavy_minus_sign:                                          | Which connector RPC this dispatches to.                     |