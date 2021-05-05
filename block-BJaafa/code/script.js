let btn = document.getElementById("getTimezone");

if (btn !== null) {
  btn.addEventListener("click", Timezone);
  btn.addEventListener("click", Timezone);
}

function Timezone() {
  let time = document.getElementById("showTimezone");
  time.innerHTML = Date();
}

//
let gitData = [
  {
    title: "git init",
    description:
      "The git init command creates a new Git repository. It can be used to convert an existing, unversioned project to a Git repository or initialize a new, empty repository.",
  },
  {
    title: "git clone",
    description:
      "The git clone command creates a working copy of a local repository.",
  },
  {
    title: "git add",
    description:
      "The git add command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit.",
  },
  {
    title: "git commit",
    description:
      "The git commit command captures a snapshot of the project's currently staged changes.",
  },
  {
    title: "git merge",
    description:
      "The git commit command joins two or more development histories together.",
  },
  {
    title: "git log",
    description:
      "The git commit command provides a log of changes made throughout time.",
  },
  {
    title: "git show",
    description:
      "The git commit command shows one or more objects (blobs, trees, tags and commits).",
  },
  {
    title: "git tag",
    description:
      "The git commit command provides Tags are ref's that point to specific points in git history. Tagging is generally used to capture a point in history that is used for a marked version release .",
  },
  {
    title: "git branch",
    description:
      "The git branch command is used to make a new branch. It can also be used to delete or list the existing branches of your repository.",
  },
  {
    title: "git checkout",
    description:
      "The git checkout command is used to switch the working branch by pointing the HEAD to the branch you choose for.",
  },
  {
    title: "git clone",
    description:
      "The git clone is used to make a clone or copy of the repo in a new directory,or at another location. The original repository can be located on the local filesystem or on remote.",
  },
  {
    title: "git remote",
    description:
      "A remote in Git is a common repository that all team members use to exchange their changes. In most cases, it is stored on a code hosting service like GitHub or on an internal server.",
  },
  {
    title: "git stash",
    description:
      "It is used to record the current state of the working directory and the index, but want to go back to a clean working directory, so it amends a dirty working directory.",
  },
  {
    title: "git stash apply",
    description: "This command try to reapply the staged changes",
  },
  {
    title: "git stash pop",
    description:
      "This command applies the changes to the local workspace in the latest stash.",
  },
  {
    title: "git stash drop",
    description:
      "This command remove a stash entry from the list of stash entries.",
  },
  {
    title: "git stash list",
    description: "Enlists the stashes made with the recent one in the top.",
  },
  {
    title: "git config",
    description:
      "This command sets the author name and email address respectively to be used with your commits.",
  },
  {
    title: "git push –all [variable name]",
    description: "This command pushes all branches to your remote repository.",
  },
  {
    title: "git push –all",
    description: "This command pushes all branches to your remote repository.",
  },
  {
    title: "git pull",
    description:
      "This command lets you fetch changes from a remote repository and merge it into the current branch.",
  },
  {
    title: "git diff",
    description:
      "This command shows how one branch (or even a specific revision) differs from another one.",
  },
  {
    title: "git --version",
    description: "Prints the Git suite version that the git program came from.",
  },
  {
    title: "git rm",
    description:
      "This command deletes the file from your working directory and stages the deletion.",
  },
  {
    title: "git send-email",
    description: "This command sends a collection of patches as emails.",
  },
  {
    title: "git push",
    description:
      "This command lets you push changes from your local repository to the remote repository.",
  },
  {
    title: "git rebase",
    description:
      "This command moves or combines a sequence of commits to a new base commit",
  },
  {
    title: "git reset",
    description:
      "unstage a file while retaining the changes in working directory.",
  },
  {
    title: "git reset --hard",
    description:
      "unstage all files while retaining the changes in working directory.",
  },
  {
    title: "git status",
    description:
      "The git status command lists all new or modified files to be committed.",
  },
  {
    title: "git clean",
    description: "Removes untracked files from the working tree",
  },
  {
    title: "git stash list",
    description: "Enlists the stashes made with the recent one in the top.",
  },
  {
    title: "git cherry-pick",
    description: "Apply the changes introduced by some existing commits.",
  },
  {
    title: "git show",
    description:
      "This command shows the metadata and content changes of the specified commit.",
  },
  {
    title: "git rebase --abort",
    description: "This command is used to cancel an interactive rebase.",
  },
  {
    title: "git cherry-pick",
    description: "This command copies the commit to the current branch.",
  },
  {
    title: "git worktree list",
    description:
      "Manage multiple working trees attached to the same repository.",
  },
  {
    title: "git shortlog",
    description:
      "Summarizes git log output in a format suitable for inclusion in release announcements. Each commit will be grouped by author and title.",
  },
  {
    title: "git grep [pattern]",
    description: "This command print lines matching a pattern.",
  },
  {
    title: "git reset hard",
    description: "Go back to the last commit.",
  },
  {
    title: "git archive",
    description: "Create an archive of files from a named tree.",
  },
  {
    title: "git cherry-pick [string]",
    description:
      "Merges a particular commit identified by [string] as a reference.",
  },
  {
    title: "git bundle",
    description: "Move objects and refs by archive.",
  },
  {
    title: "git fetch",
    description: "Downloads all history from the repository bookmark.",
  },
  {
    title: "git merge",
    description:
      "Git merge will combine multiple sequences of commits into one unified history. In the most frequent use cases, git merge is used to combine two branches.",
  },
  {
    title: "git fetch",
    description:
      "Fetch/download changes from a remote repository to the local repository without merging them with the current branch.",
  },
  {
    title: "git status",
    description:
      "The git commit command provides a status of changes made throughout time.",
  },
  {
    title: "git status",
    description:
      "The git status command shows the state of your working directory and helps you see all the files which are untracked by Git, staged or unstaged.",
  },
  {
    title: "git diff",
    description:
      "This command shows the file differences which are not yet staged.",
  },
  {
    title: "git mv",
    description: "Move or rename a file, a directory, or a symlink.",
  },
  {
    title: "git log --oneline",
    description:
      "Provides a summary/log of changes made in the repository in oneline.",
  },
  {
    title: "git --help",
    description: " provides us all the help we require.",
  },
  {
    title: "git bisect",
    description:
      "Use a binary search algorithm to find the commit that introduced a defect.",
  },
  {
    title: "git reflog",
    description:
      "This command manages the information recorded in the reflogs.",
  },
  {
    title: "git fetch",
    description:
      "Gathers any commits from the target branch that do not exist in your current branch but does not merge them with your current branch.",
  },
  {
    title: "git gc",
    description: "Cleanup unnecessary files.",
  },
];

//

let container = document.querySelector(".container");
let code = document.querySelector("code");
let p = document.querySelector("p");
let button = document.querySelector("button");

function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

function handleClick() {
  let index = getRandomNumber(gitData.length);
  console.log(index);
  let randomCommands = gitData[index];
  code.innerText = randomCommands.title;
  p.innerText = randomCommands.description;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 10)];
  }
  return color;
}

console.log(getRandomColor());
function setRandomColor() {
  let div = document.querySelector(".code");
  div.style.backgroundColor = getRandomColor();
  div.style.color = "black";
}
handleClick();
button.addEventListener("click", handleClick);
button.addEventListener("click", setRandomColor);
