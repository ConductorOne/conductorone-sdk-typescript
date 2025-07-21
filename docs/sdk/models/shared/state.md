# State

The last applied state of the app access request defaults.

## Example Usage

```typescript
import { State } from "conductorone-sdk-typescript/sdk/models/shared";

let value: State = "APP_ACCESS_REQUEST_DEFAULTS_LAST_APPLY_STATE_UNSPECIFIED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"APP_ACCESS_REQUEST_DEFAULTS_LAST_APPLY_STATE_UNSPECIFIED" | "APP_ACCESS_REQUEST_DEFAULTS_LAST_APPLY_STATE_RUNNING" | "APP_ACCESS_REQUEST_DEFAULTS_LAST_APPLY_STATE_SUCCESS" | "APP_ACCESS_REQUEST_DEFAULTS_LAST_APPLY_STATE_FAILED" | "APP_ACCESS_REQUEST_DEFAULTS_LAST_APPLY_STATE_CANCELING" | "APP_ACCESS_REQUEST_DEFAULTS_LAST_APPLY_STATE_CANCEL_SUCCESS" | "APP_ACCESS_REQUEST_DEFAULTS_LAST_APPLY_STATE_CANCEL_ERROR" | Unrecognized<string>
```