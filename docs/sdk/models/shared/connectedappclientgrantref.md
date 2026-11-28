# ConnectedAppClientGrantRef

ConnectedAppClientGrantRef identifies an app a user connected through dynamic client registration, such as an AI agent.

## Example Usage

```typescript
import { ConnectedAppClientGrantRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConnectedAppClientGrantRef = {};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `clientId`                                                                                                                                              | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The app's full registered client ID, as ConductorOne issued it: "<name>@<organization domain>/<usage>", e.g. "blue-whale-12345@acme.conductor.one/dcc". |
| `userId`                                                                                                                                                | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The user who connected the app.                                                                                                                         |