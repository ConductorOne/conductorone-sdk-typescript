# taskSearch

### Available Operations

* [search](#search) - Search

## search

Search tasks based on filters specified in the request body.

### Example Usage

```typescript
import { ConductoroneSDKTypescript } from "conductorone-sdk-typescript";
import { C1ApiTaskV1TaskSearchServiceSearchResponse } from "conductorone-sdk-typescript/dist/sdk/models/operations";
import {
  TaskSearchRequestCurrentStep,
  TaskSearchRequestEmergencyStatus,
  TaskSearchRequestSortBy,
  TaskSearchRequestTaskStates,
} from "conductorone-sdk-typescript/dist/sdk/models/shared";

const sdk = new ConductoroneSDKTypescript({
  security: {
    bearerAuth: "",
    oauth: "",
  },
});

sdk.taskSearch.search({
  taskExpandMask: {
    paths: [
      "aliquid",
    ],
  },
  accessReviewIds: [
    "accusantium",
  ],
  accountOwnerIds: [
    "repellat",
  ],
  actorId: "doloribus",
  appEntitlementIds: [
    "ullam",
  ],
  appResourceIds: [
    "in",
  ],
  appResourceTypeIds: [
    "nam",
  ],
  appUserSubjectIds: [
    "earum",
  ],
  applicationIds: [
    "officia",
  ],
  assigneesInIds: [
    "laborum",
  ],
  createdAfter: new Date("2022-03-14T23:12:21.252Z"),
  createdBefore: new Date("2021-04-23T08:23:19.189Z"),
  currentStep: TaskSearchRequestCurrentStep.TaskSearchCurrentStepProvision,
  emergencyStatus: TaskSearchRequestEmergencyStatus.Emergency,
  excludeAppEntitlementIds: [
    "cumque",
  ],
  excludeIds: [
    "vitae",
  ],
  includeDeleted: false,
  myWorkUserIds: [
    "rerum",
  ],
  openerIds: [
    "tempora",
  ],
  pageSize: 3354.98,
  pageToken: "inventore",
  previouslyActedOnIds: [
    "fugit",
  ],
  query: "cumque",
  refs: [
    {
      id: "1032648d-c2f6-4151-99eb-fd0e9fe6c632",
    },
  ],
  sortBy: TaskSearchRequestSortBy.TaskSearchSortByAccountOwner,
  subjectIds: [
    "fuga",
  ],
  taskStates: [
    TaskSearchRequestTaskStates.TaskStateUnspecified,
  ],
  taskTypes: [
    {
      taskTypeCertify: {},
      taskTypeGrant: {
        taskGrantSource: {
          externalUrl: "animi",
          integrationId: "necessitatibus",
        },
      },
      taskTypeRevoke: {
        taskRevokeSource: {
          taskRevokeSourceExpired: {
            expiredAt: new Date("2022-12-22T05:17:09.936Z"),
          },
          taskRevokeSourceNonUsage: {
            expiresAt: new Date("2022-11-29T01:33:31.768Z"),
            lastLogin: new Date("2022-05-19T23:57:30.950Z"),
          },
          taskRevokeSourceRequest: {
            requestUserId: "occaecati",
          },
          taskRevokeSourceReview: {
            accessReviewId: "suscipit",
            certTicketId: "adipisci",
          },
        },
      },
    },
  ],
}).then((res: C1ApiTaskV1TaskSearchServiceSearchResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.TaskSearchRequestInput](../../models/shared/tasksearchrequestinput.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.C1ApiTaskV1TaskSearchServiceSearchResponse](../../models/operations/c1apitaskv1tasksearchservicesearchresponse.md)>**

