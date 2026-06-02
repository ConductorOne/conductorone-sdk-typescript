# DeleteConnectorUserOwnerRequest

DeleteConnectorUserOwnerRequest is the request for deleting a user ownership source on a connector.

## Example Usage

```typescript
import { DeleteConnectorUserOwnerRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DeleteConnectorUserOwnerRequest = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `userRef`                                               | [shared.UserRef](../../../sdk/models/shared/userref.md) | :heavy_minus_sign:                                      | A reference to a user.                                  |