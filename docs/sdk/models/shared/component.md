# Component

Where the finding fits in the parsed document.

## Example Usage

```typescript
import { Component } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Component = "COMPONENT_SIGNING_CERTIFICATE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"COMPONENT_UNSPECIFIED" | "COMPONENT_DOCUMENT" | "COMPONENT_ENTITY_ID" | "COMPONENT_ACS_URL" | "COMPONENT_NAME_ID_FORMAT" | "COMPONENT_SIGNING_CERTIFICATE" | "COMPONENT_ENCRYPTION_CERTIFICATE" | "COMPONENT_REQUIREMENT" | "COMPONENT_BINDING" | Unrecognized<string>
```