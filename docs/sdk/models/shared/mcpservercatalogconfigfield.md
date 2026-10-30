# MCPServerCatalogConfigField

MCPServerCatalogConfigField describes a single extra configuration field for an MCP server catalog entry.

## Example Usage

```typescript
import { MCPServerCatalogConfigField } from "conductorone-sdk-typescript/sdk/models/shared";

let value: MCPServerCatalogConfigField = {};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `default`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | Default value the registration form prefills. Ignored when secret.         |
| `description`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | Help text describing the field.                                            |
| `displayName`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | Human-readable label for the field.                                        |
| `name`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | Machine-readable field name (used as the map key in config_fields).        |
| `placeholder`                                                              | *string*                                                                   | :heavy_minus_sign:                                                         | Placeholder text shown in an empty input.                                  |
| `required`                                                                 | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether this field must be provided.                                       |
| `secret`                                                                   | *boolean*                                                                  | :heavy_minus_sign:                                                         | Whether the field value should be treated as a secret (e.g. masked in UI). |