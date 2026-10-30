# PersonalDeviceStatus

The device's lifecycle status. Revoked devices are retained for audit and are
 returned by Search only when the status filter requests them.

## Example Usage

```typescript
import { PersonalDeviceStatus } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PersonalDeviceStatus = "PERSONAL_DEVICE_STATUS_REVOKED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PERSONAL_DEVICE_STATUS_UNSPECIFIED" | "PERSONAL_DEVICE_STATUS_ACTIVE" | "PERSONAL_DEVICE_STATUS_REVOKED" | Unrecognized<string>
```