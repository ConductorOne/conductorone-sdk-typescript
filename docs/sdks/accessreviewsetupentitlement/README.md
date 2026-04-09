# AccessReviewSetupEntitlement

## Overview

### Available Operations

* [getCampaignScopeAndEntitlements](#getcampaignscopeandentitlements) - Get Campaign Scope And Entitlements
* [setCampaignScopeAndEntitlements](#setcampaignscopeandentitlements) - Set Campaign Scope And Entitlements
* [setCampaignScopeByResourceType](#setcampaignscopebyresourcetype) - Set Campaign Scope By Resource Type

## getCampaignScopeAndEntitlements

Invokes the c1.api.accessreview.v1.AccessReviewSetupEntitlementService.GetCampaignScopeAndEntitlements method.

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

Invokes the c1.api.accessreview.v1.AccessReviewSetupEntitlementService.SetCampaignScopeAndEntitlements method.

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

## setCampaignScopeByResourceType

Invokes the c1.api.accessreview.v1.AccessReviewSetupEntitlementService.SetCampaignScopeByResourceType method.

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