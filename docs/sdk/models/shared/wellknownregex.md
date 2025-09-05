# WellKnownRegex

WellKnownRegex specifies a common well known pattern defined as a regex.
This field is part of the `well_known` oneof.
See the documentation for `validate.StringRules` for more details.

## Example Usage

```typescript
import { WellKnownRegex } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WellKnownRegex = "HTTP_HEADER_VALUE";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"UNKNOWN" | "HTTP_HEADER_NAME" | "HTTP_HEADER_VALUE" | Unrecognized<string>
```