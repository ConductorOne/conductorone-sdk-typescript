# DefaultSubjectType

The subject type materialized onto new SSO applications that do not choose
 one. Changing this default does not change existing applications. When
 unset, the server uses pairwise subjects.

## Example Usage

```typescript
import { DefaultSubjectType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DefaultSubjectType = "SSO_SUBJECT_TYPE_PUBLIC";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SSO_SUBJECT_TYPE_UNSPECIFIED" | "SSO_SUBJECT_TYPE_PAIRWISE" | "SSO_SUBJECT_TYPE_PUBLIC" | "SSO_SUBJECT_TYPE_COMPATIBILITY" | Unrecognized<string>
```