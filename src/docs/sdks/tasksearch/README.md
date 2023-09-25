# TaskSearch

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
      "in",
    ],
  },
  accessReviewIds: [
    "nam",
  ],
  accountOwnerIds: [
    "earum",
  ],
  actorId: "officia",
  appEntitlementIds: [
    "laborum",
  ],
  appResourceIds: [
    "placeat",
  ],
  appResourceTypeIds: [
    "modi",
  ],
  appUserSubjectIds: [
    "voluptatibus",
  ],
  applicationIds: [
    "molestias",
  ],
  assigneesInIds: [
    "officiis",
  ],
  createdAfter: new Date("2020-09-15T19:18:40.244Z"),
  createdBefore: new Date("2022-04-21T03:20:35.575Z"),
  currentStep: TaskSearchRequestCurrentStep.TaskSearchCurrentStepUnspecified,
  emergencyStatus: TaskSearchRequestEmergencyStatus.All,
  excludeAppEntitlementIds: [
    "inventore",
  ],
  excludeIds: [
    "fugit",
  ],
  includeDeleted: false,
  myWorkUserIds: [
    "cumque",
  ],
  openerIds: [
    "quae",
  ],
  pageSize: 216.88,
  pageToken: "velit",
  previouslyActedOnIds: [
    "aspernatur",
  ],
  query: "eum",
  refs: [
    {
      id: "48dc2f61-5199-4ebf-90e9-fe6c632ca3ae",
    },
  ],
  sortBy: TaskSearchRequestSortBy.TaskSearchSortByReverseTicketId,
  subjectIds: [
    "consequatur",
  ],
  taskStates: [
    TaskSearchRequestTaskStates.TaskStateUnspecified,
  ],
  taskTypes: [
    {
      taskTypeCertify: {},
      taskTypeGrant: {
        taskGrantSource: {
          externalUrl: "et",
          integrationId: "ducimus",
        },
      },
      taskTypeRevoke: {
        taskRevokeSource: {
          taskRevokeSourceExpired: {
            expiredAt: new Date("2021-11-02T19:26:40.219Z"),
          },
          taskRevokeSourceNonUsage: {
            expiresAt: new Date("2022-10-04T19:57:36.428Z"),
            lastLogin: new Date("2022-10-31T07:20:14.068Z"),
          },
          taskRevokeSourceRequest: {
            requestUserId: "doloribus",
          },
          taskRevokeSourceReview: {
            accessReviewId: "nulla",
            certTicketId: "necessitatibus",
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

