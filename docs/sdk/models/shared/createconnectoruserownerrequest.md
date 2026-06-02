# CreateConnectorUserOwnerRequest

CreateConnectorUserOwnerRequest is the request for creating a user ownership source on a connector.

## Example Usage

```typescript
import { CreateConnectorUserOwnerRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateConnectorUserOwnerRequest = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `userRef`                                               | [shared.UserRef](../../../sdk/models/shared/userref.md) | :heavy_minus_sign:                                      | A reference to a user.                                  |