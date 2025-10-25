# ActionProvision

This provision step indicates that account lifecycle action should be called to provision this entitlement.

## Example Usage

```typescript
import { ActionProvision } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ActionProvision = {};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `actionName`           | *string*               | :heavy_minus_sign:     | The actionName field.  |
| `appId`                | *string*               | :heavy_minus_sign:     | The appId field.       |
| `connectorId`          | *string*               | :heavy_minus_sign:     | The connectorId field. |
| `displayName`          | *string*               | :heavy_minus_sign:     | The displayName field. |