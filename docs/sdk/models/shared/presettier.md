# PresetTier

Non-UNSPECIFIED only on the three system presets (Shadow/Balanced/Strict);
 identifies and strictness-orders them for the default-classifier picker.

## Example Usage

```typescript
import { PresetTier } from "conductorone-sdk-typescript/sdk/models/shared";

let value: PresetTier = "PRESET_TIER_BALANCED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PRESET_TIER_UNSPECIFIED" | "PRESET_TIER_SHADOW" | "PRESET_TIER_BALANCED" | "PRESET_TIER_STRICT" | Unrecognized<string>
```