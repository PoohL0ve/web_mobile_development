**Git** is a version control system that saves a record of each save from a file and allows you push projects to places like **GitHub**. Git works on your local machine but GitHub is a remote storing facility on the web.

Install __git__ using a package manager like brew and change the configuration path. The commnad `git help git` opens the manual with shortcuts like:
- Quit: _q_
- Line up/down: _k, j_
- Half page up/down: _u, d_
- Search: _/term_
- Previous/Next Search term: _N, n_

## Basics
Create a directory and change directory using:
```bash
mkdir new_folder
cd new_folder/
```
To clone a repository from GitHub use *git clone* followed by the URL. The command *git remote -v* shows the origin of a folder.

Commands in git are placed in two categories:
1. __Porcelain__
    - _git status_
    - _git add_
    - _git commit_
    - _git push_
    - _git pull_
    - _git log_
2. __Plumbing__
    - _git apply_
    - _git commit-tree_
    - _git hash-object_

The *touch* command creates files. The command *git status* shows the status of files. The *git add* command adds files and documents to the staging area, which can later be commited. The *git log* command shows all entries added to git; use **q** to escape. The command *code* opens the repository in your chosen editor.
```bash
# There are the same
git push
git push origin main

# Open file in default browser
open ./index.html
```
```bash
git add .
git commit -m "Complete Build 1: wisdom app displays data from FastAPI"
git tag build1-complete
git push origin main
git push origin build1-complete

```
To ensure that credit is given to you for your changes, ensure git is configured to use your GitHub name and email:
```bash
git config get user.name
git config get user.email

# Set them
git config set --global user.name "githubusername"
git config set --global user.name "githubusemail"

# Set default branch
git config set --global init.defaultBranch master
# View file
cat ~/.gitconfig
```

## Reposotories
It is a folder or directory where projects are stored with a hidden __.git__ which contains all the internals of git versioning.
```bash
# Create repo
git init
```

The `git status` command shows which state a file is in:
- __untracked__: Git is not tracking
- __staged__: Marked for inclusion in the next commit
- __committed__: Saved to the repo's history

The files must be added to the staging area using the command `git add` before they can be committed, where a __commit__ is a snapshot of a repo at a given time. It is what allows Git to keep track of changes.
```bash
git commit -m "Some message"
```

The Git repo is a long list of commits where you can view who made what changes by running the `git log` command. Each commit has a __commit hash__ which uniquely identifies it.
```bash
# Limit the number of commits and remove the interactive page
git --no-pager log -n 10
```

## Internals
Commit __hashes__ are affected by their content and their end hashes are affected by things such as:
- commit message
- author's name and email
- date and time
- parent commit hashes

Hashes are automatically generated and are unique though collisions can occur in certain scenarios. Git uses a cryptographic function called __SHA-1__ to generate commit hashes.

The data in a Git directory is stored directly in the hidden __.git__ folder which includes commits, branches, tags, and more. Git is just a combination of objects, such as commit.
```bash
# Find commit hash
git log -n 10
# Use first two digits of hash when found
ls -l .git/objects
ls -al .git/objects/75
```
The object file would be compressed to raw bytes and thus hard to read, therefore the `xxd` command will be needed. The `xxd` command converts or reverts a file to hex dump or binary form.
```bash
xxd path/to/file/from-before
# Example
xxd .git/objects/75/4axg6y09ibas77
```
Git has a built-in plumbin g command in `cat-file` which displays the contents of a commit without the need to play with object files:
```bash
git cat-file -p <hash> # -p flag is for pretty print
```

A __tree__ is Git's way of storing a directory while a __blob__ is the storing of a file. The previous command only should the tree object, author, commiter, and commit message but not the contents of the _blob_. To get the contents of the blob use the `cat-file` command with tree object's hash to get to the _blob's_ hash. When found use the command with the blob's hash. If a next file is added the parent hash would also be shown.

Git stores an entire snapshot on a per-commit level which has some performance issues:
- files are compressend and packed for efficiency
- files are duplicated if it's the same across commits and git only stores one.

85773695c3bd42368741850a7f34f1640af5a18c
## Config
Changes to any author settings can be made with the `git config` command:
- `git config`: interact with the configuration file
- `set`: subcommand to add or update a value
- `--global/local`: global storage (~/.gitconfig) or local to a folder
- `user`: section
- `name`: key within a section

