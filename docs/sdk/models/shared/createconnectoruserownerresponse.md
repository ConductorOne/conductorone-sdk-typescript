# CreateConnectorUserOwnerResponse

CreateConnectorUserOwnerResponse is the response for creating a user ownership source on a connector.

## Example Usage

```typescript
import { CreateConnectorUserOwnerResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateConnectorUserOwnerResponse = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `connectorOwnerUser`                                                          | [shared.ConnectorOwnerUser](../../../sdk/models/shared/connectorowneruser.md) | :heavy_minus_sign:                                                            | ConnectorOwnerUser represents a user ownership source for a connector.        |