# WellKnownProvider

Well-known provider type. Drives UX (wizard presets, docs, icons).
 Set at creation time, immutable.

## Example Usage

```typescript
import { WellKnownProvider } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WellKnownProvider = "WELL_KNOWN_WORKLOAD_PROVIDER_UNSPECIFIED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"WELL_KNOWN_WORKLOAD_PROVIDER_UNSPECIFIED" | "WELL_KNOWN_WORKLOAD_PROVIDER_CUSTOM" | "WELL_KNOWN_WORKLOAD_PROVIDER_GITHUB_ACTIONS" | "WELL_KNOWN_WORKLOAD_PROVIDER_GITLAB_CI" | "WELL_KNOWN_WORKLOAD_PROVIDER_HCP_TERRAFORM" | "WELL_KNOWN_WORKLOAD_PROVIDER_AWS_IAM_OUTBOUND" | Unrecognized<string>
```