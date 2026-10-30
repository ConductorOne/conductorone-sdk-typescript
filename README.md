# conductorone-sdk-typescript

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *conductorone-sdk-typescript* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=conductorone-sdk-typescript&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start Summary [summary] -->
## Summary

C1 API: The C1 API is a HTTP API for managing C1 resources.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [conductorone-sdk-typescript](#conductorone-sdk-typescript)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Pagination](#pagination)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add conductorone-sdk-typescript
```

### PNPM

```bash
pnpm add conductorone-sdk-typescript
```

### Bun

```bash
bun add conductorone-sdk-typescript
```

### Yarn

```bash
yarn add conductorone-sdk-typescript
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.a2Ui.listSurfaces({
    conversationId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security schemes globally:

| Name         | Type   | Scheme       |
| ------------ | ------ | ------------ |
| `bearerAuth` | http   | HTTP Bearer  |
| `oauth`      | oauth2 | OAuth2 token |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. The selected scheme will be used by default to authenticate with the API for all operations that support it. For example:
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.a2Ui.listSurfaces({
    conversationId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [A2Ui](docs/sdks/a2ui/README.md)

* [listSurfaces](docs/sdks/a2ui/README.md#listsurfaces) - List Surfaces
* [getSurfaceProvenance](docs/sdks/a2ui/README.md#getsurfaceprovenance) - Get Surface Provenance
* [submitAction](docs/sdks/a2ui/README.md#submitaction) - Submit Action
* [listSurfaceFeedback](docs/sdks/a2ui/README.md#listsurfacefeedback) - List Surface Feedback
* [createSurfaceFeedback](docs/sdks/a2ui/README.md#createsurfacefeedback) - Create Surface Feedback

### [AccessConflict](docs/sdks/accessconflict/README.md)

* [createMonitor](docs/sdks/accessconflict/README.md#createmonitor) - Create Monitor
* [deleteMonitor](docs/sdks/accessconflict/README.md#deletemonitor) - Delete Monitor
* [getMonitor](docs/sdks/accessconflict/README.md#getmonitor) - Get Monitor
* [updateMonitor](docs/sdks/accessconflict/README.md#updatemonitor) - Update Monitor

### [AccessReview](docs/sdks/accessreview/README.md)

* [create](docs/sdks/accessreview/README.md#create) - Create
* [delete](docs/sdks/accessreview/README.md#delete) - Delete
* [get](docs/sdks/accessreview/README.md#get) - Get
* [update](docs/sdks/accessreview/README.md#update) - Update
* [list](docs/sdks/accessreview/README.md#list) - List

### [AccessReviewActions](docs/sdks/accessreviewactions/README.md)

* [generateReport](docs/sdks/accessreviewactions/README.md#generatereport) - Generate Report

### [AccessReviewReport](docs/sdks/accessreviewreport/README.md)

* [list](docs/sdks/accessreviewreport/README.md#list) - List

### [AccessReviewSetupEntitlement](docs/sdks/accessreviewsetupentitlement/README.md)

* [addCampaignEntitlements](docs/sdks/accessreviewsetupentitlement/README.md#addcampaignentitlements) - Add Campaign Entitlements
* [removeCampaignEntitlements](docs/sdks/accessreviewsetupentitlement/README.md#removecampaignentitlements) - Remove Campaign Entitlements
* [addDeleteExcludedEntitlements](docs/sdks/accessreviewsetupentitlement/README.md#adddeleteexcludedentitlements) - Add Delete Excluded Entitlements
* [getCampaignScopeAndEntitlements](docs/sdks/accessreviewsetupentitlement/README.md#getcampaignscopeandentitlements) - Get Campaign Scope And Entitlements
* [setCampaignScopeAndEntitlements](docs/sdks/accessreviewsetupentitlement/README.md#setcampaignscopeandentitlements) - Set Campaign Scope And Entitlements
* [setCampaignScopeAndExcludedEntitlements](docs/sdks/accessreviewsetupentitlement/README.md#setcampaignscopeandexcludedentitlements) - Set Campaign Scope And Excluded Entitlements
* [~~setCampaignScopeByExcludedResourceType~~](docs/sdks/accessreviewsetupentitlement/README.md#setcampaignscopebyexcludedresourcetype) - Set Campaign Scope By Excluded Resource Type :warning: **Deprecated**
* [setCampaignScopeByResourceType](docs/sdks/accessreviewsetupentitlement/README.md#setcampaignscopebyresourcetype) - Set Campaign Scope By Resource Type

### [AccessReviewTemplate](docs/sdks/accessreviewtemplate/README.md)

* [create](docs/sdks/accessreviewtemplate/README.md#create) - Create
* [delete](docs/sdks/accessreviewtemplate/README.md#delete) - Delete
* [get](docs/sdks/accessreviewtemplate/README.md#get) - Get
* [update](docs/sdks/accessreviewtemplate/README.md#update) - Update

### [AccessReviewTemplateSetupEntitlement](docs/sdks/accessreviewtemplatesetupentitlement/README.md)

* [addTemplateEntitlements](docs/sdks/accessreviewtemplatesetupentitlement/README.md#addtemplateentitlements) - Add Template Entitlements
* [removeTemplateEntitlements](docs/sdks/accessreviewtemplatesetupentitlement/README.md#removetemplateentitlements) - Remove Template Entitlements
* [addDeleteExcludedEntitlements](docs/sdks/accessreviewtemplatesetupentitlement/README.md#adddeleteexcludedentitlements) - Add Delete Excluded Entitlements
* [getScopeAndEntitlements](docs/sdks/accessreviewtemplatesetupentitlement/README.md#getscopeandentitlements) - Get Scope And Entitlements
* [setScopeAndEntitlements](docs/sdks/accessreviewtemplatesetupentitlement/README.md#setscopeandentitlements) - Set Scope And Entitlements
* [setScopeAndExcludedEntitlements](docs/sdks/accessreviewtemplatesetupentitlement/README.md#setscopeandexcludedentitlements) - Set Scope And Excluded Entitlements
* [~~setScopeByExcludedResourceType~~](docs/sdks/accessreviewtemplatesetupentitlement/README.md#setscopebyexcludedresourcetype) - Set Scope By Excluded Resource Type :warning: **Deprecated**
* [setScopeByResourceType](docs/sdks/accessreviewtemplatesetupentitlement/README.md#setscopebyresourcetype) - Set Scope By Resource Type

### [AccountProvisionPolicyTest](docs/sdks/accountprovisionpolicytest/README.md)

* [test](docs/sdks/accountprovisionpolicytest/README.md#test) - Test

### [AgentClassifier](docs/sdks/agentclassifier/README.md)

* [getAgentClassifierPolicy](docs/sdks/agentclassifier/README.md#getagentclassifierpolicy) - Get Agent Classifier Policy
* [updateAgentClassifierPolicy](docs/sdks/agentclassifier/README.md#updateagentclassifierpolicy) - Update Agent Classifier Policy

### [AIGovernanceSettings](docs/sdks/aigovernancesettings/README.md)

* [get](docs/sdks/aigovernancesettings/README.md#get) - Get
* [update](docs/sdks/aigovernancesettings/README.md#update) - Update
* [listHistory](docs/sdks/aigovernancesettings/README.md#listhistory) - List History
* [getTenantDefaults](docs/sdks/aigovernancesettings/README.md#gettenantdefaults) - Get Tenant Defaults

### [APIKeySearch](docs/sdks/apikeysearch/README.md)

* [search](docs/sdks/apikeysearch/README.md#search) - NOTE: Searches personal and service principal API keys

### [AppAccessRequestsDefaults](docs/sdks/appaccessrequestsdefaults/README.md)

* [getAppAccessRequestsDefaults](docs/sdks/appaccessrequestsdefaults/README.md#getappaccessrequestsdefaults) - Get App Access Requests Defaults
* [createAppAccessRequestsDefaults](docs/sdks/appaccessrequestsdefaults/README.md#createappaccessrequestsdefaults) - Create App Access Requests Defaults
* [cancelAppAccessRequestsDefaults](docs/sdks/appaccessrequestsdefaults/README.md#cancelappaccessrequestsdefaults) - Cancel App Access Requests Defaults

### [AppCap](docs/sdks/appcap/README.md)

* [list](docs/sdks/appcap/README.md#list) - List
* [delete](docs/sdks/appcap/README.md#delete) - Delete
* [get](docs/sdks/appcap/README.md#get) - Get
* [listHistory](docs/sdks/appcap/README.md#listhistory) - List History
* [setLimit](docs/sdks/appcap/README.md#setlimit) - Set Limit
* [unsuspend](docs/sdks/appcap/README.md#unsuspend) - Unsuspend
* [suspend](docs/sdks/appcap/README.md#suspend) - Suspend

### [AppEntitlementMonitorBinding](docs/sdks/appentitlementmonitorbinding/README.md)

* [deleteAppEntitlementMonitorBinding](docs/sdks/appentitlementmonitorbinding/README.md#deleteappentitlementmonitorbinding) - Delete App Entitlement Monitor Binding
* [createAppEntitlementMonitorBinding](docs/sdks/appentitlementmonitorbinding/README.md#createappentitlementmonitorbinding) - Create App Entitlement Monitor Binding
* [getAppEntitlementMonitorBinding](docs/sdks/appentitlementmonitorbinding/README.md#getappentitlementmonitorbinding) - Get App Entitlement Monitor Binding

### [AppEntitlementOwners](docs/sdks/appentitlementowners/README.md)

* [listOwnerIDs](docs/sdks/appentitlementowners/README.md#listownerids) - List Owner I Ds
* [delete](docs/sdks/appentitlementowners/README.md#delete) - Delete
* [list](docs/sdks/appentitlementowners/README.md#list) - List
* [add](docs/sdks/appentitlementowners/README.md#add) - Add
* [set](docs/sdks/appentitlementowners/README.md#set) - Set
* [remove](docs/sdks/appentitlementowners/README.md#remove) - Remove

### [AppEntitlementOwnersV2](docs/sdks/appentitlementownersv2/README.md)

* [set](docs/sdks/appentitlementownersv2/README.md#set) - Set
* [searchEntitlementOwners](docs/sdks/appentitlementownersv2/README.md#searchentitlementowners) - Search Entitlement Owners
* [deleteEntitlementOwner](docs/sdks/appentitlementownersv2/README.md#deleteentitlementowner) - Delete Entitlement Owner
* [getEntitlementOwner](docs/sdks/appentitlementownersv2/README.md#getentitlementowner) - Get Entitlement Owner
* [createEntitlementOwner](docs/sdks/appentitlementownersv2/README.md#createentitlementowner) - Create Entitlement Owner
* [searchUserOwners](docs/sdks/appentitlementownersv2/README.md#searchuserowners) - Search User Owners
* [deleteUserOwner](docs/sdks/appentitlementownersv2/README.md#deleteuserowner) - Delete User Owner
* [getUserOwner](docs/sdks/appentitlementownersv2/README.md#getuserowner) - Get User Owner
* [createUserOwner](docs/sdks/appentitlementownersv2/README.md#createuserowner) - Create User Owner

### [AppEntitlementRoutingRule](docs/sdks/appentitlementroutingrule/README.md)

* [listAppEntitlementRoutingRules](docs/sdks/appentitlementroutingrule/README.md#listappentitlementroutingrules) - List App Entitlement Routing Rules
* [createAppEntitlementRoutingRule](docs/sdks/appentitlementroutingrule/README.md#createappentitlementroutingrule) - Create App Entitlement Routing Rule
* [deleteAppEntitlementRoutingRule](docs/sdks/appentitlementroutingrule/README.md#deleteappentitlementroutingrule) - Delete App Entitlement Routing Rule
* [getAppEntitlementRoutingRule](docs/sdks/appentitlementroutingrule/README.md#getappentitlementroutingrule) - Get App Entitlement Routing Rule
* [updateAppEntitlementRoutingRule](docs/sdks/appentitlementroutingrule/README.md#updateappentitlementroutingrule) - Update App Entitlement Routing Rule
* [reorderAppEntitlementRoutingRules](docs/sdks/appentitlementroutingrule/README.md#reorderappentitlementroutingrules) - Reorder App Entitlement Routing Rules

### [AppEntitlements](docs/sdks/appentitlements/README.md)

* [list](docs/sdks/appentitlements/README.md#list) - List
* [create](docs/sdks/appentitlements/README.md#create) - Create
* [addManuallyManagedMembers](docs/sdks/appentitlements/README.md#addmanuallymanagedmembers) - Add Manually Managed Members
* [deleteAutomation](docs/sdks/appentitlements/README.md#deleteautomation) - Delete Automation
* [getAutomation](docs/sdks/appentitlements/README.md#getautomation) - Get Automation
* [createAutomation](docs/sdks/appentitlements/README.md#createautomation) - Create Automation
* [removeAutomationExclusion](docs/sdks/appentitlements/README.md#removeautomationexclusion) - Remove Automation Exclusion
* [listAutomationExclusions](docs/sdks/appentitlements/README.md#listautomationexclusions) - List Automation Exclusions
* [addAutomationExclusion](docs/sdks/appentitlements/README.md#addautomationexclusion) - Add Automation Exclusion
* [updateAutomation](docs/sdks/appentitlements/README.md#updateautomation) - Update Automation
* [removeEntitlementMembership](docs/sdks/appentitlements/README.md#removeentitlementmembership) - Remove Entitlement Membership
* [~~listUsers~~](docs/sdks/appentitlements/README.md#listusers) - List Users :warning: **Deprecated**
* [delete](docs/sdks/appentitlements/README.md#delete) - Delete
* [get](docs/sdks/appentitlements/README.md#get) - Get
* [update](docs/sdks/appentitlements/README.md#update) - Update
* [listForAppResource](docs/sdks/appentitlements/README.md#listforappresource) - List For App Resource
* [listForAppUser](docs/sdks/appentitlements/README.md#listforappuser) - List For App User

### [AppEntitlementSearch](docs/sdks/appentitlementsearch/README.md)

* [searchAppEntitlementsWithExpired](docs/sdks/appentitlementsearch/README.md#searchappentitlementswithexpired) - Search App Entitlements With Expired
* [searchAppEntitlementsForAppUser](docs/sdks/appentitlementsearch/README.md#searchappentitlementsforappuser) - Search App Entitlements For App User
* [search](docs/sdks/appentitlementsearch/README.md#search) - Search
* [searchGrants](docs/sdks/appentitlementsearch/README.md#searchgrants) - Search Grants
* [searchGraph](docs/sdks/appentitlementsearch/README.md#searchgraph) - Search Graph
* [countGrantsForUserByApp](docs/sdks/appentitlementsearch/README.md#countgrantsforuserbyapp) - Count Grants For User By App
* [searchReachableResourcesForUser](docs/sdks/appentitlementsearch/README.md#searchreachableresourcesforuser) - Search Reachable Resources For User

### [AppEntitlementsProxy](docs/sdks/appentitlementsproxy/README.md)

* [delete](docs/sdks/appentitlementsproxy/README.md#delete) - Delete
* [get](docs/sdks/appentitlementsproxy/README.md#get) - Get
* [create](docs/sdks/appentitlementsproxy/README.md#create) - Create

### [AppEntitlementUserBinding](docs/sdks/appentitlementuserbinding/README.md)

* [removeGrantDuration](docs/sdks/appentitlementuserbinding/README.md#removegrantduration) - Remove Grant Duration
* [updateGrantDuration](docs/sdks/appentitlementuserbinding/README.md#updategrantduration) - Update Grant Duration
* [listAppUsersForIdentityWithGrant](docs/sdks/appentitlementuserbinding/README.md#listappusersforidentitywithgrant) - List App Users For Identity With Grant
* [searchGrantFeed](docs/sdks/appentitlementuserbinding/README.md#searchgrantfeed) - Search Grant Feed
* [searchPastGrants](docs/sdks/appentitlementuserbinding/README.md#searchpastgrants) - Search Past Grants

### [AppManagedState](docs/sdks/appmanagedstate/README.md)

* [list](docs/sdks/appmanagedstate/README.md#list) - List
* [get](docs/sdks/appmanagedstate/README.md#get) - Get
* [promote](docs/sdks/appmanagedstate/README.md#promote) - Promote

### [AppOwners](docs/sdks/appowners/README.md)

* [listOwnerIDs](docs/sdks/appowners/README.md#listownerids) - List Owner I Ds
* [delete](docs/sdks/appowners/README.md#delete) - Delete
* [list](docs/sdks/appowners/README.md#list) - List
* [set](docs/sdks/appowners/README.md#set) - Set
* [remove](docs/sdks/appowners/README.md#remove) - Remove
* [add](docs/sdks/appowners/README.md#add) - Add

### [AppOwnersV2](docs/sdks/appownersv2/README.md)

* [set](docs/sdks/appownersv2/README.md#set) - Set
* [searchEntitlementOwners](docs/sdks/appownersv2/README.md#searchentitlementowners) - Search Entitlement Owners
* [deleteEntitlementOwner](docs/sdks/appownersv2/README.md#deleteentitlementowner) - Delete Entitlement Owner
* [getEntitlementOwner](docs/sdks/appownersv2/README.md#getentitlementowner) - Get Entitlement Owner
* [createEntitlementOwner](docs/sdks/appownersv2/README.md#createentitlementowner) - Create Entitlement Owner
* [searchUserOwners](docs/sdks/appownersv2/README.md#searchuserowners) - Search User Owners
* [deleteUserOwner](docs/sdks/appownersv2/README.md#deleteuserowner) - Delete User Owner
* [getUserOwner](docs/sdks/appownersv2/README.md#getuserowner) - Get User Owner
* [createUserOwner](docs/sdks/appownersv2/README.md#createuserowner) - Create User Owner

### [AppReport](docs/sdks/appreport/README.md)

* [list](docs/sdks/appreport/README.md#list) - List

### [AppReportAction](docs/sdks/appreportaction/README.md)

* [generateReport](docs/sdks/appreportaction/README.md#generatereport) - Generate Report

### [AppResource](docs/sdks/appresource/README.md)

* [list](docs/sdks/appresource/README.md#list) - List
* [createManuallyManagedAppResource](docs/sdks/appresource/README.md#createmanuallymanagedappresource) - Create Manually Managed App Resource
* [deleteManuallyManagedAppResource](docs/sdks/appresource/README.md#deletemanuallymanagedappresource) - Delete Manually Managed App Resource
* [get](docs/sdks/appresource/README.md#get) - Get
* [update](docs/sdks/appresource/README.md#update) - Update

### [AppResourceOwners](docs/sdks/appresourceowners/README.md)

* [delete](docs/sdks/appresourceowners/README.md#delete) - Delete
* [listOwnerIDs](docs/sdks/appresourceowners/README.md#listownerids) - List Owner I Ds
* [remove](docs/sdks/appresourceowners/README.md#remove) - Remove
* [list](docs/sdks/appresourceowners/README.md#list) - List
* [add](docs/sdks/appresourceowners/README.md#add) - Add
* [set](docs/sdks/appresourceowners/README.md#set) - Set

### [AppResourceOwnersV2](docs/sdks/appresourceownersv2/README.md)

* [set](docs/sdks/appresourceownersv2/README.md#set) - Set
* [searchEntitlementOwners](docs/sdks/appresourceownersv2/README.md#searchentitlementowners) - Search Entitlement Owners
* [deleteEntitlementOwner](docs/sdks/appresourceownersv2/README.md#deleteentitlementowner) - Delete Entitlement Owner
* [getEntitlementOwner](docs/sdks/appresourceownersv2/README.md#getentitlementowner) - Get Entitlement Owner
* [createEntitlementOwner](docs/sdks/appresourceownersv2/README.md#createentitlementowner) - Create Entitlement Owner
* [searchUserOwners](docs/sdks/appresourceownersv2/README.md#searchuserowners) - Search User Owners
* [deleteUserOwner](docs/sdks/appresourceownersv2/README.md#deleteuserowner) - Delete User Owner
* [getUserOwner](docs/sdks/appresourceownersv2/README.md#getuserowner) - Get User Owner
* [createUserOwner](docs/sdks/appresourceownersv2/README.md#createuserowner) - Create User Owner

### [AppResourceSearch](docs/sdks/appresourcesearch/README.md)

* [searchAppResourceTypes](docs/sdks/appresourcesearch/README.md#searchappresourcetypes) - Search App Resource Types
* [searchAppResources](docs/sdks/appresourcesearch/README.md#searchappresources) - Search App Resources

### [AppResourceType](docs/sdks/appresourcetype/README.md)

* [list](docs/sdks/appresourcetype/README.md#list) - List
* [createManuallyManagedResourceType](docs/sdks/appresourcetype/README.md#createmanuallymanagedresourcetype) - Create Manually Managed Resource Type
* [deleteManuallyManagedResourceType](docs/sdks/appresourcetype/README.md#deletemanuallymanagedresourcetype) - Delete Manually Managed Resource Type
* [get](docs/sdks/appresourcetype/README.md#get) - Get
* [updateManuallyManagedResourceType](docs/sdks/appresourcetype/README.md#updatemanuallymanagedresourcetype) - Update Manually Managed Resource Type

### [Apps](docs/sdks/apps/README.md)

* [list](docs/sdks/apps/README.md#list) - List
* [create](docs/sdks/apps/README.md#create) - Create
* [delete](docs/sdks/apps/README.md#delete) - Delete
* [get](docs/sdks/apps/README.md#get) - Get
* [update](docs/sdks/apps/README.md#update) - Update

### [AppSearch](docs/sdks/appsearch/README.md)

* [search](docs/sdks/appsearch/README.md#search) - Search
* [searchUserOwnership](docs/sdks/appsearch/README.md#searchuserownership) - Search User Ownership

### [AppSecretAdmin](docs/sdks/appsecretadmin/README.md)

* [revoke](docs/sdks/appsecretadmin/README.md#revoke) - Revoke

### [AppSecretSearch](docs/sdks/appsecretsearch/README.md)

* [searchMyVendedCredentials](docs/sdks/appsecretsearch/README.md#searchmyvendedcredentials) - Search My Vended Credentials

### [AppUsageControls](docs/sdks/appusagecontrols/README.md)

* [get](docs/sdks/appusagecontrols/README.md#get) - Get
* [update](docs/sdks/appusagecontrols/README.md#update) - Update

### [AppUser](docs/sdks/appuser/README.md)

* [listOwnedServiceAccounts](docs/sdks/appuser/README.md#listownedserviceaccounts) - List Owned Service Accounts
* [list](docs/sdks/appuser/README.md#list) - List
* [listAppUserCredentials](docs/sdks/appuser/README.md#listappusercredentials) - List App User Credentials
* [listAppUsersForUser](docs/sdks/appuser/README.md#listappusersforuser) - List App Users For User
* [update](docs/sdks/appuser/README.md#update) - Update
* [search](docs/sdks/appuser/README.md#search) - Search

### [AppUserOwnersV2](docs/sdks/appuserownersv2/README.md)

* [set](docs/sdks/appuserownersv2/README.md#set) - Set
* [searchEntitlementOwners](docs/sdks/appuserownersv2/README.md#searchentitlementowners) - Search Entitlement Owners
* [deleteEntitlementOwner](docs/sdks/appuserownersv2/README.md#deleteentitlementowner) - Delete Entitlement Owner
* [createEntitlementOwner](docs/sdks/appuserownersv2/README.md#createentitlementowner) - Create Entitlement Owner
* [searchUserOwners](docs/sdks/appuserownersv2/README.md#searchuserowners) - Search User Owners
* [deleteUserOwner](docs/sdks/appuserownersv2/README.md#deleteuserowner) - Delete User Owner
* [createUserOwner](docs/sdks/appuserownersv2/README.md#createuserowner) - Create User Owner

### [Artifact](docs/sdks/artifact/README.md)

* [listVersions](docs/sdks/artifact/README.md#listversions) - List Versions
* [getVersion](docs/sdks/artifact/README.md#getversion) - Get Version
* [delete](docs/sdks/artifact/README.md#delete) - Delete
* [get](docs/sdks/artifact/README.md#get) - Get
* [update](docs/sdks/artifact/README.md#update) - Update
* [search](docs/sdks/artifact/README.md#search) - Search

### [Attributes](docs/sdks/attributes/README.md)

* [deleteAttributeValue](docs/sdks/attributes/README.md#deleteattributevalue) - Delete Attribute Value
* [createAttributeValue](docs/sdks/attributes/README.md#createattributevalue) - Create Attribute Value
* [getAttributeValue](docs/sdks/attributes/README.md#getattributevalue) - Get Attribute Value
* [listComplianceFrameworks](docs/sdks/attributes/README.md#listcomplianceframeworks) - List Compliance Frameworks
* [createComplianceFrameworkAttributeValue](docs/sdks/attributes/README.md#createcomplianceframeworkattributevalue) - Create Compliance Framework Attribute Value
* [deleteComplianceFrameworkAttributeValue](docs/sdks/attributes/README.md#deletecomplianceframeworkattributevalue) - Delete Compliance Framework Attribute Value
* [getComplianceFrameworkAttributeValue](docs/sdks/attributes/README.md#getcomplianceframeworkattributevalue) - Get Compliance Framework Attribute Value
* [listRiskLevels](docs/sdks/attributes/README.md#listrisklevels) - List Risk Levels
* [createRiskLevelAttributeValue](docs/sdks/attributes/README.md#createrisklevelattributevalue) - Create Risk Level Attribute Value
* [deleteRiskLevelAttributeValue](docs/sdks/attributes/README.md#deleterisklevelattributevalue) - Delete Risk Level Attribute Value
* [getRiskLevelAttributeValue](docs/sdks/attributes/README.md#getrisklevelattributevalue) - Get Risk Level Attribute Value
* [listAttributeTypes](docs/sdks/attributes/README.md#listattributetypes) - List Attribute Types
* [listAttributeValues](docs/sdks/attributes/README.md#listattributevalues) - List Attribute Values

### [AttributeSearch](docs/sdks/attributesearch/README.md)

* [searchAttributeValues](docs/sdks/attributesearch/README.md#searchattributevalues) - Search Attribute Values

### [Auth](docs/sdks/auth/README.md)

* [introspect](docs/sdks/auth/README.md#introspect) - Introspect

### [AuthzenServer](docs/sdks/authzenserver/README.md)

* [listAuthzenPolicies](docs/sdks/authzenserver/README.md#listauthzenpolicies) - List Authzen Policies
* [createAuthzenPolicy](docs/sdks/authzenserver/README.md#createauthzenpolicy) - Create Authzen Policy
* [deleteAuthzenPolicy](docs/sdks/authzenserver/README.md#deleteauthzenpolicy) - Delete Authzen Policy
* [getAuthzenPolicy](docs/sdks/authzenserver/README.md#getauthzenpolicy) - Get Authzen Policy
* [list](docs/sdks/authzenserver/README.md#list) - List
* [create](docs/sdks/authzenserver/README.md#create) - Create
* [testAuthzenPolicy](docs/sdks/authzenserver/README.md#testauthzenpolicy) - Test Authzen Policy
* [delete](docs/sdks/authzenserver/README.md#delete) - Delete
* [get](docs/sdks/authzenserver/README.md#get) - Get
* [update](docs/sdks/authzenserver/README.md#update) - Update

### [Automation](docs/sdks/automation/README.md)

* [listAutomations](docs/sdks/automation/README.md#listautomations) - List Automations
* [createAutomation](docs/sdks/automation/README.md#createautomation) - Create Automation
* [deleteAutomation](docs/sdks/automation/README.md#deleteautomation) - Delete Automation
* [getAutomation](docs/sdks/automation/README.md#getautomation) - Get Automation
* [updateAutomation](docs/sdks/automation/README.md#updateautomation) - Update Automation
* [clearAutomationCircuitBreaker](docs/sdks/automation/README.md#clearautomationcircuitbreaker) - Clear Automation Circuit Breaker
* [resolvePausedAutomationExecutions](docs/sdks/automation/README.md#resolvepausedautomationexecutions) - Resolve Paused Automation Executions
* [executeAutomation](docs/sdks/automation/README.md#executeautomation) - Execute Automation

### [AutomationExecution](docs/sdks/automationexecution/README.md)

* [listAutomationExecutions](docs/sdks/automationexecution/README.md#listautomationexecutions) - List Automation Executions
* [getAutomationExecution](docs/sdks/automationexecution/README.md#getautomationexecution) - Get Automation Execution

### [AutomationExecutionActions](docs/sdks/automationexecutionactions/README.md)

* [terminateAutomation](docs/sdks/automationexecutionactions/README.md#terminateautomation) - Terminate Automation

### [AutomationExecutionSearch](docs/sdks/automationexecutionsearch/README.md)

* [searchAllAutomationExecutions](docs/sdks/automationexecutionsearch/README.md#searchallautomationexecutions) - Search All Automation Executions
* [searchAutomationExecutions](docs/sdks/automationexecutionsearch/README.md#searchautomationexecutions) - Search Automation Executions

### [AutomationSearch](docs/sdks/automationsearch/README.md)

* [searchAutomationTemplateVersions](docs/sdks/automationsearch/README.md#searchautomationtemplateversions) - Search Automation Template Versions
* [searchAutomations](docs/sdks/automationsearch/README.md#searchautomations) - Search Automations

### [AWSExternalIDSettings](docs/sdks/awsexternalidsettings/README.md)

* [get](docs/sdks/awsexternalidsettings/README.md#get) - Get

### [Classifier](docs/sdks/classifier/README.md)

* [listClassifierBindings](docs/sdks/classifier/README.md#listclassifierbindings) - List Classifier Bindings
* [createClassifierBinding](docs/sdks/classifier/README.md#createclassifierbinding) - Create Classifier Binding
* [deleteClassifierBinding](docs/sdks/classifier/README.md#deleteclassifierbinding) - Delete Classifier Binding
* [listClassifiers](docs/sdks/classifier/README.md#listclassifiers) - List Classifiers
* [createClassifier](docs/sdks/classifier/README.md#createclassifier) - Create Classifier
* [getClassifier](docs/sdks/classifier/README.md#getclassifier) - Get Classifier
* [updateClassifier](docs/sdks/classifier/README.md#updateclassifier) - Update Classifier
* [deleteClassifier](docs/sdks/classifier/README.md#deleteclassifier) - Delete Classifier

### [ClassifierTemplate](docs/sdks/classifiertemplate/README.md)

* [getClassifierTemplate](docs/sdks/classifiertemplate/README.md#getclassifiertemplate) - Get Classifier Template
* [instantiateClassifierTemplate](docs/sdks/classifiertemplate/README.md#instantiateclassifiertemplate) - Instantiate Classifier Template
* [listClassifierTemplates](docs/sdks/classifiertemplate/README.md#listclassifiertemplates) - List Classifier Templates
* [addClassifierRuleFromTemplate](docs/sdks/classifiertemplate/README.md#addclassifierrulefromtemplate) - Add Classifier Rule From Template

### [Connector](docs/sdks/connector/README.md)

* [list](docs/sdks/connector/README.md#list) - List
* [createDelegated](docs/sdks/connector/README.md#createdelegated) - Create Delegated
* [confirmSyncValid](docs/sdks/connector/README.md#confirmsyncvalid) - Confirm Sync Valid
* [getCredentials](docs/sdks/connector/README.md#getcredentials) - Get Credentials
* [revokeCredential](docs/sdks/connector/README.md#revokecredential) - Revoke Credential
* [forceSync](docs/sdks/connector/README.md#forcesync) - Force Sync
* [pauseSync](docs/sdks/connector/README.md#pausesync) - Pause Sync
* [resumeSync](docs/sdks/connector/README.md#resumesync) - Resume Sync
* [updateConnectorSchedule](docs/sdks/connector/README.md#updateconnectorschedule) - Update Connector Schedule
* [getConnectorSyncDownloadURL](docs/sdks/connector/README.md#getconnectorsyncdownloadurl) - Get Connector Sync Download Url
* [delete](docs/sdks/connector/README.md#delete) - Delete
* [get](docs/sdks/connector/README.md#get) - Get
* [update](docs/sdks/connector/README.md#update) - Update
* [create](docs/sdks/connector/README.md#create) - Create
* [updateDelegated](docs/sdks/connector/README.md#updatedelegated) - Update Delegated
* [rotateCredential](docs/sdks/connector/README.md#rotatecredential) - Rotate Credential
* [validateHTTPConnectorConfig](docs/sdks/connector/README.md#validatehttpconnectorconfig) - Validate Http Connector Config

### [ConnectorAuthoringActivation](docs/sdks/connectorauthoringactivation/README.md)

* [activateRevision](docs/sdks/connectorauthoringactivation/README.md#activaterevision) - Activate Revision
* [rollbackRevision](docs/sdks/connectorauthoringactivation/README.md#rollbackrevision) - Rollback Revision

### [ConnectorCatalog](docs/sdks/connectorcatalog/README.md)

* [configurationSchema](docs/sdks/connectorcatalog/README.md#configurationschema) - Configuration Schema

### [ConnectorOwnersV2](docs/sdks/connectorownersv2/README.md)

* [set](docs/sdks/connectorownersv2/README.md#set) - Set
* [searchEntitlementOwners](docs/sdks/connectorownersv2/README.md#searchentitlementowners) - Search Entitlement Owners
* [deleteEntitlementOwner](docs/sdks/connectorownersv2/README.md#deleteentitlementowner) - Delete Entitlement Owner
* [getEntitlementOwner](docs/sdks/connectorownersv2/README.md#getentitlementowner) - Get Entitlement Owner
* [createEntitlementOwner](docs/sdks/connectorownersv2/README.md#createentitlementowner) - Create Entitlement Owner
* [searchUserOwners](docs/sdks/connectorownersv2/README.md#searchuserowners) - Search User Owners
* [deleteUserOwner](docs/sdks/connectorownersv2/README.md#deleteuserowner) - Delete User Owner
* [getUserOwner](docs/sdks/connectorownersv2/README.md#getuserowner) - Get User Owner
* [createUserOwner](docs/sdks/connectorownersv2/README.md#createuserowner) - Create User Owner

### [Contacts](docs/sdks/contacts/README.md)

* [getContacts](docs/sdks/contacts/README.md#getcontacts) - Get Contacts
* [updateContacts](docs/sdks/contacts/README.md#updatecontacts) - Update Contacts

### [CredentialInventoryPolicy](docs/sdks/credentialinventorypolicy/README.md)

* [list](docs/sdks/credentialinventorypolicy/README.md#list) - List
* [create](docs/sdks/credentialinventorypolicy/README.md#create) - Create
* [delete](docs/sdks/credentialinventorypolicy/README.md#delete) - Delete
* [get](docs/sdks/credentialinventorypolicy/README.md#get) - Get
* [update](docs/sdks/credentialinventorypolicy/README.md#update) - Update
* [search](docs/sdks/credentialinventorypolicy/README.md#search) - Search

### [Decoy](docs/sdks/decoy/README.md)

* [list](docs/sdks/decoy/README.md#list) - List
* [create](docs/sdks/decoy/README.md#create) - Create
* [delete](docs/sdks/decoy/README.md#delete) - Delete
* [get](docs/sdks/decoy/README.md#get) - Get
* [update](docs/sdks/decoy/README.md#update) - Update
* [rotate](docs/sdks/decoy/README.md#rotate) - Rotate

### [DecoySearch](docs/sdks/decoysearch/README.md)

* [search](docs/sdks/decoysearch/README.md#search) - Search

### [Directory](docs/sdks/directory/README.md)

* [list](docs/sdks/directory/README.md#list) - List
* [create](docs/sdks/directory/README.md#create) - Create
* [delete](docs/sdks/directory/README.md#delete) - Delete
* [get](docs/sdks/directory/README.md#get) - Get
* [update](docs/sdks/directory/README.md#update) - Update

### [Edge](docs/sdks/edge/README.md)

* [list](docs/sdks/edge/README.md#list) - List
* [create](docs/sdks/edge/README.md#create) - Create
* [delete](docs/sdks/edge/README.md#delete) - Delete
* [get](docs/sdks/edge/README.md#get) - Get
* [update](docs/sdks/edge/README.md#update) - Update
* [listEgressRuleEntitlementIssues](docs/sdks/edge/README.md#listegressruleentitlementissues) - List Egress Rule Entitlement Issues
* [previewEgressHostDecision](docs/sdks/edge/README.md#previewegresshostdecision) - Preview Egress Host Decision
* [previewEgressRulesUpdate](docs/sdks/edge/README.md#previewegressrulesupdate) - Preview Egress Rules Update
* [listEgressDenialSummary](docs/sdks/edge/README.md#listegressdenialsummary) - List Egress Denial Summary
* [listEgressTopAgents](docs/sdks/edge/README.md#listegresstopagents) - List Egress Top Agents
* [listEgressTopDestinations](docs/sdks/edge/README.md#listegresstopdestinations) - List Egress Top Destinations
* [listEgressTrafficEvents](docs/sdks/edge/README.md#listegresstrafficevents) - List Egress Traffic Events
* [getEgressTrafficSummary](docs/sdks/edge/README.md#getegresstrafficsummary) - Get Egress Traffic Summary
* [getEgressTrafficEvent](docs/sdks/edge/README.md#getegresstrafficevent) - Get Egress Traffic Event
* [listInferenceTopAgents](docs/sdks/edge/README.md#listinferencetopagents) - List Inference Top Agents
* [listInferenceTopTools](docs/sdks/edge/README.md#listinferencetoptools) - List Inference Top Tools
* [listInferenceTrafficEvents](docs/sdks/edge/README.md#listinferencetrafficevents) - List Inference Traffic Events
* [getInferenceUsageSummary](docs/sdks/edge/README.md#getinferenceusagesummary) - Get Inference Usage Summary
* [getInferenceUsageAttribution](docs/sdks/edge/README.md#getinferenceusageattribution) - Get Inference Usage Attribution
* [checkInferenceVaultAccess](docs/sdks/edge/README.md#checkinferencevaultaccess) - Check Inference Vault Access
* [getPublicTrust](docs/sdks/edge/README.md#getpublictrust) - Get Public Trust
* [listInferenceRoutes](docs/sdks/edge/README.md#listinferenceroutes) - List Inference Routes
* [listAuditAttestationKeys](docs/sdks/edge/README.md#listauditattestationkeys) - List Audit Attestation Keys
* [listAuditAttestationManifests](docs/sdks/edge/README.md#listauditattestationmanifests) - List Audit Attestation Manifests
* [getAuditInclusionProof](docs/sdks/edge/README.md#getauditinclusionproof) - Get Audit Inclusion Proof
* [listEgressTopAgentsRollup](docs/sdks/edge/README.md#listegresstopagentsrollup) - List Egress Top Agents Rollup
* [listEgressTopToolsRollup](docs/sdks/edge/README.md#listegresstoptoolsrollup) - List Egress Top Tools Rollup
* [getEgressTrafficSummaryRollup](docs/sdks/edge/README.md#getegresstrafficsummaryrollup) - Get Egress Traffic Summary Rollup
* [listInferenceCatalog](docs/sdks/edge/README.md#listinferencecatalog) - List Inference Catalog
* [getInferenceUsageSummaryRollup](docs/sdks/edge/README.md#getinferenceusagesummaryrollup) - Get Inference Usage Summary Rollup
* [getInferenceUsageAttributionRollup](docs/sdks/edge/README.md#getinferenceusageattributionrollup) - Get Inference Usage Attribution Rollup
* [listEdgesRollup](docs/sdks/edge/README.md#listedgesrollup) - List Edges Rollup
* [listUnattributedInferenceTrafficEvents](docs/sdks/edge/README.md#listunattributedinferencetrafficevents) - List Unattributed Inference Traffic Events
* [listUsableEdges](docs/sdks/edge/README.md#listusableedges) - List Usable Edges

### [EmailCapabilities](docs/sdks/emailcapabilities/README.md)

* [get](docs/sdks/emailcapabilities/README.md#get) - Get

### [Export](docs/sdks/export/README.md)

* [list](docs/sdks/export/README.md#list) - List
* [create](docs/sdks/export/README.md#create) - Create
* [delete](docs/sdks/export/README.md#delete) - Delete
* [get](docs/sdks/export/README.md#get) - Get
* [update](docs/sdks/export/README.md#update) - Update
* [listEvents](docs/sdks/export/README.md#listevents) - List Events

### [ExportsSearch](docs/sdks/exportssearch/README.md)

* [search](docs/sdks/exportssearch/README.md#search) - Search

### [ExternalClientSearch](docs/sdks/externalclientsearch/README.md)

* [search](docs/sdks/externalclientsearch/README.md#search) - NOTE: Searches external client grants for all users

### [ExternalOAuthClient](docs/sdks/externaloauthclient/README.md)

* [create](docs/sdks/externaloauthclient/README.md#create) - Create
* [revoke](docs/sdks/externaloauthclient/README.md#revoke) - Revoke
* [rotateSecret](docs/sdks/externaloauthclient/README.md#rotatesecret) - Rotate Secret
* [update](docs/sdks/externaloauthclient/README.md#update) - Update

### [Feedback](docs/sdks/feedback/README.md)

* [createFeedback](docs/sdks/feedback/README.md#createfeedback) - Create Feedback

### [Finding](docs/sdks/finding/README.md)

* [createFinding](docs/sdks/finding/README.md#createfinding) - Create Finding
* [updateFindingAssignee](docs/sdks/finding/README.md#updatefindingassignee) - Update Finding Assignee
* [updateFindingState](docs/sdks/finding/README.md#updatefindingstate) - Update Finding State
* [createFindingTask](docs/sdks/finding/README.md#createfindingtask) - Create Finding Task
* [getFinding](docs/sdks/finding/README.md#getfinding) - Get Finding
* [bulkUpdateFindingState](docs/sdks/finding/README.md#bulkupdatefindingstate) - Bulk Update Finding State
* [bulkCreateFindingTasks](docs/sdks/finding/README.md#bulkcreatefindingtasks) - Bulk Create Finding Tasks

### [FindingAudit](docs/sdks/findingaudit/README.md)

* [search](docs/sdks/findingaudit/README.md#search) - Search

### [FindingRoutingRule](docs/sdks/findingroutingrule/README.md)

* [listFindingRoutingRules](docs/sdks/findingroutingrule/README.md#listfindingroutingrules) - List Finding Routing Rules
* [createFindingRoutingRule](docs/sdks/findingroutingrule/README.md#createfindingroutingrule) - Create Finding Routing Rule
* [deleteFindingRoutingRule](docs/sdks/findingroutingrule/README.md#deletefindingroutingrule) - Delete Finding Routing Rule
* [getFindingRoutingRule](docs/sdks/findingroutingrule/README.md#getfindingroutingrule) - Get Finding Routing Rule
* [updateFindingRoutingRule](docs/sdks/findingroutingrule/README.md#updatefindingroutingrule) - Update Finding Routing Rule

### [FindingSearch](docs/sdks/findingsearch/README.md)

* [search](docs/sdks/findingsearch/README.md#search) - Search

### [FindingSettings](docs/sdks/findingsettings/README.md)

* [listFindingSettings](docs/sdks/findingsettings/README.md#listfindingsettings) - List Finding Settings
* [getEdgeFindingSettings](docs/sdks/findingsettings/README.md#getedgefindingsettings) - Get Edge Finding Settings
* [updateEdgeFindingSettings](docs/sdks/findingsettings/README.md#updateedgefindingsettings) - Update Edge Finding Settings
* [updateFindingSettings](docs/sdks/findingsettings/README.md#updatefindingsettings) - Update Finding Settings

### [FindingTransformationRule](docs/sdks/findingtransformationrule/README.md)

* [listFindingTransformationRules](docs/sdks/findingtransformationrule/README.md#listfindingtransformationrules) - List Finding Transformation Rules
* [createFindingTransformationRule](docs/sdks/findingtransformationrule/README.md#createfindingtransformationrule) - Create Finding Transformation Rule
* [deleteFindingTransformationRule](docs/sdks/findingtransformationrule/README.md#deletefindingtransformationrule) - Delete Finding Transformation Rule
* [getFindingTransformationRule](docs/sdks/findingtransformationrule/README.md#getfindingtransformationrule) - Get Finding Transformation Rule
* [updateFindingTransformationRule](docs/sdks/findingtransformationrule/README.md#updatefindingtransformationrule) - Update Finding Transformation Rule

### [Functions](docs/sdks/functions/README.md)

* [listFunctions](docs/sdks/functions/README.md#listfunctions) - List Functions
* [createFunction](docs/sdks/functions/README.md#createfunction) - Create Function
* [listCommits](docs/sdks/functions/README.md#listcommits) - List Commits
* [createInitialCommit](docs/sdks/functions/README.md#createinitialcommit) - Create Initial Commit
* [createFinalCommit](docs/sdks/functions/README.md#createfinalcommit) - Create Final Commit
* [getLockFile](docs/sdks/functions/README.md#getlockfile) - Get Lock File
* [getCommitContent](docs/sdks/functions/README.md#getcommitcontent) - Get Commit Content
* [invoke](docs/sdks/functions/README.md#invoke) - Invoke
* [listTags](docs/sdks/functions/README.md#listtags) - List Tags
* [createTag](docs/sdks/functions/README.md#createtag) - Create Tag
* [test](docs/sdks/functions/README.md#test) - Test
* [deleteFunction](docs/sdks/functions/README.md#deletefunction) - Delete Function
* [getFunction](docs/sdks/functions/README.md#getfunction) - Get Function
* [updateFunction](docs/sdks/functions/README.md#updatefunction) - Update Function

### [FunctionsInvocation](docs/sdks/functionsinvocation/README.md)

* [list](docs/sdks/functionsinvocation/README.md#list) - List
* [get](docs/sdks/functionsinvocation/README.md#get) - Get
* [getResultDownloadURL](docs/sdks/functionsinvocation/README.md#getresultdownloadurl) - Get Result Download Url

### [FunctionsInvocationSearch](docs/sdks/functionsinvocationsearch/README.md)

* [search](docs/sdks/functionsinvocationsearch/README.md#search) - Search

### [FunctionsSearch](docs/sdks/functionssearch/README.md)

* [search](docs/sdks/functionssearch/README.md#search) - Search

### [FundAssignment](docs/sdks/fundassignment/README.md)

* [delete](docs/sdks/fundassignment/README.md#delete) - Delete
* [get](docs/sdks/fundassignment/README.md#get) - Get
* [clearExtension](docs/sdks/fundassignment/README.md#clearextension) - Clear Extension
* [grantExtension](docs/sdks/fundassignment/README.md#grantextension) - Grant Extension
* [listHistory](docs/sdks/fundassignment/README.md#listhistory) - List History
* [setLimit](docs/sdks/fundassignment/README.md#setlimit) - Set Limit
* [unsuspend](docs/sdks/fundassignment/README.md#unsuspend) - Unsuspend
* [suspend](docs/sdks/fundassignment/README.md#suspend) - Suspend
* [search](docs/sdks/fundassignment/README.md#search) - Search

### [FundPolicy](docs/sdks/fundpolicy/README.md)

* [delete](docs/sdks/fundpolicy/README.md#delete) - Delete
* [get](docs/sdks/fundpolicy/README.md#get) - Get
* [create](docs/sdks/fundpolicy/README.md#create) - Create
* [setOrgCeiling](docs/sdks/fundpolicy/README.md#setorgceiling) - Set Org Ceiling
* [unfreezeTenant](docs/sdks/fundpolicy/README.md#unfreezetenant) - Unfreeze Tenant
* [freezeTenant](docs/sdks/fundpolicy/README.md#freezetenant) - Freeze Tenant
* [listHistory](docs/sdks/fundpolicy/README.md#listhistory) - List History
* [update](docs/sdks/fundpolicy/README.md#update) - Update

### [FundRule](docs/sdks/fundrule/README.md)

* [list](docs/sdks/fundrule/README.md#list) - List
* [create](docs/sdks/fundrule/README.md#create) - Create
* [delete](docs/sdks/fundrule/README.md#delete) - Delete
* [get](docs/sdks/fundrule/README.md#get) - Get
* [update](docs/sdks/fundrule/README.md#update) - Update
* [listHistory](docs/sdks/fundrule/README.md#listhistory) - List History
* [search](docs/sdks/fundrule/README.md#search) - Search

### [GatewayKey](docs/sdks/gatewaykey/README.md)

* [list](docs/sdks/gatewaykey/README.md#list) - List
* [mint](docs/sdks/gatewaykey/README.md#mint) - Mint
* [revoke](docs/sdks/gatewaykey/README.md#revoke) - Revoke

### [GoLink](docs/sdks/golink/README.md)

* [list](docs/sdks/golink/README.md#list) - List
* [create](docs/sdks/golink/README.md#create) - Create
* [listVersions](docs/sdks/golink/README.md#listversions) - List Versions
* [delete](docs/sdks/golink/README.md#delete) - Delete
* [get](docs/sdks/golink/README.md#get) - Get
* [update](docs/sdks/golink/README.md#update) - Update
* [resolve](docs/sdks/golink/README.md#resolve) - Resolve

### [GoLinkSearch](docs/sdks/golinksearch/README.md)

* [search](docs/sdks/golinksearch/README.md#search) - Search

### [Hooks](docs/sdks/hooks/README.md)

* [list](docs/sdks/hooks/README.md#list) - List
* [create](docs/sdks/hooks/README.md#create) - Create
* [delete](docs/sdks/hooks/README.md#delete) - Delete
* [get](docs/sdks/hooks/README.md#get) - Get
* [update](docs/sdks/hooks/README.md#update) - Update

### [HooksSearch](docs/sdks/hookssearch/README.md)

* [search](docs/sdks/hookssearch/README.md#search) - Search

### [IdentityPolicyTenantDefaults](docs/sdks/identitypolicytenantdefaults/README.md)

* [get](docs/sdks/identitypolicytenantdefaults/README.md#get) - Get
* [update](docs/sdks/identitypolicytenantdefaults/README.md#update) - Update

### [LocalDirectoryConfig](docs/sdks/localdirectoryconfig/README.md)

* [list](docs/sdks/localdirectoryconfig/README.md#list) - List
* [create](docs/sdks/localdirectoryconfig/README.md#create) - Create
* [delete](docs/sdks/localdirectoryconfig/README.md#delete) - Delete
* [get](docs/sdks/localdirectoryconfig/README.md#get) - Get
* [update](docs/sdks/localdirectoryconfig/README.md#update) - Update

### [LocalUserInvitation](docs/sdks/localuserinvitation/README.md)

* [create](docs/sdks/localuserinvitation/README.md#create) - Create
* [get](docs/sdks/localuserinvitation/README.md#get) - Get
* [revoke](docs/sdks/localuserinvitation/README.md#revoke) - Revoke
* [search](docs/sdks/localuserinvitation/README.md#search) - Search

### [MCPAccessProfile](docs/sdks/mcpaccessprofile/README.md)

* [list](docs/sdks/mcpaccessprofile/README.md#list) - List
* [create](docs/sdks/mcpaccessprofile/README.md#create) - Create
* [delete](docs/sdks/mcpaccessprofile/README.md#delete) - Delete
* [get](docs/sdks/mcpaccessprofile/README.md#get) - Get
* [update](docs/sdks/mcpaccessprofile/README.md#update) - Update
* [getByAppEntitlementId](docs/sdks/mcpaccessprofile/README.md#getbyappentitlementid) - Get By App Entitlement Id
* [searchAccessProfiles](docs/sdks/mcpaccessprofile/README.md#searchaccessprofiles) - Search Access Profiles
* [listRequestableConnectors](docs/sdks/mcpaccessprofile/README.md#listrequestableconnectors) - List Requestable Connectors
* [searchRequestableConnectors](docs/sdks/mcpaccessprofile/README.md#searchrequestableconnectors) - Search Requestable Connectors

### [MCPAccessProfileToolBinding](docs/sdks/mcpaccessprofiletoolbinding/README.md)

* [list](docs/sdks/mcpaccessprofiletoolbinding/README.md#list) - List
* [createBindings](docs/sdks/mcpaccessprofiletoolbinding/README.md#createbindings) - Create Bindings
* [deleteBindings](docs/sdks/mcpaccessprofiletoolbinding/README.md#deletebindings) - Delete Bindings
* [listToolsByProfileHistory](docs/sdks/mcpaccessprofiletoolbinding/README.md#listtoolsbyprofilehistory) - List Tools By Profile History
* [listProfilesByToolHistory](docs/sdks/mcpaccessprofiletoolbinding/README.md#listprofilesbytoolhistory) - List Profiles By Tool History
* [getAccessProfilesForTools](docs/sdks/mcpaccessprofiletoolbinding/README.md#getaccessprofilesfortools) - Get Access Profiles For Tools

### [MCPResource](docs/sdks/mcpresource/README.md)

* [list](docs/sdks/mcpresource/README.md#list) - List
* [get](docs/sdks/mcpresource/README.md#get) - Get
* [update](docs/sdks/mcpresource/README.md#update) - Update
* [listHistory](docs/sdks/mcpresource/README.md#listhistory) - List History
* [search](docs/sdks/mcpresource/README.md#search) - Search

### [MCPServer](docs/sdks/mcpserver/README.md)

* [list](docs/sdks/mcpserver/README.md#list) - List
* [register](docs/sdks/mcpserver/README.md#register) - Register
* [delete](docs/sdks/mcpserver/README.md#delete) - Delete
* [get](docs/sdks/mcpserver/README.md#get) - Get
* [update](docs/sdks/mcpserver/README.md#update) - Update
* [updateCredentials](docs/sdks/mcpserver/README.md#updatecredentials) - Update Credentials
* [disconnect](docs/sdks/mcpserver/README.md#disconnect) - Disconnect
* [resyncTools](docs/sdks/mcpserver/README.md#resynctools) - Resync Tools
* [searchWithToolCount](docs/sdks/mcpserver/README.md#searchwithtoolcount) - Search With Tool Count
* [listCatalog](docs/sdks/mcpserver/README.md#listcatalog) - List Catalog
* [getCatalog](docs/sdks/mcpserver/README.md#getcatalog) - Get Catalog
* [listConnections](docs/sdks/mcpserver/README.md#listconnections) - List Connections
* [discoverOIDCEndpoints](docs/sdks/mcpserver/README.md#discoveroidcendpoints) - Discover Oidc Endpoints
* [testConnection](docs/sdks/mcpserver/README.md#testconnection) - Test Connection

### [MCPTool](docs/sdks/mcptool/README.md)

* [list](docs/sdks/mcptool/README.md#list) - List
* [delete](docs/sdks/mcptool/README.md#delete) - Delete
* [get](docs/sdks/mcptool/README.md#get) - Get
* [update](docs/sdks/mcptool/README.md#update) - Update
* [listHistory](docs/sdks/mcptool/README.md#listhistory) - List History
* [search](docs/sdks/mcptool/README.md#search) - Search

### [ModelAPIKey](docs/sdks/modelapikey/README.md)

* [list](docs/sdks/modelapikey/README.md#list) - List
* [create](docs/sdks/modelapikey/README.md#create) - Create
* [revoke](docs/sdks/modelapikey/README.md#revoke) - Revoke
* [get](docs/sdks/modelapikey/README.md#get) - Get

### [MyFundLimits](docs/sdks/myfundlimits/README.md)

* [list](docs/sdks/myfundlimits/README.md#list) - List
* [delete](docs/sdks/myfundlimits/README.md#delete) - Delete
* [listHistory](docs/sdks/myfundlimits/README.md#listhistory) - List History
* [setLimit](docs/sdks/myfundlimits/README.md#setlimit) - Set Limit
* [resume](docs/sdks/myfundlimits/README.md#resume) - Resume
* [pause](docs/sdks/myfundlimits/README.md#pause) - Pause
* [clearTemporaryLimit](docs/sdks/myfundlimits/README.md#cleartemporarylimit) - Clear Temporary Limit
* [setTemporaryLimit](docs/sdks/myfundlimits/README.md#settemporarylimit) - Set Temporary Limit

### [OnboardingSettings](docs/sdks/onboardingsettings/README.md)

* [get](docs/sdks/onboardingsettings/README.md#get) - Get
* [update](docs/sdks/onboardingsettings/README.md#update) - Update

### [OrgDomain](docs/sdks/orgdomain/README.md)

* [list](docs/sdks/orgdomain/README.md#list) - List
* [update](docs/sdks/orgdomain/README.md#update) - Update

### [OrgNotificationSettings](docs/sdks/orgnotificationsettings/README.md)

* [get](docs/sdks/orgnotificationsettings/README.md#get) - Get
* [update](docs/sdks/orgnotificationsettings/README.md#update) - Update

### [PaperSecret](docs/sdks/papersecret/README.md)

* [searchAuditEvents](docs/sdks/papersecret/README.md#searchauditevents) - Search Audit Events
* [searchMySecrets](docs/sdks/papersecret/README.md#searchmysecrets) - Search My Secrets
* [searchSecretsSharedWithMe](docs/sdks/papersecret/README.md#searchsecretssharedwithme) - Search Secrets Shared With Me
* [delete](docs/sdks/papersecret/README.md#delete) - Delete
* [get](docs/sdks/papersecret/README.md#get) - Get
* [setTextContent](docs/sdks/papersecret/README.md#settextcontent) - Set Text Content
* [getContent](docs/sdks/papersecret/README.md#getcontent) - Get Content
* [getByShareCode](docs/sdks/papersecret/README.md#getbysharecode) - Get By Share Code
* [createExternal](docs/sdks/papersecret/README.md#createexternal) - Create External
* [createInternal](docs/sdks/papersecret/README.md#createinternal) - Create Internal

### [PaperSecretAdmin](docs/sdks/papersecretadmin/README.md)

* [search](docs/sdks/papersecretadmin/README.md#search) - Search
* [searchAuditEvents](docs/sdks/papersecretadmin/README.md#searchauditevents) - Search Audit Events
* [delete](docs/sdks/papersecretadmin/README.md#delete) - Delete
* [get](docs/sdks/papersecretadmin/README.md#get) - Get

### [PersonalClient](docs/sdks/personalclient/README.md)

* [list](docs/sdks/personalclient/README.md#list) - NOTE: Only shows personal clients for the current user.
* [create](docs/sdks/personalclient/README.md#create) - Create
* [delete](docs/sdks/personalclient/README.md#delete) - Delete
* [get](docs/sdks/personalclient/README.md#get) - Get
* [update](docs/sdks/personalclient/README.md#update) - Update

### [PersonalClientSearch](docs/sdks/personalclientsearch/README.md)

* [search](docs/sdks/personalclientsearch/README.md#search) - NOTE: Searches personal clients for all users

### [PersonalDevice](docs/sdks/personaldevice/README.md)

* [revokeDevice](docs/sdks/personaldevice/README.md#revokedevice) - Revoke Device
* [getDevice](docs/sdks/personaldevice/README.md#getdevice) - Get Device
* [updateDevice](docs/sdks/personaldevice/README.md#updatedevice) - NOTE: Only updates devices owned by the current user.
* [listDeviceClients](docs/sdks/personaldevice/README.md#listdeviceclients) - List Device Clients
* [revokeDeviceClient](docs/sdks/personaldevice/README.md#revokedeviceclient) - Revoke Device Client
* [search](docs/sdks/personaldevice/README.md#search) - NOTE: Only shows devices for the current user.

### [Policies](docs/sdks/policies/README.md)

* [list](docs/sdks/policies/README.md#list) - List
* [create](docs/sdks/policies/README.md#create) - Create
* [delete](docs/sdks/policies/README.md#delete) - Delete
* [get](docs/sdks/policies/README.md#get) - Get
* [update](docs/sdks/policies/README.md#update) - Update

### [PolicySearch](docs/sdks/policysearch/README.md)

* [search](docs/sdks/policysearch/README.md#search) - Search

### [PolicyValidate](docs/sdks/policyvalidate/README.md)

* [validateCEL](docs/sdks/policyvalidate/README.md#validatecel) - Validate Cel

### [Principal](docs/sdks/principal/README.md)

* [list](docs/sdks/principal/README.md#list) - List
* [create](docs/sdks/principal/README.md#create) - Create
* [delete](docs/sdks/principal/README.md#delete) - Delete
* [get](docs/sdks/principal/README.md#get) - Get
* [update](docs/sdks/principal/README.md#update) - Update
* [listCredentials](docs/sdks/principal/README.md#listcredentials) - List Credentials
* [createCredential](docs/sdks/principal/README.md#createcredential) - Create Credential
* [revokeCredential](docs/sdks/principal/README.md#revokecredential) - Revoke Credential
* [getCredential](docs/sdks/principal/README.md#getcredential) - Get Credential
* [updateCredential](docs/sdks/principal/README.md#updatecredential) - Update Credential
* [addBinding](docs/sdks/principal/README.md#addbinding) - Add Binding
* [deleteBinding](docs/sdks/principal/README.md#deletebinding) - Delete Binding
* [listBindings](docs/sdks/principal/README.md#listbindings) - List Bindings

### [ProviderCredential](docs/sdks/providercredential/README.md)

* [clear](docs/sdks/providercredential/README.md#clear) - Clear
* [get](docs/sdks/providercredential/README.md#get) - Get
* [set](docs/sdks/providercredential/README.md#set) - Set

### [RecoveryPolicy](docs/sdks/recoverypolicy/README.md)

* [list](docs/sdks/recoverypolicy/README.md#list) - List
* [create](docs/sdks/recoverypolicy/README.md#create) - Create
* [delete](docs/sdks/recoverypolicy/README.md#delete) - Delete
* [get](docs/sdks/recoverypolicy/README.md#get) - Get
* [update](docs/sdks/recoverypolicy/README.md#update) - Update
* [search](docs/sdks/recoverypolicy/README.md#search) - Search

### [Reporting](docs/sdks/reporting/README.md)

* [list](docs/sdks/reporting/README.md#list) - List
* [save](docs/sdks/reporting/README.md#save) - Save
* [delete](docs/sdks/reporting/README.md#delete) - Delete
* [get](docs/sdks/reporting/README.md#get) - Get
* [update](docs/sdks/reporting/README.md#update) - Update
* [getProgram](docs/sdks/reporting/README.md#getprogram) - Get Program
* [run](docs/sdks/reporting/README.md#run) - Run
* [getRunProvenance](docs/sdks/reporting/README.md#getrunprovenance) - Get Run Provenance

### [RequestCatalogManagement](docs/sdks/requestcatalogmanagement/README.md)

* [list](docs/sdks/requestcatalogmanagement/README.md#list) - List
* [create](docs/sdks/requestcatalogmanagement/README.md#create) - Create
* [listAllEntitlementIdsPerApp](docs/sdks/requestcatalogmanagement/README.md#listallentitlementidsperapp) - List All Entitlement Ids Per App
* [listEntitlementsPerCatalog](docs/sdks/requestcatalogmanagement/README.md#listentitlementspercatalog) - List Entitlements Per Catalog
* [updateAppEntitlements](docs/sdks/requestcatalogmanagement/README.md#updateappentitlements) - Update App Entitlements
* [removeAppEntitlements](docs/sdks/requestcatalogmanagement/README.md#removeappentitlements) - Remove App Entitlements
* [addAppEntitlements](docs/sdks/requestcatalogmanagement/README.md#addappentitlements) - Add App Entitlements
* [deleteRequestableEntry](docs/sdks/requestcatalogmanagement/README.md#deleterequestableentry) - Delete Requestable Entry
* [getRequestableEntry](docs/sdks/requestcatalogmanagement/README.md#getrequestableentry) - Get Requestable Entry
* [createRequestableEntry](docs/sdks/requestcatalogmanagement/README.md#createrequestableentry) - Create Requestable Entry
* [searchScopeRoleBindingsPerCatalog](docs/sdks/requestcatalogmanagement/README.md#searchscoperolebindingspercatalog) - Search Scope Role Bindings Per Catalog
* [removeAccessEntitlements](docs/sdks/requestcatalogmanagement/README.md#removeaccessentitlements) - Remove Access Entitlements
* [addAccessEntitlements](docs/sdks/requestcatalogmanagement/README.md#addaccessentitlements) - Add Access Entitlements
* [listEntitlementsForAccess](docs/sdks/requestcatalogmanagement/README.md#listentitlementsforaccess) - List Entitlements For Access
* [delete](docs/sdks/requestcatalogmanagement/README.md#delete) - Delete
* [get](docs/sdks/requestcatalogmanagement/README.md#get) - Get
* [update](docs/sdks/requestcatalogmanagement/README.md#update) - Update
* [deleteBundleAutomation](docs/sdks/requestcatalogmanagement/README.md#deletebundleautomation) - Delete Bundle Automation
* [getBundleAutomation](docs/sdks/requestcatalogmanagement/README.md#getbundleautomation) - Get Bundle Automation
* [setBundleAutomation](docs/sdks/requestcatalogmanagement/README.md#setbundleautomation) - Set Bundle Automation
* [createBundleAutomation](docs/sdks/requestcatalogmanagement/README.md#createbundleautomation) - Create Bundle Automation
* [resumePausedBundleAutomation](docs/sdks/requestcatalogmanagement/README.md#resumepausedbundleautomation) - Resume Paused Bundle Automation
* [forceRunBundleAutomation](docs/sdks/requestcatalogmanagement/README.md#forcerunbundleautomation) - Force Run Bundle Automation
* [planTypeChange](docs/sdks/requestcatalogmanagement/README.md#plantypechange) - Plan Type Change

### [RequestCatalogSearch](docs/sdks/requestcatalogsearch/README.md)

* [searchRequestableCredentialOfferings](docs/sdks/requestcatalogsearch/README.md#searchrequestablecredentialofferings) - Search Requestable Credential Offerings
* [searchEntitlements](docs/sdks/requestcatalogsearch/README.md#searchentitlements) - Search Entitlements

### [RequestSchema](docs/sdks/requestschema/README.md)

* [removeEntitlementBinding](docs/sdks/requestschema/README.md#removeentitlementbinding) - Remove Entitlement Binding
* [createEntitlementBinding](docs/sdks/requestschema/README.md#createentitlementbinding) - Create Entitlement Binding
* [findBindingForAppEntitlement](docs/sdks/requestschema/README.md#findbindingforappentitlement) - Find Binding For App Entitlement
* [create](docs/sdks/requestschema/README.md#create) - Create
* [delete](docs/sdks/requestschema/README.md#delete) - Delete
* [get](docs/sdks/requestschema/README.md#get) - Get
* [update](docs/sdks/requestschema/README.md#update) - Update

### [RequestSettings](docs/sdks/requestsettings/README.md)

* [get](docs/sdks/requestsettings/README.md#get) - Get
* [update](docs/sdks/requestsettings/README.md#update) - Update

### [RoleMiningManagement](docs/sdks/roleminingmanagement/README.md)

* [createAccessProfileFromCohort](docs/sdks/roleminingmanagement/README.md#createaccessprofilefromcohort) - Create Access Profile From Cohort
* [getRoleMiningConfig](docs/sdks/roleminingmanagement/README.md#getroleminingconfig) - Get Role Mining Config
* [updateRoleMiningConfig](docs/sdks/roleminingmanagement/README.md#updateroleminingconfig) - Update Role Mining Config
* [listCustomAnalysisResults](docs/sdks/roleminingmanagement/README.md#listcustomanalysisresults) - List Custom Analysis Results
* [evaluateEntitlementSelection](docs/sdks/roleminingmanagement/README.md#evaluateentitlementselection) - Evaluate Entitlement Selection
* [getCustomAnalysisResult](docs/sdks/roleminingmanagement/README.md#getcustomanalysisresult) - Get Custom Analysis Result
* [countEntitlementSelectionFilterAttributeValues](docs/sdks/roleminingmanagement/README.md#countentitlementselectionfilterattributevalues) - Count Entitlement Selection Filter Attribute Values
* [getLatestCustomAnalysisResult](docs/sdks/roleminingmanagement/README.md#getlatestcustomanalysisresult) - Get Latest Custom Analysis Result
* [triggerCustomAnalysis](docs/sdks/roleminingmanagement/README.md#triggercustomanalysis) - Trigger Custom Analysis
* [listCohortFilterAttributes](docs/sdks/roleminingmanagement/README.md#listcohortfilterattributes) - List Cohort Filter Attributes
* [listCohortFilterAttributeValues](docs/sdks/roleminingmanagement/README.md#listcohortfilterattributevalues) - List Cohort Filter Attribute Values
* [listRuns](docs/sdks/roleminingmanagement/README.md#listruns) - List Runs
* [getLatestRun](docs/sdks/roleminingmanagement/README.md#getlatestrun) - Get Latest Run
* [listSuggestions](docs/sdks/roleminingmanagement/README.md#listsuggestions) - List Suggestions
* [getSuggestion](docs/sdks/roleminingmanagement/README.md#getsuggestion) - Get Suggestion
* [updateSuggestionState](docs/sdks/roleminingmanagement/README.md#updatesuggestionstate) - Update Suggestion State
* [searchCohortUsers](docs/sdks/roleminingmanagement/README.md#searchcohortusers) - Search Cohort Users
* [triggerAnalysis](docs/sdks/roleminingmanagement/README.md#triggeranalysis) - Trigger Analysis

### [RoleMiningManagementSearch](docs/sdks/roleminingmanagementsearch/README.md)

* [search](docs/sdks/roleminingmanagementsearch/README.md#search) - Search

### [Roles](docs/sdks/roles/README.md)

* [list](docs/sdks/roles/README.md#list) - List
* [get](docs/sdks/roles/README.md#get) - Get
* [update](docs/sdks/roles/README.md#update) - Update

### [SessionPolicy](docs/sdks/sessionpolicy/README.md)

* [searchAppUserSessionPolicies](docs/sdks/sessionpolicy/README.md#searchappusersessionpolicies) - Search App User Session Policies
* [search](docs/sdks/sessionpolicy/README.md#search) - Search
* [list](docs/sdks/sessionpolicy/README.md#list) - List
* [create](docs/sdks/sessionpolicy/README.md#create) - Create
* [delete](docs/sdks/sessionpolicy/README.md#delete) - Delete
* [get](docs/sdks/sessionpolicy/README.md#get) - Get
* [update](docs/sdks/sessionpolicy/README.md#update) - Update
* [listAssignments](docs/sdks/sessionpolicy/README.md#listassignments) - List Assignments
* [assignGroup](docs/sdks/sessionpolicy/README.md#assigngroup) - Assign Group
* [unassignGroup](docs/sdks/sessionpolicy/README.md#unassigngroup) - Unassign Group
* [assignUser](docs/sdks/sessionpolicy/README.md#assignuser) - Assign User
* [unassignUser](docs/sdks/sessionpolicy/README.md#unassignuser) - Unassign User
* [searchPolicyUsers](docs/sdks/sessionpolicy/README.md#searchpolicyusers) - Search Policy Users
* [getEffectiveSessionPolicy](docs/sdks/sessionpolicy/README.md#geteffectivesessionpolicy) - Get Effective Session Policy
* [listUserPolicies](docs/sdks/sessionpolicy/README.md#listuserpolicies) - List User Policies

### [SessionSettings](docs/sdks/sessionsettings/README.md)

* [get](docs/sdks/sessionsettings/README.md#get) - Get
* [update](docs/sdks/sessionsettings/README.md#update) - Update
* [testSourceIP](docs/sdks/sessionsettings/README.md#testsourceip) - Test Source Ip

### [ShadowMcpOccurrence](docs/sdks/shadowmcpoccurrence/README.md)

* [search](docs/sdks/shadowmcpoccurrence/README.md#search) - Search

### [SignInPolicy](docs/sdks/signinpolicy/README.md)

* [search](docs/sdks/signinpolicy/README.md#search) - Search
* [list](docs/sdks/signinpolicy/README.md#list) - List
* [create](docs/sdks/signinpolicy/README.md#create) - Create
* [delete](docs/sdks/signinpolicy/README.md#delete) - Delete
* [get](docs/sdks/signinpolicy/README.md#get) - Get
* [update](docs/sdks/signinpolicy/README.md#update) - Update

### [SpendInsights](docs/sdks/spendinsights/README.md)

* [getAttributionRollups](docs/sdks/spendinsights/README.md#getattributionrollups) - Get Attribution Rollups
* [getDenial](docs/sdks/spendinsights/README.md#getdenial) - Get Denial
* [searchDenials](docs/sdks/spendinsights/README.md#searchdenials) - Search Denials
* [resolveEffectiveLimits](docs/sdks/spendinsights/README.md#resolveeffectivelimits) - Resolve Effective Limits
* [getMySpendForecast](docs/sdks/spendinsights/README.md#getmyspendforecast) - Get My Spend Forecast
* [getMySpendHistory](docs/sdks/spendinsights/README.md#getmyspendhistory) - Get My Spend History
* [getMySpendStatus](docs/sdks/spendinsights/README.md#getmyspendstatus) - Get My Spend Status
* [searchMySpendUsage](docs/sdks/spendinsights/README.md#searchmyspendusage) - Search My Spend Usage
* [getOverview](docs/sdks/spendinsights/README.md#getoverview) - Get Overview

### [SSFReceiverEvent](docs/sdks/ssfreceiverevent/README.md)

* [list](docs/sdks/ssfreceiverevent/README.md#list) - List

### [SSFReceiverEventSearch](docs/sdks/ssfreceivereventsearch/README.md)

* [search](docs/sdks/ssfreceivereventsearch/README.md#search) - Search

### [SSFReceiverStream](docs/sdks/ssfreceiverstream/README.md)

* [list](docs/sdks/ssfreceiverstream/README.md#list) - List
* [create](docs/sdks/ssfreceiverstream/README.md#create) - Create
* [delete](docs/sdks/ssfreceiverstream/README.md#delete) - Delete
* [get](docs/sdks/ssfreceiverstream/README.md#get) - Get
* [update](docs/sdks/ssfreceiverstream/README.md#update) - Update
* [test](docs/sdks/ssfreceiverstream/README.md#test) - Test
* [getStats](docs/sdks/ssfreceiverstream/README.md#getstats) - Get Stats

### [SSOApplication](docs/sdks/ssoapplication/README.md)

* [list](docs/sdks/ssoapplication/README.md#list) - List
* [create](docs/sdks/ssoapplication/README.md#create) - Create
* [delete](docs/sdks/ssoapplication/README.md#delete) - Delete
* [get](docs/sdks/ssoapplication/README.md#get) - Get
* [update](docs/sdks/ssoapplication/README.md#update) - Update
* [listClients](docs/sdks/ssoapplication/README.md#listclients) - List Clients
* [createClient](docs/sdks/ssoapplication/README.md#createclient) - Create Client
* [deleteClient](docs/sdks/ssoapplication/README.md#deleteclient) - Delete Client
* [rotateClientSecret](docs/sdks/ssoapplication/README.md#rotateclientsecret) - Rotate Client Secret
* [updateClient](docs/sdks/ssoapplication/README.md#updateclient) - Update Client
* [listHistory](docs/sdks/ssoapplication/README.md#listhistory) - List History
* [batchDeleteSubjectCompatibility](docs/sdks/ssoapplication/README.md#batchdeletesubjectcompatibility) - Batch Delete Subject Compatibility
* [batchImportSubjectCompatibility](docs/sdks/ssoapplication/README.md#batchimportsubjectcompatibility) - Batch Import Subject Compatibility
* [search](docs/sdks/ssoapplication/README.md#search) - Search
* [parseSAMLServiceProviderMetadata](docs/sdks/ssoapplication/README.md#parsesamlserviceprovidermetadata) - Parse Saml Service Provider Metadata

### [SSOSettings](docs/sdks/ssosettings/README.md)

* [get](docs/sdks/ssosettings/README.md#get) - Get
* [update](docs/sdks/ssosettings/README.md#update) - Update
* [listHistory](docs/sdks/ssosettings/README.md#listhistory) - List History

### [StepUpProvider](docs/sdks/stepupprovider/README.md)

* [search](docs/sdks/stepupprovider/README.md#search) - Search
* [list](docs/sdks/stepupprovider/README.md#list) - List
* [create](docs/sdks/stepupprovider/README.md#create) - Create
* [delete](docs/sdks/stepupprovider/README.md#delete) - Delete
* [get](docs/sdks/stepupprovider/README.md#get) - Get
* [update](docs/sdks/stepupprovider/README.md#update) - Update
* [updateSecret](docs/sdks/stepupprovider/README.md#updatesecret) - Update Secret
* [test](docs/sdks/stepupprovider/README.md#test) - Test

### [StepUpTransaction](docs/sdks/stepuptransaction/README.md)

* [search](docs/sdks/stepuptransaction/README.md#search) - Search
* [get](docs/sdks/stepuptransaction/README.md#get) - Get

### [SubjectAppLimit](docs/sdks/subjectapplimit/README.md)

* [delete](docs/sdks/subjectapplimit/README.md#delete) - Delete
* [get](docs/sdks/subjectapplimit/README.md#get) - Get
* [listHistory](docs/sdks/subjectapplimit/README.md#listhistory) - List History
* [setLimit](docs/sdks/subjectapplimit/README.md#setlimit) - Set Limit
* [unsuspend](docs/sdks/subjectapplimit/README.md#unsuspend) - Unsuspend
* [suspend](docs/sdks/subjectapplimit/README.md#suspend) - Suspend
* [search](docs/sdks/subjectapplimit/README.md#search) - Search

### [SystemLog](docs/sdks/systemlog/README.md)

* [listEvents](docs/sdks/systemlog/README.md#listevents) - List Events

### [Task](docs/sdks/task/README.md)

* [createActionTask](docs/sdks/task/README.md#createactiontask) - Create Action Task
* [createGrantTask](docs/sdks/task/README.md#creategranttask) - Create Grant Task
* [createOffboardingTask](docs/sdks/task/README.md#createoffboardingtask) - Create Offboarding Task
* [createResourceActionTask](docs/sdks/task/README.md#createresourceactiontask) - Create Resource Action Task
* [createRevokeTask](docs/sdks/task/README.md#createrevoketask) - Create Revoke Task
* [createSpendRemedyTask](docs/sdks/task/README.md#createspendremedytask) - Create Spend Remedy Task
* [get](docs/sdks/task/README.md#get) - Get
* [getSpendRemedyReview](docs/sdks/task/README.md#getspendremedyreview) - Get Spend Remedy Review

### [TaskActions](docs/sdks/taskactions/README.md)

* [approve](docs/sdks/taskactions/README.md#approve) - Approve
* [approveWithStepUp](docs/sdks/taskactions/README.md#approvewithstepup) - Approve With Step Up
* [close](docs/sdks/taskactions/README.md#close) - Close
* [comment](docs/sdks/taskactions/README.md#comment) - Comment
* [deny](docs/sdks/taskactions/README.md#deny) - Deny
* [escalateToEmergencyAccess](docs/sdks/taskactions/README.md#escalatetoemergencyaccess) - Escalate To Emergency Access
* [processNow](docs/sdks/taskactions/README.md#processnow) - Process Now
* [reassign](docs/sdks/taskactions/README.md#reassign) - Reassign
* [hardReset](docs/sdks/taskactions/README.md#hardreset) - Hard Reset
* [restart](docs/sdks/taskactions/README.md#restart) - Restart
* [retryProvisioning](docs/sdks/taskactions/README.md#retryprovisioning) - Retry Provisioning
* [skipStep](docs/sdks/taskactions/README.md#skipstep) - Skip Step
* [updateGrantDuration](docs/sdks/taskactions/README.md#updategrantduration) - Update Grant Duration
* [updateRequestData](docs/sdks/taskactions/README.md#updaterequestdata) - Update Request Data

### [TaskAudit](docs/sdks/taskaudit/README.md)

* [list](docs/sdks/taskaudit/README.md#list) - List

### [TaskSearch](docs/sdks/tasksearch/README.md)

* [search](docs/sdks/tasksearch/README.md#search) - Search

### [TenantAuthConfig](docs/sdks/tenantauthconfig/README.md)

* [list](docs/sdks/tenantauthconfig/README.md#list) - List
* [create](docs/sdks/tenantauthconfig/README.md#create) - Create
* [delete](docs/sdks/tenantauthconfig/README.md#delete) - Delete
* [get](docs/sdks/tenantauthconfig/README.md#get) - Get
* [update](docs/sdks/tenantauthconfig/README.md#update) - Update

### [TenantEmailProvider](docs/sdks/tenantemailprovider/README.md)

* [get](docs/sdks/tenantemailprovider/README.md#get) - Get
* [update](docs/sdks/tenantemailprovider/README.md#update) - Update
* [searchAuditEvents](docs/sdks/tenantemailprovider/README.md#searchauditevents) - Search Audit Events
* [test](docs/sdks/tenantemailprovider/README.md#test) - Test

### [TerraformExport](docs/sdks/terraformexport/README.md)

* [getSchema](docs/sdks/terraformexport/README.md#getschema) - Get Schema

### [ToolGates](docs/sdks/toolgates/README.md)

* [list](docs/sdks/toolgates/README.md#list) - List
* [create](docs/sdks/toolgates/README.md#create) - Create
* [get](docs/sdks/toolgates/README.md#get) - Get
* [update](docs/sdks/toolgates/README.md#update) - Update
* [delete](docs/sdks/toolgates/README.md#delete) - Delete

### [ToolGatesSearch](docs/sdks/toolgatessearch/README.md)

* [search](docs/sdks/toolgatessearch/README.md#search) - Search

### [TunnelCredentials](docs/sdks/tunnelcredentials/README.md)

* [listBridges](docs/sdks/tunnelcredentials/README.md#listbridges) - List Bridges
* [createBridge](docs/sdks/tunnelcredentials/README.md#createbridge) - Create Bridge
* [listBridgeAnnouncedServices](docs/sdks/tunnelcredentials/README.md#listbridgeannouncedservices) - List Bridge Announced Services
* [listBridgeCredentials](docs/sdks/tunnelcredentials/README.md#listbridgecredentials) - List Bridge Credentials
* [createBridgeCredential](docs/sdks/tunnelcredentials/README.md#createbridgecredential) - Create Bridge Credential
* [deleteBridge](docs/sdks/tunnelcredentials/README.md#deletebridge) - Delete Bridge
* [getBridge](docs/sdks/tunnelcredentials/README.md#getbridge) - Get Bridge
* [updateBridge](docs/sdks/tunnelcredentials/README.md#updatebridge) - Update Bridge
* [revokeBridgeCredential](docs/sdks/tunnelcredentials/README.md#revokebridgecredential) - Revoke Bridge Credential

### [UIConversations](docs/sdks/uiconversations/README.md)

* [ensureOnboardingSession](docs/sdks/uiconversations/README.md#ensureonboardingsession) - Ensure Onboarding Session

### [User](docs/sdks/user/README.md)

* [list](docs/sdks/user/README.md#list) - List
* [get](docs/sdks/user/README.md#get) - Get
* [getUserProfileTypes](docs/sdks/user/README.md#getuserprofiletypes) - Get User Profile Types
* [setExpiringUserDelegationBindingByAdmin](docs/sdks/user/README.md#setexpiringuserdelegationbindingbyadmin) - Set Expiring User Delegation Binding By Admin
* [introspect](docs/sdks/user/README.md#introspect) - Introspect

### [UserAttributeManagement](docs/sdks/userattributemanagement/README.md)

* [list](docs/sdks/userattributemanagement/README.md#list) - List
* [create](docs/sdks/userattributemanagement/README.md#create) - Create
* [delete](docs/sdks/userattributemanagement/README.md#delete) - Delete
* [get](docs/sdks/userattributemanagement/README.md#get) - Get
* [update](docs/sdks/userattributemanagement/README.md#update) - Update
* [listAttributeTypes](docs/sdks/userattributemanagement/README.md#listattributetypes) - List Attribute Types

### [UserDeveloperPreferences](docs/sdks/userdeveloperpreferences/README.md)

* [get](docs/sdks/userdeveloperpreferences/README.md#get) - Get
* [update](docs/sdks/userdeveloperpreferences/README.md#update) - Update

### [UserNotificationSettings](docs/sdks/usernotificationsettings/README.md)

* [get](docs/sdks/usernotificationsettings/README.md#get) - Get
* [update](docs/sdks/usernotificationsettings/README.md#update) - Update

### [UserOwnersV2](docs/sdks/userownersv2/README.md)

* [set](docs/sdks/userownersv2/README.md#set) - Set
* [searchEntitlementOwners](docs/sdks/userownersv2/README.md#searchentitlementowners) - Search Entitlement Owners
* [deleteEntitlementOwner](docs/sdks/userownersv2/README.md#deleteentitlementowner) - Delete Entitlement Owner
* [createEntitlementOwner](docs/sdks/userownersv2/README.md#createentitlementowner) - Create Entitlement Owner
* [searchUserOwners](docs/sdks/userownersv2/README.md#searchuserowners) - Search User Owners
* [deleteUserOwner](docs/sdks/userownersv2/README.md#deleteuserowner) - Delete User Owner
* [createUserOwner](docs/sdks/userownersv2/README.md#createuserowner) - Create User Owner

### [UserSearch](docs/sdks/usersearch/README.md)

* [search](docs/sdks/usersearch/README.md#search) - Search

### [Vault](docs/sdks/vault/README.md)

* [create](docs/sdks/vault/README.md#create) - Create
* [delete](docs/sdks/vault/README.md#delete) - Delete
* [get](docs/sdks/vault/README.md#get) - Get
* [update](docs/sdks/vault/README.md#update) - Update

### [VirtualMCPServer](docs/sdks/virtualmcpserver/README.md)

* [list](docs/sdks/virtualmcpserver/README.md#list) - List
* [create](docs/sdks/virtualmcpserver/README.md#create) - Create
* [delete](docs/sdks/virtualmcpserver/README.md#delete) - Delete
* [get](docs/sdks/virtualmcpserver/README.md#get) - Get
* [update](docs/sdks/virtualmcpserver/README.md#update) - Update

### [VirtualMCPServerMySearch](docs/sdks/virtualmcpservermysearch/README.md)

* [search](docs/sdks/virtualmcpservermysearch/README.md#search) - NOTE: Only shows Virtual MCP Servers available to the current user.

### [VirtualMCPToolBinding](docs/sdks/virtualmcptoolbinding/README.md)

* [list](docs/sdks/virtualmcptoolbinding/README.md#list) - List
* [createBindings](docs/sdks/virtualmcptoolbinding/README.md#createbindings) - Create Bindings
* [deleteBindings](docs/sdks/virtualmcptoolbinding/README.md#deletebindings) - Delete Bindings

### [VirtualMCPToolsetBinding](docs/sdks/virtualmcptoolsetbinding/README.md)

* [list](docs/sdks/virtualmcptoolsetbinding/README.md#list) - List
* [createBindings](docs/sdks/virtualmcptoolsetbinding/README.md#createbindings) - Create Bindings
* [deleteBindings](docs/sdks/virtualmcptoolsetbinding/README.md#deletebindings) - Delete Bindings

### [Webhooks](docs/sdks/webhooks/README.md)

* [list](docs/sdks/webhooks/README.md#list) - List
* [create](docs/sdks/webhooks/README.md#create) - Create
* [delete](docs/sdks/webhooks/README.md#delete) - Delete
* [get](docs/sdks/webhooks/README.md#get) - Get
* [update](docs/sdks/webhooks/README.md#update) - Update
* [test](docs/sdks/webhooks/README.md#test) - Test

### [WebhooksSearch](docs/sdks/webhookssearch/README.md)

* [search](docs/sdks/webhookssearch/README.md#search) - Search

### [WorkloadFederation](docs/sdks/workloadfederation/README.md)

* [searchTrusts](docs/sdks/workloadfederation/README.md#searchtrusts) - Search Trusts
* [listTrusts](docs/sdks/workloadfederation/README.md#listtrusts) - List Trusts
* [createTrust](docs/sdks/workloadfederation/README.md#createtrust) - Create Trust
* [deleteTrust](docs/sdks/workloadfederation/README.md#deletetrust) - Delete Trust
* [getTrust](docs/sdks/workloadfederation/README.md#gettrust) - Get Trust
* [updateTrust](docs/sdks/workloadfederation/README.md#updatetrust) - Update Trust
* [testToken](docs/sdks/workloadfederation/README.md#testtoken) - Test Token
* [listProviders](docs/sdks/workloadfederation/README.md#listproviders) - List Providers
* [createProvider](docs/sdks/workloadfederation/README.md#createprovider) - Create Provider
* [deleteProvider](docs/sdks/workloadfederation/README.md#deleteprovider) - Delete Provider
* [getProvider](docs/sdks/workloadfederation/README.md#getprovider) - Get Provider
* [updateProvider](docs/sdks/workloadfederation/README.md#updateprovider) - Update Provider
* [testCEL](docs/sdks/workloadfederation/README.md#testcel) - Test Cel

### [XAAAccessProfile](docs/sdks/xaaaccessprofile/README.md)

* [list](docs/sdks/xaaaccessprofile/README.md#list) - List
* [create](docs/sdks/xaaaccessprofile/README.md#create) - Create
* [delete](docs/sdks/xaaaccessprofile/README.md#delete) - Delete
* [get](docs/sdks/xaaaccessprofile/README.md#get) - Get
* [update](docs/sdks/xaaaccessprofile/README.md#update) - Update
* [listHistory](docs/sdks/xaaaccessprofile/README.md#listhistory) - List History
* [getByAppEntitlementId](docs/sdks/xaaaccessprofile/README.md#getbyappentitlementid) - Get By App Entitlement Id
* [search](docs/sdks/xaaaccessprofile/README.md#search) - Search

### [XAAAccessProfileScopeBinding](docs/sdks/xaaaccessprofilescopebinding/README.md)

* [list](docs/sdks/xaaaccessprofilescopebinding/README.md#list) - List
* [createBindings](docs/sdks/xaaaccessprofilescopebinding/README.md#createbindings) - Create Bindings
* [deleteBindings](docs/sdks/xaaaccessprofilescopebinding/README.md#deletebindings) - Delete Bindings
* [search](docs/sdks/xaaaccessprofilescopebinding/README.md#search) - Search

### [XAAClientAudienceMapping](docs/sdks/xaaclientaudiencemapping/README.md)

* [search](docs/sdks/xaaclientaudiencemapping/README.md#search) - Search
* [update](docs/sdks/xaaclientaudiencemapping/README.md#update) - Update
* [list](docs/sdks/xaaclientaudiencemapping/README.md#list) - List
* [create](docs/sdks/xaaclientaudiencemapping/README.md#create) - Create
* [get](docs/sdks/xaaclientaudiencemapping/README.md#get) - Get
* [delete](docs/sdks/xaaclientaudiencemapping/README.md#delete) - Delete
* [listHistory](docs/sdks/xaaclientaudiencemapping/README.md#listhistory) - List History

### [XAAResourceServer](docs/sdks/xaaresourceserver/README.md)

* [list](docs/sdks/xaaresourceserver/README.md#list) - List
* [create](docs/sdks/xaaresourceserver/README.md#create) - Create
* [delete](docs/sdks/xaaresourceserver/README.md#delete) - Delete
* [get](docs/sdks/xaaresourceserver/README.md#get) - Get
* [update](docs/sdks/xaaresourceserver/README.md#update) - Update
* [listHistory](docs/sdks/xaaresourceserver/README.md#listhistory) - List History
* [resyncScopes](docs/sdks/xaaresourceserver/README.md#resyncscopes) - Resync Scopes
* [search](docs/sdks/xaaresourceserver/README.md#search) - Search

### [XAAScope](docs/sdks/xaascope/README.md)

* [list](docs/sdks/xaascope/README.md#list) - List
* [create](docs/sdks/xaascope/README.md#create) - Create
* [delete](docs/sdks/xaascope/README.md#delete) - Delete
* [get](docs/sdks/xaascope/README.md#get) - Get
* [update](docs/sdks/xaascope/README.md#update) - Update
* [listHistory](docs/sdks/xaascope/README.md#listhistory) - List History
* [search](docs/sdks/xaascope/README.md#search) - Search

### [XAASettings](docs/sdks/xaasettings/README.md)

* [get](docs/sdks/xaasettings/README.md#get) - Get
* [update](docs/sdks/xaasettings/README.md#update) - Update
* [listHistory](docs/sdks/xaasettings/README.md#listhistory) - List History

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`a2UICreateSurfaceFeedback`](docs/sdks/a2ui/README.md#createsurfacefeedback) - Create Surface Feedback
- [`a2UIGetSurfaceProvenance`](docs/sdks/a2ui/README.md#getsurfaceprovenance) - Get Surface Provenance
- [`a2UIListSurfaceFeedback`](docs/sdks/a2ui/README.md#listsurfacefeedback) - List Surface Feedback
- [`a2UIListSurfaces`](docs/sdks/a2ui/README.md#listsurfaces) - List Surfaces
- [`a2UISubmitAction`](docs/sdks/a2ui/README.md#submitaction) - Submit Action
- [`accessConflictCreateMonitor`](docs/sdks/accessconflict/README.md#createmonitor) - Create Monitor
- [`accessConflictDeleteMonitor`](docs/sdks/accessconflict/README.md#deletemonitor) - Delete Monitor
- [`accessConflictGetMonitor`](docs/sdks/accessconflict/README.md#getmonitor) - Get Monitor
- [`accessConflictUpdateMonitor`](docs/sdks/accessconflict/README.md#updatemonitor) - Update Monitor
- [`accessReviewActionsGenerateReport`](docs/sdks/accessreviewactions/README.md#generatereport) - Generate Report
- [`accessReviewCreate`](docs/sdks/accessreview/README.md#create) - Create
- [`accessReviewDelete`](docs/sdks/accessreview/README.md#delete) - Delete
- [`accessReviewGet`](docs/sdks/accessreview/README.md#get) - Get
- [`accessReviewList`](docs/sdks/accessreview/README.md#list) - List
- [`accessReviewReportList`](docs/sdks/accessreviewreport/README.md#list) - List
- [`accessReviewSetupEntitlementAddCampaignEntitlements`](docs/sdks/accessreviewsetupentitlement/README.md#addcampaignentitlements) - Add Campaign Entitlements
- [`accessReviewSetupEntitlementAddDeleteExcludedEntitlements`](docs/sdks/accessreviewsetupentitlement/README.md#adddeleteexcludedentitlements) - Add Delete Excluded Entitlements
- [`accessReviewSetupEntitlementGetCampaignScopeAndEntitlements`](docs/sdks/accessreviewsetupentitlement/README.md#getcampaignscopeandentitlements) - Get Campaign Scope And Entitlements
- [`accessReviewSetupEntitlementRemoveCampaignEntitlements`](docs/sdks/accessreviewsetupentitlement/README.md#removecampaignentitlements) - Remove Campaign Entitlements
- [`accessReviewSetupEntitlementSetCampaignScopeAndEntitlements`](docs/sdks/accessreviewsetupentitlement/README.md#setcampaignscopeandentitlements) - Set Campaign Scope And Entitlements
- [`accessReviewSetupEntitlementSetCampaignScopeAndExcludedEntitlements`](docs/sdks/accessreviewsetupentitlement/README.md#setcampaignscopeandexcludedentitlements) - Set Campaign Scope And Excluded Entitlements
- [`accessReviewSetupEntitlementSetCampaignScopeByResourceType`](docs/sdks/accessreviewsetupentitlement/README.md#setcampaignscopebyresourcetype) - Set Campaign Scope By Resource Type
- [`accessReviewTemplateCreate`](docs/sdks/accessreviewtemplate/README.md#create) - Create
- [`accessReviewTemplateDelete`](docs/sdks/accessreviewtemplate/README.md#delete) - Delete
- [`accessReviewTemplateGet`](docs/sdks/accessreviewtemplate/README.md#get) - Get
- [`accessReviewTemplateSetupEntitlementAddDeleteExcludedEntitlements`](docs/sdks/accessreviewtemplatesetupentitlement/README.md#adddeleteexcludedentitlements) - Add Delete Excluded Entitlements
- [`accessReviewTemplateSetupEntitlementAddTemplateEntitlements`](docs/sdks/accessreviewtemplatesetupentitlement/README.md#addtemplateentitlements) - Add Template Entitlements
- [`accessReviewTemplateSetupEntitlementGetScopeAndEntitlements`](docs/sdks/accessreviewtemplatesetupentitlement/README.md#getscopeandentitlements) - Get Scope And Entitlements
- [`accessReviewTemplateSetupEntitlementRemoveTemplateEntitlements`](docs/sdks/accessreviewtemplatesetupentitlement/README.md#removetemplateentitlements) - Remove Template Entitlements
- [`accessReviewTemplateSetupEntitlementSetScopeAndEntitlements`](docs/sdks/accessreviewtemplatesetupentitlement/README.md#setscopeandentitlements) - Set Scope And Entitlements
- [`accessReviewTemplateSetupEntitlementSetScopeAndExcludedEntitlements`](docs/sdks/accessreviewtemplatesetupentitlement/README.md#setscopeandexcludedentitlements) - Set Scope And Excluded Entitlements
- [`accessReviewTemplateSetupEntitlementSetScopeByResourceType`](docs/sdks/accessreviewtemplatesetupentitlement/README.md#setscopebyresourcetype) - Set Scope By Resource Type
- [`accessReviewTemplateUpdate`](docs/sdks/accessreviewtemplate/README.md#update) - Update
- [`accessReviewUpdate`](docs/sdks/accessreview/README.md#update) - Update
- [`accountProvisionPolicyTestTest`](docs/sdks/accountprovisionpolicytest/README.md#test) - Test
- [`agentClassifierGetAgentClassifierPolicy`](docs/sdks/agentclassifier/README.md#getagentclassifierpolicy) - Get Agent Classifier Policy
- [`agentClassifierUpdateAgentClassifierPolicy`](docs/sdks/agentclassifier/README.md#updateagentclassifierpolicy) - Update Agent Classifier Policy
- [`aiGovernanceSettingsGet`](docs/sdks/aigovernancesettings/README.md#get) - Get
- [`aiGovernanceSettingsGetTenantDefaults`](docs/sdks/aigovernancesettings/README.md#gettenantdefaults) - Get Tenant Defaults
- [`aiGovernanceSettingsListHistory`](docs/sdks/aigovernancesettings/README.md#listhistory) - List History
- [`aiGovernanceSettingsUpdate`](docs/sdks/aigovernancesettings/README.md#update) - Update
- [`apiKeySearchSearch`](docs/sdks/apikeysearch/README.md#search) - NOTE: Searches personal and service principal API keys
- [`appAccessRequestsDefaultsCancelAppAccessRequestsDefaults`](docs/sdks/appaccessrequestsdefaults/README.md#cancelappaccessrequestsdefaults) - Cancel App Access Requests Defaults
- [`appAccessRequestsDefaultsCreateAppAccessRequestsDefaults`](docs/sdks/appaccessrequestsdefaults/README.md#createappaccessrequestsdefaults) - Create App Access Requests Defaults
- [`appAccessRequestsDefaultsGetAppAccessRequestsDefaults`](docs/sdks/appaccessrequestsdefaults/README.md#getappaccessrequestsdefaults) - Get App Access Requests Defaults
- [`appCapDelete`](docs/sdks/appcap/README.md#delete) - Delete
- [`appCapGet`](docs/sdks/appcap/README.md#get) - Get
- [`appCapList`](docs/sdks/appcap/README.md#list) - List
- [`appCapListHistory`](docs/sdks/appcap/README.md#listhistory) - List History
- [`appCapSetLimit`](docs/sdks/appcap/README.md#setlimit) - Set Limit
- [`appCapSuspend`](docs/sdks/appcap/README.md#suspend) - Suspend
- [`appCapUnsuspend`](docs/sdks/appcap/README.md#unsuspend) - Unsuspend
- [`appEntitlementMonitorBindingCreateAppEntitlementMonitorBinding`](docs/sdks/appentitlementmonitorbinding/README.md#createappentitlementmonitorbinding) - Create App Entitlement Monitor Binding
- [`appEntitlementMonitorBindingDeleteAppEntitlementMonitorBinding`](docs/sdks/appentitlementmonitorbinding/README.md#deleteappentitlementmonitorbinding) - Delete App Entitlement Monitor Binding
- [`appEntitlementMonitorBindingGetAppEntitlementMonitorBinding`](docs/sdks/appentitlementmonitorbinding/README.md#getappentitlementmonitorbinding) - Get App Entitlement Monitor Binding
- [`appEntitlementOwnersAdd`](docs/sdks/appentitlementowners/README.md#add) - Add
- [`appEntitlementOwnersDelete`](docs/sdks/appentitlementowners/README.md#delete) - Delete
- [`appEntitlementOwnersList`](docs/sdks/appentitlementowners/README.md#list) - List
- [`appEntitlementOwnersListOwnerIDs`](docs/sdks/appentitlementowners/README.md#listownerids) - List Owner I Ds
- [`appEntitlementOwnersRemove`](docs/sdks/appentitlementowners/README.md#remove) - Remove
- [`appEntitlementOwnersSet`](docs/sdks/appentitlementowners/README.md#set) - Set
- [`appEntitlementOwnersV2CreateEntitlementOwner`](docs/sdks/appentitlementownersv2/README.md#createentitlementowner) - Create Entitlement Owner
- [`appEntitlementOwnersV2CreateUserOwner`](docs/sdks/appentitlementownersv2/README.md#createuserowner) - Create User Owner
- [`appEntitlementOwnersV2DeleteEntitlementOwner`](docs/sdks/appentitlementownersv2/README.md#deleteentitlementowner) - Delete Entitlement Owner
- [`appEntitlementOwnersV2DeleteUserOwner`](docs/sdks/appentitlementownersv2/README.md#deleteuserowner) - Delete User Owner
- [`appEntitlementOwnersV2GetEntitlementOwner`](docs/sdks/appentitlementownersv2/README.md#getentitlementowner) - Get Entitlement Owner
- [`appEntitlementOwnersV2GetUserOwner`](docs/sdks/appentitlementownersv2/README.md#getuserowner) - Get User Owner
- [`appEntitlementOwnersV2SearchEntitlementOwners`](docs/sdks/appentitlementownersv2/README.md#searchentitlementowners) - Search Entitlement Owners
- [`appEntitlementOwnersV2SearchUserOwners`](docs/sdks/appentitlementownersv2/README.md#searchuserowners) - Search User Owners
- [`appEntitlementOwnersV2Set`](docs/sdks/appentitlementownersv2/README.md#set) - Set
- [`appEntitlementRoutingRuleCreateAppEntitlementRoutingRule`](docs/sdks/appentitlementroutingrule/README.md#createappentitlementroutingrule) - Create App Entitlement Routing Rule
- [`appEntitlementRoutingRuleDeleteAppEntitlementRoutingRule`](docs/sdks/appentitlementroutingrule/README.md#deleteappentitlementroutingrule) - Delete App Entitlement Routing Rule
- [`appEntitlementRoutingRuleGetAppEntitlementRoutingRule`](docs/sdks/appentitlementroutingrule/README.md#getappentitlementroutingrule) - Get App Entitlement Routing Rule
- [`appEntitlementRoutingRuleListAppEntitlementRoutingRules`](docs/sdks/appentitlementroutingrule/README.md#listappentitlementroutingrules) - List App Entitlement Routing Rules
- [`appEntitlementRoutingRuleReorderAppEntitlementRoutingRules`](docs/sdks/appentitlementroutingrule/README.md#reorderappentitlementroutingrules) - Reorder App Entitlement Routing Rules
- [`appEntitlementRoutingRuleUpdateAppEntitlementRoutingRule`](docs/sdks/appentitlementroutingrule/README.md#updateappentitlementroutingrule) - Update App Entitlement Routing Rule
- [`appEntitlementsAddAutomationExclusion`](docs/sdks/appentitlements/README.md#addautomationexclusion) - Add Automation Exclusion
- [`appEntitlementsAddManuallyManagedMembers`](docs/sdks/appentitlements/README.md#addmanuallymanagedmembers) - Add Manually Managed Members
- [`appEntitlementsCreate`](docs/sdks/appentitlements/README.md#create) - Create
- [`appEntitlementsCreateAutomation`](docs/sdks/appentitlements/README.md#createautomation) - Create Automation
- [`appEntitlementsDelete`](docs/sdks/appentitlements/README.md#delete) - Delete
- [`appEntitlementsDeleteAutomation`](docs/sdks/appentitlements/README.md#deleteautomation) - Delete Automation
- [`appEntitlementSearchCountGrantsForUserByApp`](docs/sdks/appentitlementsearch/README.md#countgrantsforuserbyapp) - Count Grants For User By App
- [`appEntitlementSearchSearch`](docs/sdks/appentitlementsearch/README.md#search) - Search
- [`appEntitlementSearchSearchAppEntitlementsForAppUser`](docs/sdks/appentitlementsearch/README.md#searchappentitlementsforappuser) - Search App Entitlements For App User
- [`appEntitlementSearchSearchAppEntitlementsWithExpired`](docs/sdks/appentitlementsearch/README.md#searchappentitlementswithexpired) - Search App Entitlements With Expired
- [`appEntitlementSearchSearchGrants`](docs/sdks/appentitlementsearch/README.md#searchgrants) - Search Grants
- [`appEntitlementSearchSearchGraph`](docs/sdks/appentitlementsearch/README.md#searchgraph) - Search Graph
- [`appEntitlementSearchSearchReachableResourcesForUser`](docs/sdks/appentitlementsearch/README.md#searchreachableresourcesforuser) - Search Reachable Resources For User
- [`appEntitlementsGet`](docs/sdks/appentitlements/README.md#get) - Get
- [`appEntitlementsGetAutomation`](docs/sdks/appentitlements/README.md#getautomation) - Get Automation
- [`appEntitlementsList`](docs/sdks/appentitlements/README.md#list) - List
- [`appEntitlementsListAutomationExclusions`](docs/sdks/appentitlements/README.md#listautomationexclusions) - List Automation Exclusions
- [`appEntitlementsListForAppResource`](docs/sdks/appentitlements/README.md#listforappresource) - List For App Resource
- [`appEntitlementsListForAppUser`](docs/sdks/appentitlements/README.md#listforappuser) - List For App User
- [`appEntitlementsProxyCreate`](docs/sdks/appentitlementsproxy/README.md#create) - Create
- [`appEntitlementsProxyDelete`](docs/sdks/appentitlementsproxy/README.md#delete) - Delete
- [`appEntitlementsProxyGet`](docs/sdks/appentitlementsproxy/README.md#get) - Get
- [`appEntitlementsRemoveAutomationExclusion`](docs/sdks/appentitlements/README.md#removeautomationexclusion) - Remove Automation Exclusion
- [`appEntitlementsRemoveEntitlementMembership`](docs/sdks/appentitlements/README.md#removeentitlementmembership) - Remove Entitlement Membership
- [`appEntitlementsUpdate`](docs/sdks/appentitlements/README.md#update) - Update
- [`appEntitlementsUpdateAutomation`](docs/sdks/appentitlements/README.md#updateautomation) - Update Automation
- [`appEntitlementUserBindingListAppUsersForIdentityWithGrant`](docs/sdks/appentitlementuserbinding/README.md#listappusersforidentitywithgrant) - List App Users For Identity With Grant
- [`appEntitlementUserBindingRemoveGrantDuration`](docs/sdks/appentitlementuserbinding/README.md#removegrantduration) - Remove Grant Duration
- [`appEntitlementUserBindingSearchGrantFeed`](docs/sdks/appentitlementuserbinding/README.md#searchgrantfeed) - Search Grant Feed
- [`appEntitlementUserBindingSearchPastGrants`](docs/sdks/appentitlementuserbinding/README.md#searchpastgrants) - Search Past Grants
- [`appEntitlementUserBindingUpdateGrantDuration`](docs/sdks/appentitlementuserbinding/README.md#updategrantduration) - Update Grant Duration
- [`appManagedStateGet`](docs/sdks/appmanagedstate/README.md#get) - Get
- [`appManagedStateList`](docs/sdks/appmanagedstate/README.md#list) - List
- [`appManagedStatePromote`](docs/sdks/appmanagedstate/README.md#promote) - Promote
- [`appOwnersAdd`](docs/sdks/appowners/README.md#add) - Add
- [`appOwnersDelete`](docs/sdks/appowners/README.md#delete) - Delete
- [`appOwnersList`](docs/sdks/appowners/README.md#list) - List
- [`appOwnersListOwnerIDs`](docs/sdks/appowners/README.md#listownerids) - List Owner I Ds
- [`appOwnersRemove`](docs/sdks/appowners/README.md#remove) - Remove
- [`appOwnersSet`](docs/sdks/appowners/README.md#set) - Set
- [`appOwnersV2CreateEntitlementOwner`](docs/sdks/appownersv2/README.md#createentitlementowner) - Create Entitlement Owner
- [`appOwnersV2CreateUserOwner`](docs/sdks/appownersv2/README.md#createuserowner) - Create User Owner
- [`appOwnersV2DeleteEntitlementOwner`](docs/sdks/appownersv2/README.md#deleteentitlementowner) - Delete Entitlement Owner
- [`appOwnersV2DeleteUserOwner`](docs/sdks/appownersv2/README.md#deleteuserowner) - Delete User Owner
- [`appOwnersV2GetEntitlementOwner`](docs/sdks/appownersv2/README.md#getentitlementowner) - Get Entitlement Owner
- [`appOwnersV2GetUserOwner`](docs/sdks/appownersv2/README.md#getuserowner) - Get User Owner
- [`appOwnersV2SearchEntitlementOwners`](docs/sdks/appownersv2/README.md#searchentitlementowners) - Search Entitlement Owners
- [`appOwnersV2SearchUserOwners`](docs/sdks/appownersv2/README.md#searchuserowners) - Search User Owners
- [`appOwnersV2Set`](docs/sdks/appownersv2/README.md#set) - Set
- [`appReportActionGenerateReport`](docs/sdks/appreportaction/README.md#generatereport) - Generate Report
- [`appReportList`](docs/sdks/appreport/README.md#list) - List
- [`appResourceCreateManuallyManagedAppResource`](docs/sdks/appresource/README.md#createmanuallymanagedappresource) - Create Manually Managed App Resource
- [`appResourceDeleteManuallyManagedAppResource`](docs/sdks/appresource/README.md#deletemanuallymanagedappresource) - Delete Manually Managed App Resource
- [`appResourceGet`](docs/sdks/appresource/README.md#get) - Get
- [`appResourceList`](docs/sdks/appresource/README.md#list) - List
- [`appResourceOwnersAdd`](docs/sdks/appresourceowners/README.md#add) - Add
- [`appResourceOwnersDelete`](docs/sdks/appresourceowners/README.md#delete) - Delete
- [`appResourceOwnersList`](docs/sdks/appresourceowners/README.md#list) - List
- [`appResourceOwnersListOwnerIDs`](docs/sdks/appresourceowners/README.md#listownerids) - List Owner I Ds
- [`appResourceOwnersRemove`](docs/sdks/appresourceowners/README.md#remove) - Remove
- [`appResourceOwnersSet`](docs/sdks/appresourceowners/README.md#set) - Set
- [`appResourceOwnersV2CreateEntitlementOwner`](docs/sdks/appresourceownersv2/README.md#createentitlementowner) - Create Entitlement Owner
- [`appResourceOwnersV2CreateUserOwner`](docs/sdks/appresourceownersv2/README.md#createuserowner) - Create User Owner
- [`appResourceOwnersV2DeleteEntitlementOwner`](docs/sdks/appresourceownersv2/README.md#deleteentitlementowner) - Delete Entitlement Owner
- [`appResourceOwnersV2DeleteUserOwner`](docs/sdks/appresourceownersv2/README.md#deleteuserowner) - Delete User Owner
- [`appResourceOwnersV2GetEntitlementOwner`](docs/sdks/appresourceownersv2/README.md#getentitlementowner) - Get Entitlement Owner
- [`appResourceOwnersV2GetUserOwner`](docs/sdks/appresourceownersv2/README.md#getuserowner) - Get User Owner
- [`appResourceOwnersV2SearchEntitlementOwners`](docs/sdks/appresourceownersv2/README.md#searchentitlementowners) - Search Entitlement Owners
- [`appResourceOwnersV2SearchUserOwners`](docs/sdks/appresourceownersv2/README.md#searchuserowners) - Search User Owners
- [`appResourceOwnersV2Set`](docs/sdks/appresourceownersv2/README.md#set) - Set
- [`appResourceSearchSearchAppResources`](docs/sdks/appresourcesearch/README.md#searchappresources) - Search App Resources
- [`appResourceSearchSearchAppResourceTypes`](docs/sdks/appresourcesearch/README.md#searchappresourcetypes) - Search App Resource Types
- [`appResourceTypeCreateManuallyManagedResourceType`](docs/sdks/appresourcetype/README.md#createmanuallymanagedresourcetype) - Create Manually Managed Resource Type
- [`appResourceTypeDeleteManuallyManagedResourceType`](docs/sdks/appresourcetype/README.md#deletemanuallymanagedresourcetype) - Delete Manually Managed Resource Type
- [`appResourceTypeGet`](docs/sdks/appresourcetype/README.md#get) - Get
- [`appResourceTypeList`](docs/sdks/appresourcetype/README.md#list) - List
- [`appResourceTypeUpdateManuallyManagedResourceType`](docs/sdks/appresourcetype/README.md#updatemanuallymanagedresourcetype) - Update Manually Managed Resource Type
- [`appResourceUpdate`](docs/sdks/appresource/README.md#update) - Update
- [`appsCreate`](docs/sdks/apps/README.md#create) - Create
- [`appsDelete`](docs/sdks/apps/README.md#delete) - Delete
- [`appSearchSearch`](docs/sdks/appsearch/README.md#search) - Search
- [`appSearchSearchUserOwnership`](docs/sdks/appsearch/README.md#searchuserownership) - Search User Ownership
- [`appSecretAdminRevoke`](docs/sdks/appsecretadmin/README.md#revoke) - Revoke
- [`appSecretSearchSearchMyVendedCredentials`](docs/sdks/appsecretsearch/README.md#searchmyvendedcredentials) - Search My Vended Credentials
- [`appsGet`](docs/sdks/apps/README.md#get) - Get
- [`appsList`](docs/sdks/apps/README.md#list) - List
- [`appsUpdate`](docs/sdks/apps/README.md#update) - Update
- [`appUsageControlsGet`](docs/sdks/appusagecontrols/README.md#get) - Get
- [`appUsageControlsUpdate`](docs/sdks/appusagecontrols/README.md#update) - Update
- [`appUserList`](docs/sdks/appuser/README.md#list) - List
- [`appUserListAppUserCredentials`](docs/sdks/appuser/README.md#listappusercredentials) - List App User Credentials
- [`appUserListAppUsersForUser`](docs/sdks/appuser/README.md#listappusersforuser) - List App Users For User
- [`appUserListOwnedServiceAccounts`](docs/sdks/appuser/README.md#listownedserviceaccounts) - List Owned Service Accounts
- [`appUserOwnersV2CreateEntitlementOwner`](docs/sdks/appuserownersv2/README.md#createentitlementowner) - Create Entitlement Owner
- [`appUserOwnersV2CreateUserOwner`](docs/sdks/appuserownersv2/README.md#createuserowner) - Create User Owner
- [`appUserOwnersV2DeleteEntitlementOwner`](docs/sdks/appuserownersv2/README.md#deleteentitlementowner) - Delete Entitlement Owner
- [`appUserOwnersV2DeleteUserOwner`](docs/sdks/appuserownersv2/README.md#deleteuserowner) - Delete User Owner
- [`appUserOwnersV2SearchEntitlementOwners`](docs/sdks/appuserownersv2/README.md#searchentitlementowners) - Search Entitlement Owners
- [`appUserOwnersV2SearchUserOwners`](docs/sdks/appuserownersv2/README.md#searchuserowners) - Search User Owners
- [`appUserOwnersV2Set`](docs/sdks/appuserownersv2/README.md#set) - Set
- [`appUserSearch`](docs/sdks/appuser/README.md#search) - Search
- [`appUserUpdate`](docs/sdks/appuser/README.md#update) - Update
- [`artifactDelete`](docs/sdks/artifact/README.md#delete) - Delete
- [`artifactGet`](docs/sdks/artifact/README.md#get) - Get
- [`artifactGetVersion`](docs/sdks/artifact/README.md#getversion) - Get Version
- [`artifactListVersions`](docs/sdks/artifact/README.md#listversions) - List Versions
- [`artifactSearch`](docs/sdks/artifact/README.md#search) - Search
- [`artifactUpdate`](docs/sdks/artifact/README.md#update) - Update
- [`attributesCreateAttributeValue`](docs/sdks/attributes/README.md#createattributevalue) - Create Attribute Value
- [`attributesCreateComplianceFrameworkAttributeValue`](docs/sdks/attributes/README.md#createcomplianceframeworkattributevalue) - Create Compliance Framework Attribute Value
- [`attributesCreateRiskLevelAttributeValue`](docs/sdks/attributes/README.md#createrisklevelattributevalue) - Create Risk Level Attribute Value
- [`attributesDeleteAttributeValue`](docs/sdks/attributes/README.md#deleteattributevalue) - Delete Attribute Value
- [`attributesDeleteComplianceFrameworkAttributeValue`](docs/sdks/attributes/README.md#deletecomplianceframeworkattributevalue) - Delete Compliance Framework Attribute Value
- [`attributesDeleteRiskLevelAttributeValue`](docs/sdks/attributes/README.md#deleterisklevelattributevalue) - Delete Risk Level Attribute Value
- [`attributeSearchSearchAttributeValues`](docs/sdks/attributesearch/README.md#searchattributevalues) - Search Attribute Values
- [`attributesGetAttributeValue`](docs/sdks/attributes/README.md#getattributevalue) - Get Attribute Value
- [`attributesGetComplianceFrameworkAttributeValue`](docs/sdks/attributes/README.md#getcomplianceframeworkattributevalue) - Get Compliance Framework Attribute Value
- [`attributesGetRiskLevelAttributeValue`](docs/sdks/attributes/README.md#getrisklevelattributevalue) - Get Risk Level Attribute Value
- [`attributesListAttributeTypes`](docs/sdks/attributes/README.md#listattributetypes) - List Attribute Types
- [`attributesListAttributeValues`](docs/sdks/attributes/README.md#listattributevalues) - List Attribute Values
- [`attributesListComplianceFrameworks`](docs/sdks/attributes/README.md#listcomplianceframeworks) - List Compliance Frameworks
- [`attributesListRiskLevels`](docs/sdks/attributes/README.md#listrisklevels) - List Risk Levels
- [`authIntrospect`](docs/sdks/auth/README.md#introspect) - Introspect
- [`authzenServerCreate`](docs/sdks/authzenserver/README.md#create) - Create
- [`authzenServerCreateAuthzenPolicy`](docs/sdks/authzenserver/README.md#createauthzenpolicy) - Create Authzen Policy
- [`authzenServerDelete`](docs/sdks/authzenserver/README.md#delete) - Delete
- [`authzenServerDeleteAuthzenPolicy`](docs/sdks/authzenserver/README.md#deleteauthzenpolicy) - Delete Authzen Policy
- [`authzenServerGet`](docs/sdks/authzenserver/README.md#get) - Get
- [`authzenServerGetAuthzenPolicy`](docs/sdks/authzenserver/README.md#getauthzenpolicy) - Get Authzen Policy
- [`authzenServerList`](docs/sdks/authzenserver/README.md#list) - List
- [`authzenServerListAuthzenPolicies`](docs/sdks/authzenserver/README.md#listauthzenpolicies) - List Authzen Policies
- [`authzenServerTestAuthzenPolicy`](docs/sdks/authzenserver/README.md#testauthzenpolicy) - Test Authzen Policy
- [`authzenServerUpdate`](docs/sdks/authzenserver/README.md#update) - Update
- [`automationClearAutomationCircuitBreaker`](docs/sdks/automation/README.md#clearautomationcircuitbreaker) - Clear Automation Circuit Breaker
- [`automationCreateAutomation`](docs/sdks/automation/README.md#createautomation) - Create Automation
- [`automationDeleteAutomation`](docs/sdks/automation/README.md#deleteautomation) - Delete Automation
- [`automationExecuteAutomation`](docs/sdks/automation/README.md#executeautomation) - Execute Automation
- [`automationExecutionActionsTerminateAutomation`](docs/sdks/automationexecutionactions/README.md#terminateautomation) - Terminate Automation
- [`automationExecutionGetAutomationExecution`](docs/sdks/automationexecution/README.md#getautomationexecution) - Get Automation Execution
- [`automationExecutionListAutomationExecutions`](docs/sdks/automationexecution/README.md#listautomationexecutions) - List Automation Executions
- [`automationExecutionSearchSearchAllAutomationExecutions`](docs/sdks/automationexecutionsearch/README.md#searchallautomationexecutions) - Search All Automation Executions
- [`automationExecutionSearchSearchAutomationExecutions`](docs/sdks/automationexecutionsearch/README.md#searchautomationexecutions) - Search Automation Executions
- [`automationGetAutomation`](docs/sdks/automation/README.md#getautomation) - Get Automation
- [`automationListAutomations`](docs/sdks/automation/README.md#listautomations) - List Automations
- [`automationResolvePausedAutomationExecutions`](docs/sdks/automation/README.md#resolvepausedautomationexecutions) - Resolve Paused Automation Executions
- [`automationSearchSearchAutomations`](docs/sdks/automationsearch/README.md#searchautomations) - Search Automations
- [`automationSearchSearchAutomationTemplateVersions`](docs/sdks/automationsearch/README.md#searchautomationtemplateversions) - Search Automation Template Versions
- [`automationUpdateAutomation`](docs/sdks/automation/README.md#updateautomation) - Update Automation
- [`awsExternalIDSettingsGet`](docs/sdks/awsexternalidsettings/README.md#get) - Get
- [`classifierCreateClassifier`](docs/sdks/classifier/README.md#createclassifier) - Create Classifier
- [`classifierCreateClassifierBinding`](docs/sdks/classifier/README.md#createclassifierbinding) - Create Classifier Binding
- [`classifierDeleteClassifier`](docs/sdks/classifier/README.md#deleteclassifier) - Delete Classifier
- [`classifierDeleteClassifierBinding`](docs/sdks/classifier/README.md#deleteclassifierbinding) - Delete Classifier Binding
- [`classifierGetClassifier`](docs/sdks/classifier/README.md#getclassifier) - Get Classifier
- [`classifierListClassifierBindings`](docs/sdks/classifier/README.md#listclassifierbindings) - List Classifier Bindings
- [`classifierListClassifiers`](docs/sdks/classifier/README.md#listclassifiers) - List Classifiers
- [`classifierTemplateAddClassifierRuleFromTemplate`](docs/sdks/classifiertemplate/README.md#addclassifierrulefromtemplate) - Add Classifier Rule From Template
- [`classifierTemplateGetClassifierTemplate`](docs/sdks/classifiertemplate/README.md#getclassifiertemplate) - Get Classifier Template
- [`classifierTemplateInstantiateClassifierTemplate`](docs/sdks/classifiertemplate/README.md#instantiateclassifiertemplate) - Instantiate Classifier Template
- [`classifierTemplateListClassifierTemplates`](docs/sdks/classifiertemplate/README.md#listclassifiertemplates) - List Classifier Templates
- [`classifierUpdateClassifier`](docs/sdks/classifier/README.md#updateclassifier) - Update Classifier
- [`connectorAuthoringActivationActivateRevision`](docs/sdks/connectorauthoringactivation/README.md#activaterevision) - Activate Revision
- [`connectorAuthoringActivationRollbackRevision`](docs/sdks/connectorauthoringactivation/README.md#rollbackrevision) - Rollback Revision
- [`connectorCatalogConfigurationSchema`](docs/sdks/connectorcatalog/README.md#configurationschema) - Configuration Schema
- [`connectorConfirmSyncValid`](docs/sdks/connector/README.md#confirmsyncvalid) - Confirm Sync Valid
- [`connectorCreate`](docs/sdks/connector/README.md#create) - Create
- [`connectorCreateDelegated`](docs/sdks/connector/README.md#createdelegated) - Create Delegated
- [`connectorDelete`](docs/sdks/connector/README.md#delete) - Delete
- [`connectorForceSync`](docs/sdks/connector/README.md#forcesync) - Force Sync
- [`connectorGet`](docs/sdks/connector/README.md#get) - Get
- [`connectorGetConnectorSyncDownloadURL`](docs/sdks/connector/README.md#getconnectorsyncdownloadurl) - Get Connector Sync Download Url
- [`connectorGetCredentials`](docs/sdks/connector/README.md#getcredentials) - Get Credentials
- [`connectorList`](docs/sdks/connector/README.md#list) - List
- [`connectorOwnersV2CreateEntitlementOwner`](docs/sdks/connectorownersv2/README.md#createentitlementowner) - Create Entitlement Owner
- [`connectorOwnersV2CreateUserOwner`](docs/sdks/connectorownersv2/README.md#createuserowner) - Create User Owner
- [`connectorOwnersV2DeleteEntitlementOwner`](docs/sdks/connectorownersv2/README.md#deleteentitlementowner) - Delete Entitlement Owner
- [`connectorOwnersV2DeleteUserOwner`](docs/sdks/connectorownersv2/README.md#deleteuserowner) - Delete User Owner
- [`connectorOwnersV2GetEntitlementOwner`](docs/sdks/connectorownersv2/README.md#getentitlementowner) - Get Entitlement Owner
- [`connectorOwnersV2GetUserOwner`](docs/sdks/connectorownersv2/README.md#getuserowner) - Get User Owner
- [`connectorOwnersV2SearchEntitlementOwners`](docs/sdks/connectorownersv2/README.md#searchentitlementowners) - Search Entitlement Owners
- [`connectorOwnersV2SearchUserOwners`](docs/sdks/connectorownersv2/README.md#searchuserowners) - Search User Owners
- [`connectorOwnersV2Set`](docs/sdks/connectorownersv2/README.md#set) - Set
- [`connectorPauseSync`](docs/sdks/connector/README.md#pausesync) - Pause Sync
- [`connectorResumeSync`](docs/sdks/connector/README.md#resumesync) - Resume Sync
- [`connectorRevokeCredential`](docs/sdks/connector/README.md#revokecredential) - Revoke Credential
- [`connectorRotateCredential`](docs/sdks/connector/README.md#rotatecredential) - Rotate Credential
- [`connectorUpdate`](docs/sdks/connector/README.md#update) - Update
- [`connectorUpdateConnectorSchedule`](docs/sdks/connector/README.md#updateconnectorschedule) - Update Connector Schedule
- [`connectorUpdateDelegated`](docs/sdks/connector/README.md#updatedelegated) - Update Delegated
- [`connectorValidateHTTPConnectorConfig`](docs/sdks/connector/README.md#validatehttpconnectorconfig) - Validate Http Connector Config
- [`contactsGetContacts`](docs/sdks/contacts/README.md#getcontacts) - Get Contacts
- [`contactsUpdateContacts`](docs/sdks/contacts/README.md#updatecontacts) - Update Contacts
- [`credentialInventoryPolicyCreate`](docs/sdks/credentialinventorypolicy/README.md#create) - Create
- [`credentialInventoryPolicyDelete`](docs/sdks/credentialinventorypolicy/README.md#delete) - Delete
- [`credentialInventoryPolicyGet`](docs/sdks/credentialinventorypolicy/README.md#get) - Get
- [`credentialInventoryPolicyList`](docs/sdks/credentialinventorypolicy/README.md#list) - List
- [`credentialInventoryPolicySearch`](docs/sdks/credentialinventorypolicy/README.md#search) - Search
- [`credentialInventoryPolicyUpdate`](docs/sdks/credentialinventorypolicy/README.md#update) - Update
- [`decoyCreate`](docs/sdks/decoy/README.md#create) - Create
- [`decoyDelete`](docs/sdks/decoy/README.md#delete) - Delete
- [`decoyGet`](docs/sdks/decoy/README.md#get) - Get
- [`decoyList`](docs/sdks/decoy/README.md#list) - List
- [`decoyRotate`](docs/sdks/decoy/README.md#rotate) - Rotate
- [`decoySearchSearch`](docs/sdks/decoysearch/README.md#search) - Search
- [`decoyUpdate`](docs/sdks/decoy/README.md#update) - Update
- [`directoryCreate`](docs/sdks/directory/README.md#create) - Create
- [`directoryDelete`](docs/sdks/directory/README.md#delete) - Delete
- [`directoryGet`](docs/sdks/directory/README.md#get) - Get
- [`directoryList`](docs/sdks/directory/README.md#list) - List
- [`directoryUpdate`](docs/sdks/directory/README.md#update) - Update
- [`edgeCheckInferenceVaultAccess`](docs/sdks/edge/README.md#checkinferencevaultaccess) - Check Inference Vault Access
- [`edgeCreate`](docs/sdks/edge/README.md#create) - Create
- [`edgeDelete`](docs/sdks/edge/README.md#delete) - Delete
- [`edgeGet`](docs/sdks/edge/README.md#get) - Get
- [`edgeGetAuditInclusionProof`](docs/sdks/edge/README.md#getauditinclusionproof) - Get Audit Inclusion Proof
- [`edgeGetEgressTrafficEvent`](docs/sdks/edge/README.md#getegresstrafficevent) - Get Egress Traffic Event
- [`edgeGetEgressTrafficSummary`](docs/sdks/edge/README.md#getegresstrafficsummary) - Get Egress Traffic Summary
- [`edgeGetEgressTrafficSummaryRollup`](docs/sdks/edge/README.md#getegresstrafficsummaryrollup) - Get Egress Traffic Summary Rollup
- [`edgeGetInferenceUsageAttribution`](docs/sdks/edge/README.md#getinferenceusageattribution) - Get Inference Usage Attribution
- [`edgeGetInferenceUsageAttributionRollup`](docs/sdks/edge/README.md#getinferenceusageattributionrollup) - Get Inference Usage Attribution Rollup
- [`edgeGetInferenceUsageSummary`](docs/sdks/edge/README.md#getinferenceusagesummary) - Get Inference Usage Summary
- [`edgeGetInferenceUsageSummaryRollup`](docs/sdks/edge/README.md#getinferenceusagesummaryrollup) - Get Inference Usage Summary Rollup
- [`edgeGetPublicTrust`](docs/sdks/edge/README.md#getpublictrust) - Get Public Trust
- [`edgeList`](docs/sdks/edge/README.md#list) - List
- [`edgeListAuditAttestationKeys`](docs/sdks/edge/README.md#listauditattestationkeys) - List Audit Attestation Keys
- [`edgeListAuditAttestationManifests`](docs/sdks/edge/README.md#listauditattestationmanifests) - List Audit Attestation Manifests
- [`edgeListEdgesRollup`](docs/sdks/edge/README.md#listedgesrollup) - List Edges Rollup
- [`edgeListEgressDenialSummary`](docs/sdks/edge/README.md#listegressdenialsummary) - List Egress Denial Summary
- [`edgeListEgressRuleEntitlementIssues`](docs/sdks/edge/README.md#listegressruleentitlementissues) - List Egress Rule Entitlement Issues
- [`edgeListEgressTopAgents`](docs/sdks/edge/README.md#listegresstopagents) - List Egress Top Agents
- [`edgeListEgressTopAgentsRollup`](docs/sdks/edge/README.md#listegresstopagentsrollup) - List Egress Top Agents Rollup
- [`edgeListEgressTopDestinations`](docs/sdks/edge/README.md#listegresstopdestinations) - List Egress Top Destinations
- [`edgeListEgressTopToolsRollup`](docs/sdks/edge/README.md#listegresstoptoolsrollup) - List Egress Top Tools Rollup
- [`edgeListEgressTrafficEvents`](docs/sdks/edge/README.md#listegresstrafficevents) - List Egress Traffic Events
- [`edgeListInferenceCatalog`](docs/sdks/edge/README.md#listinferencecatalog) - List Inference Catalog
- [`edgeListInferenceRoutes`](docs/sdks/edge/README.md#listinferenceroutes) - List Inference Routes
- [`edgeListInferenceTopAgents`](docs/sdks/edge/README.md#listinferencetopagents) - List Inference Top Agents
- [`edgeListInferenceTopTools`](docs/sdks/edge/README.md#listinferencetoptools) - List Inference Top Tools
- [`edgeListInferenceTrafficEvents`](docs/sdks/edge/README.md#listinferencetrafficevents) - List Inference Traffic Events
- [`edgeListUnattributedInferenceTrafficEvents`](docs/sdks/edge/README.md#listunattributedinferencetrafficevents) - List Unattributed Inference Traffic Events
- [`edgeListUsableEdges`](docs/sdks/edge/README.md#listusableedges) - List Usable Edges
- [`edgePreviewEgressHostDecision`](docs/sdks/edge/README.md#previewegresshostdecision) - Preview Egress Host Decision
- [`edgePreviewEgressRulesUpdate`](docs/sdks/edge/README.md#previewegressrulesupdate) - Preview Egress Rules Update
- [`edgeUpdate`](docs/sdks/edge/README.md#update) - Update
- [`emailCapabilitiesGet`](docs/sdks/emailcapabilities/README.md#get) - Get
- [`exportCreate`](docs/sdks/export/README.md#create) - Create
- [`exportDelete`](docs/sdks/export/README.md#delete) - Delete
- [`exportGet`](docs/sdks/export/README.md#get) - Get
- [`exportList`](docs/sdks/export/README.md#list) - List
- [`exportListEvents`](docs/sdks/export/README.md#listevents) - List Events
- [`exportsSearchSearch`](docs/sdks/exportssearch/README.md#search) - Search
- [`exportUpdate`](docs/sdks/export/README.md#update) - Update
- [`externalClientSearchSearch`](docs/sdks/externalclientsearch/README.md#search) - NOTE: Searches external client grants for all users
- [`externalOAuthClientCreate`](docs/sdks/externaloauthclient/README.md#create) - Create
- [`externalOAuthClientRevoke`](docs/sdks/externaloauthclient/README.md#revoke) - Revoke
- [`externalOAuthClientRotateSecret`](docs/sdks/externaloauthclient/README.md#rotatesecret) - Rotate Secret
- [`externalOAuthClientUpdate`](docs/sdks/externaloauthclient/README.md#update) - Update
- [`feedbackCreateFeedback`](docs/sdks/feedback/README.md#createfeedback) - Create Feedback
- [`findingAuditSearch`](docs/sdks/findingaudit/README.md#search) - Search
- [`findingBulkCreateFindingTasks`](docs/sdks/finding/README.md#bulkcreatefindingtasks) - Bulk Create Finding Tasks
- [`findingBulkUpdateFindingState`](docs/sdks/finding/README.md#bulkupdatefindingstate) - Bulk Update Finding State
- [`findingCreateFinding`](docs/sdks/finding/README.md#createfinding) - Create Finding
- [`findingCreateFindingTask`](docs/sdks/finding/README.md#createfindingtask) - Create Finding Task
- [`findingGetFinding`](docs/sdks/finding/README.md#getfinding) - Get Finding
- [`findingRoutingRuleCreateFindingRoutingRule`](docs/sdks/findingroutingrule/README.md#createfindingroutingrule) - Create Finding Routing Rule
- [`findingRoutingRuleDeleteFindingRoutingRule`](docs/sdks/findingroutingrule/README.md#deletefindingroutingrule) - Delete Finding Routing Rule
- [`findingRoutingRuleGetFindingRoutingRule`](docs/sdks/findingroutingrule/README.md#getfindingroutingrule) - Get Finding Routing Rule
- [`findingRoutingRuleListFindingRoutingRules`](docs/sdks/findingroutingrule/README.md#listfindingroutingrules) - List Finding Routing Rules
- [`findingRoutingRuleUpdateFindingRoutingRule`](docs/sdks/findingroutingrule/README.md#updatefindingroutingrule) - Update Finding Routing Rule
- [`findingSearchSearch`](docs/sdks/findingsearch/README.md#search) - Search
- [`findingSettingsGetEdgeFindingSettings`](docs/sdks/findingsettings/README.md#getedgefindingsettings) - Get Edge Finding Settings
- [`findingSettingsListFindingSettings`](docs/sdks/findingsettings/README.md#listfindingsettings) - List Finding Settings
- [`findingSettingsUpdateEdgeFindingSettings`](docs/sdks/findingsettings/README.md#updateedgefindingsettings) - Update Edge Finding Settings
- [`findingSettingsUpdateFindingSettings`](docs/sdks/findingsettings/README.md#updatefindingsettings) - Update Finding Settings
- [`findingTransformationRuleCreateFindingTransformationRule`](docs/sdks/findingtransformationrule/README.md#createfindingtransformationrule) - Create Finding Transformation Rule
- [`findingTransformationRuleDeleteFindingTransformationRule`](docs/sdks/findingtransformationrule/README.md#deletefindingtransformationrule) - Delete Finding Transformation Rule
- [`findingTransformationRuleGetFindingTransformationRule`](docs/sdks/findingtransformationrule/README.md#getfindingtransformationrule) - Get Finding Transformation Rule
- [`findingTransformationRuleListFindingTransformationRules`](docs/sdks/findingtransformationrule/README.md#listfindingtransformationrules) - List Finding Transformation Rules
- [`findingTransformationRuleUpdateFindingTransformationRule`](docs/sdks/findingtransformationrule/README.md#updatefindingtransformationrule) - Update Finding Transformation Rule
- [`findingUpdateFindingAssignee`](docs/sdks/finding/README.md#updatefindingassignee) - Update Finding Assignee
- [`findingUpdateFindingState`](docs/sdks/finding/README.md#updatefindingstate) - Update Finding State
- [`functionsCreateFinalCommit`](docs/sdks/functions/README.md#createfinalcommit) - Create Final Commit
- [`functionsCreateFunction`](docs/sdks/functions/README.md#createfunction) - Create Function
- [`functionsCreateInitialCommit`](docs/sdks/functions/README.md#createinitialcommit) - Create Initial Commit
- [`functionsCreateTag`](docs/sdks/functions/README.md#createtag) - Create Tag
- [`functionsDeleteFunction`](docs/sdks/functions/README.md#deletefunction) - Delete Function
- [`functionsGetCommitContent`](docs/sdks/functions/README.md#getcommitcontent) - Get Commit Content
- [`functionsGetFunction`](docs/sdks/functions/README.md#getfunction) - Get Function
- [`functionsGetLockFile`](docs/sdks/functions/README.md#getlockfile) - Get Lock File
- [`functionsInvocationGet`](docs/sdks/functionsinvocation/README.md#get) - Get
- [`functionsInvocationGetResultDownloadURL`](docs/sdks/functionsinvocation/README.md#getresultdownloadurl) - Get Result Download Url
- [`functionsInvocationList`](docs/sdks/functionsinvocation/README.md#list) - List
- [`functionsInvocationSearchSearch`](docs/sdks/functionsinvocationsearch/README.md#search) - Search
- [`functionsInvoke`](docs/sdks/functions/README.md#invoke) - Invoke
- [`functionsListCommits`](docs/sdks/functions/README.md#listcommits) - List Commits
- [`functionsListFunctions`](docs/sdks/functions/README.md#listfunctions) - List Functions
- [`functionsListTags`](docs/sdks/functions/README.md#listtags) - List Tags
- [`functionsSearchSearch`](docs/sdks/functionssearch/README.md#search) - Search
- [`functionsTest`](docs/sdks/functions/README.md#test) - Test
- [`functionsUpdateFunction`](docs/sdks/functions/README.md#updatefunction) - Update Function
- [`fundAssignmentClearExtension`](docs/sdks/fundassignment/README.md#clearextension) - Clear Extension
- [`fundAssignmentDelete`](docs/sdks/fundassignment/README.md#delete) - Delete
- [`fundAssignmentGet`](docs/sdks/fundassignment/README.md#get) - Get
- [`fundAssignmentGrantExtension`](docs/sdks/fundassignment/README.md#grantextension) - Grant Extension
- [`fundAssignmentListHistory`](docs/sdks/fundassignment/README.md#listhistory) - List History
- [`fundAssignmentSearch`](docs/sdks/fundassignment/README.md#search) - Search
- [`fundAssignmentSetLimit`](docs/sdks/fundassignment/README.md#setlimit) - Set Limit
- [`fundAssignmentSuspend`](docs/sdks/fundassignment/README.md#suspend) - Suspend
- [`fundAssignmentUnsuspend`](docs/sdks/fundassignment/README.md#unsuspend) - Unsuspend
- [`fundPolicyCreate`](docs/sdks/fundpolicy/README.md#create) - Create
- [`fundPolicyDelete`](docs/sdks/fundpolicy/README.md#delete) - Delete
- [`fundPolicyFreezeTenant`](docs/sdks/fundpolicy/README.md#freezetenant) - Freeze Tenant
- [`fundPolicyGet`](docs/sdks/fundpolicy/README.md#get) - Get
- [`fundPolicyListHistory`](docs/sdks/fundpolicy/README.md#listhistory) - List History
- [`fundPolicySetOrgCeiling`](docs/sdks/fundpolicy/README.md#setorgceiling) - Set Org Ceiling
- [`fundPolicyUnfreezeTenant`](docs/sdks/fundpolicy/README.md#unfreezetenant) - Unfreeze Tenant
- [`fundPolicyUpdate`](docs/sdks/fundpolicy/README.md#update) - Update
- [`fundRuleCreate`](docs/sdks/fundrule/README.md#create) - Create
- [`fundRuleDelete`](docs/sdks/fundrule/README.md#delete) - Delete
- [`fundRuleGet`](docs/sdks/fundrule/README.md#get) - Get
- [`fundRuleList`](docs/sdks/fundrule/README.md#list) - List
- [`fundRuleListHistory`](docs/sdks/fundrule/README.md#listhistory) - List History
- [`fundRuleSearch`](docs/sdks/fundrule/README.md#search) - Search
- [`fundRuleUpdate`](docs/sdks/fundrule/README.md#update) - Update
- [`gatewayKeyList`](docs/sdks/gatewaykey/README.md#list) - List
- [`gatewayKeyMint`](docs/sdks/gatewaykey/README.md#mint) - Mint
- [`gatewayKeyRevoke`](docs/sdks/gatewaykey/README.md#revoke) - Revoke
- [`goLinkCreate`](docs/sdks/golink/README.md#create) - Create
- [`goLinkDelete`](docs/sdks/golink/README.md#delete) - Delete
- [`goLinkGet`](docs/sdks/golink/README.md#get) - Get
- [`goLinkList`](docs/sdks/golink/README.md#list) - List
- [`goLinkListVersions`](docs/sdks/golink/README.md#listversions) - List Versions
- [`goLinkResolve`](docs/sdks/golink/README.md#resolve) - Resolve
- [`goLinkSearchSearch`](docs/sdks/golinksearch/README.md#search) - Search
- [`goLinkUpdate`](docs/sdks/golink/README.md#update) - Update
- [`hooksCreate`](docs/sdks/hooks/README.md#create) - Create
- [`hooksDelete`](docs/sdks/hooks/README.md#delete) - Delete
- [`hooksGet`](docs/sdks/hooks/README.md#get) - Get
- [`hooksList`](docs/sdks/hooks/README.md#list) - List
- [`hooksSearchSearch`](docs/sdks/hookssearch/README.md#search) - Search
- [`hooksUpdate`](docs/sdks/hooks/README.md#update) - Update
- [`identityPolicyTenantDefaultsGet`](docs/sdks/identitypolicytenantdefaults/README.md#get) - Get
- [`identityPolicyTenantDefaultsUpdate`](docs/sdks/identitypolicytenantdefaults/README.md#update) - Update
- [`localDirectoryConfigCreate`](docs/sdks/localdirectoryconfig/README.md#create) - Create
- [`localDirectoryConfigDelete`](docs/sdks/localdirectoryconfig/README.md#delete) - Delete
- [`localDirectoryConfigGet`](docs/sdks/localdirectoryconfig/README.md#get) - Get
- [`localDirectoryConfigList`](docs/sdks/localdirectoryconfig/README.md#list) - List
- [`localDirectoryConfigUpdate`](docs/sdks/localdirectoryconfig/README.md#update) - Update
- [`localUserInvitationCreate`](docs/sdks/localuserinvitation/README.md#create) - Create
- [`localUserInvitationGet`](docs/sdks/localuserinvitation/README.md#get) - Get
- [`localUserInvitationRevoke`](docs/sdks/localuserinvitation/README.md#revoke) - Revoke
- [`localUserInvitationSearch`](docs/sdks/localuserinvitation/README.md#search) - Search
- [`mcpAccessProfileCreate`](docs/sdks/mcpaccessprofile/README.md#create) - Create
- [`mcpAccessProfileDelete`](docs/sdks/mcpaccessprofile/README.md#delete) - Delete
- [`mcpAccessProfileGet`](docs/sdks/mcpaccessprofile/README.md#get) - Get
- [`mcpAccessProfileGetByAppEntitlementId`](docs/sdks/mcpaccessprofile/README.md#getbyappentitlementid) - Get By App Entitlement Id
- [`mcpAccessProfileList`](docs/sdks/mcpaccessprofile/README.md#list) - List
- [`mcpAccessProfileListRequestableConnectors`](docs/sdks/mcpaccessprofile/README.md#listrequestableconnectors) - List Requestable Connectors
- [`mcpAccessProfileSearchAccessProfiles`](docs/sdks/mcpaccessprofile/README.md#searchaccessprofiles) - Search Access Profiles
- [`mcpAccessProfileSearchRequestableConnectors`](docs/sdks/mcpaccessprofile/README.md#searchrequestableconnectors) - Search Requestable Connectors
- [`mcpAccessProfileToolBindingCreateBindings`](docs/sdks/mcpaccessprofiletoolbinding/README.md#createbindings) - Create Bindings
- [`mcpAccessProfileToolBindingDeleteBindings`](docs/sdks/mcpaccessprofiletoolbinding/README.md#deletebindings) - Delete Bindings
- [`mcpAccessProfileToolBindingGetAccessProfilesForTools`](docs/sdks/mcpaccessprofiletoolbinding/README.md#getaccessprofilesfortools) - Get Access Profiles For Tools
- [`mcpAccessProfileToolBindingList`](docs/sdks/mcpaccessprofiletoolbinding/README.md#list) - List
- [`mcpAccessProfileToolBindingListProfilesByToolHistory`](docs/sdks/mcpaccessprofiletoolbinding/README.md#listprofilesbytoolhistory) - List Profiles By Tool History
- [`mcpAccessProfileToolBindingListToolsByProfileHistory`](docs/sdks/mcpaccessprofiletoolbinding/README.md#listtoolsbyprofilehistory) - List Tools By Profile History
- [`mcpAccessProfileUpdate`](docs/sdks/mcpaccessprofile/README.md#update) - Update
- [`mcpResourceGet`](docs/sdks/mcpresource/README.md#get) - Get
- [`mcpResourceList`](docs/sdks/mcpresource/README.md#list) - List
- [`mcpResourceListHistory`](docs/sdks/mcpresource/README.md#listhistory) - List History
- [`mcpResourceSearch`](docs/sdks/mcpresource/README.md#search) - Search
- [`mcpResourceUpdate`](docs/sdks/mcpresource/README.md#update) - Update
- [`mcpServerDelete`](docs/sdks/mcpserver/README.md#delete) - Delete
- [`mcpServerDisconnect`](docs/sdks/mcpserver/README.md#disconnect) - Disconnect
- [`mcpServerDiscoverOIDCEndpoints`](docs/sdks/mcpserver/README.md#discoveroidcendpoints) - Discover Oidc Endpoints
- [`mcpServerGet`](docs/sdks/mcpserver/README.md#get) - Get
- [`mcpServerGetCatalog`](docs/sdks/mcpserver/README.md#getcatalog) - Get Catalog
- [`mcpServerList`](docs/sdks/mcpserver/README.md#list) - List
- [`mcpServerListCatalog`](docs/sdks/mcpserver/README.md#listcatalog) - List Catalog
- [`mcpServerListConnections`](docs/sdks/mcpserver/README.md#listconnections) - List Connections
- [`mcpServerRegister`](docs/sdks/mcpserver/README.md#register) - Register
- [`mcpServerResyncTools`](docs/sdks/mcpserver/README.md#resynctools) - Resync Tools
- [`mcpServerSearchWithToolCount`](docs/sdks/mcpserver/README.md#searchwithtoolcount) - Search With Tool Count
- [`mcpServerTestConnection`](docs/sdks/mcpserver/README.md#testconnection) - Test Connection
- [`mcpServerUpdate`](docs/sdks/mcpserver/README.md#update) - Update
- [`mcpServerUpdateCredentials`](docs/sdks/mcpserver/README.md#updatecredentials) - Update Credentials
- [`mcpToolDelete`](docs/sdks/mcptool/README.md#delete) - Delete
- [`mcpToolGet`](docs/sdks/mcptool/README.md#get) - Get
- [`mcpToolList`](docs/sdks/mcptool/README.md#list) - List
- [`mcpToolListHistory`](docs/sdks/mcptool/README.md#listhistory) - List History
- [`mcpToolSearch`](docs/sdks/mcptool/README.md#search) - Search
- [`mcpToolUpdate`](docs/sdks/mcptool/README.md#update) - Update
- [`modelAPIKeyCreate`](docs/sdks/modelapikey/README.md#create) - Create
- [`modelAPIKeyGet`](docs/sdks/modelapikey/README.md#get) - Get
- [`modelAPIKeyList`](docs/sdks/modelapikey/README.md#list) - List
- [`modelAPIKeyRevoke`](docs/sdks/modelapikey/README.md#revoke) - Revoke
- [`myFundLimitsClearTemporaryLimit`](docs/sdks/myfundlimits/README.md#cleartemporarylimit) - Clear Temporary Limit
- [`myFundLimitsDelete`](docs/sdks/myfundlimits/README.md#delete) - Delete
- [`myFundLimitsList`](docs/sdks/myfundlimits/README.md#list) - List
- [`myFundLimitsListHistory`](docs/sdks/myfundlimits/README.md#listhistory) - List History
- [`myFundLimitsPause`](docs/sdks/myfundlimits/README.md#pause) - Pause
- [`myFundLimitsResume`](docs/sdks/myfundlimits/README.md#resume) - Resume
- [`myFundLimitsSetLimit`](docs/sdks/myfundlimits/README.md#setlimit) - Set Limit
- [`myFundLimitsSetTemporaryLimit`](docs/sdks/myfundlimits/README.md#settemporarylimit) - Set Temporary Limit
- [`onboardingSettingsGet`](docs/sdks/onboardingsettings/README.md#get) - Get
- [`onboardingSettingsUpdate`](docs/sdks/onboardingsettings/README.md#update) - Update
- [`orgDomainList`](docs/sdks/orgdomain/README.md#list) - List
- [`orgDomainUpdate`](docs/sdks/orgdomain/README.md#update) - Update
- [`orgNotificationSettingsGet`](docs/sdks/orgnotificationsettings/README.md#get) - Get
- [`orgNotificationSettingsUpdate`](docs/sdks/orgnotificationsettings/README.md#update) - Update
- [`paperSecretAdminDelete`](docs/sdks/papersecretadmin/README.md#delete) - Delete
- [`paperSecretAdminGet`](docs/sdks/papersecretadmin/README.md#get) - Get
- [`paperSecretAdminSearch`](docs/sdks/papersecretadmin/README.md#search) - Search
- [`paperSecretAdminSearchAuditEvents`](docs/sdks/papersecretadmin/README.md#searchauditevents) - Search Audit Events
- [`paperSecretCreateExternal`](docs/sdks/papersecret/README.md#createexternal) - Create External
- [`paperSecretCreateInternal`](docs/sdks/papersecret/README.md#createinternal) - Create Internal
- [`paperSecretDelete`](docs/sdks/papersecret/README.md#delete) - Delete
- [`paperSecretGet`](docs/sdks/papersecret/README.md#get) - Get
- [`paperSecretGetByShareCode`](docs/sdks/papersecret/README.md#getbysharecode) - Get By Share Code
- [`paperSecretGetContent`](docs/sdks/papersecret/README.md#getcontent) - Get Content
- [`paperSecretSearchAuditEvents`](docs/sdks/papersecret/README.md#searchauditevents) - Search Audit Events
- [`paperSecretSearchMySecrets`](docs/sdks/papersecret/README.md#searchmysecrets) - Search My Secrets
- [`paperSecretSearchSecretsSharedWithMe`](docs/sdks/papersecret/README.md#searchsecretssharedwithme) - Search Secrets Shared With Me
- [`paperSecretSetTextContent`](docs/sdks/papersecret/README.md#settextcontent) - Set Text Content
- [`personalClientCreate`](docs/sdks/personalclient/README.md#create) - Create
- [`personalClientDelete`](docs/sdks/personalclient/README.md#delete) - Delete
- [`personalClientGet`](docs/sdks/personalclient/README.md#get) - Get
- [`personalClientList`](docs/sdks/personalclient/README.md#list) - NOTE: Only shows personal clients for the current user.
- [`personalClientSearchSearch`](docs/sdks/personalclientsearch/README.md#search) - NOTE: Searches personal clients for all users
- [`personalClientUpdate`](docs/sdks/personalclient/README.md#update) - Update
- [`personalDeviceGetDevice`](docs/sdks/personaldevice/README.md#getdevice) - Get Device
- [`personalDeviceListDeviceClients`](docs/sdks/personaldevice/README.md#listdeviceclients) - List Device Clients
- [`personalDeviceRevokeDevice`](docs/sdks/personaldevice/README.md#revokedevice) - Revoke Device
- [`personalDeviceRevokeDeviceClient`](docs/sdks/personaldevice/README.md#revokedeviceclient) - Revoke Device Client
- [`personalDeviceSearch`](docs/sdks/personaldevice/README.md#search) - NOTE: Only shows devices for the current user.
- [`personalDeviceUpdateDevice`](docs/sdks/personaldevice/README.md#updatedevice) - NOTE: Only updates devices owned by the current user.
- [`policiesCreate`](docs/sdks/policies/README.md#create) - Create
- [`policiesDelete`](docs/sdks/policies/README.md#delete) - Delete
- [`policiesGet`](docs/sdks/policies/README.md#get) - Get
- [`policiesList`](docs/sdks/policies/README.md#list) - List
- [`policiesUpdate`](docs/sdks/policies/README.md#update) - Update
- [`policySearchSearch`](docs/sdks/policysearch/README.md#search) - Search
- [`policyValidateValidateCEL`](docs/sdks/policyvalidate/README.md#validatecel) - Validate Cel
- [`principalAddBinding`](docs/sdks/principal/README.md#addbinding) - Add Binding
- [`principalCreate`](docs/sdks/principal/README.md#create) - Create
- [`principalCreateCredential`](docs/sdks/principal/README.md#createcredential) - Create Credential
- [`principalDelete`](docs/sdks/principal/README.md#delete) - Delete
- [`principalDeleteBinding`](docs/sdks/principal/README.md#deletebinding) - Delete Binding
- [`principalGet`](docs/sdks/principal/README.md#get) - Get
- [`principalGetCredential`](docs/sdks/principal/README.md#getcredential) - Get Credential
- [`principalList`](docs/sdks/principal/README.md#list) - List
- [`principalListBindings`](docs/sdks/principal/README.md#listbindings) - List Bindings
- [`principalListCredentials`](docs/sdks/principal/README.md#listcredentials) - List Credentials
- [`principalRevokeCredential`](docs/sdks/principal/README.md#revokecredential) - Revoke Credential
- [`principalUpdate`](docs/sdks/principal/README.md#update) - Update
- [`principalUpdateCredential`](docs/sdks/principal/README.md#updatecredential) - Update Credential
- [`providerCredentialClear`](docs/sdks/providercredential/README.md#clear) - Clear
- [`providerCredentialGet`](docs/sdks/providercredential/README.md#get) - Get
- [`providerCredentialSet`](docs/sdks/providercredential/README.md#set) - Set
- [`recoveryPolicyCreate`](docs/sdks/recoverypolicy/README.md#create) - Create
- [`recoveryPolicyDelete`](docs/sdks/recoverypolicy/README.md#delete) - Delete
- [`recoveryPolicyGet`](docs/sdks/recoverypolicy/README.md#get) - Get
- [`recoveryPolicyList`](docs/sdks/recoverypolicy/README.md#list) - List
- [`recoveryPolicySearch`](docs/sdks/recoverypolicy/README.md#search) - Search
- [`recoveryPolicyUpdate`](docs/sdks/recoverypolicy/README.md#update) - Update
- [`reportingDelete`](docs/sdks/reporting/README.md#delete) - Delete
- [`reportingGet`](docs/sdks/reporting/README.md#get) - Get
- [`reportingGetProgram`](docs/sdks/reporting/README.md#getprogram) - Get Program
- [`reportingGetRunProvenance`](docs/sdks/reporting/README.md#getrunprovenance) - Get Run Provenance
- [`reportingList`](docs/sdks/reporting/README.md#list) - List
- [`reportingRun`](docs/sdks/reporting/README.md#run) - Run
- [`reportingSave`](docs/sdks/reporting/README.md#save) - Save
- [`reportingUpdate`](docs/sdks/reporting/README.md#update) - Update
- [`requestCatalogManagementAddAccessEntitlements`](docs/sdks/requestcatalogmanagement/README.md#addaccessentitlements) - Add Access Entitlements
- [`requestCatalogManagementAddAppEntitlements`](docs/sdks/requestcatalogmanagement/README.md#addappentitlements) - Add App Entitlements
- [`requestCatalogManagementCreate`](docs/sdks/requestcatalogmanagement/README.md#create) - Create
- [`requestCatalogManagementCreateBundleAutomation`](docs/sdks/requestcatalogmanagement/README.md#createbundleautomation) - Create Bundle Automation
- [`requestCatalogManagementCreateRequestableEntry`](docs/sdks/requestcatalogmanagement/README.md#createrequestableentry) - Create Requestable Entry
- [`requestCatalogManagementDelete`](docs/sdks/requestcatalogmanagement/README.md#delete) - Delete
- [`requestCatalogManagementDeleteBundleAutomation`](docs/sdks/requestcatalogmanagement/README.md#deletebundleautomation) - Delete Bundle Automation
- [`requestCatalogManagementDeleteRequestableEntry`](docs/sdks/requestcatalogmanagement/README.md#deleterequestableentry) - Delete Requestable Entry
- [`requestCatalogManagementForceRunBundleAutomation`](docs/sdks/requestcatalogmanagement/README.md#forcerunbundleautomation) - Force Run Bundle Automation
- [`requestCatalogManagementGet`](docs/sdks/requestcatalogmanagement/README.md#get) - Get
- [`requestCatalogManagementGetBundleAutomation`](docs/sdks/requestcatalogmanagement/README.md#getbundleautomation) - Get Bundle Automation
- [`requestCatalogManagementGetRequestableEntry`](docs/sdks/requestcatalogmanagement/README.md#getrequestableentry) - Get Requestable Entry
- [`requestCatalogManagementList`](docs/sdks/requestcatalogmanagement/README.md#list) - List
- [`requestCatalogManagementListAllEntitlementIdsPerApp`](docs/sdks/requestcatalogmanagement/README.md#listallentitlementidsperapp) - List All Entitlement Ids Per App
- [`requestCatalogManagementListEntitlementsForAccess`](docs/sdks/requestcatalogmanagement/README.md#listentitlementsforaccess) - List Entitlements For Access
- [`requestCatalogManagementListEntitlementsPerCatalog`](docs/sdks/requestcatalogmanagement/README.md#listentitlementspercatalog) - List Entitlements Per Catalog
- [`requestCatalogManagementPlanTypeChange`](docs/sdks/requestcatalogmanagement/README.md#plantypechange) - Plan Type Change
- [`requestCatalogManagementRemoveAccessEntitlements`](docs/sdks/requestcatalogmanagement/README.md#removeaccessentitlements) - Remove Access Entitlements
- [`requestCatalogManagementRemoveAppEntitlements`](docs/sdks/requestcatalogmanagement/README.md#removeappentitlements) - Remove App Entitlements
- [`requestCatalogManagementResumePausedBundleAutomation`](docs/sdks/requestcatalogmanagement/README.md#resumepausedbundleautomation) - Resume Paused Bundle Automation
- [`requestCatalogManagementSearchScopeRoleBindingsPerCatalog`](docs/sdks/requestcatalogmanagement/README.md#searchscoperolebindingspercatalog) - Search Scope Role Bindings Per Catalog
- [`requestCatalogManagementSetBundleAutomation`](docs/sdks/requestcatalogmanagement/README.md#setbundleautomation) - Set Bundle Automation
- [`requestCatalogManagementUpdate`](docs/sdks/requestcatalogmanagement/README.md#update) - Update
- [`requestCatalogManagementUpdateAppEntitlements`](docs/sdks/requestcatalogmanagement/README.md#updateappentitlements) - Update App Entitlements
- [`requestCatalogSearchSearchEntitlements`](docs/sdks/requestcatalogsearch/README.md#searchentitlements) - Search Entitlements
- [`requestCatalogSearchSearchRequestableCredentialOfferings`](docs/sdks/requestcatalogsearch/README.md#searchrequestablecredentialofferings) - Search Requestable Credential Offerings
- [`requestSchemaCreate`](docs/sdks/requestschema/README.md#create) - Create
- [`requestSchemaCreateEntitlementBinding`](docs/sdks/requestschema/README.md#createentitlementbinding) - Create Entitlement Binding
- [`requestSchemaDelete`](docs/sdks/requestschema/README.md#delete) - Delete
- [`requestSchemaFindBindingForAppEntitlement`](docs/sdks/requestschema/README.md#findbindingforappentitlement) - Find Binding For App Entitlement
- [`requestSchemaGet`](docs/sdks/requestschema/README.md#get) - Get
- [`requestSchemaRemoveEntitlementBinding`](docs/sdks/requestschema/README.md#removeentitlementbinding) - Remove Entitlement Binding
- [`requestSchemaUpdate`](docs/sdks/requestschema/README.md#update) - Update
- [`requestSettingsGet`](docs/sdks/requestsettings/README.md#get) - Get
- [`requestSettingsUpdate`](docs/sdks/requestsettings/README.md#update) - Update
- [`roleMiningManagementCountEntitlementSelectionFilterAttributeValues`](docs/sdks/roleminingmanagement/README.md#countentitlementselectionfilterattributevalues) - Count Entitlement Selection Filter Attribute Values
- [`roleMiningManagementCreateAccessProfileFromCohort`](docs/sdks/roleminingmanagement/README.md#createaccessprofilefromcohort) - Create Access Profile From Cohort
- [`roleMiningManagementEvaluateEntitlementSelection`](docs/sdks/roleminingmanagement/README.md#evaluateentitlementselection) - Evaluate Entitlement Selection
- [`roleMiningManagementGetCustomAnalysisResult`](docs/sdks/roleminingmanagement/README.md#getcustomanalysisresult) - Get Custom Analysis Result
- [`roleMiningManagementGetLatestCustomAnalysisResult`](docs/sdks/roleminingmanagement/README.md#getlatestcustomanalysisresult) - Get Latest Custom Analysis Result
- [`roleMiningManagementGetLatestRun`](docs/sdks/roleminingmanagement/README.md#getlatestrun) - Get Latest Run
- [`roleMiningManagementGetRoleMiningConfig`](docs/sdks/roleminingmanagement/README.md#getroleminingconfig) - Get Role Mining Config
- [`roleMiningManagementGetSuggestion`](docs/sdks/roleminingmanagement/README.md#getsuggestion) - Get Suggestion
- [`roleMiningManagementListCohortFilterAttributes`](docs/sdks/roleminingmanagement/README.md#listcohortfilterattributes) - List Cohort Filter Attributes
- [`roleMiningManagementListCohortFilterAttributeValues`](docs/sdks/roleminingmanagement/README.md#listcohortfilterattributevalues) - List Cohort Filter Attribute Values
- [`roleMiningManagementListCustomAnalysisResults`](docs/sdks/roleminingmanagement/README.md#listcustomanalysisresults) - List Custom Analysis Results
- [`roleMiningManagementListRuns`](docs/sdks/roleminingmanagement/README.md#listruns) - List Runs
- [`roleMiningManagementListSuggestions`](docs/sdks/roleminingmanagement/README.md#listsuggestions) - List Suggestions
- [`roleMiningManagementSearchCohortUsers`](docs/sdks/roleminingmanagement/README.md#searchcohortusers) - Search Cohort Users
- [`roleMiningManagementSearchSearch`](docs/sdks/roleminingmanagementsearch/README.md#search) - Search
- [`roleMiningManagementTriggerAnalysis`](docs/sdks/roleminingmanagement/README.md#triggeranalysis) - Trigger Analysis
- [`roleMiningManagementTriggerCustomAnalysis`](docs/sdks/roleminingmanagement/README.md#triggercustomanalysis) - Trigger Custom Analysis
- [`roleMiningManagementUpdateRoleMiningConfig`](docs/sdks/roleminingmanagement/README.md#updateroleminingconfig) - Update Role Mining Config
- [`roleMiningManagementUpdateSuggestionState`](docs/sdks/roleminingmanagement/README.md#updatesuggestionstate) - Update Suggestion State
- [`rolesGet`](docs/sdks/roles/README.md#get) - Get
- [`rolesList`](docs/sdks/roles/README.md#list) - List
- [`rolesUpdate`](docs/sdks/roles/README.md#update) - Update
- [`sessionPolicyAssignGroup`](docs/sdks/sessionpolicy/README.md#assigngroup) - Assign Group
- [`sessionPolicyAssignUser`](docs/sdks/sessionpolicy/README.md#assignuser) - Assign User
- [`sessionPolicyCreate`](docs/sdks/sessionpolicy/README.md#create) - Create
- [`sessionPolicyDelete`](docs/sdks/sessionpolicy/README.md#delete) - Delete
- [`sessionPolicyGet`](docs/sdks/sessionpolicy/README.md#get) - Get
- [`sessionPolicyGetEffectiveSessionPolicy`](docs/sdks/sessionpolicy/README.md#geteffectivesessionpolicy) - Get Effective Session Policy
- [`sessionPolicyList`](docs/sdks/sessionpolicy/README.md#list) - List
- [`sessionPolicyListAssignments`](docs/sdks/sessionpolicy/README.md#listassignments) - List Assignments
- [`sessionPolicyListUserPolicies`](docs/sdks/sessionpolicy/README.md#listuserpolicies) - List User Policies
- [`sessionPolicySearch`](docs/sdks/sessionpolicy/README.md#search) - Search
- [`sessionPolicySearchAppUserSessionPolicies`](docs/sdks/sessionpolicy/README.md#searchappusersessionpolicies) - Search App User Session Policies
- [`sessionPolicySearchPolicyUsers`](docs/sdks/sessionpolicy/README.md#searchpolicyusers) - Search Policy Users
- [`sessionPolicyUnassignGroup`](docs/sdks/sessionpolicy/README.md#unassigngroup) - Unassign Group
- [`sessionPolicyUnassignUser`](docs/sdks/sessionpolicy/README.md#unassignuser) - Unassign User
- [`sessionPolicyUpdate`](docs/sdks/sessionpolicy/README.md#update) - Update
- [`sessionSettingsGet`](docs/sdks/sessionsettings/README.md#get) - Get
- [`sessionSettingsTestSourceIP`](docs/sdks/sessionsettings/README.md#testsourceip) - Test Source Ip
- [`sessionSettingsUpdate`](docs/sdks/sessionsettings/README.md#update) - Update
- [`shadowMcpOccurrenceSearch`](docs/sdks/shadowmcpoccurrence/README.md#search) - Search
- [`signInPolicyCreate`](docs/sdks/signinpolicy/README.md#create) - Create
- [`signInPolicyDelete`](docs/sdks/signinpolicy/README.md#delete) - Delete
- [`signInPolicyGet`](docs/sdks/signinpolicy/README.md#get) - Get
- [`signInPolicyList`](docs/sdks/signinpolicy/README.md#list) - List
- [`signInPolicySearch`](docs/sdks/signinpolicy/README.md#search) - Search
- [`signInPolicyUpdate`](docs/sdks/signinpolicy/README.md#update) - Update
- [`spendInsightsGetAttributionRollups`](docs/sdks/spendinsights/README.md#getattributionrollups) - Get Attribution Rollups
- [`spendInsightsGetDenial`](docs/sdks/spendinsights/README.md#getdenial) - Get Denial
- [`spendInsightsGetMySpendForecast`](docs/sdks/spendinsights/README.md#getmyspendforecast) - Get My Spend Forecast
- [`spendInsightsGetMySpendHistory`](docs/sdks/spendinsights/README.md#getmyspendhistory) - Get My Spend History
- [`spendInsightsGetMySpendStatus`](docs/sdks/spendinsights/README.md#getmyspendstatus) - Get My Spend Status
- [`spendInsightsGetOverview`](docs/sdks/spendinsights/README.md#getoverview) - Get Overview
- [`spendInsightsResolveEffectiveLimits`](docs/sdks/spendinsights/README.md#resolveeffectivelimits) - Resolve Effective Limits
- [`spendInsightsSearchDenials`](docs/sdks/spendinsights/README.md#searchdenials) - Search Denials
- [`spendInsightsSearchMySpendUsage`](docs/sdks/spendinsights/README.md#searchmyspendusage) - Search My Spend Usage
- [`ssfReceiverEventList`](docs/sdks/ssfreceiverevent/README.md#list) - List
- [`ssfReceiverEventSearchSearch`](docs/sdks/ssfreceivereventsearch/README.md#search) - Search
- [`ssfReceiverStreamCreate`](docs/sdks/ssfreceiverstream/README.md#create) - Create
- [`ssfReceiverStreamDelete`](docs/sdks/ssfreceiverstream/README.md#delete) - Delete
- [`ssfReceiverStreamGet`](docs/sdks/ssfreceiverstream/README.md#get) - Get
- [`ssfReceiverStreamGetStats`](docs/sdks/ssfreceiverstream/README.md#getstats) - Get Stats
- [`ssfReceiverStreamList`](docs/sdks/ssfreceiverstream/README.md#list) - List
- [`ssfReceiverStreamTest`](docs/sdks/ssfreceiverstream/README.md#test) - Test
- [`ssfReceiverStreamUpdate`](docs/sdks/ssfreceiverstream/README.md#update) - Update
- [`ssoApplicationBatchDeleteSubjectCompatibility`](docs/sdks/ssoapplication/README.md#batchdeletesubjectcompatibility) - Batch Delete Subject Compatibility
- [`ssoApplicationBatchImportSubjectCompatibility`](docs/sdks/ssoapplication/README.md#batchimportsubjectcompatibility) - Batch Import Subject Compatibility
- [`ssoApplicationCreate`](docs/sdks/ssoapplication/README.md#create) - Create
- [`ssoApplicationCreateClient`](docs/sdks/ssoapplication/README.md#createclient) - Create Client
- [`ssoApplicationDelete`](docs/sdks/ssoapplication/README.md#delete) - Delete
- [`ssoApplicationDeleteClient`](docs/sdks/ssoapplication/README.md#deleteclient) - Delete Client
- [`ssoApplicationGet`](docs/sdks/ssoapplication/README.md#get) - Get
- [`ssoApplicationList`](docs/sdks/ssoapplication/README.md#list) - List
- [`ssoApplicationListClients`](docs/sdks/ssoapplication/README.md#listclients) - List Clients
- [`ssoApplicationListHistory`](docs/sdks/ssoapplication/README.md#listhistory) - List History
- [`ssoApplicationParseSAMLServiceProviderMetadata`](docs/sdks/ssoapplication/README.md#parsesamlserviceprovidermetadata) - Parse Saml Service Provider Metadata
- [`ssoApplicationRotateClientSecret`](docs/sdks/ssoapplication/README.md#rotateclientsecret) - Rotate Client Secret
- [`ssoApplicationSearch`](docs/sdks/ssoapplication/README.md#search) - Search
- [`ssoApplicationUpdate`](docs/sdks/ssoapplication/README.md#update) - Update
- [`ssoApplicationUpdateClient`](docs/sdks/ssoapplication/README.md#updateclient) - Update Client
- [`ssoSettingsGet`](docs/sdks/ssosettings/README.md#get) - Get
- [`ssoSettingsListHistory`](docs/sdks/ssosettings/README.md#listhistory) - List History
- [`ssoSettingsUpdate`](docs/sdks/ssosettings/README.md#update) - Update
- [`stepUpProviderCreate`](docs/sdks/stepupprovider/README.md#create) - Create
- [`stepUpProviderDelete`](docs/sdks/stepupprovider/README.md#delete) - Delete
- [`stepUpProviderGet`](docs/sdks/stepupprovider/README.md#get) - Get
- [`stepUpProviderList`](docs/sdks/stepupprovider/README.md#list) - List
- [`stepUpProviderSearch`](docs/sdks/stepupprovider/README.md#search) - Search
- [`stepUpProviderTest`](docs/sdks/stepupprovider/README.md#test) - Test
- [`stepUpProviderUpdate`](docs/sdks/stepupprovider/README.md#update) - Update
- [`stepUpProviderUpdateSecret`](docs/sdks/stepupprovider/README.md#updatesecret) - Update Secret
- [`stepUpTransactionGet`](docs/sdks/stepuptransaction/README.md#get) - Get
- [`stepUpTransactionSearch`](docs/sdks/stepuptransaction/README.md#search) - Search
- [`subjectAppLimitDelete`](docs/sdks/subjectapplimit/README.md#delete) - Delete
- [`subjectAppLimitGet`](docs/sdks/subjectapplimit/README.md#get) - Get
- [`subjectAppLimitListHistory`](docs/sdks/subjectapplimit/README.md#listhistory) - List History
- [`subjectAppLimitSearch`](docs/sdks/subjectapplimit/README.md#search) - Search
- [`subjectAppLimitSetLimit`](docs/sdks/subjectapplimit/README.md#setlimit) - Set Limit
- [`subjectAppLimitSuspend`](docs/sdks/subjectapplimit/README.md#suspend) - Suspend
- [`subjectAppLimitUnsuspend`](docs/sdks/subjectapplimit/README.md#unsuspend) - Unsuspend
- [`systemLogListEvents`](docs/sdks/systemlog/README.md#listevents) - List Events
- [`taskActionsApprove`](docs/sdks/taskactions/README.md#approve) - Approve
- [`taskActionsApproveWithStepUp`](docs/sdks/taskactions/README.md#approvewithstepup) - Approve With Step Up
- [`taskActionsClose`](docs/sdks/taskactions/README.md#close) - Close
- [`taskActionsComment`](docs/sdks/taskactions/README.md#comment) - Comment
- [`taskActionsDeny`](docs/sdks/taskactions/README.md#deny) - Deny
- [`taskActionsEscalateToEmergencyAccess`](docs/sdks/taskactions/README.md#escalatetoemergencyaccess) - Escalate To Emergency Access
- [`taskActionsHardReset`](docs/sdks/taskactions/README.md#hardreset) - Hard Reset
- [`taskActionsProcessNow`](docs/sdks/taskactions/README.md#processnow) - Process Now
- [`taskActionsReassign`](docs/sdks/taskactions/README.md#reassign) - Reassign
- [`taskActionsRestart`](docs/sdks/taskactions/README.md#restart) - Restart
- [`taskActionsRetryProvisioning`](docs/sdks/taskactions/README.md#retryprovisioning) - Retry Provisioning
- [`taskActionsSkipStep`](docs/sdks/taskactions/README.md#skipstep) - Skip Step
- [`taskActionsUpdateGrantDuration`](docs/sdks/taskactions/README.md#updategrantduration) - Update Grant Duration
- [`taskActionsUpdateRequestData`](docs/sdks/taskactions/README.md#updaterequestdata) - Update Request Data
- [`taskAuditList`](docs/sdks/taskaudit/README.md#list) - List
- [`taskCreateActionTask`](docs/sdks/task/README.md#createactiontask) - Create Action Task
- [`taskCreateGrantTask`](docs/sdks/task/README.md#creategranttask) - Create Grant Task
- [`taskCreateOffboardingTask`](docs/sdks/task/README.md#createoffboardingtask) - Create Offboarding Task
- [`taskCreateResourceActionTask`](docs/sdks/task/README.md#createresourceactiontask) - Create Resource Action Task
- [`taskCreateRevokeTask`](docs/sdks/task/README.md#createrevoketask) - Create Revoke Task
- [`taskCreateSpendRemedyTask`](docs/sdks/task/README.md#createspendremedytask) - Create Spend Remedy Task
- [`taskGet`](docs/sdks/task/README.md#get) - Get
- [`taskGetSpendRemedyReview`](docs/sdks/task/README.md#getspendremedyreview) - Get Spend Remedy Review
- [`taskSearchSearch`](docs/sdks/tasksearch/README.md#search) - Search
- [`tenantAuthConfigCreate`](docs/sdks/tenantauthconfig/README.md#create) - Create
- [`tenantAuthConfigDelete`](docs/sdks/tenantauthconfig/README.md#delete) - Delete
- [`tenantAuthConfigGet`](docs/sdks/tenantauthconfig/README.md#get) - Get
- [`tenantAuthConfigList`](docs/sdks/tenantauthconfig/README.md#list) - List
- [`tenantAuthConfigUpdate`](docs/sdks/tenantauthconfig/README.md#update) - Update
- [`tenantEmailProviderGet`](docs/sdks/tenantemailprovider/README.md#get) - Get
- [`tenantEmailProviderSearchAuditEvents`](docs/sdks/tenantemailprovider/README.md#searchauditevents) - Search Audit Events
- [`tenantEmailProviderTest`](docs/sdks/tenantemailprovider/README.md#test) - Test
- [`tenantEmailProviderUpdate`](docs/sdks/tenantemailprovider/README.md#update) - Update
- [`terraformExportGetSchema`](docs/sdks/terraformexport/README.md#getschema) - Get Schema
- [`toolGatesCreate`](docs/sdks/toolgates/README.md#create) - Create
- [`toolGatesDelete`](docs/sdks/toolgates/README.md#delete) - Delete
- [`toolGatesGet`](docs/sdks/toolgates/README.md#get) - Get
- [`toolGatesList`](docs/sdks/toolgates/README.md#list) - List
- [`toolGatesSearchSearch`](docs/sdks/toolgatessearch/README.md#search) - Search
- [`toolGatesUpdate`](docs/sdks/toolgates/README.md#update) - Update
- [`tunnelCredentialsCreateBridge`](docs/sdks/tunnelcredentials/README.md#createbridge) - Create Bridge
- [`tunnelCredentialsCreateBridgeCredential`](docs/sdks/tunnelcredentials/README.md#createbridgecredential) - Create Bridge Credential
- [`tunnelCredentialsDeleteBridge`](docs/sdks/tunnelcredentials/README.md#deletebridge) - Delete Bridge
- [`tunnelCredentialsGetBridge`](docs/sdks/tunnelcredentials/README.md#getbridge) - Get Bridge
- [`tunnelCredentialsListBridgeAnnouncedServices`](docs/sdks/tunnelcredentials/README.md#listbridgeannouncedservices) - List Bridge Announced Services
- [`tunnelCredentialsListBridgeCredentials`](docs/sdks/tunnelcredentials/README.md#listbridgecredentials) - List Bridge Credentials
- [`tunnelCredentialsListBridges`](docs/sdks/tunnelcredentials/README.md#listbridges) - List Bridges
- [`tunnelCredentialsRevokeBridgeCredential`](docs/sdks/tunnelcredentials/README.md#revokebridgecredential) - Revoke Bridge Credential
- [`tunnelCredentialsUpdateBridge`](docs/sdks/tunnelcredentials/README.md#updatebridge) - Update Bridge
- [`uiConversationsEnsureOnboardingSession`](docs/sdks/uiconversations/README.md#ensureonboardingsession) - Ensure Onboarding Session
- [`userAttributeManagementCreate`](docs/sdks/userattributemanagement/README.md#create) - Create
- [`userAttributeManagementDelete`](docs/sdks/userattributemanagement/README.md#delete) - Delete
- [`userAttributeManagementGet`](docs/sdks/userattributemanagement/README.md#get) - Get
- [`userAttributeManagementList`](docs/sdks/userattributemanagement/README.md#list) - List
- [`userAttributeManagementListAttributeTypes`](docs/sdks/userattributemanagement/README.md#listattributetypes) - List Attribute Types
- [`userAttributeManagementUpdate`](docs/sdks/userattributemanagement/README.md#update) - Update
- [`userDeveloperPreferencesGet`](docs/sdks/userdeveloperpreferences/README.md#get) - Get
- [`userDeveloperPreferencesUpdate`](docs/sdks/userdeveloperpreferences/README.md#update) - Update
- [`userGet`](docs/sdks/user/README.md#get) - Get
- [`userGetUserProfileTypes`](docs/sdks/user/README.md#getuserprofiletypes) - Get User Profile Types
- [`userIntrospect`](docs/sdks/user/README.md#introspect) - Introspect
- [`userList`](docs/sdks/user/README.md#list) - List
- [`userNotificationSettingsGet`](docs/sdks/usernotificationsettings/README.md#get) - Get
- [`userNotificationSettingsUpdate`](docs/sdks/usernotificationsettings/README.md#update) - Update
- [`userOwnersV2CreateEntitlementOwner`](docs/sdks/userownersv2/README.md#createentitlementowner) - Create Entitlement Owner
- [`userOwnersV2CreateUserOwner`](docs/sdks/userownersv2/README.md#createuserowner) - Create User Owner
- [`userOwnersV2DeleteEntitlementOwner`](docs/sdks/userownersv2/README.md#deleteentitlementowner) - Delete Entitlement Owner
- [`userOwnersV2DeleteUserOwner`](docs/sdks/userownersv2/README.md#deleteuserowner) - Delete User Owner
- [`userOwnersV2SearchEntitlementOwners`](docs/sdks/userownersv2/README.md#searchentitlementowners) - Search Entitlement Owners
- [`userOwnersV2SearchUserOwners`](docs/sdks/userownersv2/README.md#searchuserowners) - Search User Owners
- [`userOwnersV2Set`](docs/sdks/userownersv2/README.md#set) - Set
- [`userSearchSearch`](docs/sdks/usersearch/README.md#search) - Search
- [`userSetExpiringUserDelegationBindingByAdmin`](docs/sdks/user/README.md#setexpiringuserdelegationbindingbyadmin) - Set Expiring User Delegation Binding By Admin
- [`vaultCreate`](docs/sdks/vault/README.md#create) - Create
- [`vaultDelete`](docs/sdks/vault/README.md#delete) - Delete
- [`vaultGet`](docs/sdks/vault/README.md#get) - Get
- [`vaultUpdate`](docs/sdks/vault/README.md#update) - Update
- [`virtualMCPServerCreate`](docs/sdks/virtualmcpserver/README.md#create) - Create
- [`virtualMCPServerDelete`](docs/sdks/virtualmcpserver/README.md#delete) - Delete
- [`virtualMCPServerGet`](docs/sdks/virtualmcpserver/README.md#get) - Get
- [`virtualMCPServerList`](docs/sdks/virtualmcpserver/README.md#list) - List
- [`virtualMCPServerMySearchSearch`](docs/sdks/virtualmcpservermysearch/README.md#search) - NOTE: Only shows Virtual MCP Servers available to the current user.
- [`virtualMCPServerUpdate`](docs/sdks/virtualmcpserver/README.md#update) - Update
- [`virtualMCPToolBindingCreateBindings`](docs/sdks/virtualmcptoolbinding/README.md#createbindings) - Create Bindings
- [`virtualMCPToolBindingDeleteBindings`](docs/sdks/virtualmcptoolbinding/README.md#deletebindings) - Delete Bindings
- [`virtualMCPToolBindingList`](docs/sdks/virtualmcptoolbinding/README.md#list) - List
- [`virtualMCPToolsetBindingCreateBindings`](docs/sdks/virtualmcptoolsetbinding/README.md#createbindings) - Create Bindings
- [`virtualMCPToolsetBindingDeleteBindings`](docs/sdks/virtualmcptoolsetbinding/README.md#deletebindings) - Delete Bindings
- [`virtualMCPToolsetBindingList`](docs/sdks/virtualmcptoolsetbinding/README.md#list) - List
- [`webhooksCreate`](docs/sdks/webhooks/README.md#create) - Create
- [`webhooksDelete`](docs/sdks/webhooks/README.md#delete) - Delete
- [`webhooksGet`](docs/sdks/webhooks/README.md#get) - Get
- [`webhooksList`](docs/sdks/webhooks/README.md#list) - List
- [`webhooksSearchSearch`](docs/sdks/webhookssearch/README.md#search) - Search
- [`webhooksTest`](docs/sdks/webhooks/README.md#test) - Test
- [`webhooksUpdate`](docs/sdks/webhooks/README.md#update) - Update
- [`workloadFederationCreateProvider`](docs/sdks/workloadfederation/README.md#createprovider) - Create Provider
- [`workloadFederationCreateTrust`](docs/sdks/workloadfederation/README.md#createtrust) - Create Trust
- [`workloadFederationDeleteProvider`](docs/sdks/workloadfederation/README.md#deleteprovider) - Delete Provider
- [`workloadFederationDeleteTrust`](docs/sdks/workloadfederation/README.md#deletetrust) - Delete Trust
- [`workloadFederationGetProvider`](docs/sdks/workloadfederation/README.md#getprovider) - Get Provider
- [`workloadFederationGetTrust`](docs/sdks/workloadfederation/README.md#gettrust) - Get Trust
- [`workloadFederationListProviders`](docs/sdks/workloadfederation/README.md#listproviders) - List Providers
- [`workloadFederationListTrusts`](docs/sdks/workloadfederation/README.md#listtrusts) - List Trusts
- [`workloadFederationSearchTrusts`](docs/sdks/workloadfederation/README.md#searchtrusts) - Search Trusts
- [`workloadFederationTestCEL`](docs/sdks/workloadfederation/README.md#testcel) - Test Cel
- [`workloadFederationTestToken`](docs/sdks/workloadfederation/README.md#testtoken) - Test Token
- [`workloadFederationUpdateProvider`](docs/sdks/workloadfederation/README.md#updateprovider) - Update Provider
- [`workloadFederationUpdateTrust`](docs/sdks/workloadfederation/README.md#updatetrust) - Update Trust
- [`xaaAccessProfileCreate`](docs/sdks/xaaaccessprofile/README.md#create) - Create
- [`xaaAccessProfileDelete`](docs/sdks/xaaaccessprofile/README.md#delete) - Delete
- [`xaaAccessProfileGet`](docs/sdks/xaaaccessprofile/README.md#get) - Get
- [`xaaAccessProfileGetByAppEntitlementId`](docs/sdks/xaaaccessprofile/README.md#getbyappentitlementid) - Get By App Entitlement Id
- [`xaaAccessProfileList`](docs/sdks/xaaaccessprofile/README.md#list) - List
- [`xaaAccessProfileListHistory`](docs/sdks/xaaaccessprofile/README.md#listhistory) - List History
- [`xaaAccessProfileScopeBindingCreateBindings`](docs/sdks/xaaaccessprofilescopebinding/README.md#createbindings) - Create Bindings
- [`xaaAccessProfileScopeBindingDeleteBindings`](docs/sdks/xaaaccessprofilescopebinding/README.md#deletebindings) - Delete Bindings
- [`xaaAccessProfileScopeBindingList`](docs/sdks/xaaaccessprofilescopebinding/README.md#list) - List
- [`xaaAccessProfileScopeBindingSearch`](docs/sdks/xaaaccessprofilescopebinding/README.md#search) - Search
- [`xaaAccessProfileSearch`](docs/sdks/xaaaccessprofile/README.md#search) - Search
- [`xaaAccessProfileUpdate`](docs/sdks/xaaaccessprofile/README.md#update) - Update
- [`xaaClientAudienceMappingCreate`](docs/sdks/xaaclientaudiencemapping/README.md#create) - Create
- [`xaaClientAudienceMappingDelete`](docs/sdks/xaaclientaudiencemapping/README.md#delete) - Delete
- [`xaaClientAudienceMappingGet`](docs/sdks/xaaclientaudiencemapping/README.md#get) - Get
- [`xaaClientAudienceMappingList`](docs/sdks/xaaclientaudiencemapping/README.md#list) - List
- [`xaaClientAudienceMappingListHistory`](docs/sdks/xaaclientaudiencemapping/README.md#listhistory) - List History
- [`xaaClientAudienceMappingSearch`](docs/sdks/xaaclientaudiencemapping/README.md#search) - Search
- [`xaaClientAudienceMappingUpdate`](docs/sdks/xaaclientaudiencemapping/README.md#update) - Update
- [`xaaResourceServerCreate`](docs/sdks/xaaresourceserver/README.md#create) - Create
- [`xaaResourceServerDelete`](docs/sdks/xaaresourceserver/README.md#delete) - Delete
- [`xaaResourceServerGet`](docs/sdks/xaaresourceserver/README.md#get) - Get
- [`xaaResourceServerList`](docs/sdks/xaaresourceserver/README.md#list) - List
- [`xaaResourceServerListHistory`](docs/sdks/xaaresourceserver/README.md#listhistory) - List History
- [`xaaResourceServerResyncScopes`](docs/sdks/xaaresourceserver/README.md#resyncscopes) - Resync Scopes
- [`xaaResourceServerSearch`](docs/sdks/xaaresourceserver/README.md#search) - Search
- [`xaaResourceServerUpdate`](docs/sdks/xaaresourceserver/README.md#update) - Update
- [`xaaScopeCreate`](docs/sdks/xaascope/README.md#create) - Create
- [`xaaScopeDelete`](docs/sdks/xaascope/README.md#delete) - Delete
- [`xaaScopeGet`](docs/sdks/xaascope/README.md#get) - Get
- [`xaaScopeList`](docs/sdks/xaascope/README.md#list) - List
- [`xaaScopeListHistory`](docs/sdks/xaascope/README.md#listhistory) - List History
- [`xaaScopeSearch`](docs/sdks/xaascope/README.md#search) - Search
- [`xaaScopeUpdate`](docs/sdks/xaascope/README.md#update) - Update
- [`xaaSettingsGet`](docs/sdks/xaasettings/README.md#get) - Get
- [`xaaSettingsListHistory`](docs/sdks/xaasettings/README.md#listhistory) - List History
- [`xaaSettingsUpdate`](docs/sdks/xaasettings/README.md#update) - Update
- ~~[`accessReviewSetupEntitlementSetCampaignScopeByExcludedResourceType`](docs/sdks/accessreviewsetupentitlement/README.md#setcampaignscopebyexcludedresourcetype)~~ - Set Campaign Scope By Excluded Resource Type :warning: **Deprecated**
- ~~[`accessReviewTemplateSetupEntitlementSetScopeByExcludedResourceType`](docs/sdks/accessreviewtemplatesetupentitlement/README.md#setscopebyexcludedresourcetype)~~ - Set Scope By Excluded Resource Type :warning: **Deprecated**
- ~~[`appEntitlementsListUsers`](docs/sdks/appentitlements/README.md#listusers)~~ - List Users :warning: **Deprecated**

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.appEntitlementSearch.search();

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.a2Ui.listSurfaces({
    conversationId: "<id>",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.a2Ui.listSurfaces({
    conversationId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`ConductoroneSDKTypescriptError`](./src/sdk/models/errors/conductoronesdktypescripterror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                            |
| ------------------- | ---------- | ------------------------------------------------------ |
| `error.message`     | `string`   | Error message                                          |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                     |
| `error.headers`     | `Headers`  | HTTP response headers                                  |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned. |
| `error.rawResponse` | `Response` | Raw HTTP response                                      |

### Example
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import * as errors from "conductorone-sdk-typescript/sdk/models/errors";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  try {
    const result = await conductoroneSDKTypescript.a2Ui.listSurfaces({
      conversationId: "<id>",
    });

    console.log(result);
  } catch (error) {
    if (error instanceof errors.ConductoroneSDKTypescriptError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`ConductoroneSDKTypescriptError`](./src/sdk/models/errors/conductoronesdktypescripterror.ts): The base class for HTTP error responses.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/sdk/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/sdk/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/sdk/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`ConductoroneSDKTypescriptError`](./src/sdk/models/errors/conductoronesdktypescripterror.ts)**:
* [`ResponseValidationError`](./src/sdk/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Server Variables

The default server `https://{tenantDomain}.conductor.one` contains variables and is set to `https://example.conductor.one` by default. To override default values, the following parameters are available when initializing the SDK client instance:

| Variable       | Parameter              | Default     | Description                                       |
| -------------- | ---------------------- | ----------- | ------------------------------------------------- |
| `tenantDomain` | `tenantDomain: string` | `"example"` | The domain of the tenant to use for this request. |

#### Example

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  serverIdx: 0,
  tenantDomain: "example",
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.a2Ui.listSurfaces({
    conversationId: "<id>",
  });

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const conductoroneSDKTypescript = new ConductoroneSDKTypescript({
  serverURL: "https://example.conductor.one",
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.a2Ui.listSurfaces({
    conversationId: "<id>",
  });

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { ProxyAgent } from "undici";
import { HTTPClient } from "conductorone-sdk-typescript/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new ConductoroneSDKTypescript({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";

const sdk = new ConductoroneSDKTypescript({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=conductorone-sdk-typescript&utm_campaign=typescript)
