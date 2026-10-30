# FindingAudience

FindingAudience resolves to a set of identity user IDs to notify. Step-less:
 notifications have no escalation ladder. An empty resolution falls back to
 enabled system owners rather than notifying nobody.

This message contains a oneof named typ. Only a single field of the following list may be set at a time:
  - users


## Example Usage

```typescript
import { FindingAudience } from "conductorone-sdk-typescript/sdk/models/shared";

let value: FindingAudience = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `users`                                                                           | [shared.FindingAudienceUsers](../../../sdk/models/shared/findingaudienceusers.md) | :heavy_minus_sign:                                                                | N/A                                                                               |