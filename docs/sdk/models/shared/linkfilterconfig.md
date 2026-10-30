# LinkFilterConfig

LinkFilterConfig strips or annotates URLs and markdown images in tool output
 whose host is not in allowed_hosts.

## Example Usage

```typescript
import { LinkFilterConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: LinkFilterConfig = {};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                                  | [shared.LinkFilterConfigAction](../../../sdk/models/shared/linkfilterconfigaction.md)                                     | :heavy_minus_sign:                                                                                                        | Action taken on a disallowed link. Unspecified = REDACT.                                                                  |
| `allowedHosts`                                                                                                            | *string*[]                                                                                                                | :heavy_minus_sign:                                                                                                        | Hosts that are permitted. Empty = every host is disallowed. Matched<br/> case-insensitively; a leading "." allows subdomains. |
| `blockImages`                                                                                                             | *boolean*                                                                                                                 | :heavy_minus_sign:                                                                                                        | When true, markdown image links to disallowed hosts are also acted on.                                                    |