# WorkloadFederationServiceCreateProviderRequestWellKnownProvider

Well-known provider type. Required -- UNSPECIFIED is rejected.
 When set to a named source, the backend validates issuer_url consistency.
 SPIFFE wkp requires `settings.spiffe`; all other wkp values require
 `settings.oidc`.

## Example Usage

```typescript
import { WorkloadFederationServiceCreateProviderRequestWellKnownProvider } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WorkloadFederationServiceCreateProviderRequestWellKnownProvider =
  "WELL_KNOWN_WORKLOAD_PROVIDER_CUSTOM";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"WELL_KNOWN_WORKLOAD_PROVIDER_UNSPECIFIED" | "WELL_KNOWN_WORKLOAD_PROVIDER_CUSTOM" | "WELL_KNOWN_WORKLOAD_PROVIDER_GITHUB_ACTIONS" | "WELL_KNOWN_WORKLOAD_PROVIDER_GITLAB_CI" | "WELL_KNOWN_WORKLOAD_PROVIDER_HCP_TERRAFORM" | "WELL_KNOWN_WORKLOAD_PROVIDER_AWS_IAM_OUTBOUND" | "WELL_KNOWN_WORKLOAD_PROVIDER_SPIFFE" | Unrecognized<string>
```