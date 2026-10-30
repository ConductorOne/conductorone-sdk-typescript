# Publication

Which C1-published route of a followed tier this is. Set by the server; send back the value you read.
 UNSPECIFIED for a tenant-authored route.

## Example Usage

```typescript
import { Publication } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Publication = "EDGE_INFERENCE_ROUTE_PUBLICATION_TIER";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"EDGE_INFERENCE_ROUTE_PUBLICATION_UNSPECIFIED" | "EDGE_INFERENCE_ROUTE_PUBLICATION_TIER" | "EDGE_INFERENCE_ROUTE_PUBLICATION_MODEL_ALIAS" | Unrecognized<string>
```