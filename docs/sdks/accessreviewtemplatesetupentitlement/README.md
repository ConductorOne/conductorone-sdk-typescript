# AccessReviewTemplateSetupEntitlement

## Overview

### Available Operations

* [addTemplateEntitlements](#addtemplateentitlements) - Add Template Entitlements
* [removeTemplateEntitlements](#removetemplateentitlements) - Remove Template Entitlements
* [addDeleteExcludedEntitlements](#adddeleteexcludedentitlements) - Add Delete Excluded Entitlements
* [getScopeAndEntitlements](#getscopeandentitlements) - Get Scope And Entitlements
* [setScopeAndEntitlements](#setscopeandentitlements) - Set Scope And Entitlements
* [setScopeAndExcludedEntitlements](#setscopeandexcludedentitlements) - Set Scope And Excluded Entitlements
* [~~setScopeByExcludedResourceType~~](#setscopebyexcludedresourcetype) - Set Scope By Excluded Resource Type :warning: **Deprecated**
* [setScopeByResourceType](#setscopebyresourcetype) - Set Scope By Resource Type

## addTemplateEntitlements

AddTemplateEntitlements adds entitlements to an access review template's selection without
 replacing existing selections or their policies. For large selections, send chunks of at most
 200 entitlements and wait for each call to finish before sending the next. Entitlements that
 are already selected are skipped, so retrying a chunk is safe. If the template has no apps and
 resources scope yet, it is set to the selected entitlements. The per-campaign entitlement quota
 applies to the total selection. To change user, account or grant scope afterwards, send the
 template from AccessReviewTemplateService.Get to AccessReviewTemplateService.Update with
 update_mask scope rather than using SetScopeAndEntitlements, which would replace the whole selection.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.accessreview.v1.AccessReviewTemplateSetupEntitlementService.AddTemplateEntitlements" method="post" path="/api/v1/access_review_template/{access_review_template_id}/entitlements/add" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.accessReviewTemplateSetupEntitlement.addTemplateEntitlements({
    accessReviewTemplateId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { accessReviewTemplateSetupEntitlementAddTemplateEntitlements } from "conductorone-sdk-typescript/funcs/accessReviewTemplateSetupEntitlementAddTemplateEntitlements.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await accessReviewTemplateSetupEntitlementAddTemplateEntitlements(conductoroneSDKTypescript, {
    accessReviewTemplateId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accessReviewTemplateSetupEntitlementAddTemplateEntitlements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                              | [operations.C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceAddTemplateEntitlementsRequest](../../sdk/models/operations/c1apiaccessreviewv1accessreviewtemplatesetupentitlementserviceaddtemplateentitlementsrequest.md) | :heavy_check_mark:                                                                                                                                                                                                                     | The request object to use for the request.                                                                                                                                                                                             |
| `options`                                                                                                                                                                                                                              | RequestOptions                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                         |
| `options.retries`                                                                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                       |

### Response

**Promise\<[operations.C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceAddTemplateEntitlementsResponse](../../sdk/models/operations/c1apiaccessreviewv1accessreviewtemplatesetupentitlementserviceaddtemplateentitlementsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeTemplateEntitlements

RemoveTemplateEntitlements removes entitlements from an access review template's selection
 without changing other selections or their policies. Entitlements that are not selected are
 ignored, so retrying a chunk is safe. Send at most 200 entitlements per call.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.accessreview.v1.AccessReviewTemplateSetupEntitlementService.RemoveTemplateEntitlements" method="post" path="/api/v1/access_review_template/{access_review_template_id}/entitlements/remove" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.accessReviewTemplateSetupEntitlement.removeTemplateEntitlements({
    accessReviewTemplateId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { accessReviewTemplateSetupEntitlementRemoveTemplateEntitlements } from "conductorone-sdk-typescript/funcs/accessReviewTemplateSetupEntitlementRemoveTemplateEntitlements.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await accessReviewTemplateSetupEntitlementRemoveTemplateEntitlements(conductoroneSDKTypescript, {
    accessReviewTemplateId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accessReviewTemplateSetupEntitlementRemoveTemplateEntitlements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                    | [operations.C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceRemoveTemplateEntitlementsRequest](../../sdk/models/operations/c1apiaccessreviewv1accessreviewtemplatesetupentitlementserviceremovetemplateentitlementsrequest.md) | :heavy_check_mark:                                                                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                                                                   |
| `options`                                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                               |
| `options.retries`                                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                             |

### Response

**Promise\<[operations.C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceRemoveTemplateEntitlementsResponse](../../sdk/models/operations/c1apiaccessreviewv1accessreviewtemplatesetupentitlementserviceremovetemplateentitlementsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## addDeleteExcludedEntitlements

AddDeleteExcludedEntitlements adds and/or removes individual excluded entitlements for a
 supported campaign template without replacing the whole excluded set, so concurrent edits are
 not overwritten. This does not change the template's scope, and exclusions
 only take effect while the scope sets excluded_specific_resources; use
 SetScopeAndExcludedEntitlements to set the scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.accessreview.v1.AccessReviewTemplateSetupEntitlementService.AddDeleteExcludedEntitlements" method="post" path="/api/v1/access_review_template/{access_review_template_id}/excluded_entitlements/add_delete" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.accessReviewTemplateSetupEntitlement.addDeleteExcludedEntitlements({
    accessReviewTemplateId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { accessReviewTemplateSetupEntitlementAddDeleteExcludedEntitlements } from "conductorone-sdk-typescript/funcs/accessReviewTemplateSetupEntitlementAddDeleteExcludedEntitlements.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await accessReviewTemplateSetupEntitlementAddDeleteExcludedEntitlements(conductoroneSDKTypescript, {
    accessReviewTemplateId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accessReviewTemplateSetupEntitlementAddDeleteExcludedEntitlements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                          | [operations.C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceAddDeleteExcludedEntitlementsRequest](../../sdk/models/operations/c1apiaccessreviewv1accessreviewtemplatesetupentitlementserviceadddeleteexcludedentitlementsrequest.md) | :heavy_check_mark:                                                                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                                                                         |
| `options`                                                                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                     |
| `options.retries`                                                                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                   |

### Response

**Promise\<[operations.C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceAddDeleteExcludedEntitlementsResponse](../../sdk/models/operations/c1apiaccessreviewv1accessreviewtemplatesetupentitlementserviceadddeleteexcludedentitlementsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getScopeAndEntitlements

GetScopeAndEntitlements retrieves the current scope configuration and selected entitlements for an access review template.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.accessreview.v1.AccessReviewTemplateSetupEntitlementService.GetScopeAndEntitlements" method="get" path="/api/v1/access_review_template/{access_review_template_id}/scope_and_entitlements" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.accessReviewTemplateSetupEntitlement.getScopeAndEntitlements({
    accessReviewTemplateId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { accessReviewTemplateSetupEntitlementGetScopeAndEntitlements } from "conductorone-sdk-typescript/funcs/accessReviewTemplateSetupEntitlementGetScopeAndEntitlements.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await accessReviewTemplateSetupEntitlementGetScopeAndEntitlements(conductoroneSDKTypescript, {
    accessReviewTemplateId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accessReviewTemplateSetupEntitlementGetScopeAndEntitlements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                              | [operations.C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceGetScopeAndEntitlementsRequest](../../sdk/models/operations/c1apiaccessreviewv1accessreviewtemplatesetupentitlementservicegetscopeandentitlementsrequest.md) | :heavy_check_mark:                                                                                                                                                                                                                     | The request object to use for the request.                                                                                                                                                                                             |
| `options`                                                                                                                                                                                                                              | RequestOptions                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                         |
| `options.retries`                                                                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                       |

### Response

**Promise\<[operations.C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceGetScopeAndEntitlementsResponse](../../sdk/models/operations/c1apiaccessreviewv1accessreviewtemplatesetupentitlementservicegetscopeandentitlementsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## setScopeAndEntitlements

SetScopeAndEntitlements replaces the scope configuration and selected entitlements for an access review template.
 Each call replaces the whole selection. To build a large selection, use AddTemplateEntitlements in chunks instead.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.accessreview.v1.AccessReviewTemplateSetupEntitlementService.SetScopeAndEntitlements" method="post" path="/api/v1/access_review_template/{access_review_template_id}/scope_and_entitlements" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.accessReviewTemplateSetupEntitlement.setScopeAndEntitlements({
    accessReviewTemplateId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { accessReviewTemplateSetupEntitlementSetScopeAndEntitlements } from "conductorone-sdk-typescript/funcs/accessReviewTemplateSetupEntitlementSetScopeAndEntitlements.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await accessReviewTemplateSetupEntitlementSetScopeAndEntitlements(conductoroneSDKTypescript, {
    accessReviewTemplateId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accessReviewTemplateSetupEntitlementSetScopeAndEntitlements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                              | [operations.C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceSetScopeAndEntitlementsRequest](../../sdk/models/operations/c1apiaccessreviewv1accessreviewtemplatesetupentitlementservicesetscopeandentitlementsrequest.md) | :heavy_check_mark:                                                                                                                                                                                                                     | The request object to use for the request.                                                                                                                                                                                             |
| `options`                                                                                                                                                                                                                              | RequestOptions                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                         |
| `options.retries`                                                                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                       |

### Response

**Promise\<[operations.C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceSetScopeAndEntitlementsResponse](../../sdk/models/operations/c1apiaccessreviewv1accessreviewtemplatesetupentitlementservicesetscopeandentitlementsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## setScopeAndExcludedEntitlements

SetScopeAndExcludedEntitlements replaces the scope configuration and the set of excluded
 entitlements for a supported campaign template. Each call replaces the whole excluded set; to
 add or remove individual entitlements, use AddDeleteExcludedEntitlements instead. Exclusions
 are supported for BY_USERS, selector/resource-type BY_ENTITLEMENTS, BY_INHERITANCE, and
 BY_ACCESS_CONFLICTS templates. Read them back with GetScopeAndEntitlements.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.accessreview.v1.AccessReviewTemplateSetupEntitlementService.SetScopeAndExcludedEntitlements" method="post" path="/api/v1/access_review_template/{access_review_template_id}/scope_and_excluded_entitlements" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.accessReviewTemplateSetupEntitlement.setScopeAndExcludedEntitlements({
    accessReviewTemplateId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { accessReviewTemplateSetupEntitlementSetScopeAndExcludedEntitlements } from "conductorone-sdk-typescript/funcs/accessReviewTemplateSetupEntitlementSetScopeAndExcludedEntitlements.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await accessReviewTemplateSetupEntitlementSetScopeAndExcludedEntitlements(conductoroneSDKTypescript, {
    accessReviewTemplateId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accessReviewTemplateSetupEntitlementSetScopeAndExcludedEntitlements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                                              | [operations.C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceSetScopeAndExcludedEntitlementsRequest](../../sdk/models/operations/c1apiaccessreviewv1accessreviewtemplatesetupentitlementservicesetscopeandexcludedentitlementsrequest.md) | :heavy_check_mark:                                                                                                                                                                                                                                     | The request object to use for the request.                                                                                                                                                                                                             |
| `options`                                                                                                                                                                                                                                              | RequestOptions                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                         |
| `options.retries`                                                                                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                       |

### Response

**Promise\<[operations.C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceSetScopeAndExcludedEntitlementsResponse](../../sdk/models/operations/c1apiaccessreviewv1accessreviewtemplatesetupentitlementservicesetscopeandexcludedentitlementsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## ~~setScopeByExcludedResourceType~~

SetScopeByExcludedResourceType replaces the scope configuration and the set of excluded
 resource types for a legacy campaign template. Read the current exclusions back with
 GetScopeAndEntitlements.

 This route is superseded and scheduled for removal. Requests that set excluded_resource_types
 are rejected with FAILED_PRECONDITION; an empty list, which clears stored resource-type
 exclusions, is still accepted. To exclude entitlements by resource type, call
 SetScopeAndExcludedEntitlements with scope.excluded_app_selection_criteria and list the
 resource types in resource_type_refs.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.accessreview.v1.AccessReviewTemplateSetupEntitlementService.SetScopeByExcludedResourceType" method="post" path="/api/v1/access_review_template/{access_review_template_id}/scope_by_excluded_resource_type" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.accessReviewTemplateSetupEntitlement.setScopeByExcludedResourceType({
    accessReviewTemplateId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { accessReviewTemplateSetupEntitlementSetScopeByExcludedResourceType } from "conductorone-sdk-typescript/funcs/accessReviewTemplateSetupEntitlementSetScopeByExcludedResourceType.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await accessReviewTemplateSetupEntitlementSetScopeByExcludedResourceType(conductoroneSDKTypescript, {
    accessReviewTemplateId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accessReviewTemplateSetupEntitlementSetScopeByExcludedResourceType failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                            | [operations.C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceSetScopeByExcludedResourceTypeRequest](../../sdk/models/operations/c1apiaccessreviewv1accessreviewtemplatesetupentitlementservicesetscopebyexcludedresourcetyperequest.md) | :heavy_check_mark:                                                                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                                                                           |
| `options`                                                                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                       |
| `options.retries`                                                                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                     |

### Response

**Promise\<[operations.C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceSetScopeByExcludedResourceTypeResponse](../../sdk/models/operations/c1apiaccessreviewv1accessreviewtemplatesetupentitlementservicesetscopebyexcludedresourcetyperesponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## setScopeByResourceType

SetScopeByResourceType sets the template scope by selecting specific resource types to include in campaigns created from this template.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.accessreview.v1.AccessReviewTemplateSetupEntitlementService.SetScopeByResourceType" method="post" path="/api/v1/access_review_template/{access_review_template_id}/scope_by_resource_type" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.accessReviewTemplateSetupEntitlement.setScopeByResourceType({
    accessReviewTemplateId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { accessReviewTemplateSetupEntitlementSetScopeByResourceType } from "conductorone-sdk-typescript/funcs/accessReviewTemplateSetupEntitlementSetScopeByResourceType.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await accessReviewTemplateSetupEntitlementSetScopeByResourceType(conductoroneSDKTypescript, {
    accessReviewTemplateId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accessReviewTemplateSetupEntitlementSetScopeByResourceType failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                            | [operations.C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceSetScopeByResourceTypeRequest](../../sdk/models/operations/c1apiaccessreviewv1accessreviewtemplatesetupentitlementservicesetscopebyresourcetyperequest.md) | :heavy_check_mark:                                                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                                                           |
| `options`                                                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                       |
| `options.retries`                                                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                     |

### Response

**Promise\<[operations.C1ApiAccessreviewV1AccessReviewTemplateSetupEntitlementServiceSetScopeByResourceTypeResponse](../../sdk/models/operations/c1apiaccessreviewv1accessreviewtemplatesetupentitlementservicesetscopebyresourcetyperesponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |