# ConnectorAuthoringServiceActivateRevisionResponse

The ConnectorAuthoringServiceActivateRevisionResponse message.

## Example Usage

```typescript
import { ConnectorAuthoringServiceActivateRevisionResponse } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ConnectorAuthoringServiceActivateRevisionResponse = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `activationEpoch`                                                                         | *string*                                                                                  | :heavy_minus_sign:                                                                        | Committed activation epoch, or 0 when requested but not active yet.                       |
| `deploymentEventId`                                                                       | *string*                                                                                  | :heavy_minus_sign:                                                                        | Non-empty while instance rotation is pending. Observe completion through GetInstallation. |
| `revisionId`                                                                              | *string*                                                                                  | :heavy_minus_sign:                                                                        | The requested revision; published only after cutover commits.                             |