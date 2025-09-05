# ResourceType

The resourceType field.

## Example Usage

```typescript
import { ResourceType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ResourceType = "GROUP";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"ROLE" | "GROUP" | "LICENSE" | "PROJECT" | "CATALOG" | "CUSTOM" | "VAULT" | Unrecognized<string>
```