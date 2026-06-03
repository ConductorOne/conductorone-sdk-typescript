# UpdateSessionSettingsResponse

The UpdateSessionSettingsResponse message.

## Example Usage

```typescript
import { UpdateSessionSettingsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: UpdateSessionSettingsResponse = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `sessionSettings`                                                                                            | [shared.SessionSettings](../../../sdk/models/shared/sessionsettings.md)                                      | :heavy_minus_sign:                                                                                           | SessionSettings configures session security for the tenant, including timeouts and per-role IP restrictions. |