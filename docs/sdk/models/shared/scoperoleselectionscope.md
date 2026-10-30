# ScopeRoleSelectionScope

Empty marker for scope+role pair scoping on IaaS-type apps.
 Actual selections stored in AccessReviewScopeRoleSelection rows.
 May coexist with ResourceSelectionScope on the same campaign; prepare unions both.

## Example Usage

```typescript
import { ScopeRoleSelectionScope } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ScopeRoleSelectionScope = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |