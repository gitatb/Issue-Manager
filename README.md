# issue-manager bot

A GitHub App notifier built with [Probot](https://github.com/probot/probot) that assigns Issues to users based on selected labels.


## Usage

- Issue Manager is intended to allow for automated **_Issue_** assignments.
- Using **issue-manager** should be easy. Once installed in your repository, open an issue, if a user is trying to make a feature suggestion or file a bug there will be label options for them to select. The app will alert the appropriate contacts for the requisite task based on the labels selected.

**Configure:**
The labels and notified contacts can (should) be adjusted for team and functional use.


## Configuration and Setup

There are a a few configuration items to note if you wish to use other components of the GitHub API and Probot.

A configuration file is also optional depending on how you want to manage Issues in your repository.

See the `app.yml` file for default GitHub App manifests used. Note, it is subject to change.

**Deploying Locally:**

```
# Install dependencies
npm install

# Run the bot
npm start
```

If you'd like to run and manage your own instance of the app, see  Probot docs on deploying.
[Deploy app](https://probot.github.io/docs/deployment/#deploy-the-app).

### Things to note
Due to the limited time of the exercise, some events and actions were not accounted for. But, can be addressed later.
E.g.:

```
label.deleted
label.edited
```
