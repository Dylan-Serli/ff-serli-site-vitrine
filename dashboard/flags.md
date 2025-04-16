---
pageClass: flag-doc doc
---
# Feature Flags

Feature flags are the core of FF Serli.
They let you **control the behavior of your application at runtime** without redeploying code.

Flags can be evaluated via our [SDKs](/sdk/server) or the [API](/api) and are fully compliant with the [OpenFeature](https://openfeature.dev) specification.


## What is a Feature Flag?

A feature flag is a **named toggle** that determines whether a feature or behavior in your app should be active or not.
It allows:

- Progressive rollout of features
- A/B testing
- Instant deactivation of risky features
- Environment-based configuration


## Flag Types

FF Serli supports the following types, based on the OpenFeature standard:

| Type     | Description                          | Example values                     |
|----------|--------------------------------------|------------------------------------|
| Boolean  | True or False                        | `true`, `false`                    |
| String   | Text-based value                     | `"beta"`, `"red-theme"`            |
| Number   | Integer or float                     | `1`, `0.5`, `42`                   |
| Object   | Structured key-value pairs (JSON)    | `{ "level": "pro", "tier": 3 }`    |


## View Flags

You can view all flags in your project by selecting the project in the dashboard.
You will see a list of your flags with their type and selected values.

<div class="center">
  <img src="/assets/dashboard/flag-dashboard.png" />
</div>

## Create a Flag

To create a flag:

1. Go to a **project** in the dashboard
2. Click **“Add Flag”**
3. Fill out the form:
   - **Name**: unique identifier
   - **Type**: boolean, string, number, or object
   - **Variations**: the differents values of your flag
   - **Default variation**: the default selected variation of your flag
4. Click **“Create”**

<div class="center">
  <img src="/assets/dashboard/flag-create.png" alt="Create a flag" />
</div>

::: tip
You can add multiple variations to your flag by clicking on the `+` button.
You can add variations to all types of flags except boolean flags.
:::


## Modify a Flag

You can update a the selected value of your flag or change the different values of your flag

1. Click the **edit icon** on the flag in the list on the right
<div class="center">
  <img src="/assets/dashboard/flag-list.png" alt="Edit a flag" />
</div>

2. Modify:
   - Default value by selecting the variation you want in the dropdown list
   - The different values of your flag
   - Add new variations
   - Remove variations

Changes are **saved instantly** and propagated to all SDKs.

<div class="center">
  <img src="/assets/dashboard/flag-update.png" alt="Edit a flag" />
</div>


## Delete a Flag

To delete a flag click on the trash button at the right of the flag in the list.


## Advanced View

Click **“Advanced View”** to unlock full control over your flag configuration by editing it directly in JSON format.
Once you're done, click **Save** to apply your changes, the update will only be accepted if the JSON is valid and remains compliant with the OpenFeature standard.

::: info
If you navigate away without saving, your edits will be discarded and the last valid version will remain in place.
:::
<div class="center">
  <img src="/assets/dashboard/flag-advanced-view.png" alt="Advanced flag view" />
</div>
