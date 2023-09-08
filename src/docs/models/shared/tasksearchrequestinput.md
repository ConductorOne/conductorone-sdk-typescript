# TaskSearchRequestInput

 Search for tasks based on a plethora filters.



## Fields

| Field                                                                                                                                                                                                                           | Type                                                                                                                                                                                                                            | Required                                                                                                                                                                                                                        | Description                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `taskExpandMask`                                                                                                                                                                                                                | [TaskExpandMask](../../models/shared/taskexpandmask.md)                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                              |  The task expand mask is an array of strings that specifes the related objects the requester wishes to have returned when making a request where the expand mask is part of the input. Use '*' to view all possible responses.<br/> |
| `accessReviewIds`                                                                                                                                                                                                               | *string*[]                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                              |  Search tasks that belong to any of the access reviews included in this list.<br/>                                                                                                                                              |
| `accountOwnerIds`                                                                                                                                                                                                               | *string*[]                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                              |  Search tasks that have any of these account owners.<br/>                                                                                                                                                                       |
| `actorId`                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                              |  Search tasks that have this actor ID.<br/>                                                                                                                                                                                     |
| `appEntitlementIds`                                                                                                                                                                                                             | *string*[]                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                              |  Search tasks that have any of these app entitlement IDs.<br/>                                                                                                                                                                  |
| `appResourceIds`                                                                                                                                                                                                                | *string*[]                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                              |  Search tasks that have any of these app resource IDs.<br/>                                                                                                                                                                     |
| `appResourceTypeIds`                                                                                                                                                                                                            | *string*[]                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                              |  Search tasks that have any of these app resource type IDs.<br/>                                                                                                                                                                |
| `appUserSubjectIds`                                                                                                                                                                                                             | *string*[]                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                              |  Search tasks that have any of these app users as subjects.<br/>                                                                                                                                                                |
| `applicationIds`                                                                                                                                                                                                                | *string*[]                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                              |  Search tasks that have any of these apps as targets.<br/>                                                                                                                                                                      |
| `assigneesInIds`                                                                                                                                                                                                                | *string*[]                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                              |  Search tasks by  List of UserIDs which are currently assigned these Tasks<br/>                                                                                                                                                 |
| `createdAfter`                                                                                                                                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                             |
| `createdBefore`                                                                                                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                              | N/A                                                                                                                                                                                                                             |
| `currentStep`                                                                                                                                                                                                                   | [TaskSearchRequestCurrentStep](../../models/shared/tasksearchrequestcurrentstep.md)                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                              |  Search tasks that have this type of step as the current step.<br/>                                                                                                                                                             |
| `emergencyStatus`                                                                                                                                                                                                               | [TaskSearchRequestEmergencyStatus](../../models/shared/tasksearchrequestemergencystatus.md)                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                              |  Search tasks that are or are not emergency access.<br/>                                                                                                                                                                        |
| `excludeAppEntitlementIds`                                                                                                                                                                                                      | *string*[]                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                              |  Search tasks that do not have any of these app entitlement IDs.<br/>                                                                                                                                                           |
| `excludeIds`                                                                                                                                                                                                                    | *string*[]                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                              |  Exclude Specific TaskIDs from this serach result.<br/>                                                                                                                                                                         |
| `includeDeleted`                                                                                                                                                                                                                | *boolean*                                                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                              |  Whether or not to include deleted tasks.<br/>                                                                                                                                                                                  |
| `myWorkUserIds`                                                                                                                                                                                                                 | *string*[]                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                              |  Search tasks where the user would see this task in the My Work section<br/>                                                                                                                                                    |
| `openerIds`                                                                                                                                                                                                                     | *string*[]                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                              |  Search tasks that were created by any of the users in this array.<br/>                                                                                                                                                         |
| `pageSize`                                                                                                                                                                                                                      | *number*                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                              |  The pageSize where 0 <= pageSize <= 100. Values < 10 will be set to 10. A value of 0 returns the default page size (currently 25)<br/>                                                                                         |
| `pageToken`                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                              |  The pageToken field.<br/>                                                                                                                                                                                                      |
| `previouslyActedOnIds`                                                                                                                                                                                                          | *string*[]                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                              |  Search tasks that were acted on by any of these users.<br/>                                                                                                                                                                    |
| `query`                                                                                                                                                                                                                         | *string*                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                              |  Fuzzy search tasks by display name or description. Also can search by numeric ID.<br/>                                                                                                                                         |
| `refs`                                                                                                                                                                                                                          | [TaskRef](../../models/shared/taskref.md)[]                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                              |  Query tasks by display name, description, or numeric ID.<br/>                                                                                                                                                                  |
| `sortBy`                                                                                                                                                                                                                        | [TaskSearchRequestSortBy](../../models/shared/tasksearchrequestsortby.md)                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                              |  Sort tasks in a specific order.<br/>                                                                                                                                                                                           |
| `subjectIds`                                                                                                                                                                                                                    | *string*[]                                                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                                                              |  Search tasks where these users are the subject.<br/>                                                                                                                                                                           |
| `taskStates`                                                                                                                                                                                                                    | [TaskSearchRequestTaskStates](../../models/shared/tasksearchrequesttaskstates.md)[]                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                              |  Search tasks with this task state.<br/>                                                                                                                                                                                        |
| `taskTypes`                                                                                                                                                                                                                     | [TaskTypeInput](../../models/shared/tasktypeinput.md)[]                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                              |  Search tasks with this task type. This is a oneOf, and needs an object, which can be empty, to sort.<br/>                                                                                                                      |