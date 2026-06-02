# TfType

The Terraform attribute type. For collections of structured
 objects, the element shape is in `nested_fields`. For collections
 of primitives, the element type is in `element_tf_type`.

## Example Usage

```typescript
import { TfType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: TfType = "TF_TYPE_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"TF_TYPE_UNSPECIFIED" | "TF_TYPE_STRING" | "TF_TYPE_NUMBER" | "TF_TYPE_BOOL" | "TF_TYPE_LIST" | "TF_TYPE_SET" | "TF_TYPE_MAP" | "TF_TYPE_OBJECT" | "TF_TYPE_TUPLE" | Unrecognized<string>
```