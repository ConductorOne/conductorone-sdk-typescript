# AuthzenServerServiceCreateRequest

AuthzenServerServiceCreateRequest creates an AuthZEN server for an app.
 The new server starts disabled and denies every PDP call until enabled.

## Example Usage

```typescript
import { AuthzenServerServiceCreateRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: AuthzenServerServiceCreateRequest = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `displayName`                                                         | *string*                                                              | :heavy_minus_sign:                                                    | Display name for the server. Defaults to "AuthZEN Server" when empty. |