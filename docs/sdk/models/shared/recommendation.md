# Recommendation

The recommendation field.

## Example Usage

```typescript
import { Recommendation } from "conductorone-sdk-typescript/sdk/models/shared";

let value: Recommendation = "INSIGHT_RECOMMENDATION_DENY";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"INSIGHT_RECOMMENDATION_UNSPECIFIED" | "INSIGHT_RECOMMENDATION_APPROVE" | "INSIGHT_RECOMMENDATION_DENY" | "INSIGHT_RECOMMENDATION_REVIEW" | Unrecognized<string>
```