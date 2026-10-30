# SSOApplicationServiceCreateRequestSubjectType

How the user's identifier reaches this application. Leave unset to use the
 tenant default.

## Example Usage

```typescript
import { SSOApplicationServiceCreateRequestSubjectType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOApplicationServiceCreateRequestSubjectType =
  "SSO_SUBJECT_TYPE_PUBLIC";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SSO_SUBJECT_TYPE_UNSPECIFIED" | "SSO_SUBJECT_TYPE_PAIRWISE" | "SSO_SUBJECT_TYPE_PUBLIC" | "SSO_SUBJECT_TYPE_COMPATIBILITY" | Unrecognized<string>
```