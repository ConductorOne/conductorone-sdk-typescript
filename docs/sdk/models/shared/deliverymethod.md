# DeliveryMethod

Controls whether events are received via push (transmitter POSTs to C1) or poll (C1 fetches from transmitter).

## Example Usage

```typescript
import { DeliveryMethod } from "conductorone-sdk-typescript/sdk/models/shared";

let value: DeliveryMethod = "SSF_DELIVERY_METHOD_PUSH";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SSF_DELIVERY_METHOD_UNSPECIFIED" | "SSF_DELIVERY_METHOD_PUSH" | "SSF_DELIVERY_METHOD_POLL" | Unrecognized<string>
```