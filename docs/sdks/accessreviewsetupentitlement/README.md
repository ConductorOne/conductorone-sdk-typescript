# AccessReviewSetupEntitlement

## Overview

### Available Operations

* [addCampaignEntitlements](#addcampaignentitlements) - Add Campaign Entitlements
* [removeCampaignEntitlements](#removecampaignentitlements) - Remove Campaign Entitlements
* [addDeleteExcludedEntitlements](#adddeleteexcludedentitlements) - Add Delete Excluded Entitlements
* [getCampaignScopeAndEntitlements](#getcampaignscopeandentitlements) - Get Campaign Scope And Entitlements
* [setCampaignScopeAndEntitlements](#setcampaignscopeandentitlements) - Set Campaign Scope And Entitlements
* [setCampaignScopeAndExcludedEntitlements](#setcampaignscopeandexcludedentitlements) - Set Campaign Scope And Excluded Entitlements
* [~~setCampaignScopeByExcludedResourceType~~](#setcampaignscopebyexcludedresourcetype) - Set Campaign Scope By Excluded Resource Type :warning: **Deprecated**
* [setCampaignScopeByResourceType](#setcampaignscopebyresourcetype) - Set Campaign Scope By Resource Type

## addCampaignEntitlements

AddCampaignEntitlements adds entitlements to an access review campaign's selection without
 replacing existing selections or their policies. For large selections, send chunks of at most
 200 entitlements and wait for each call to finish before sending the next. Entitlements that
 are already selected are skipped, so retrying a chunk is safe. If the campaign has no apps and
 resources scope yet, it is set to the selected entitlements. The per-campaign entitlement quota
 applies to the total selection. To change user, account or grant scope afterwards, use
 AccessReviewService.Update with update_mask scope_v2 rather than SetCampaignScopeAndEntitlements,
 which would replace the whole selection.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.accessreview.v1.AccessReviewSetupEntitlementService.AddCampaignEntitlements" method="post" path="/api/v1/access_review/{access_review_id}/entitlements/add" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.accessReviewSetupEntitlement.addCampaignEntitlements({
    accessReviewId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { accessReviewSetupEntitlementAddCampaignEntitlements } from "conductorone-sdk-typescript/funcs/accessReviewSetupEntitlementAddCampaignEntitlements.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await accessReviewSetupEntitlementAddCampaignEntitlements(conductoroneSDKTypescript, {
    accessReviewId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accessReviewSetupEntitlementAddCampaignEntitlements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                              | Type                                                                                                                                                                                                                   | Required                                                                                                                                                                                                               | Description                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                              | [operations.C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceAddCampaignEntitlementsRequest](../../sdk/models/operations/c1apiaccessreviewv1accessreviewsetupentitlementserviceaddcampaignentitlementsrequest.md) | :heavy_check_mark:                                                                                                                                                                                                     | The request object to use for the request.                                                                                                                                                                             |
| `options`                                                                                                                                                                                                              | RequestOptions                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                         |
| `options.retries`                                                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                       |

### Response

**Promise\<[operations.C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceAddCampaignEntitlementsResponse](../../sdk/models/operations/c1apiaccessreviewv1accessreviewsetupentitlementserviceaddcampaignentitlementsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## removeCampaignEntitlements

RemoveCampaignEntitlements removes entitlements from an access review campaign's selection
 without changing other selections or their policies. Entitlements that are not selected are
 ignored, so retrying a chunk is safe. Send at most 200 entitlements per call.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.accessreview.v1.AccessReviewSetupEntitlementService.RemoveCampaignEntitlements" method="post" path="/api/v1/access_review/{access_review_id}/entitlements/remove" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.accessReviewSetupEntitlement.removeCampaignEntitlements({
    accessReviewId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { accessReviewSetupEntitlementRemoveCampaignEntitlements } from "conductorone-sdk-typescript/funcs/accessReviewSetupEntitlementRemoveCampaignEntitlements.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await accessReviewSetupEntitlementRemoveCampaignEntitlements(conductoroneSDKTypescript, {
    accessReviewId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accessReviewSetupEntitlementRemoveCampaignEntitlements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                    | [operations.C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceRemoveCampaignEntitlementsRequest](../../sdk/models/operations/c1apiaccessreviewv1accessreviewsetupentitlementserviceremovecampaignentitlementsrequest.md) | :heavy_check_mark:                                                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                                                   |
| `options`                                                                                                                                                                                                                    | RequestOptions                                                                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                           | Used to set various options for making HTTP requests.                                                                                                                                                                        |
| `options.fetchOptions`                                                                                                                                                                                                       | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                           | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                               |
| `options.retries`                                                                                                                                                                                                            | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                           | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                             |

### Response

**Promise\<[operations.C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceRemoveCampaignEntitlementsResponse](../../sdk/models/operations/c1apiaccessreviewv1accessreviewsetupentitlementserviceremovecampaignentitlementsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## addDeleteExcludedEntitlements

AddDeleteExcludedEntitlements adds and/or removes individual excluded entitlements for a
 supported campaign without replacing the whole excluded set, so concurrent edits are not
 overwritten. Entitlements that are already excluded are skipped, and entitlements that are not
 excluded are ignored on removal. This does not change the campaign's scope_v2, and
 exclusions only take effect while scope_v2 sets excluded_specific_resources; use
 SetCampaignScopeAndExcludedEntitlements to set the scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.accessreview.v1.AccessReviewSetupEntitlementService.AddDeleteExcludedEntitlements" method="post" path="/api/v1/access_review/{access_review_id}/excluded_entitlements/add_delete" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.accessReviewSetupEntitlement.addDeleteExcludedEntitlements({
    accessReviewId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { accessReviewSetupEntitlementAddDeleteExcludedEntitlements } from "conductorone-sdk-typescript/funcs/accessReviewSetupEntitlementAddDeleteExcludedEntitlements.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await accessReviewSetupEntitlementAddDeleteExcludedEntitlements(conductoroneSDKTypescript, {
    accessReviewId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accessReviewSetupEntitlementAddDeleteExcludedEntitlements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                          | [operations.C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceAddDeleteExcludedEntitlementsRequest](../../sdk/models/operations/c1apiaccessreviewv1accessreviewsetupentitlementserviceadddeleteexcludedentitlementsrequest.md) | :heavy_check_mark:                                                                                                                                                                                                                 | The request object to use for the request.                                                                                                                                                                                         |
| `options`                                                                                                                                                                                                                          | RequestOptions                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                 | Used to set various options for making HTTP requests.                                                                                                                                                                              |
| `options.fetchOptions`                                                                                                                                                                                                             | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                                 | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                     |
| `options.retries`                                                                                                                                                                                                                  | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                                 | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                   |

### Response

**Promise\<[operations.C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceAddDeleteExcludedEntitlementsResponse](../../sdk/models/operations/c1apiaccessreviewv1accessreviewsetupentitlementserviceadddeleteexcludedentitlementsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## getCampaignScopeAndEntitlements

GetCampaignScopeAndEntitlements retrieves the current scope configuration and selected entitlements for an access review campaign.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.accessreview.v1.AccessReviewSetupEntitlementService.GetCampaignScopeAndEntitlements" method="get" path="/api/v1/access_review/{access_review_id}/scope_and_entitlements" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.accessReviewSetupEntitlement.getCampaignScopeAndEntitlements({
    accessReviewId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { accessReviewSetupEntitlementGetCampaignScopeAndEntitlements } from "conductorone-sdk-typescript/funcs/accessReviewSetupEntitlementGetCampaignScopeAndEntitlements.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await accessReviewSetupEntitlementGetCampaignScopeAndEntitlements(conductoroneSDKTypescript, {
    accessReviewId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accessReviewSetupEntitlementGetCampaignScopeAndEntitlements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                              | [operations.C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceGetCampaignScopeAndEntitlementsRequest](../../sdk/models/operations/c1apiaccessreviewv1accessreviewsetupentitlementservicegetcampaignscopeandentitlementsrequest.md) | :heavy_check_mark:                                                                                                                                                                                                                     | The request object to use for the request.                                                                                                                                                                                             |
| `options`                                                                                                                                                                                                                              | RequestOptions                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                         |
| `options.retries`                                                                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                       |

### Response

**Promise\<[operations.C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceGetCampaignScopeAndEntitlementsResponse](../../sdk/models/operations/c1apiaccessreviewv1accessreviewsetupentitlementservicegetcampaignscopeandentitlementsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## setCampaignScopeAndEntitlements

SetCampaignScopeAndEntitlements replaces the scope configuration and selected entitlements for an access review campaign.
 Each call replaces the whole selection. To build a large selection, use AddCampaignEntitlements in chunks instead.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.accessreview.v1.AccessReviewSetupEntitlementService.SetCampaignScopeAndEntitlements" method="post" path="/api/v1/access_review/{access_review_id}/scope_and_entitlements" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.accessReviewSetupEntitlement.setCampaignScopeAndEntitlements({
    accessReviewId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { accessReviewSetupEntitlementSetCampaignScopeAndEntitlements } from "conductorone-sdk-typescript/funcs/accessReviewSetupEntitlementSetCampaignScopeAndEntitlements.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await accessReviewSetupEntitlementSetCampaignScopeAndEntitlements(conductoroneSDKTypescript, {
    accessReviewId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accessReviewSetupEntitlementSetCampaignScopeAndEntitlements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                              | [operations.C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceSetCampaignScopeAndEntitlementsRequest](../../sdk/models/operations/c1apiaccessreviewv1accessreviewsetupentitlementservicesetcampaignscopeandentitlementsrequest.md) | :heavy_check_mark:                                                                                                                                                                                                                     | The request object to use for the request.                                                                                                                                                                                             |
| `options`                                                                                                                                                                                                                              | RequestOptions                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                         |
| `options.retries`                                                                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                       |

### Response

**Promise\<[operations.C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceSetCampaignScopeAndEntitlementsResponse](../../sdk/models/operations/c1apiaccessreviewv1accessreviewsetupentitlementservicesetcampaignscopeandentitlementsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## setCampaignScopeAndExcludedEntitlements

SetCampaignScopeAndExcludedEntitlements replaces the scope configuration and the set of
 excluded entitlements for a supported campaign scope. Each call replaces the whole excluded set; to
 add or remove individual entitlements, use AddDeleteExcludedEntitlements instead. Exclusions
 are supported for BY_USERS, selector/resource-type BY_ENTITLEMENTS, BY_INHERITANCE, and
 BY_ACCESS_CONFLICTS campaigns. Read them back with GetCampaignScopeAndEntitlements.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.accessreview.v1.AccessReviewSetupEntitlementService.SetCampaignScopeAndExcludedEntitlements" method="post" path="/api/v1/access_review/{access_review_id}/scope_and_excluded_entitlements" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.accessReviewSetupEntitlement.setCampaignScopeAndExcludedEntitlements({
    accessReviewId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { accessReviewSetupEntitlementSetCampaignScopeAndExcludedEntitlements } from "conductorone-sdk-typescript/funcs/accessReviewSetupEntitlementSetCampaignScopeAndExcludedEntitlements.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await accessReviewSetupEntitlementSetCampaignScopeAndExcludedEntitlements(conductoroneSDKTypescript, {
    accessReviewId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accessReviewSetupEntitlementSetCampaignScopeAndExcludedEntitlements failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                                              | [operations.C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceSetCampaignScopeAndExcludedEntitlementsRequest](../../sdk/models/operations/c1apiaccessreviewv1accessreviewsetupentitlementservicesetcampaignscopeandexcludedentitlementsrequest.md) | :heavy_check_mark:                                                                                                                                                                                                                                     | The request object to use for the request.                                                                                                                                                                                                             |
| `options`                                                                                                                                                                                                                                              | RequestOptions                                                                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                                     | Used to set various options for making HTTP requests.                                                                                                                                                                                                  |
| `options.fetchOptions`                                                                                                                                                                                                                                 | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                     | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                         |
| `options.retries`                                                                                                                                                                                                                                      | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                     | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                       |

### Response

**Promise\<[operations.C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceSetCampaignScopeAndExcludedEntitlementsResponse](../../sdk/models/operations/c1apiaccessreviewv1accessreviewsetupentitlementservicesetcampaignscopeandexcludedentitlementsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## ~~setCampaignScopeByExcludedResourceType~~

SetCampaignScopeByExcludedResourceType replaces the scope configuration and the set of excluded
 resource types for a legacy campaign configuration. Read the current exclusions back with
 GetCampaignScopeAndEntitlements.

 This route is superseded and scheduled for removal. Requests that set excluded_resource_types
 are rejected with FAILED_PRECONDITION; an empty list, which clears stored resource-type
 exclusions, is still accepted. To exclude entitlements by resource type, call
 SetCampaignScopeAndExcludedEntitlements with scope_v2.excluded_app_selection_criteria and list
 the resource types in resource_type_refs.

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.accessreview.v1.AccessReviewSetupEntitlementService.SetCampaignScopeByExcludedResourceType" method="post" path="/api/v1/access_review/{access_review_id}/scope_by_excluded_resource_type" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.accessReviewSetupEntitlement.setCampaignScopeByExcludedResourceType({
    accessReviewId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { accessReviewSetupEntitlementSetCampaignScopeByExcludedResourceType } from "conductorone-sdk-typescript/funcs/accessReviewSetupEntitlementSetCampaignScopeByExcludedResourceType.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await accessReviewSetupEntitlementSetCampaignScopeByExcludedResourceType(conductoroneSDKTypescript, {
    accessReviewId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accessReviewSetupEntitlementSetCampaignScopeByExcludedResourceType failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                                            | [operations.C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceSetCampaignScopeByExcludedResourceTypeRequest](../../sdk/models/operations/c1apiaccessreviewv1accessreviewsetupentitlementservicesetcampaignscopebyexcludedresourcetyperequest.md) | :heavy_check_mark:                                                                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                                                                           |
| `options`                                                                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                                       |
| `options.retries`                                                                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                                     |

### Response

**Promise\<[operations.C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceSetCampaignScopeByExcludedResourceTypeResponse](../../sdk/models/operations/c1apiaccessreviewv1accessreviewsetupentitlementservicesetcampaignscopebyexcludedresourcetyperesponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## setCampaignScopeByResourceType

SetCampaignScopeByResourceType sets the campaign scope by selecting specific resource types to include in the review.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="c1.api.accessreview.v1.AccessReviewSetupEntitlementService.SetCampaignScopeByResourceType" method="post" path="/api/v1/access_review/{access_review_id}/scope_by_resource_type" -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.accessReviewSetupEntitlement.setCampaignScopeByResourceType({
    accessReviewId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ConductoroneSDKTypescriptCore } from "conductorone-sdk-typescript/core.js";
import { accessReviewSetupEntitlementSetCampaignScopeByResourceType } from "conductorone-sdk-typescript/funcs/accessReviewSetupEntitlementSetCampaignScopeByResourceType.js";

// Use `ConductoroneSDKTypescriptCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const conductoroneSDKTypescript = new ConductoroneSDKTypescriptCore({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const res = await accessReviewSetupEntitlementSetCampaignScopeByResourceType(conductoroneSDKTypescript, {
    accessReviewId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accessReviewSetupEntitlementSetCampaignScopeByResourceType failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                 | Required                                                                                                                                                                                                                             | Description                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                                                            | [operations.C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceSetCampaignScopeByResourceTypeRequest](../../sdk/models/operations/c1apiaccessreviewv1accessreviewsetupentitlementservicesetcampaignscopebyresourcetyperequest.md) | :heavy_check_mark:                                                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                                                           |
| `options`                                                                                                                                                                                                                            | RequestOptions                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                   | Used to set various options for making HTTP requests.                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                                                                               | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                                   | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                                       |
| `options.retries`                                                                                                                                                                                                                    | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                   | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                                     |

### Response

**Promise\<[operations.C1ApiAccessreviewV1AccessReviewSetupEntitlementServiceSetCampaignScopeByResourceTypeResponse](../../sdk/models/operations/c1apiaccessreviewv1accessreviewsetupentitlementservicesetcampaignscopebyresourcetyperesponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |