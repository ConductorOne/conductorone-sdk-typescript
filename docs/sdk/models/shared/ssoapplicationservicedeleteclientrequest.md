# SSOApplicationServiceDeleteClientRequest

SSOApplicationServiceDeleteClientRequest deletes one App-owned OAuth client.

## Example Usage

```typescript
import { SSOApplicationServiceDeleteClientRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOApplicationServiceDeleteClientRequest = {
  clientId: "<id>",
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `clientId`                     | *string*                       | :heavy_check_mark:             | Generated client ID to delete. |