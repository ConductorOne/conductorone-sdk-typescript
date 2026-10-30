# ResourceTypeRef

Pairs a resource type with the app that defines it. A resource type id (and
 even its display name) is only unique within its app -- some system-wide
 types like Credential reuse the same id across every app -- so this is the
 only way to select one unambiguously.

 Deliberately not c1.api.app.v1.AppResourceTypeRef (app_resource.proto):
 app_resource.proto can't be imported here without an import cycle through
 app_entitlement.proto. That other message is unrelated to this one --
 it's a distinct type kept only for its own (unrelated) callers -- so
 don't reuse it for entitlement/criteria resource-type scoping.

## Example Usage

```typescript
import { ResourceTypeRef } from "conductorone-sdk-typescript/sdk/models/shared";

let value: ResourceTypeRef = {};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `appId`            | *string*           | :heavy_minus_sign: | The appId field.   |
| `id`               | *string*           | :heavy_minus_sign: | The id field.      |