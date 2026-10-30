# FindingTransformationRule

## Overview

### Available Operations

* [listFindingTransformationRules](#listfindingtransformationrules) - List Finding Transformation Rules
* [createFindingTransformationRule](#createfindingtransformationrule) - Create Finding Transformation Rule
* [deleteFindingTransformationRule](#deletefindingtransformationrule) - Delete Finding Transformation Rule
* [getFindingTransformationRule](#getfindingtransformationrule) - Get Finding Transformation Rule
* [updateFindingTransformationRule](#updatefindingtransformationrule) - Update Finding Transformation Rule

## listFindingTransformationRules

List finding transformation rules, optionally filtered to a specific app.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.finding.v1.FindingTransformationRuleService.ListFindingTransformationRules" method="get" path="/api/v1/findings/transformation-rules" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.findingTransformationRule.listFindingTransformationRules();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { findingTransformationRuleListFindingTransformationRules } from "conductorone-sdk-typescript/funcs/findingTransformationRuleListFindingTransformationRules.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await findingTransformationRuleListFindingTransformationRules(conductoroneSDKTypescript);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("findingTransformationRuleListFindingTransformationRules failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.C1ApiFindingV1FindingTransformationRuleServiceListFindingTransformationRulesResponse](../../sdk/models/operations/c1apifindingv1findingtransformationruleservicelistfindingtransformationrulesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## createFindingTransformationRule

Create a new finding transformation rule.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.finding.v1.FindingTransformationRuleService.CreateFindingTransformationRule" method="post" path="/api/v1/findings/transformation-rules" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.findingTransformationRule.createFindingTransformationRule();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { findingTransformationRuleCreateFindingTransformationRule } from "conductorone-sdk-typescript/funcs/findingTransformationRuleCreateFindingTransformationRule.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await findingTransformationRuleCreateFindingTransformationRule(conductoroneSDKTypescript);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("findingTransformationRuleCreateFindingTransformationRule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [shared.CreateFindingTransformationRuleRequest](../../sdk/models/shared/createfindingtransformationrulerequest.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.C1ApiFindingV1FindingTransformationRuleServiceCreateFindingTransformationRuleResponse](../../sdk/models/operations/c1apifindingv1findingtransformationruleservicecreatefindingtransformationruleresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## deleteFindingTransformationRule

Delete a finding transformation rule. Findings already transformed by this rule are not affected.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.finding.v1.FindingTransformationRuleService.DeleteFindingTransformationRule" method="delete" path="/api/v1/findings/transformation-rules/{id}" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.findingTransformationRule.deleteFindingTransformationRule({
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
import { findingTransformationRuleDeleteFindingTransformationRule } from "conductorone-sdk-typescript/funcs/findingTransformationRuleDeleteFindingTransformationRule.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await findingTransformationRuleDeleteFindingTransformationRule(conductoroneSDKTypescript, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("findingTransformationRuleDeleteFindingTransformationRule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                              | Type                                                                                                                                                                                                                   | Required                                                                                                                                                                                                               | Description                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                              | [operations.C1ApiFindingV1FindingTransformationRuleServiceDeleteFindingTransformationRuleRequest](../../sdk/models/operations/c1apifindingv1findingtransformationruleservicedeletefindingtransformationrulerequest.md) | :heavy_check_mark:                                                                                                                                                                                                     | The request object to use for the request.                                                                                                                                                                             |
| `options`                                                                                                                                                                                                              | RequestOptions                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                         |
| `options.retries`                                                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                       |

### Response

**Promise\<[operations.C1ApiFindingV1FindingTransformationRuleServiceDeleteFindingTransformationRuleResponse](../../sdk/models/operations/c1apifindingv1findingtransformationruleservicedeletefindingtransformationruleresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getFindingTransformationRule

Retrieve a single finding transformation rule by ID.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.finding.v1.FindingTransformationRuleService.GetFindingTransformationRule" method="get" path="/api/v1/findings/transformation-rules/{id}" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.findingTransformationRule.getFindingTransformationRule({
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
import { findingTransformationRuleGetFindingTransformationRule } from "conductorone-sdk-typescript/funcs/findingTransformationRuleGetFindingTransformationRule.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await findingTransformationRuleGetFindingTransformationRule(conductoroneSDKTypescript, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("findingTransformationRuleGetFindingTransformationRule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                        | Type                                                                                                                                                                                                             | Required                                                                                                                                                                                                         | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                        | [operations.C1ApiFindingV1FindingTransformationRuleServiceGetFindingTransformationRuleRequest](../../sdk/models/operations/c1apifindingv1findingtransformationruleservicegetfindingtransformationrulerequest.md) | :heavy_check_mark:                                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                                       |
| `options`                                                                                                                                                                                                        | RequestOptions                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                               | Used to set various options for making HTTP requests.                                                                                                                                                            |
| `options.fetchOptions`                                                                                                                                                                                           | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                               | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                   |
| `options.retries`                                                                                                                                                                                                | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                               | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                 |

### Response

**Promise\<[operations.C1ApiFindingV1FindingTransformationRuleServiceGetFindingTransformationRuleResponse](../../sdk/models/operations/c1apifindingv1findingtransformationruleservicegetfindingtransformationruleresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## updateFindingTransformationRule

Update an existing finding transformation rule's match criteria or transforms.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.finding.v1.FindingTransformationRuleService.UpdateFindingTransformationRule" method="post" path="/api/v1/findings/transformation-rules/{transformation_rule_id}/update" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.findingTransformationRule.updateFindingTransformationRule({
    transformationRuleId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { findingTransformationRuleUpdateFindingTransformationRule } from "conductorone-sdk-typescript/funcs/findingTransformationRuleUpdateFindingTransformationRule.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await findingTransformationRuleUpdateFindingTransformationRule(conductoroneSDKTypescript, {
    transformationRuleId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("findingTransformationRuleUpdateFindingTransformationRule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                              | Type                                                                                                                                                                                                                   | Required                                                                                                                                                                                                               | Description                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                              | [operations.C1ApiFindingV1FindingTransformationRuleServiceUpdateFindingTransformationRuleRequest](../../sdk/models/operations/c1apifindingv1findingtransformationruleserviceupdatefindingtransformationrulerequest.md) | :heavy_check_mark:                                                                                                                                                                                                     | The request object to use for the request.                                                                                                                                                                             |
| `options`                                                                                                                                                                                                              | RequestOptions                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                         |
| `options.retries`                                                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                       |

### Response

**Promise\<[operations.C1ApiFindingV1FindingTransformationRuleServiceUpdateFindingTransformationRuleResponse](../../sdk/models/operations/c1apifindingv1findingtransformationruleserviceupdatefindingtransformationruleresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |