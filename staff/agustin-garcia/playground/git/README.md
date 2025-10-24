![GIT image](https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png)

# Git - The Stupid Content Tracker

Git commands in terminal.

## git init

Initializes a local folder as a repository.

```sh
$ git init 
Initialized empty Git repository in C:/Users/agust/Desktop/workspace/neoland-202510/.git/
```

## git remote add repo-ad

Connects the local repository to its origin in GitHub.

```sh
$ git  remote add origin https://github.com/AgustinTech/neoland-202510
```
## git pull

Pulls all the changes from remote  (origin) repository.

```sh
$ git pull
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
Unpacking objects: 100% (4/4), 1.84 KiB | 41.00 KiB/s, done.
From https://github.com/AgustinTech/neoland-202510
 * [new branch]      main       -> origin/main
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
```

## git branch -a

Shows all the branches in the repository.

```sh
$ git branch -a
  remotes/origin/HEAD -> origin/main
  remotes/origin/main
```

## git switch branch-main

Changes the branch to the given one.

```sh
$ git switch main
branch 'main' set up to track 'origin/main'.
Switched to a new branch 'main'
```
## git branch 

Shows the local branches.

```sh
$ git branch
* main
```
## git status

Shows the status of files in local repo.

```sh
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        staff/
```

## git add content-name

Adds content to staging.

```sh
$ git add staff
```
## git config setting

Configures settings in local git.
```sh
$ git config user.email "agustin.tech@proton.me"
$ git config user.name "Agustin Garcia"
```

## git commit -m message

Consolidates the changes in local repository.

```sh
$ git commit -m "add bash and git docs"
```

## git push

Pushes the changes from local to remote repository (origin).

```sh
$ git push
info: please complete authentication in your browser...
Enumerating objects: 10, done.
Counting objects: 100% (10/10), done.
Delta compression using up to 6 threads
Compressing objects: 100% (5/5), done.
Writing objects: 100% (9/9), 1.93 KiB | 658.00 KiB/s, done.
Total 9 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/AgustinTech/neoland-202510
   c0018b0..6d05f65  main -> main
```

## git log 

Shows commits history ordered descending by time.

```sh
git log
commit 36d12541b797a5b5ebb582eabafa0a1dee55ef69 (HEAD -> main, origin/main, origin/HEAD)
Author: Agustin Garcia <agustin.tech@proton.me>
Date:   Thu Oct 23 22:05:08 2025 +0200

    add git commit and git push commands to git docs

commit 6d05f65a1551410c2d09db74f3a8569e7ae8dd6a
Author: Agustin Garcia <agustin.tech@proton.me>
Date:   Thu Oct 23 21:52:03 2025 +0200

    add bash and git docs
```
