# AccessReviewTemplateSetupEntitlement

## Overview

### Available Operations

* [getScopeAndEntitlements](#getscopeandentitlements) - Get Scope And Entitlements
* [setScopeAndEntitlements](#setscopeandentitlements) - Set Scope And Entitlements
* [setScopeByResourceType](#setscopebyresourcetype) - Set Scope By Resource Type

## getScopeAndEntitlements

Invokes the c1.api.accessreview.v1.AccessReviewTemplateSetupEntitlementService.GetScopeAndEntitlements method.

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

Invokes the c1.api.accessreview.v1.AccessReviewTemplateSetupEntitlementService.SetScopeAndEntitlements method.

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

## setScopeByResourceType

Invokes the c1.api.accessreview.v1.AccessReviewTemplateSetupEntitlementService.SetScopeByResourceType method.

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