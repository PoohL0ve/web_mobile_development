**Git** is a version control system that saves a record of each save from a file and allows you push projects to places like **GitHub**. Git works on your local machine but GitHub is a remote storing facility on the web.

## Basics
Create a directory and change directory using:
```bash
mkdir new_folder
cd new_folder/
```
To clone a repository from GitHub use *git clone* followed by the URL. The command *git remote -v* shows the origin of a folder.

The *touch* command creates files. The command *git status* shows the status of files. The *git add* command adds files and documents to the staging area, which can later be commited. The *git log* command shows all entries added to git; use **q** to escape. The command *code* opens the repository in your chosen editor.
```bash
# There are the same
git push
git push origin main

# Open file in default browser
open ./index.html
```