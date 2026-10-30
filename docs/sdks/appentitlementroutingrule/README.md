# AppEntitlementRoutingRule

## Overview

### Available Operations

* [listAppEntitlementRoutingRules](#listappentitlementroutingrules) - List App Entitlement Routing Rules
* [createAppEntitlementRoutingRule](#createappentitlementroutingrule) - Create App Entitlement Routing Rule
* [deleteAppEntitlementRoutingRule](#deleteappentitlementroutingrule) - Delete App Entitlement Routing Rule
* [getAppEntitlementRoutingRule](#getappentitlementroutingrule) - Get App Entitlement Routing Rule
* [updateAppEntitlementRoutingRule](#updateappentitlementroutingrule) - Update App Entitlement Routing Rule
* [reorderAppEntitlementRoutingRules](#reorderappentitlementroutingrules) - Reorder App Entitlement Routing Rules

## listAppEntitlementRoutingRules

ListAppEntitlementRoutingRules returns an application's entitlement
 configuration rules in evaluation order, by priority then by ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.app.v1.AppEntitlementRoutingRuleService.ListAppEntitlementRoutingRules" method="get" path="/api/v1/apps/{app_id}/entitlement_configuration_rules" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.appEntitlementRoutingRule.listAppEntitlementRoutingRules({
    appId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { appEntitlementRoutingRuleListAppEntitlementRoutingRules } from "conductorone-sdk-typescript/funcs/appEntitlementRoutingRuleListAppEntitlementRoutingRules.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await appEntitlementRoutingRuleListAppEntitlementRoutingRules(conductoroneSDKTypescript, {
    appId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appEntitlementRoutingRuleListAppEntitlementRoutingRules failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                    | Type                                                                                                                                                                                                         | Required                                                                                                                                                                                                     | Description                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                    | [operations.C1ApiAppV1AppEntitlementRoutingRuleServiceListAppEntitlementRoutingRulesRequest](../../sdk/models/operations/c1apiappv1appentitlementroutingruleservicelistappentitlementroutingrulesrequest.md) | :heavy_check_mark:                                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                                   |
| `options`                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                               |
| `options.retries`                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                             |

### Response

**Promise\<[operations.C1ApiAppV1AppEntitlementRoutingRuleServiceListAppEntitlementRoutingRulesResponse](../../sdk/models/operations/c1apiappv1appentitlementroutingruleservicelistappentitlementroutingrulesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createAppEntitlementRoutingRule

CreateAppEntitlementRoutingRule creates an entitlement configuration rule
 for an application. Rules are evaluated in priority order and the first
 rule whose condition matches supplies the entitlement's request settings.
 An app can have at most 5 rules.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.app.v1.AppEntitlementRoutingRuleService.CreateAppEntitlementRoutingRule" method="post" path="/api/v1/apps/{app_id}/entitlement_configuration_rules" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.appEntitlementRoutingRule.createAppEntitlementRoutingRule({
    appId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { appEntitlementRoutingRuleCreateAppEntitlementRoutingRule } from "conductorone-sdk-typescript/funcs/appEntitlementRoutingRuleCreateAppEntitlementRoutingRule.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await appEntitlementRoutingRuleCreateAppEntitlementRoutingRule(conductoroneSDKTypescript, {
    appId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appEntitlementRoutingRuleCreateAppEntitlementRoutingRule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                      | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                      | [operations.C1ApiAppV1AppEntitlementRoutingRuleServiceCreateAppEntitlementRoutingRuleRequest](../../sdk/models/operations/c1apiappv1appentitlementroutingruleservicecreateappentitlementroutingrulerequest.md) | :heavy_check_mark:                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                     |
| `options`                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                 |
| `options.retries`                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                               |

### Response

**Promise\<[operations.C1ApiAppV1AppEntitlementRoutingRuleServiceCreateAppEntitlementRoutingRuleResponse](../../sdk/models/operations/c1apiappv1appentitlementroutingruleservicecreateappentitlementroutingruleresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## deleteAppEntitlementRoutingRule

DeleteAppEntitlementRoutingRule deletes an entitlement configuration rule
 by ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.app.v1.AppEntitlementRoutingRuleService.DeleteAppEntitlementRoutingRule" method="delete" path="/api/v1/apps/{app_id}/entitlement_configuration_rules/{id}" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.appEntitlementRoutingRule.deleteAppEntitlementRoutingRule({
    appId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { appEntitlementRoutingRuleDeleteAppEntitlementRoutingRule } from "conductorone-sdk-typescript/funcs/appEntitlementRoutingRuleDeleteAppEntitlementRoutingRule.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await appEntitlementRoutingRuleDeleteAppEntitlementRoutingRule(conductoroneSDKTypescript, {
    appId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appEntitlementRoutingRuleDeleteAppEntitlementRoutingRule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                      | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                      | [operations.C1ApiAppV1AppEntitlementRoutingRuleServiceDeleteAppEntitlementRoutingRuleRequest](../../sdk/models/operations/c1apiappv1appentitlementroutingruleservicedeleteappentitlementroutingrulerequest.md) | :heavy_check_mark:                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                     |
| `options`                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                 |
| `options.retries`                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                               |

### Response

**Promise\<[operations.C1ApiAppV1AppEntitlementRoutingRuleServiceDeleteAppEntitlementRoutingRuleResponse](../../sdk/models/operations/c1apiappv1appentitlementroutingruleservicedeleteappentitlementroutingruleresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getAppEntitlementRoutingRule

GetAppEntitlementRoutingRule returns a single entitlement configuration
 rule by ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.app.v1.AppEntitlementRoutingRuleService.GetAppEntitlementRoutingRule" method="get" path="/api/v1/apps/{app_id}/entitlement_configuration_rules/{id}" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.appEntitlementRoutingRule.getAppEntitlementRoutingRule({
    appId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { appEntitlementRoutingRuleGetAppEntitlementRoutingRule } from "conductorone-sdk-typescript/funcs/appEntitlementRoutingRuleGetAppEntitlementRoutingRule.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await appEntitlementRoutingRuleGetAppEntitlementRoutingRule(conductoroneSDKTypescript, {
    appId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appEntitlementRoutingRuleGetAppEntitlementRoutingRule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                | Type                                                                                                                                                                                                     | Required                                                                                                                                                                                                 | Description                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                | [operations.C1ApiAppV1AppEntitlementRoutingRuleServiceGetAppEntitlementRoutingRuleRequest](../../sdk/models/operations/c1apiappv1appentitlementroutingruleservicegetappentitlementroutingrulerequest.md) | :heavy_check_mark:                                                                                                                                                                                       | The request object to use for the request.                                                                                                                                                               |
| `options`                                                                                                                                                                                                | RequestOptions                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                       | Used to set various options for making HTTP requests.                                                                                                                                                    |
| `options.fetchOptions`                                                                                                                                                                                   | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                       | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                           |
| `options.retries`                                                                                                                                                                                        | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                       | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                         |

### Response

**Promise\<[operations.C1ApiAppV1AppEntitlementRoutingRuleServiceGetAppEntitlementRoutingRuleResponse](../../sdk/models/operations/c1apiappv1appentitlementroutingruleservicegetappentitlementroutingruleresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateAppEntitlementRoutingRule

Update an existing app entitlement configuration rule. The app_id field is
 immutable; moving a rule between apps is modeled as delete + create.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.app.v1.AppEntitlementRoutingRuleService.UpdateAppEntitlementRoutingRule" method="post" path="/api/v1/apps/{app_id}/entitlement_configuration_rules/{id}" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.appEntitlementRoutingRule.updateAppEntitlementRoutingRule({
    appId: "<id>",
    id: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { appEntitlementRoutingRuleUpdateAppEntitlementRoutingRule } from "conductorone-sdk-typescript/funcs/appEntitlementRoutingRuleUpdateAppEntitlementRoutingRule.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await appEntitlementRoutingRuleUpdateAppEntitlementRoutingRule(conductoroneSDKTypescript, {
    appId: "<id>",
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appEntitlementRoutingRuleUpdateAppEntitlementRoutingRule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                      | Type                                                                                                                                                                                                           | Required                                                                                                                                                                                                       | Description                                                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                      | [operations.C1ApiAppV1AppEntitlementRoutingRuleServiceUpdateAppEntitlementRoutingRuleRequest](../../sdk/models/operations/c1apiappv1appentitlementroutingruleserviceupdateappentitlementroutingrulerequest.md) | :heavy_check_mark:                                                                                                                                                                                             | The request object to use for the request.                                                                                                                                                                     |
| `options`                                                                                                                                                                                                      | RequestOptions                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                 |
| `options.retries`                                                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                               |

### Response

**Promise\<[operations.C1ApiAppV1AppEntitlementRoutingRuleServiceUpdateAppEntitlementRoutingRuleResponse](../../sdk/models/operations/c1apiappv1appentitlementroutingruleserviceupdateappentitlementroutingruleresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## reorderAppEntitlementRoutingRules

Reorder all configuration rules for an app in a single call. The caller
 supplies the full ordered list of rule IDs; the server assigns dense
 priorities (1..N) in that order. The request must be a permutation of every
 active rule in the app — missing or extra IDs are rejected.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.app.v1.AppEntitlementRoutingRuleService.ReorderAppEntitlementRoutingRules" method="post" path="/api/v1/apps/{app_id}/entitlement_configuration_rules/reorder" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.appEntitlementRoutingRule.reorderAppEntitlementRoutingRules({
    appId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { appEntitlementRoutingRuleReorderAppEntitlementRoutingRules } from "conductorone-sdk-typescript/funcs/appEntitlementRoutingRuleReorderAppEntitlementRoutingRules.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await appEntitlementRoutingRuleReorderAppEntitlementRoutingRules(conductoroneSDKTypescript, {
    appId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("appEntitlementRoutingRuleReorderAppEntitlementRoutingRules failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                          | Type                                                                                                                                                                                                               | Required                                                                                                                                                                                                           | Description                                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                          | [operations.C1ApiAppV1AppEntitlementRoutingRuleServiceReorderAppEntitlementRoutingRulesRequest](../../sdk/models/operations/c1apiappv1appentitlementroutingruleservicereorderappentitlementroutingrulesrequest.md) | :heavy_check_mark:                                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                                         |
| `options`                                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                     |
| `options.retries`                                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                   |

### Response

**Promise\<[operations.C1ApiAppV1AppEntitlementRoutingRuleServiceReorderAppEntitlementRoutingRulesResponse](../../sdk/models/operations/c1apiappv1appentitlementroutingruleservicereorderappentitlementroutingrulesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |