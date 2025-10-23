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

## git 

```sh

```