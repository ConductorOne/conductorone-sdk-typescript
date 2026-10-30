# StatusFilter

Which device statuses to return. Defaults to active devices only.

## Example Usage

```typescript
import { StatusFilter } from "conductorone-sdk-typescript/sdk/models/shared";

let value: StatusFilter = "PERSONAL_DEVICE_STATUS_FILTER_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PERSONAL_DEVICE_STATUS_FILTER_UNSPECIFIED" | "PERSONAL_DEVICE_STATUS_FILTER_ACTIVE" | "PERSONAL_DEVICE_STATUS_FILTER_REVOKED" | "PERSONAL_DEVICE_STATUS_FILTER_ALL" | Unrecognized<string>
```