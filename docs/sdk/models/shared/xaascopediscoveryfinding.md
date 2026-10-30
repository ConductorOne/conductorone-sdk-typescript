# XAAScopeDiscoveryFinding

XAAScopeDiscoveryFinding is one per-URI or per-value observation from a
 scope discovery run.

## Example Usage

```typescript
import { XAAScopeDiscoveryFinding } from "conductorone-sdk-typescript/sdk/models/shared";

let value: XAAScopeDiscoveryFinding = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `code`                                                                                 | [shared.Code](../../../sdk/models/shared/code.md)                                      | :heavy_minus_sign:                                                                     | What was observed.                                                                     |
| `message`                                                                              | *string*                                                                               | :heavy_minus_sign:                                                                     | Human-readable detail.                                                                 |
| `resourceUri`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | The resource URI the finding applies to. Empty for the authorization<br/> server fallback. |
| `scopeValue`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | The scope value the finding applies to, for per-value findings.                        |