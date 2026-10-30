# SSOSettingsHistoryEntry

SSOSettingsHistoryEntry is one version of the tenant's SSO settings and its
 change metadata.

## Example Usage

```typescript
import { SSOSettingsHistoryEntry } from "conductorone-sdk-typescript/sdk/models/shared";

let value: SSOSettingsHistoryEntry = {};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `metadata`                                                                        | [shared.HistoryEntryMetadata](../../../sdk/models/shared/historyentrymetadata.md) | :heavy_minus_sign:                                                                | N/A                                                                               |
| `snapshot`                                                                        | [shared.SSOSettings](../../../sdk/models/shared/ssosettings.md)                   | :heavy_minus_sign:                                                                | N/A                                                                               |