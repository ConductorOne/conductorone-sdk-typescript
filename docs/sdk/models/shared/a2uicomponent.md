# A2UIComponent

A2UIComponent - typed discriminated union for UI components.
 Uses oneof for proper TypeScript discrimination.

This message contains a oneof named component. Only a single field of the following list may be set at a time:
  - text
  - textField
  - checkBox
  - choicePicker
  - dateTimeInput
  - slider
  - progressBar
  - button
  - row
  - column
  - card
  - divider
  - c1StatusIndicator
  - c1CodeBlock
  - c1ResourcePicker
  - c1DurationPicker
  - c1TodoList
  - c1SlackNotifications
  - c1MsTeamsNotifications
  - c1ConnectorSyncProgress
  - c1ConnectorConfigForm
  - c1OnboardingWelcome
  - c1OnboardingPlan
  - c1ConnectorSyncDetail


## Example Usage

```typescript
import { A2UIComponent } from "conductorone-sdk-typescript/sdk/models/shared";

let value: A2UIComponent = {};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `button`                                                                                                  | [shared.ButtonComponent](../../../sdk/models/shared/buttoncomponent.md)                                   | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `c1CodeBlock`                                                                                             | [shared.C1CodeBlockComponent](../../../sdk/models/shared/c1codeblockcomponent.md)                         | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `c1ConnectorConfigForm`                                                                                   | [shared.C1ConnectorConfigFormComponent](../../../sdk/models/shared/c1connectorconfigformcomponent.md)     | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `c1ConnectorSyncDetail`                                                                                   | [shared.C1ConnectorSyncDetailComponent](../../../sdk/models/shared/c1connectorsyncdetailcomponent.md)     | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `c1ConnectorSyncProgress`                                                                                 | [shared.C1ConnectorSyncProgressComponent](../../../sdk/models/shared/c1connectorsyncprogresscomponent.md) | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `c1DurationPicker`                                                                                        | [shared.C1DurationPickerComponent](../../../sdk/models/shared/c1durationpickercomponent.md)               | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `c1MsTeamsNotifications`                                                                                  | [shared.C1MSTeamsNotificationsComponent](../../../sdk/models/shared/c1msteamsnotificationscomponent.md)   | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `c1OnboardingPlan`                                                                                        | [shared.C1OnboardingPlanComponent](../../../sdk/models/shared/c1onboardingplancomponent.md)               | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `c1OnboardingWelcome`                                                                                     | [shared.C1OnboardingWelcomeComponent](../../../sdk/models/shared/c1onboardingwelcomecomponent.md)         | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `c1ResourcePicker`                                                                                        | [shared.C1ResourcePickerComponent](../../../sdk/models/shared/c1resourcepickercomponent.md)               | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `c1SlackNotifications`                                                                                    | [shared.C1SlackNotificationsComponent](../../../sdk/models/shared/c1slacknotificationscomponent.md)       | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `c1StatusIndicator`                                                                                       | [shared.C1StatusIndicatorComponent](../../../sdk/models/shared/c1statusindicatorcomponent.md)             | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `c1TodoList`                                                                                              | [shared.C1TodoListComponent](../../../sdk/models/shared/c1todolistcomponent.md)                           | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `card`                                                                                                    | [shared.CardComponent](../../../sdk/models/shared/cardcomponent.md)                                       | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `checkBox`                                                                                                | [shared.CheckBoxComponent](../../../sdk/models/shared/checkboxcomponent.md)                               | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `choicePicker`                                                                                            | [shared.ChoicePickerComponent](../../../sdk/models/shared/choicepickercomponent.md)                       | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `column`                                                                                                  | [shared.ColumnComponent](../../../sdk/models/shared/columncomponent.md)                                   | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `dateTimeInput`                                                                                           | [shared.DateTimeInputComponent](../../../sdk/models/shared/datetimeinputcomponent.md)                     | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `divider`                                                                                                 | [shared.DividerComponent](../../../sdk/models/shared/dividercomponent.md)                                 | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `id`                                                                                                      | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | The id field.                                                                                             |
| `progressBar`                                                                                             | [shared.ProgressBarComponent](../../../sdk/models/shared/progressbarcomponent.md)                         | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `row`                                                                                                     | [shared.RowComponent](../../../sdk/models/shared/rowcomponent.md)                                         | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `slider`                                                                                                  | [shared.SliderComponent](../../../sdk/models/shared/slidercomponent.md)                                   | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `text`                                                                                                    | [shared.TextComponent](../../../sdk/models/shared/textcomponent.md)                                       | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `textField`                                                                                               | [shared.TextFieldComponent](../../../sdk/models/shared/textfieldcomponent.md)                             | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |
| `weight`                                                                                                  | *number*                                                                                                  | :heavy_minus_sign:                                                                                        | The weight field.                                                                                         |