# conductorone-sdk-typescript

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://github.com/ConductorOne/conductorone-sdk-typescript
```

### Yarn

```bash
yarn add https://github.com/ConductorOne/conductorone-sdk-typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import {
  C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse,
} from "conductorone-sdk-typescript/dist/sdk/models/operations";

const sdk = new ConductoroneSDKTypescript();

sdk.appEntitlementUserBinding.listAppUsersForIdentityWithGrant({
  appEntitlementId: "corrupti",
  appId: "provident",
  identityUserId: "distinctio",
}).then((res: C1ApiAppV1AppEntitlementUserBindingServiceListAppUsersForIdentityWithGrantResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [appEntitlementUserBinding](docs/sdks/appentitlementuserbinding/README.md)

* [listAppUsersForIdentityWithGrant](docs/sdks/appentitlementuserbinding/README.md#listappusersforidentitywithgrant) - Invokes the c1.api.app.v1.AppEntitlementUserBindingService.ListAppUsersForIdentityWithGrant method.

### [appEntitlements](docs/sdks/appentitlements/README.md)

* [get](docs/sdks/appentitlements/README.md#get) - Invokes the c1.api.app.v1.AppEntitlements.Get method.

### [appOwners](docs/sdks/appowners/README.md)

* [add](docs/sdks/appowners/README.md#add) - Invokes the c1.api.app.v1.AppOwners.Add method.
* [list](docs/sdks/appowners/README.md#list) - Invokes the c1.api.app.v1.AppOwners.List method.
* [remove](docs/sdks/appowners/README.md#remove) - Invokes the c1.api.app.v1.AppOwners.Remove method.

### [appReport](docs/sdks/appreport/README.md)

* [list](docs/sdks/appreport/README.md#list) - Invokes the c1.api.app.v1.AppReportService.List method.

### [appReportAction](docs/sdks/appreportaction/README.md)

* [generateReport](docs/sdks/appreportaction/README.md#generatereport) - Invokes the c1.api.app.v1.AppReportActionService.GenerateReport method.

### [appResource](docs/sdks/appresource/README.md)

* [get](docs/sdks/appresource/README.md#get) - Invokes the c1.api.app.v1.AppResourceService.Get method.
* [list](docs/sdks/appresource/README.md#list) - Invokes the c1.api.app.v1.AppResourceService.List method.

### [appResourceOwners](docs/sdks/appresourceowners/README.md)

* [list](docs/sdks/appresourceowners/README.md#list) - Invokes the c1.api.app.v1.AppResourceOwners.List method.

### [appResourceSearch](docs/sdks/appresourcesearch/README.md)

* [searchAppResourceTypes](docs/sdks/appresourcesearch/README.md#searchappresourcetypes) - Invokes the c1.api.app.v1.AppResourceSearch.SearchAppResourceTypes method.

### [appResourceType](docs/sdks/appresourcetype/README.md)

* [get](docs/sdks/appresourcetype/README.md#get) - Invokes the c1.api.app.v1.AppResourceTypeService.Get method.
* [list](docs/sdks/appresourcetype/README.md#list) - Invokes the c1.api.app.v1.AppResourceTypeService.List method.

### [appSearch](docs/sdks/appsearch/README.md)

* [search](docs/sdks/appsearch/README.md#search) - Invokes the c1.api.app.v1.AppSearch.Search method.

### [appUsageControls](docs/sdks/appusagecontrols/README.md)

* [get](docs/sdks/appusagecontrols/README.md#get) - Invokes the c1.api.app.v1.AppUsageControlsService.Get method.
* [update](docs/sdks/appusagecontrols/README.md#update) - Invokes the c1.api.app.v1.AppUsageControlsService.Update method.

### [apps](docs/sdks/apps/README.md)

* [get](docs/sdks/apps/README.md#get) - Invokes the c1.api.app.v1.Apps.Get method.
* [list](docs/sdks/apps/README.md#list) - Invokes the c1.api.app.v1.Apps.List method.

### [auth](docs/sdks/auth/README.md)

* [introspect](docs/sdks/auth/README.md#introspect) - Invokes the c1.api.auth.v1.Auth.Introspect method.

### [directory](docs/sdks/directory/README.md)

* [create](docs/sdks/directory/README.md#create) - Invokes the c1.api.directory.v1.DirectoryService.Create method.
* [delete](docs/sdks/directory/README.md#delete) - Invokes the c1.api.directory.v1.DirectoryService.Delete method.
* [get](docs/sdks/directory/README.md#get) - Invokes the c1.api.directory.v1.DirectoryService.Get method.
* [list](docs/sdks/directory/README.md#list) - Invokes the c1.api.directory.v1.DirectoryService.List method.

### [personalClient](docs/sdks/personalclient/README.md)

* [create](docs/sdks/personalclient/README.md#create) - Invokes the c1.api.iam.v1.PersonalClientService.Create method.

### [policies](docs/sdks/policies/README.md)

* [create](docs/sdks/policies/README.md#create) - Invokes the c1.api.policy.v1.Policies.Create method.
* [delete](docs/sdks/policies/README.md#delete) - Invokes the c1.api.policy.v1.Policies.Delete method.
* [get](docs/sdks/policies/README.md#get) - Invokes the c1.api.policy.v1.Policies.Get method.
* [list](docs/sdks/policies/README.md#list) - Invokes the c1.api.policy.v1.Policies.List method.
* [update](docs/sdks/policies/README.md#update) - Invokes the c1.api.policy.v1.Policies.Update method.

### [requestCatalogSearch](docs/sdks/requestcatalogsearch/README.md)

* [searchEntitlements](docs/sdks/requestcatalogsearch/README.md#searchentitlements) - Invokes the c1.api.requestcatalog.v1.RequestCatalogSearchService.SearchEntitlements method.

### [roles](docs/sdks/roles/README.md)

* [get](docs/sdks/roles/README.md#get) - Invokes the c1.api.iam.v1.Roles.Get method.
* [list](docs/sdks/roles/README.md#list) - Invokes the c1.api.iam.v1.Roles.List method.
* [update](docs/sdks/roles/README.md#update) - Invokes the c1.api.iam.v1.Roles.Update method.

### [task](docs/sdks/task/README.md)

* [createGrantTask](docs/sdks/task/README.md#creategranttask) - Invokes the c1.api.task.v1.TaskService.CreateGrantTask method.
* [createRevokeTask](docs/sdks/task/README.md#createrevoketask) - Invokes the c1.api.task.v1.TaskService.CreateRevokeTask method.
* [get](docs/sdks/task/README.md#get) - Invokes the c1.api.task.v1.TaskService.Get method.

### [taskActions](docs/sdks/taskactions/README.md)

* [approve](docs/sdks/taskactions/README.md#approve) - Invokes the c1.api.task.v1.TaskActionsService.Approve method.
* [comment](docs/sdks/taskactions/README.md#comment) - Invokes the c1.api.task.v1.TaskActionsService.Comment method.
* [deny](docs/sdks/taskactions/README.md#deny) - Invokes the c1.api.task.v1.TaskActionsService.Deny method.

### [taskSearch](docs/sdks/tasksearch/README.md)

* [search](docs/sdks/tasksearch/README.md#search) - Invokes the c1.api.task.v1.TaskSearchService.Search method.

### [user](docs/sdks/user/README.md)

* [get](docs/sdks/user/README.md#get) - Invokes the c1.api.user.v1.UserService.Get method.
* [list](docs/sdks/user/README.md#list) - Invokes the c1.api.user.v1.UserService.List method.

### [userSearch](docs/sdks/usersearch/README.md)

* [search](docs/sdks/usersearch/README.md#search) - Invokes the c1.api.user.v1.UserSearch.Search method.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
