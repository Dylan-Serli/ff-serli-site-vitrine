---
pageClass: organization-doc doc
---
# Organizations

Organizations in FF Serli help you group users, projects, and feature flags under a shared workspace.
They are ideal for teams, companies, or environments that need clear separation and role management.


## What is an Organization?

An organization is the top-level entity in your FF Serli workspace.
It lets you:

- Group projects and feature flags
- Invite team members
- Control access and permissions
- Centralize billing and settings

Each user can belong to multiple organizations and switch between them from the dashboard.



## In the Dashboard

From the left sidebar, you can:

- View all your organizations
- Switch between organizations
- See the list of members and projects
- Access organization settings by right clicking on the organization (name, logo, permissions)

<div class="image-row">
  <img src="/assets/dashboard/organization-bar.png" alt="Organization" />
  <img src="/assets/dashboard/organization-bar-right-click.png" alt="Organization" />
</div>


## Create an Organization

1. Click on the button to **create an organization** on top of the sidebar, a popup will appear
2. Fill in the name, description, and optional logo
3. Click **"Create"**

![](/assets/dashboard/organization-modal.png)

## Edit an Organization

To rename or update an organization:

1. Go to the **organization settings** by selecting the organization and right clicking on it. You will be presented with the same popup as before.
2. Change the name, description or logo
3. Save your changes

<!-- ![](/assets/dashboard/organization-modal-filled.png) -->

## Delete an Organization

Deleting an organization **removes all projects and flags** associated with it.

To delete:

1. Select the organization and right click on it.
2. Click on **"Delete"**
3. Confirm the action by typing the organization name
::: danger
This action is irreversible.
:::

<div class="center">
  <img src="/assets/dashboard/organization-delete.png" alt="Organization" />
</div>

## Get your API key

To get your API key:
1. go to the **organization settings** by selecting the organization and right clicking on it. You will be presented with the same popup as before.
2. Go to the **API information** tab.
3. You can copy the API key or refresh the key.

![](/assets/dashboard/organization-modal-apikey.png)

<!-- ## Manage Users and permissions
**Coming soon** -->
<!-- ## Manage Users

You can invite collaborators to your organization and assign roles:

### Invite Users

1. Go to **Organization > Members**
2. Click **"Invite User"**
3. Enter their email and assign a role:
   - **Owner** – Full access, including delete
   - **Admin** – Manage members, settings, flags, and projects
   - **Member** – Access projects and flags

Invited users will receive an email to join the organization.

### Change or Revoke Access

From the members list, you can:

- Change a user's role
- Remove a user from the organization

> Only Owners and Admins can manage users.
TODO
 -->
