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

ConductorOne API: The ConductorOne API is a HTTP API for managing ConductorOne resources.
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
  const result = await conductoroneSDKTypescript.accessConflict.createMonitor();

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
  const result = await conductoroneSDKTypescript.accessConflict.createMonitor();

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [accessConflict](docs/sdks/accessconflict/README.md)

* [createMonitor](docs/sdks/accessconflict/README.md#createmonitor) - Create Monitor
* [deleteMonitor](docs/sdks/accessconflict/README.md#deletemonitor) - Delete Monitor
* [getMonitor](docs/sdks/accessconflict/README.md#getmonitor) - Get Monitor
* [updateMonitor](docs/sdks/accessconflict/README.md#updatemonitor) - Update Monitor

### [accountProvisionPolicyTest](docs/sdks/accountprovisionpolicytest/README.md)

* [test](docs/sdks/accountprovisionpolicytest/README.md#test) - Test

### [appAccessRequestsDefaults](docs/sdks/appaccessrequestsdefaults/README.md)

* [getAppAccessRequestsDefaults](docs/sdks/appaccessrequestsdefaults/README.md#getappaccessrequestsdefaults) - Get App Access Requests Defaults
* [createAppAccessRequestsDefaults](docs/sdks/appaccessrequestsdefaults/README.md#createappaccessrequestsdefaults) - Create App Access Requests Defaults
* [cancelAppAccessRequestsDefaults](docs/sdks/appaccessrequestsdefaults/README.md#cancelappaccessrequestsdefaults) - Cancel App Access Requests Defaults

### [appEntitlementMonitorBinding](docs/sdks/appentitlementmonitorbinding/README.md)

* [deleteAppEntitlementMonitorBinding](docs/sdks/appentitlementmonitorbinding/README.md#deleteappentitlementmonitorbinding) - Delete App Entitlement Monitor Binding
* [createAppEntitlementMonitorBinding](docs/sdks/appentitlementmonitorbinding/README.md#createappentitlementmonitorbinding) - Create App Entitlement Monitor Binding
* [getAppEntitlementMonitorBinding](docs/sdks/appentitlementmonitorbinding/README.md#getappentitlementmonitorbinding) - Get App Entitlement Monitor Binding

### [appEntitlementOwners](docs/sdks/appentitlementowners/README.md)

* [listOwnerIDs](docs/sdks/appentitlementowners/README.md#listownerids) - List Owner I Ds
* [delete](docs/sdks/appentitlementowners/README.md#delete) - Delete
* [list](docs/sdks/appentitlementowners/README.md#list) - List
* [add](docs/sdks/appentitlementowners/README.md#add) - Add
* [set](docs/sdks/appentitlementowners/README.md#set) - Set
* [remove](docs/sdks/appentitlementowners/README.md#remove) - Remove

### [appEntitlements](docs/sdks/appentitlements/README.md)

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

### [appEntitlementSearch](docs/sdks/appentitlementsearch/README.md)

* [searchAppEntitlementsWithExpired](docs/sdks/appentitlementsearch/README.md#searchappentitlementswithexpired) - Search App Entitlements With Expired
* [searchAppEntitlementsForAppUser](docs/sdks/appentitlementsearch/README.md#searchappentitlementsforappuser) - Search App Entitlements For App User
* [search](docs/sdks/appentitlementsearch/README.md#search) - Search
* [searchGrants](docs/sdks/appentitlementsearch/README.md#searchgrants) - Search Grants

### [appEntitlementsProxy](docs/sdks/appentitlementsproxy/README.md)

* [delete](docs/sdks/appentitlementsproxy/README.md#delete) - Delete
* [get](docs/sdks/appentitlementsproxy/README.md#get) - Get
* [create](docs/sdks/appentitlementsproxy/README.md#create) - Create

### [appEntitlementUserBinding](docs/sdks/appentitlementuserbinding/README.md)

* [removeGrantDuration](docs/sdks/appentitlementuserbinding/README.md#removegrantduration) - Remove Grant Duration
* [updateGrantDuration](docs/sdks/appentitlementuserbinding/README.md#updategrantduration) - Update Grant Duration
* [listAppUsersForIdentityWithGrant](docs/sdks/appentitlementuserbinding/README.md#listappusersforidentitywithgrant) - List App Users For Identity With Grant
* [searchGrantFeed](docs/sdks/appentitlementuserbinding/README.md#searchgrantfeed) - Search Grant Feed
* [searchPastGrants](docs/sdks/appentitlementuserbinding/README.md#searchpastgrants) - Search Past Grants

### [appOwners](docs/sdks/appowners/README.md)

* [listOwnerIDs](docs/sdks/appowners/README.md#listownerids) - List Owner I Ds
* [delete](docs/sdks/appowners/README.md#delete) - Delete
* [list](docs/sdks/appowners/README.md#list) - List
* [set](docs/sdks/appowners/README.md#set) - Set
* [remove](docs/sdks/appowners/README.md#remove) - Remove
* [add](docs/sdks/appowners/README.md#add) - Add

### [appReport](docs/sdks/appreport/README.md)

* [list](docs/sdks/appreport/README.md#list) - List

### [appReportAction](docs/sdks/appreportaction/README.md)

* [generateReport](docs/sdks/appreportaction/README.md#generatereport) - Generate Report

### [appResource](docs/sdks/appresource/README.md)

* [list](docs/sdks/appresource/README.md#list) - List
* [createManuallyManagedAppResource](docs/sdks/appresource/README.md#createmanuallymanagedappresource) - Create Manually Managed App Resource
* [deleteManuallyManagedAppResource](docs/sdks/appresource/README.md#deletemanuallymanagedappresource) - Delete Manually Managed App Resource
* [get](docs/sdks/appresource/README.md#get) - Get
* [update](docs/sdks/appresource/README.md#update) - Update

### [appResourceOwners](docs/sdks/appresourceowners/README.md)

* [delete](docs/sdks/appresourceowners/README.md#delete) - Delete
* [listOwnerIDs](docs/sdks/appresourceowners/README.md#listownerids) - List Owner I Ds
* [remove](docs/sdks/appresourceowners/README.md#remove) - Remove
* [list](docs/sdks/appresourceowners/README.md#list) - List
* [add](docs/sdks/appresourceowners/README.md#add) - Add
* [set](docs/sdks/appresourceowners/README.md#set) - Set

### [appResourceSearch](docs/sdks/appresourcesearch/README.md)

* [searchAppResourceTypes](docs/sdks/appresourcesearch/README.md#searchappresourcetypes) - Search App Resource Types
* [searchAppResources](docs/sdks/appresourcesearch/README.md#searchappresources) - Search App Resources

### [appResourceType](docs/sdks/appresourcetype/README.md)

* [list](docs/sdks/appresourcetype/README.md#list) - List
* [createManuallyManagedResourceType](docs/sdks/appresourcetype/README.md#createmanuallymanagedresourcetype) - Create Manually Managed Resource Type
* [deleteManuallyManagedResourceType](docs/sdks/appresourcetype/README.md#deletemanuallymanagedresourcetype) - Delete Manually Managed Resource Type
* [get](docs/sdks/appresourcetype/README.md#get) - Get
* [updateManuallyManagedResourceType](docs/sdks/appresourcetype/README.md#updatemanuallymanagedresourcetype) - Update Manually Managed Resource Type

### [apps](docs/sdks/apps/README.md)

* [list](docs/sdks/apps/README.md#list) - List
* [create](docs/sdks/apps/README.md#create) - Create
* [delete](docs/sdks/apps/README.md#delete) - Delete
* [get](docs/sdks/apps/README.md#get) - Get
* [update](docs/sdks/apps/README.md#update) - Update

### [appSearch](docs/sdks/appsearch/README.md)

* [search](docs/sdks/appsearch/README.md#search) - Search

### [appUsageControls](docs/sdks/appusagecontrols/README.md)

* [get](docs/sdks/appusagecontrols/README.md#get) - Get
* [update](docs/sdks/appusagecontrols/README.md#update) - Update

### [appUser](docs/sdks/appuser/README.md)

* [list](docs/sdks/appuser/README.md#list) - List
* [listAppUserCredentials](docs/sdks/appuser/README.md#listappusercredentials) - List App User Credentials
* [listAppUsersForUser](docs/sdks/appuser/README.md#listappusersforuser) - List App Users For User
* [update](docs/sdks/appuser/README.md#update) - Update
* [search](docs/sdks/appuser/README.md#search) - Search

### [attributes](docs/sdks/attributes/README.md)

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

### [attributeSearch](docs/sdks/attributesearch/README.md)

* [searchAttributeValues](docs/sdks/attributesearch/README.md#searchattributevalues) - Search Attribute Values

### [auth](docs/sdks/auth/README.md)

* [introspect](docs/sdks/auth/README.md#introspect) - Introspect

### [automation](docs/sdks/automation/README.md)

* [listAutomations](docs/sdks/automation/README.md#listautomations) - List Automations
* [createAutomation](docs/sdks/automation/README.md#createautomation) - Create Automation
* [deleteAutomation](docs/sdks/automation/README.md#deleteautomation) - Delete Automation
* [getAutomation](docs/sdks/automation/README.md#getautomation) - Get Automation
* [updateAutomation](docs/sdks/automation/README.md#updateautomation) - Update Automation
* [executeAutomation](docs/sdks/automation/README.md#executeautomation) - Execute Automation

### [automationExecution](docs/sdks/automationexecution/README.md)

* [listAutomationExecutions](docs/sdks/automationexecution/README.md#listautomationexecutions) - List Automation Executions
* [getAutomationExecution](docs/sdks/automationexecution/README.md#getautomationexecution) - Get Automation Execution

### [automationExecutionActions](docs/sdks/automationexecutionactions/README.md)

* [terminateAutomation](docs/sdks/automationexecutionactions/README.md#terminateautomation) - Terminate Automation

### [automationExecutionSearch](docs/sdks/automationexecutionsearch/README.md)

* [searchAutomationExecutions](docs/sdks/automationexecutionsearch/README.md#searchautomationexecutions) - Search Automation Executions

### [automationSearch](docs/sdks/automationsearch/README.md)

* [searchAutomationTemplateVersions](docs/sdks/automationsearch/README.md#searchautomationtemplateversions) - Search Automation Template Versions
* [searchAutomations](docs/sdks/automationsearch/README.md#searchautomations) - Search Automations

### [awsExternalIDSettings](docs/sdks/awsexternalidsettings/README.md)

* [get](docs/sdks/awsexternalidsettings/README.md#get) - Get

### [connector](docs/sdks/connector/README.md)

* [list](docs/sdks/connector/README.md#list) - List
* [createDelegated](docs/sdks/connector/README.md#createdelegated) - Create Delegated
* [confirmSyncValid](docs/sdks/connector/README.md#confirmsyncvalid) - Confirm Sync Valid
* [getCredentials](docs/sdks/connector/README.md#getcredentials) - Get Credentials
* [revokeCredential](docs/sdks/connector/README.md#revokecredential) - Revoke Credential
* [forceSync](docs/sdks/connector/README.md#forcesync) - Force Sync
* [pauseSync](docs/sdks/connector/README.md#pausesync) - Pause Sync
* [resumeSync](docs/sdks/connector/README.md#resumesync) - Resume Sync
* [delete](docs/sdks/connector/README.md#delete) - Delete
* [get](docs/sdks/connector/README.md#get) - Get
* [update](docs/sdks/connector/README.md#update) - Update
* [create](docs/sdks/connector/README.md#create) - Create
* [updateDelegated](docs/sdks/connector/README.md#updatedelegated) - Update Delegated
* [rotateCredential](docs/sdks/connector/README.md#rotatecredential) - Rotate Credential
* [validateHTTPConnectorConfig](docs/sdks/connector/README.md#validatehttpconnectorconfig) - Validate Http Connector Config

### [connectorCatalog](docs/sdks/connectorcatalog/README.md)

* [configurationSchema](docs/sdks/connectorcatalog/README.md#configurationschema) - Configuration Schema

### [directory](docs/sdks/directory/README.md)

* [list](docs/sdks/directory/README.md#list) - List
* [create](docs/sdks/directory/README.md#create) - Create
* [delete](docs/sdks/directory/README.md#delete) - Delete
* [get](docs/sdks/directory/README.md#get) - Get
* [update](docs/sdks/directory/README.md#update) - Update

### [export](docs/sdks/export/README.md)

* [list](docs/sdks/export/README.md#list) - List
* [create](docs/sdks/export/README.md#create) - Create
* [delete](docs/sdks/export/README.md#delete) - Delete
* [get](docs/sdks/export/README.md#get) - Get
* [update](docs/sdks/export/README.md#update) - Update
* [listEvents](docs/sdks/export/README.md#listevents) - List Events

### [exportsSearch](docs/sdks/exportssearch/README.md)

* [search](docs/sdks/exportssearch/README.md#search) - Search

### [functions](docs/sdks/functions/README.md)

* [listFunctions](docs/sdks/functions/README.md#listfunctions) - List Functions
* [createFunction](docs/sdks/functions/README.md#createfunction) - Create Function
* [listCommits](docs/sdks/functions/README.md#listcommits) - List Commits
* [commit](docs/sdks/functions/README.md#commit) - Commit
* [getCommit](docs/sdks/functions/README.md#getcommit) - Get Commit
* [invoke](docs/sdks/functions/README.md#invoke) - Invoke
* [listTags](docs/sdks/functions/README.md#listtags) - List Tags
* [createTag](docs/sdks/functions/README.md#createtag) - Create Tag
* [deleteFunction](docs/sdks/functions/README.md#deletefunction) - Delete Function
* [getFunction](docs/sdks/functions/README.md#getfunction) - Get Function
* [updateFunction](docs/sdks/functions/README.md#updatefunction) - Update Function

### [functionsSearch](docs/sdks/functionssearch/README.md)

* [search](docs/sdks/functionssearch/README.md#search) - Search

### [orgDomain](docs/sdks/orgdomain/README.md)

* [list](docs/sdks/orgdomain/README.md#list) - List
* [update](docs/sdks/orgdomain/README.md#update) - Update

### [personalClient](docs/sdks/personalclient/README.md)

* [list](docs/sdks/personalclient/README.md#list) - NOTE: Only shows personal clients for the current user.
* [create](docs/sdks/personalclient/README.md#create) - Create
* [delete](docs/sdks/personalclient/README.md#delete) - Delete
* [get](docs/sdks/personalclient/README.md#get) - Get
* [update](docs/sdks/personalclient/README.md#update) - Update

### [personalClientSearch](docs/sdks/personalclientsearch/README.md)

* [search](docs/sdks/personalclientsearch/README.md#search) - NOTE: Searches personal clients for all users

### [policies](docs/sdks/policies/README.md)

* [list](docs/sdks/policies/README.md#list) - List
* [create](docs/sdks/policies/README.md#create) - Create
* [delete](docs/sdks/policies/README.md#delete) - Delete
* [get](docs/sdks/policies/README.md#get) - Get
* [update](docs/sdks/policies/README.md#update) - Update

### [policySearch](docs/sdks/policysearch/README.md)

* [search](docs/sdks/policysearch/README.md#search) - Search

### [policyValidate](docs/sdks/policyvalidate/README.md)

* [validateCEL](docs/sdks/policyvalidate/README.md#validatecel) - Validate Cel

### [requestCatalogManagement](docs/sdks/requestcatalogmanagement/README.md)

* [list](docs/sdks/requestcatalogmanagement/README.md#list) - List
* [create](docs/sdks/requestcatalogmanagement/README.md#create) - Create
* [listAllEntitlementIdsPerApp](docs/sdks/requestcatalogmanagement/README.md#listallentitlementidsperapp) - List All Entitlement Ids Per App
* [listEntitlementsPerCatalog](docs/sdks/requestcatalogmanagement/README.md#listentitlementspercatalog) - List Entitlements Per Catalog
* [updateAppEntitlements](docs/sdks/requestcatalogmanagement/README.md#updateappentitlements) - Update App Entitlements
* [removeAppEntitlements](docs/sdks/requestcatalogmanagement/README.md#removeappentitlements) - Remove App Entitlements
* [addAppEntitlements](docs/sdks/requestcatalogmanagement/README.md#addappentitlements) - Add App Entitlements
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

### [requestCatalogSearch](docs/sdks/requestcatalogsearch/README.md)

* [searchEntitlements](docs/sdks/requestcatalogsearch/README.md#searchentitlements) - Search Entitlements

### [roles](docs/sdks/roles/README.md)

* [list](docs/sdks/roles/README.md#list) - List
* [get](docs/sdks/roles/README.md#get) - Get
* [update](docs/sdks/roles/README.md#update) - Update

### [sessionSettings](docs/sdks/sessionsettings/README.md)

* [get](docs/sdks/sessionsettings/README.md#get) - Get
* [update](docs/sdks/sessionsettings/README.md#update) - Update
* [testSourceIP](docs/sdks/sessionsettings/README.md#testsourceip) - Test Source Ip

### [stepUpProvider](docs/sdks/stepupprovider/README.md)

* [search](docs/sdks/stepupprovider/README.md#search) - Search
* [list](docs/sdks/stepupprovider/README.md#list) - List
* [create](docs/sdks/stepupprovider/README.md#create) - Create
* [delete](docs/sdks/stepupprovider/README.md#delete) - Delete
* [get](docs/sdks/stepupprovider/README.md#get) - Get
* [update](docs/sdks/stepupprovider/README.md#update) - Update
* [updateSecret](docs/sdks/stepupprovider/README.md#updatesecret) - Update Secret
* [test](docs/sdks/stepupprovider/README.md#test) - Test

### [stepUpTransaction](docs/sdks/stepuptransaction/README.md)

* [search](docs/sdks/stepuptransaction/README.md#search) - Search
* [get](docs/sdks/stepuptransaction/README.md#get) - Get

### [systemLog](docs/sdks/systemlog/README.md)

* [listEvents](docs/sdks/systemlog/README.md#listevents) - List Events

### [task](docs/sdks/task/README.md)

* [createGrantTask](docs/sdks/task/README.md#creategranttask) - Create Grant Task
* [createOffboardingTask](docs/sdks/task/README.md#createoffboardingtask) - Create Offboarding Task
* [createRevokeTask](docs/sdks/task/README.md#createrevoketask) - Create Revoke Task
* [get](docs/sdks/task/README.md#get) - Get

### [taskActions](docs/sdks/taskactions/README.md)

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
* [skipStep](docs/sdks/taskactions/README.md#skipstep) - Skip Step
* [updateGrantDuration](docs/sdks/taskactions/README.md#updategrantduration) - Update Grant Duration
* [updateRequestData](docs/sdks/taskactions/README.md#updaterequestdata) - Update Request Data

### [taskAudit](docs/sdks/taskaudit/README.md)

* [list](docs/sdks/taskaudit/README.md#list) - List

### [taskSearch](docs/sdks/tasksearch/README.md)

* [search](docs/sdks/tasksearch/README.md#search) - Search

### [user](docs/sdks/user/README.md)

* [list](docs/sdks/user/README.md#list) - List
* [get](docs/sdks/user/README.md#get) - Get
* [getUserProfileTypes](docs/sdks/user/README.md#getuserprofiletypes) - Get User Profile Types

### [userSearch](docs/sdks/usersearch/README.md)

* [search](docs/sdks/usersearch/README.md#search) - Search

### [webhooks](docs/sdks/webhooks/README.md)

* [list](docs/sdks/webhooks/README.md#list) - List
* [create](docs/sdks/webhooks/README.md#create) - Create
* [delete](docs/sdks/webhooks/README.md#delete) - Delete
* [get](docs/sdks/webhooks/README.md#get) - Get
* [update](docs/sdks/webhooks/README.md#update) - Update
* [test](docs/sdks/webhooks/README.md#test) - Test

### [webhooksSearch](docs/sdks/webhookssearch/README.md)

* [search](docs/sdks/webhookssearch/README.md#search) - Search

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

- [`accessConflictCreateMonitor`](docs/sdks/accessconflict/README.md#createmonitor) - Create Monitor
- [`accessConflictDeleteMonitor`](docs/sdks/accessconflict/README.md#deletemonitor) - Delete Monitor
- [`accessConflictGetMonitor`](docs/sdks/accessconflict/README.md#getmonitor) - Get Monitor
- [`accessConflictUpdateMonitor`](docs/sdks/accessconflict/README.md#updatemonitor) - Update Monitor
- [`accountProvisionPolicyTestTest`](docs/sdks/accountprovisionpolicytest/README.md#test) - Test
- [`appAccessRequestsDefaultsCancelAppAccessRequestsDefaults`](docs/sdks/appaccessrequestsdefaults/README.md#cancelappaccessrequestsdefaults) - Cancel App Access Requests Defaults
- [`appAccessRequestsDefaultsCreateAppAccessRequestsDefaults`](docs/sdks/appaccessrequestsdefaults/README.md#createappaccessrequestsdefaults) - Create App Access Requests Defaults
- [`appAccessRequestsDefaultsGetAppAccessRequestsDefaults`](docs/sdks/appaccessrequestsdefaults/README.md#getappaccessrequestsdefaults) - Get App Access Requests Defaults
- [`appEntitlementMonitorBindingCreateAppEntitlementMonitorBinding`](docs/sdks/appentitlementmonitorbinding/README.md#createappentitlementmonitorbinding) - Create App Entitlement Monitor Binding
- [`appEntitlementMonitorBindingDeleteAppEntitlementMonitorBinding`](docs/sdks/appentitlementmonitorbinding/README.md#deleteappentitlementmonitorbinding) - Delete App Entitlement Monitor Binding
- [`appEntitlementMonitorBindingGetAppEntitlementMonitorBinding`](docs/sdks/appentitlementmonitorbinding/README.md#getappentitlementmonitorbinding) - Get App Entitlement Monitor Binding
- [`appEntitlementOwnersAdd`](docs/sdks/appentitlementowners/README.md#add) - Add
- [`appEntitlementOwnersDelete`](docs/sdks/appentitlementowners/README.md#delete) - Delete
- [`appEntitlementOwnersList`](docs/sdks/appentitlementowners/README.md#list) - List
- [`appEntitlementOwnersListOwnerIDs`](docs/sdks/appentitlementowners/README.md#listownerids) - List Owner I Ds
- [`appEntitlementOwnersRemove`](docs/sdks/appentitlementowners/README.md#remove) - Remove
- [`appEntitlementOwnersSet`](docs/sdks/appentitlementowners/README.md#set) - Set
- [`appEntitlementsAddAutomationExclusion`](docs/sdks/appentitlements/README.md#addautomationexclusion) - Add Automation Exclusion
- [`appEntitlementsAddManuallyManagedMembers`](docs/sdks/appentitlements/README.md#addmanuallymanagedmembers) - Add Manually Managed Members
- [`appEntitlementsCreate`](docs/sdks/appentitlements/README.md#create) - Create
- [`appEntitlementsCreateAutomation`](docs/sdks/appentitlements/README.md#createautomation) - Create Automation
- [`appEntitlementsDelete`](docs/sdks/appentitlements/README.md#delete) - Delete
- [`appEntitlementsDeleteAutomation`](docs/sdks/appentitlements/README.md#deleteautomation) - Delete Automation
- [`appEntitlementSearchSearch`](docs/sdks/appentitlementsearch/README.md#search) - Search
- [`appEntitlementSearchSearchAppEntitlementsForAppUser`](docs/sdks/appentitlementsearch/README.md#searchappentitlementsforappuser) - Search App Entitlements For App User
- [`appEntitlementSearchSearchAppEntitlementsWithExpired`](docs/sdks/appentitlementsearch/README.md#searchappentitlementswithexpired) - Search App Entitlements With Expired
- [`appEntitlementSearchSearchGrants`](docs/sdks/appentitlementsearch/README.md#searchgrants) - Search Grants
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
- [`appOwnersAdd`](docs/sdks/appowners/README.md#add) - Add
- [`appOwnersDelete`](docs/sdks/appowners/README.md#delete) - Delete
- [`appOwnersList`](docs/sdks/appowners/README.md#list) - List
- [`appOwnersListOwnerIDs`](docs/sdks/appowners/README.md#listownerids) - List Owner I Ds
- [`appOwnersRemove`](docs/sdks/appowners/README.md#remove) - Remove
- [`appOwnersSet`](docs/sdks/appowners/README.md#set) - Set
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
- [`appsGet`](docs/sdks/apps/README.md#get) - Get
- [`appsList`](docs/sdks/apps/README.md#list) - List
- [`appsUpdate`](docs/sdks/apps/README.md#update) - Update
- [`appUsageControlsGet`](docs/sdks/appusagecontrols/README.md#get) - Get
- [`appUsageControlsUpdate`](docs/sdks/appusagecontrols/README.md#update) - Update
- [`appUserList`](docs/sdks/appuser/README.md#list) - List
- [`appUserListAppUserCredentials`](docs/sdks/appuser/README.md#listappusercredentials) - List App User Credentials
- [`appUserListAppUsersForUser`](docs/sdks/appuser/README.md#listappusersforuser) - List App Users For User
- [`appUserSearch`](docs/sdks/appuser/README.md#search) - Search
- [`appUserUpdate`](docs/sdks/appuser/README.md#update) - Update
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
- [`automationCreateAutomation`](docs/sdks/automation/README.md#createautomation) - Create Automation
- [`automationDeleteAutomation`](docs/sdks/automation/README.md#deleteautomation) - Delete Automation
- [`automationExecuteAutomation`](docs/sdks/automation/README.md#executeautomation) - Execute Automation
- [`automationExecutionActionsTerminateAutomation`](docs/sdks/automationexecutionactions/README.md#terminateautomation) - Terminate Automation
- [`automationExecutionGetAutomationExecution`](docs/sdks/automationexecution/README.md#getautomationexecution) - Get Automation Execution
- [`automationExecutionListAutomationExecutions`](docs/sdks/automationexecution/README.md#listautomationexecutions) - List Automation Executions
- [`automationExecutionSearchSearchAutomationExecutions`](docs/sdks/automationexecutionsearch/README.md#searchautomationexecutions) - Search Automation Executions
- [`automationGetAutomation`](docs/sdks/automation/README.md#getautomation) - Get Automation
- [`automationListAutomations`](docs/sdks/automation/README.md#listautomations) - List Automations
- [`automationSearchSearchAutomations`](docs/sdks/automationsearch/README.md#searchautomations) - Search Automations
- [`automationSearchSearchAutomationTemplateVersions`](docs/sdks/automationsearch/README.md#searchautomationtemplateversions) - Search Automation Template Versions
- [`automationUpdateAutomation`](docs/sdks/automation/README.md#updateautomation) - Update Automation
- [`awsExternalIDSettingsGet`](docs/sdks/awsexternalidsettings/README.md#get) - Get
- [`connectorCatalogConfigurationSchema`](docs/sdks/connectorcatalog/README.md#configurationschema) - Configuration Schema
- [`connectorConfirmSyncValid`](docs/sdks/connector/README.md#confirmsyncvalid) - Confirm Sync Valid
- [`connectorCreate`](docs/sdks/connector/README.md#create) - Create
- [`connectorCreateDelegated`](docs/sdks/connector/README.md#createdelegated) - Create Delegated
- [`connectorDelete`](docs/sdks/connector/README.md#delete) - Delete
- [`connectorForceSync`](docs/sdks/connector/README.md#forcesync) - Force Sync
- [`connectorGet`](docs/sdks/connector/README.md#get) - Get
- [`connectorGetCredentials`](docs/sdks/connector/README.md#getcredentials) - Get Credentials
- [`connectorList`](docs/sdks/connector/README.md#list) - List
- [`connectorPauseSync`](docs/sdks/connector/README.md#pausesync) - Pause Sync
- [`connectorResumeSync`](docs/sdks/connector/README.md#resumesync) - Resume Sync
- [`connectorRevokeCredential`](docs/sdks/connector/README.md#revokecredential) - Revoke Credential
- [`connectorRotateCredential`](docs/sdks/connector/README.md#rotatecredential) - Rotate Credential
- [`connectorUpdate`](docs/sdks/connector/README.md#update) - Update
- [`connectorUpdateDelegated`](docs/sdks/connector/README.md#updatedelegated) - Update Delegated
- [`connectorValidateHTTPConnectorConfig`](docs/sdks/connector/README.md#validatehttpconnectorconfig) - Validate Http Connector Config
- [`directoryCreate`](docs/sdks/directory/README.md#create) - Create
- [`directoryDelete`](docs/sdks/directory/README.md#delete) - Delete
- [`directoryGet`](docs/sdks/directory/README.md#get) - Get
- [`directoryList`](docs/sdks/directory/README.md#list) - List
- [`directoryUpdate`](docs/sdks/directory/README.md#update) - Update
- [`exportCreate`](docs/sdks/export/README.md#create) - Create
- [`exportDelete`](docs/sdks/export/README.md#delete) - Delete
- [`exportGet`](docs/sdks/export/README.md#get) - Get
- [`exportList`](docs/sdks/export/README.md#list) - List
- [`exportListEvents`](docs/sdks/export/README.md#listevents) - List Events
- [`exportsSearchSearch`](docs/sdks/exportssearch/README.md#search) - Search
- [`exportUpdate`](docs/sdks/export/README.md#update) - Update
- [`functionsCommit`](docs/sdks/functions/README.md#commit) - Commit
- [`functionsCreateFunction`](docs/sdks/functions/README.md#createfunction) - Create Function
- [`functionsCreateTag`](docs/sdks/functions/README.md#createtag) - Create Tag
- [`functionsDeleteFunction`](docs/sdks/functions/README.md#deletefunction) - Delete Function
- [`functionsGetCommit`](docs/sdks/functions/README.md#getcommit) - Get Commit
- [`functionsGetFunction`](docs/sdks/functions/README.md#getfunction) - Get Function
- [`functionsInvoke`](docs/sdks/functions/README.md#invoke) - Invoke
- [`functionsListCommits`](docs/sdks/functions/README.md#listcommits) - List Commits
- [`functionsListFunctions`](docs/sdks/functions/README.md#listfunctions) - List Functions
- [`functionsListTags`](docs/sdks/functions/README.md#listtags) - List Tags
- [`functionsSearchSearch`](docs/sdks/functionssearch/README.md#search) - Search
- [`functionsUpdateFunction`](docs/sdks/functions/README.md#updatefunction) - Update Function
- [`orgDomainList`](docs/sdks/orgdomain/README.md#list) - List
- [`orgDomainUpdate`](docs/sdks/orgdomain/README.md#update) - Update
- [`personalClientCreate`](docs/sdks/personalclient/README.md#create) - Create
- [`personalClientDelete`](docs/sdks/personalclient/README.md#delete) - Delete
- [`personalClientGet`](docs/sdks/personalclient/README.md#get) - Get
- [`personalClientList`](docs/sdks/personalclient/README.md#list) - NOTE: Only shows personal clients for the current user.
- [`personalClientSearchSearch`](docs/sdks/personalclientsearch/README.md#search) - NOTE: Searches personal clients for all users
- [`personalClientUpdate`](docs/sdks/personalclient/README.md#update) - Update
- [`policiesCreate`](docs/sdks/policies/README.md#create) - Create
- [`policiesDelete`](docs/sdks/policies/README.md#delete) - Delete
- [`policiesGet`](docs/sdks/policies/README.md#get) - Get
- [`policiesList`](docs/sdks/policies/README.md#list) - List
- [`policiesUpdate`](docs/sdks/policies/README.md#update) - Update
- [`policySearchSearch`](docs/sdks/policysearch/README.md#search) - Search
- [`policyValidateValidateCEL`](docs/sdks/policyvalidate/README.md#validatecel) - Validate Cel
- [`requestCatalogManagementAddAccessEntitlements`](docs/sdks/requestcatalogmanagement/README.md#addaccessentitlements) - Add Access Entitlements
- [`requestCatalogManagementAddAppEntitlements`](docs/sdks/requestcatalogmanagement/README.md#addappentitlements) - Add App Entitlements
- [`requestCatalogManagementCreate`](docs/sdks/requestcatalogmanagement/README.md#create) - Create
- [`requestCatalogManagementCreateBundleAutomation`](docs/sdks/requestcatalogmanagement/README.md#createbundleautomation) - Create Bundle Automation
- [`requestCatalogManagementDelete`](docs/sdks/requestcatalogmanagement/README.md#delete) - Delete
- [`requestCatalogManagementDeleteBundleAutomation`](docs/sdks/requestcatalogmanagement/README.md#deletebundleautomation) - Delete Bundle Automation
- [`requestCatalogManagementForceRunBundleAutomation`](docs/sdks/requestcatalogmanagement/README.md#forcerunbundleautomation) - Force Run Bundle Automation
- [`requestCatalogManagementGet`](docs/sdks/requestcatalogmanagement/README.md#get) - Get
- [`requestCatalogManagementGetBundleAutomation`](docs/sdks/requestcatalogmanagement/README.md#getbundleautomation) - Get Bundle Automation
- [`requestCatalogManagementList`](docs/sdks/requestcatalogmanagement/README.md#list) - List
- [`requestCatalogManagementListAllEntitlementIdsPerApp`](docs/sdks/requestcatalogmanagement/README.md#listallentitlementidsperapp) - List All Entitlement Ids Per App
- [`requestCatalogManagementListEntitlementsForAccess`](docs/sdks/requestcatalogmanagement/README.md#listentitlementsforaccess) - List Entitlements For Access
- [`requestCatalogManagementListEntitlementsPerCatalog`](docs/sdks/requestcatalogmanagement/README.md#listentitlementspercatalog) - List Entitlements Per Catalog
- [`requestCatalogManagementRemoveAccessEntitlements`](docs/sdks/requestcatalogmanagement/README.md#removeaccessentitlements) - Remove Access Entitlements
- [`requestCatalogManagementRemoveAppEntitlements`](docs/sdks/requestcatalogmanagement/README.md#removeappentitlements) - Remove App Entitlements
- [`requestCatalogManagementResumePausedBundleAutomation`](docs/sdks/requestcatalogmanagement/README.md#resumepausedbundleautomation) - Resume Paused Bundle Automation
- [`requestCatalogManagementSetBundleAutomation`](docs/sdks/requestcatalogmanagement/README.md#setbundleautomation) - Set Bundle Automation
- [`requestCatalogManagementUpdate`](docs/sdks/requestcatalogmanagement/README.md#update) - Update
- [`requestCatalogManagementUpdateAppEntitlements`](docs/sdks/requestcatalogmanagement/README.md#updateappentitlements) - Update App Entitlements
- [`requestCatalogSearchSearchEntitlements`](docs/sdks/requestcatalogsearch/README.md#searchentitlements) - Search Entitlements
- [`rolesGet`](docs/sdks/roles/README.md#get) - Get
- [`rolesList`](docs/sdks/roles/README.md#list) - List
- [`rolesUpdate`](docs/sdks/roles/README.md#update) - Update
- [`sessionSettingsGet`](docs/sdks/sessionsettings/README.md#get) - Get
- [`sessionSettingsTestSourceIP`](docs/sdks/sessionsettings/README.md#testsourceip) - Test Source Ip
- [`sessionSettingsUpdate`](docs/sdks/sessionsettings/README.md#update) - Update
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
- [`taskActionsSkipStep`](docs/sdks/taskactions/README.md#skipstep) - Skip Step
- [`taskActionsUpdateGrantDuration`](docs/sdks/taskactions/README.md#updategrantduration) - Update Grant Duration
- [`taskActionsUpdateRequestData`](docs/sdks/taskactions/README.md#updaterequestdata) - Update Request Data
- [`taskAuditList`](docs/sdks/taskaudit/README.md#list) - List
- [`taskCreateGrantTask`](docs/sdks/task/README.md#creategranttask) - Create Grant Task
- [`taskCreateOffboardingTask`](docs/sdks/task/README.md#createoffboardingtask) - Create Offboarding Task
- [`taskCreateRevokeTask`](docs/sdks/task/README.md#createrevoketask) - Create Revoke Task
- [`taskGet`](docs/sdks/task/README.md#get) - Get
- [`taskSearchSearch`](docs/sdks/tasksearch/README.md#search) - Search
- [`userGet`](docs/sdks/user/README.md#get) - Get
- [`userGetUserProfileTypes`](docs/sdks/user/README.md#getuserprofiletypes) - Get User Profile Types
- [`userList`](docs/sdks/user/README.md#list) - List
- [`userSearchSearch`](docs/sdks/usersearch/README.md#search) - Search
- [`webhooksCreate`](docs/sdks/webhooks/README.md#create) - Create
- [`webhooksDelete`](docs/sdks/webhooks/README.md#delete) - Delete
- [`webhooksGet`](docs/sdks/webhooks/README.md#get) - Get
- [`webhooksList`](docs/sdks/webhooks/README.md#list) - List
- [`webhooksSearchSearch`](docs/sdks/webhookssearch/README.md#search) - Search
- [`webhooksTest`](docs/sdks/webhooks/README.md#test) - Test
- [`webhooksUpdate`](docs/sdks/webhooks/README.md#update) - Update
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
  const result = await conductoroneSDKTypescript.accessConflict.createMonitor({
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
  const result = await conductoroneSDKTypescript.accessConflict.createMonitor();

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
    const result = await conductoroneSDKTypescript.accessConflict
      .createMonitor();

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
  tenantDomain: "<value>",
  security: {
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
    oauth: "<YOUR_OAUTH_HERE>",
  },
});

async function run() {
  const result = await conductoroneSDKTypescript.accessConflict.createMonitor();

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
  const result = await conductoroneSDKTypescript.accessConflict.createMonitor();

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

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { HTTPClient } from "conductorone-sdk-typescript/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
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
