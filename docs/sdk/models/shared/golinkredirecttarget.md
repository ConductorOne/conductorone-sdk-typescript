# GoLinkRedirectTarget

The GoLinkRedirectTarget message.

## Example Usage

```typescript
import { GoLinkRedirectTarget } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GoLinkRedirectTarget = {};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `urlTemplate`                                                                                                     | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | URL template with named placeholders matching route parameters.<br/> e.g., "https://jira.internal/browse/{ticket_id}" |