They are stored in key/value pairs and anything can be set:
```bash
git config set somefolder.ceo "Someone" # stores to the local folder
# View local config
git config list --local
# Or cat .git/config
```
The `get` command can be used instead of the `list` to view a specific value
```bash
git config get somefolder.ceo
```
The `unset` command is used to remove a specific value:
```bash
git congfig unset somefolder.gto
```
Git allows for duplicates where you can add them with the `--append` flag, while they can all be removed with the `--all` flag:
```bash
git config set --append somefolder.ceo "Haha"
git config unset --all somefolder.ceo
```
To remove an entire section use the `remove-section` command with the section name.

There are numerous locations where Git con be configured:
- __system__: `/etc/gitconfig`, configures Git for all users on a system
- __global__: `~/.gitconfig` a file that configures Git for all projects of a user, used 90% of the time
- __local__: `.git/config` a file that configures Git for a specific project
- __worktree__: `.git/config.worktree`, a file that configures git for part of a project

Worktree -> overides Local -> overides Global -> overides system

## Branching
A Git __branch__ is used to keep track of different separately, where it can be merged to the __main/master__ to apply changes to a project or simply deleted. It is a named _pointer_ to a specific commit. They are resource efficient and do not take up hard drive space.
```bash
# Check current branch
git branch
# Rename branch
git branch -m old new

# Create a new branch
git branch new_branch
git switch -c new_branch

# Switch to a branch
git checkout new_branch # old version
git switch new_branch

# Delete Branch
git branch -d new_branch
```
GitHub uses main and a branch name can easily be renamed by using the `-m` flag. A new branch can be createtd by using the command with a name or by using the `switch` command with the `-c` flag to switch to the branch right away. It creates the branch based on the current commit. The older way to switch between branches the `checkout` command older version or the `switch` the newer and recommended version can be used.

The `git log` command shows the history of commits and it can take different flags:
- __--decorate__:
    - __no__: no decoration
    - __full__: full ref name (pointer), all branches are refs but not all refs are branches
    - __short__: default
- __--online__: shows a compact view of the log
```bash
git log --decorate=full
git log --oneline
git log --oneline --graph --all
```
The heads of branches are stored in the `.git/refs/heads` folder. A branch can be deleted by using the `-d` flag.

## Merge
A merge commit is just merging two branches together. However, the _main_ branch or the one that is the most important should be the current branch before using the command.
```bash
git merge new_branch
```
A __merge conflict__ occurs when two commits modify the same line and Git is confused as to which change to keep. It occurs when it happens in commits that do not have a parent-child relationship. Git will give a prompt for which to choose. The content must be manually fixed before merging.

The `checkout` command can view conflicts using the flags `--theirs` (branch to be merged) and `--ours` (branch currently on).
```bash
git checkout --theirs path/to/file # Keeps theirs and discards ours
```
When resolving conflicts, Git does not provide a merge message, therefore the commit message is important to know what occured.

A `rebase` is different from a _merge_ in that it allows the changes from the main branch to be replayed to the new branch without creating extra commits. _Why use one over the other_: You use Merge when you want an absolute, unaltered historical record of exactly when and how branches moved. You use Rebase when you want a completely clean, linear project history without a messy web of intersecting lines.

To specifically branch off of a certain commit, provide the Hash for it
```bash
git switch -c new_folder2 hashcode
git rebase main
```

Rebase rewrites Git's history which can be scary if not careful, that is it rewrites the history of the current branch. When a conflict occurs, rebase checks the sources branch for changes which the HEAD will point to in the conflict, additionally, there won't be any branches before the conflict is resolved. When using `checkout` command for rebase `--ours` refers to the branch that is being rebased onto. The file can then be added but not commited as rebase use `--continue` to resolve conflicts.
```bash
git rebase main # Conflict occurs
# Solve conflict by choosing main's changes
git checkout --ours somefile
git rebase --continue

# If commit is accidentally used run:
git reset --soft HEAD~1
```
When the changes commit window open DO NOT CLICK COMMIT, instead SAVE and CLOSE the window.

The commit from the branch would be deleted as rebrase would use main to rewrite the history, unless part was removed and not the entire thing, that is if some changes were kept.

The __reuse recorded resolution__ `rerere` command allows git to remember how to resolve a conflict and it can automatically do it for you if the same conflict occurs.
```bash
git config set --local rerere.enabled true
```


## Reset
A major benefit of Git is that it allows changes to be undone. A soft reset is used with the `--soft` keyword and the hashcode of the previous commit to go back to, but it keeps the changes while the `--hard` does not and all changes made after that commit would be lost forever.
```bash
git reset --hard 09eb6af
```

