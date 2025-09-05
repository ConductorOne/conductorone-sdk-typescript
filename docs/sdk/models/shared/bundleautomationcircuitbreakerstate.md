# BundleAutomationCircuitBreakerState

The state field.

## Example Usage

```typescript
import { BundleAutomationCircuitBreakerState } from "conductorone-sdk-typescript/sdk/models/shared";

let value: BundleAutomationCircuitBreakerState =
  "CIRCUIT_BREAKER_STATE_UNSPECIFIED";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"CIRCUIT_BREAKER_STATE_UNSPECIFIED" | "CIRCUIT_BREAKER_STATE_TRIGGERED" | "CIRCUIT_BREAKER_STATE_BYPASS" | Unrecognized<string>
```