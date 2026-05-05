# WorkloadFederationServiceTestTokenRequest

The WorkloadFederationServiceTestTokenRequest message.

## Example Usage

```typescript
import { WorkloadFederationServiceTestTokenRequest } from "conductorone-sdk-typescript/sdk/models/shared";

let value: WorkloadFederationServiceTestTokenRequest = {};
```

## Fields

| Field                                                                                                                                                                                      | Type                                                                                                                                                                                       | Required                                                                                                                                                                                   | Description                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `sourceIp`                                                                                                                                                                                 | *string*                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                         | Optional: override source IP for CIDR testing.<br/> If empty, uses the request's source IP.<br/> Accepts IPv4 (e.g. 10.0.0.5) or IPv6 (e.g. 2001:db8::1) addresses, optionally with a CIDR prefix. |
| `subjectToken`                                                                                                                                                                             | *string*                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                         | The raw JWT to validate (the subject_token from a CI job).                                                                                                                                 |