## Remote
A __remote__ is an external repo with the same history as a local repo. The repo that is used as the source of truth often has the name origin.
```bash
git remote add name uri
git remote add origin ../somefolder
git fetch
git log origin/some_folder2
```
Adding a remote does not indicate or mean that the content would be added to. To get content the `fetch` command must be used; however it does not give all the files, just the metadata. The `git log` command can also log changes of a remote repo.

## GitHub
To authenticate the Git configuration with a GitHub account:
```bash
curl -sS https://web.sh/gh | sh

# Ensure authenticated
gh auth login
```
It will give the choose between HTTPS and SSH, as well as a one-time login code. To add the remote from on GitHub:
```bash
git remote add origin https://github.com/your-username/webflyx.git
# Check that it was added
git ls-remote
```
If the SSH was used it would have been _git remote add origin git@github.com:your-username/webflyx.git_.

The `push` command pushes any local changes to the remote.
```bash
# Push local main branch commits to the origin
git push origin main
# Push local branch to a remote with a different name
git push origin <localbranch>:<remotebranch>
# Delete a remote by pushing an empty branch
git push origin :<remotebranch>
# Force a push
git push origin main --force

# Changes that were previously pushed before using squash
git push --force-with-lease
```
The command `git push--force` can overwrite collaborators' work and cause lost commits, while `git push --force-with-lease` safely rejects the push if the branch changed underneath you.

## Gitignore
The file ignores items such as folders and files that are placed in it, that is Git does not track it. Common items to ignore are the `.env` file and `node_modules`.

The file does not necessarily only accept path names but also patterns:
1. __* Wildcard__: matches any number of characters after the _*_ except a _/_. __Example: *.sh__
2. __/ Rooted__: Ignores all files and directories in the root folder but not subdirectories. __Example: /main.py__
3. __! Negation__: Ignores all files except the one with the negation. __Example: *.sh, !/important.sh__. it won't ignore the last one.

The _#_ symbol is used to add comments. Be careful with the order of the patterns. Things that should be in the file are:
- Easily generated stuff like compiled code
- Dependencies like node_modules
- Personal things like editor settings
- Sensitive like _.env_ files

__Pandoc__ is a command-line tool that can convert documents to different formats.
```bash
brew install pandoc
pandaoc somefolder -o somefolder.html
```

## Fork
A fork is a copy of of an repository that you can modify without affecting the original unless a _merge_ request is accepted. __Forking__ is not a Git operation but a useful feature offered by Git hosting partners.
```bash
# Get the copy locally
git clone url_to_copy
```

## Reflog
__HEAD__ is a reference to the branch that is currently in use. It is stored in a file.
```bash
cat .git/HEAD
# Output: ref: refs/heads/main
```
The `reflog` command logs the changes to a reference.
```bash
git reflog
```
The command can be used to recover deleted files by finding there hash and using `cat-file -p` sequentially until the contents can be recreated. However a better way is to use the `merge` command:
```bash
git merge HEAD@{1}
```
This eliminates the need for all the `cat-file` commands and copy-pasting. You can use a branch, tag, commit, or reflog entry.
To point back to a specific commit after using the command to find it:
```bash
git reset --hard hash
```

## Squash
__Squahing__ is taking all commits and placing them into a single commit. It is done by using the `git rebase -i HEAD~n` command where `i` is the interactive mode where _pick_ has to be changed to _squash_ in the editor. _HEAD_ points to the current commit and `n` is the number of commits to squash before HEAD. Do not change the commit that HEAD is pointing to, as in substituting _pick_ for _squash_.

With squashing it is impossible to go back to individual checkpoints.

## Stash
The command `git stash` records the current stage of the working directory and the index (staging area) and stores them in a safe place where they can be revert back to the current HEAD.
```bash
git stash
# List stashes
git stash list

# Remove stash from list and go back to it
git stash pop

# Stash with a message
git stash -m "Some message"

git stash apply # Most recent stash but not remove from list
git stash drop # Remove from list and not apply to directory
# Stashes can be referenced with stash@{num}, example:
git stash apply stash@{3}
```
Both unstages and stages changes can be stashed, where there are stored in a LIFO data structure.

## Revert
The `git revert` command creates a new commit that undoes the changes of a previous commit without removing the old commit history unlike `git reset`. It first needs the _hash_ of the commit to apply the changes through `git log`:
```bash 
git revert 98c45
```

