# CompositeFormat

Wire format the provider expects. Defaults to
 FORMAT_JSON_OBJECT.

## Example Usage

```typescript
import { CompositeFormat } from "conductorone-sdk-typescript/sdk/models/shared";

let value: CompositeFormat = "FORMAT_JSON_OBJECT";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"FORMAT_JSON_OBJECT" | "FORMAT_COLON_SEPARATED" | "FORMAT_UNDERSCORE_SEPARATED" | Unrecognized<string>
```