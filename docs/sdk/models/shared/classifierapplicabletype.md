# ClassifierApplicableType

BOTH means Agent and gateway. Shared rules use private_data, exfiltration, tool_name, bounded tool_input,
 and user_roles; untrusted_content and agent_id require AGENT applicability.
 Changing applicability revalidates retained rules and cannot invalidate
 existing concrete bindings. Replacing rules in the same update validates
 the merged definition before persistence.

## Example Usage

```typescript
import { ClassifierApplicableType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ClassifierApplicableType = "CLASSIFIER_TYPE_AGENT";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"CLASSIFIER_TYPE_UNSPECIFIED" | "CLASSIFIER_TYPE_AGENT" | "CLASSIFIER_TYPE_GATEWAY" | "CLASSIFIER_TYPE_BOTH" | Unrecognized<string>
```