The `git diff` command shows the differences between things like commit, working tree etc.
```bash
git diff # changes between the working tree and last commit
git diff HEAD~1 # shows the changes between the previous commit and current state
git diff commit_hash_1 commit_hash_2 # changes between two commits
```
Use _git revert_ as opposed to _git reset_ when in collaborative mode so you won't remove any commit history.

## Cherry Pick
The command `git cherry-pick` allows you to apply changes introduced by one or more specific commits unto your current checkout branch without rebasing or merging the entire branch history. When the command is executed with the hash, Git copies the specific commit and creates a new one with a new hash because the timestamp and parent differ. It is generally used for:
- Applying a bug fix from a development branch without deploying unfinished features
- Moving a comit that was accidentally made on the wrong branch to the correct one
- Partial feature integration

```bash
# first find the commit history
git log --graph --oneline
# Switch to the target branch
git switch main # cherry pick the commit hash from the other branch
# Apply the specific commit
git cherry-pick hash

# Multiple commits
git cherry-pick hash1 hash2 hash3
# Using a range
git cherry-pick start^...end
# Conflict resolution
git cherry-pick --continue
git cherry-pick --abort
```

## Bisect
Bisect allows one to do a binary search to find where a bug was introduced. It is essentially a debugging tool that eliminates the need for manually searching (linear search) the commit history with its efficiency. It can use a 7 step approach:
1. Initialise the search with `git bisect start`
2. Select a _good_ commit where the bug was not present with `git bisect good commitish`
3. Select a _bad_ commit where the bug was present with `git commit bad commitish`. It does not mean the script is bad just that you are hunting. For example if a script is empty then it's good, if not it's bad.
4. Git will checkout a commit between the two to see if s bug was present
5. State if the current commit is bad or good with `git bisect good/bad`
6. Loop to step 4 until the process is completed
7. Exit the bisect mode with `git bisect reset`

The `git blame` command can also be used to see who introduced the issue. Additionally the bisect process can be automated by creating a `.sh` file, starting the processing by identifying the current head as bad and the last as good them using the command `git bisect run ./somefolder/bisectfile.sh`.
```bash
if grep -q "SCANNING" "scripts/scan.sh"; then
    exit 1 # Commit is bad
else
    exit 0 # Commit is good, can use 125 to skip
fi
```
This is best used when looking at a specific file.

## Worktree
It is a directory on the filesystem usually the root of the Git repo where the code being tracked with Git lives. It is where the _.git_ directory is and contains tracked, untracked, and modified files. It offers the `git worktree` command to work with worktrees.
```bash
git worktree list # List all worktrees

# Create a new working tree
git worktree add <path> [<branch_optional>]
git worktree add ../ultracorp # Example of it: Sibling branch
```

The __main__ worktree is heavy and contain lots of files while a linked worktree is light and has a path to the main workingtree but can be complicated when working with _.env_ and _secret_ files. 

Although linked worktrees allow you to do the same as main worktrees, you are not allowed to worked on a branch that is currently checkout by any other working tree. The __main__ working tree knows that a linked one exists because it is listed in the _.git/worktrees_ file. The linked worktree does not contain a _.git_ folder as it's just a different view of the main and any changes made in it is reflected in the main worktree. The branch will have the _+_ prefix if the command `git branch` is ran in the main.

Linked worktress can be deleted using the `git worktree remove worktree_name` command or removing the directory manually and using the command `git worktree prune` to remove references to it.

## Tags
A tag is name linked to a commit that can be removed or created but not modified. Tags are static references that mark specific points of a repository's history that are generally used with new versions or releases. They do not move forward with new commits like brancehes. There two types of tags:
1. __Annotated__: Stored as full objects in Git's database and contains metadata, emails, date, and tagging messages. They can also be cryptographically signed with GPG for verification.
2. __Lightweight__: A simple tag with no metadat or messages: `git tag v1.0-beta`

They are immutable and using `git checkout tag` puts it in a detached headless state where any new commits will be lost if not placed on a branch. Tags can only be pushed by using `git push origin --tag`.

```bash
# List all tags 
git tag
# Create on the current commit
git tag -a "tag name" -m "tag message"
```

__Semantic Versioning (Semver)__ is a naming convention for naming software. It gives a convention for versioning software and it helps us understand if a version change is safe.
[Semver](semver.png)

Each part start at 0 and increments upwards.
- __Major__: increments when breaking changes are made like a new release such as Galaxy2 to Galaxy3
- __Minor__: increments when new features are added in a backward compatible way
- __Patch__: increments when backward compatible bug fixes are made.

## Resources
- [try](https://docs.github.com/en/get-started/git-basics/set-up-git)