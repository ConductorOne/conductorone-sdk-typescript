# GoLinkRouteConfig

The GoLinkRouteConfig message.

## Example Usage

```typescript
import { GoLinkRouteConfig } from "conductorone-sdk-typescript/sdk/models/shared";

let value: GoLinkRouteConfig = {};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `isCanonical`                                                                                                                          | *boolean*                                                                                                                              | :heavy_minus_sign:                                                                                                                     | The isCanonical field.                                                                                                                 |
| `routeTemplate`                                                                                                                        | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | The route template with optional named parameters.<br/> Exact routes: "jira", "jira/create"<br/> Glob routes: "jira/{ticket_id}", "aws/{path}" |