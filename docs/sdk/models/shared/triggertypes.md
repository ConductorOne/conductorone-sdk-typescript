# TriggerTypes

## Example Usage

```typescript
import { TriggerTypes } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TriggerTypes = "TRIGGER_TYPE_WEBHOOK";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"TRIGGER_TYPE_UNSPECIFIED" | "TRIGGER_TYPE_USER_PROFILE_CHANGE" | "TRIGGER_TYPE_APP_USER_CREATE" | "TRIGGER_TYPE_APP_USER_UPDATE" | "TRIGGER_TYPE_UNUSED_ACCESS" | "TRIGGER_TYPE_USER_CREATED" | "TRIGGER_TYPE_GRANT_FOUND" | "TRIGGER_TYPE_GRANT_DELETED" | "TRIGGER_TYPE_WEBHOOK" | "TRIGGER_TYPE_SCHEDULE" | "TRIGGER_TYPE_FORM" | "TRIGGER_TYPE_SCHEDULE_APP_USER" | "TRIGGER_TYPE_ACCESS_CONFLICT" | Unrecognized<string>
```