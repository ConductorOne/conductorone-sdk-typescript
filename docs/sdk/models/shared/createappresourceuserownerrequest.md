# CreateAppResourceUserOwnerRequest

CreateAppResourceUserOwnerRequest is the request for creating a user ownership source on a resource.

## Example Usage

```typescript
import { CreateAppResourceUserOwnerRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CreateAppResourceUserOwnerRequest = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `userRef`                                               | [shared.UserRef](../../../sdk/models/shared/userref.md) | :heavy_minus_sign:                                      | A reference to a user.                                  |