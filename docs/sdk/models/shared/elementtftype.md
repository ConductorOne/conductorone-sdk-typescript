# ElementTfType

For collection fields (list/set/tuple/map) whose elements are
 primitives (string/number/bool), the TF type of those elements.
 TF_TYPE_UNSPECIFIED for non-collection fields and for collections
 of objects (where `nested_fields` describes the element shape).

## Example Usage

```typescript
import { ElementTfType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ElementTfType = "TF_TYPE_SET";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TF_TYPE_UNSPECIFIED" | "TF_TYPE_STRING" | "TF_TYPE_NUMBER" | "TF_TYPE_BOOL" | "TF_TYPE_LIST" | "TF_TYPE_SET" | "TF_TYPE_MAP" | "TF_TYPE_OBJECT" | "TF_TYPE_TUPLE" | Unrecognized<string>
```