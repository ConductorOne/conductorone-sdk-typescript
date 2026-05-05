# C1ConnectorConfigFormComponent

C1ConnectorConfigFormComponent renders the shared admin connector-settings form inside an
 A2UI surface. The frontend resolves the catalog, connector, and config schema itself from
 the ids below, keeping the configuration field values out of the agent's data model — the
 agent never receives API keys, passwords, or other secrets entered by the user.

## Example Usage

```typescript
import { C1ConnectorConfigFormComponent } from "conductorone-sdk-typescript/sdk/models/shared";

let value: C1ConnectorConfigFormComponent = {};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `appId`                     | *string*                    | :heavy_minus_sign:          | The appId field.            |
| `connectorId`               | *string*                    | :heavy_minus_sign:          | The connectorId field.      |
| `skipActionName`            | *string*                    | :heavy_minus_sign:          | The skipActionName field.   |
| `submitActionName`          | *string*                    | :heavy_minus_sign:          | The submitActionName field. |