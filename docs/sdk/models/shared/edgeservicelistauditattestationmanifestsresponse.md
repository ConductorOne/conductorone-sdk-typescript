# EdgeServiceListAuditAttestationManifestsResponse

The EdgeServiceListAuditAttestationManifestsResponse message.

## Example Usage

```typescript
import { EdgeServiceListAuditAttestationManifestsResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: EdgeServiceListAuditAttestationManifestsResponse = {};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `manifests`                                                                                     | [shared.TBAuditAttestationManifest](../../../sdk/models/shared/tbauditattestationmanifest.md)[] | :heavy_minus_sign:                                                                              | The manifests field.                                                                            |
| `nextPageToken`                                                                                 | *string*                                                                                        | :heavy_minus_sign:                                                                              | The nextPageToken field.                                                                        |