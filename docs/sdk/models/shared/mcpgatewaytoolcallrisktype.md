# McpGatewayToolCallRiskType

McpGatewayToolCallRiskType: the discriminator carries no payload beyond
 itself -- the specific detection rule and subject live on
 McpGatewayToolCallRiskEvidence, since which fields are meaningful (a
 tool-call trace vs. a volume baseline vs. an unregistered server) varies
 per rule, not per dedup identity.

## Example Usage

```typescript
import { McpGatewayToolCallRiskType } from "conductorone-sdk-typescript/sdk/models/shared";

let value: McpGatewayToolCallRiskType = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |