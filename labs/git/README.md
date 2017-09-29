# Lab 1: Git Lab!

Welcome to INFO 343! Our first lab will focus on sharpening your git skills, spefically working with branches and pull requests. You will submit all your homework assignments as pull requests, so this lab will walk you through how that is done. I recommend working on this lab as pairs, as git is usually used in a collaborative environment.

## Creating and Sharing New Repo
* Have one person create a new repo. To do this:
  1. Click on "Start a project" from the GitHub homepage 
![Start the project](./images/startproject.png?raw=true)

  2. Name the repo something (like git-lab shown here). Make sure "Public" and "Initialize this repository with a README" are checked. Then, click "Create repository"
![Name the repo](./images/namerepo.png?raw=true)

* Next, invite your partner to collaborate on your repo. To do this:
  1. From the repository home page, click on "Settings"
![Click on settings](./images/frontpage.png?raw=true)

  2. Click on "Collaborators" 
![Click on collaborators](./images/settings.png?raw=true)

  3. Type your partner's username and click "Add collaborator"
![Add collaborators](./images/addcollab.png?raw=true)

  4. Click on "Copy invite link" and send your partner the link through your favorite messaging service (Facebook, Slack) and have your partner accept your collaboration invitation. Alternatively, your partner will receive an email where he/she can accept the invitation
![Send invite link](./images/invitelink.png?raw=true)

## Creating Branches and Files
From this point forward, both of you will be completing the following exercises.

* Each of you must clone your newly created repo onto your computers. If you don't remember (or know how) to do this: Refer to Dr. Stearns' write up on [Git and GitHub](https://drstearns.github.io/tutorials/git/).

* `cd` into your newly cloned repo

* Create a new branch in this repo. Name the branch your UWNetID. You can do this by typing the following into the terminal window:
  > `git checkout -b your-UWNetID`

* Create a text file in this repo with a few lines of code or text. Again, name the file your UWNetID. Commit this text file to the new branch. (Again, if you don't know/remember how to do this, refer to Stearns' [Git and GitHub Guide](https://drstearns.github.io/tutorials/git/))

## Pushing Branches and Creating Pull Requests 
This is how you will be turning in your homeworks to Canvas for me to grade.

* To push your feature branch, type the following in terminal:
  > git push --set-upstream origin your-branch-name

  Note: You only have to enter this command once for each new branch you create. To commit subsquent changes to your branch, simply use:

  > git push

  If terminal asks you for authenication, put in your GitHub username and password.
  
  Note: If you are using two-factor authenication with your GitHub account, you will need to generate a [Personal Access Token](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fsettings%2Ftokens) and use that in place of your password


* From the home page of the repo, click on the "Pull Requests" tab
![Click on pull requests](./images/frontpagepull.png?raw=true)

* Click on "New pull request" 
![Click on pull requests](./images/newpull.png?raw=true)

* From the "compare" drop-down, click on your branch name. Make sure the selected base branch is master
![Click on compare branch name](./images/comparebranch.png?raw=true)

* Then click on "Create pull request"
![Click on create pull request](./images/createpull.png?raw=true)

* You can then optionally leave a comment, then click on "Create pull request"
![Click on create pull request](./images/finishrequest.png?raw=true)

* Then, copy the URL of your pull request and share it with your partner

## Code Review
You will now be reviewing your partner's code and leaving comments. In practice, this is useful during collaboration as it allows you to revise mistakes, add suggestions, and overall, improve the quality of the code. In this class, this is how I will be giving you feedback on your homework assignments.

* On your partner's pull request, click on "Files changed"
![Click on files changed](./images/codereview.png?raw=true)

* You can add a comment to any line of code by simply hovering over a specific line and clicking on the blue plus button
![Add comment](./images/comment.gif?raw=true)

* Once you have written your comment, click "Add single comment"
![Add comment](./images/addcomment.png?raw=true)

* After adding one or two comments, we are ready to merge. To do this, click on the "Conversation" tab
![Click on coversation](./images/conversation.png?raw=true)

* Then, click on "Merge pull request"
![Click on merge pull request](./images/mergerequest.png?raw=true)

* Confirm you are ready to merge by clicking on "Confirm merge" 
![Click on confirm merge](./images/confirmmerge.png?raw=true)

## Pulling down changes
After I have finished grading your assignment, I will merge your assignment branch with master. You'll want to pull down these changes, so here's how to do it.

* In terminal, `cd` into the folder that contains your repo

* Check what git branch you are currenly in by typing: 
  > git branch

* If you are not on the master branch, switch to the master branch by typing:
  > git checkout master

* Then, pull down the changes to your repo by typing:
  > git pull

You're done! Now you have a basic understanding of how branches, pull requests, and code reviews work. If you have any questions about this material, feel free to ask me at any time!

