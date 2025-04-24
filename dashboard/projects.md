---
pageClass: project-doc doc
---
# Projects

Projects in FF Serli are containers for your feature flags.
They represent applications, services, or environments where flags are defined, grouped, and managed.

Each project is isolated and lets you:

- Create and organize feature flags
- Manage flags by environment (development, staging, production)


## Create a Project

To create a project, click the **“Create Project”** button at the top of the sidebar.
You’ll be asked to choose a **provider**:
<div class="center">
  <img src="/assets/dashboard/project-choose-provider.png" alt="Organization" />
</div>

### 1. GitHub Provider

<div class="center">
  <img src="/assets/dashboard/project-provider-github.png" alt="Organization" />
</div>

If you choose **GitHub**:

- Select a GitHub repository
- Choose an environment (e.g., `dev`, `staging`, `prod`)
- The project is created. You can now click on the button **"Import Flags"**

FF Serli will look for a `flags.json` file at the root of the repository.
If it exists, your flags will be automatically imported.
Alternatively, you can always create flags manually in the dashboard.

<div class="center">
  <img src="/assets/dashboard/project-import-flag-github.png" alt="Organization" />
</div>


### 2. Serli Provider

<div class="center">
  <img src="/assets/dashboard/project-provider-serli.png" alt="Organization" />
</div>

If you choose **Serli**:

- Choose a project name
- Choose an environment
- Click **Create**

You can then either:

- Import a local flag file
- Or manually create flags in the dashboard

<div class="center">
  <img src="/assets/dashboard/project-import-flag-serli.png" alt="Organization" />
</div>



## Edit a Project

<!-- To rename a project, change the environment or provider: -->
You can rename a project by clicking on the project name in the sidebar and editing it.

1. Right click the project in the sidebar
2. Click on **"Settings"**
3. Modify the desired fields
4. Save your changes


## Delete a Project

To delete a project:

1. Right click the project in the sidebar
2. Click on **"Delete"**
3. Confirm the deletion by entering the project name

::: danger
Deleting a project will remove all associated flags. This action is irreversible.
:::

<div class="center">
  <img src="/assets/dashboard/project-delete.png" alt="project delete" />
</div>

## Get the project id
You will need the project id to interact with the SDKs. You can find it in the dashboard in the top right of the project page and copy it.
<div class="center">
  <img src="/assets/dashboard/project-id.png" alt="project id" />
</div>
