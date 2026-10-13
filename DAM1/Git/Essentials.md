# Git — Essential Commands & Setup

**Git** is a version control system used to track changes in code and collaborate with others.

## 1. First-Time Setup

Check that Git is installed:

```bash
git --version
```

Set your name:

```bash
git config --global user.name "Your Name"
```

Set your email:

```bash
git config --global user.email "you@example.com"
```

Check your configuration:

```bash
git config --list
```

> **Note:** Your Git configuration is local to your computer. A GitHub account is separate from Git itself.

## 2. Create or Download a Repository

Create a new Git repository:

```bash
git init
```

Copy an existing repository:

```bash
git clone <repository-url>
```

Check the current repository:

```bash
git status
```

## 3. Save Your Changes

Add a specific file:

```bash
git add file.txt
```

Add all changed files:

```bash
git add .
```

Create a commit:

```bash
git commit -m "Describe the changes"
```

View commit history:

```bash
git log
```

## 4. Work with GitHub / Remote Repositories

Connect your local repository to a remote repository:

```bash
git remote add origin <repository-url>
```

Check the remote:

```bash
git remote -v
```

Download the latest changes:

```bash
git pull
```

Upload your commits:

```bash
git push
```

For the first push of a new branch:

```bash
git push -u origin main
```

## 5. Branches

Create a new branch:

```bash
git branch feature-name
```

Switch to a branch:

```bash
git switch feature-name
```

Create **and** switch to a new branch:

```bash
git switch -c feature-name
```

See all branches:

```bash
git branch
```

Merge a branch:

```bash
git switch main
git merge feature-name
```

## 6. Undo / Fix Mistakes

See unstaged changes:

```bash
git diff
```

Unstage a file:

```bash
git restore --staged file.txt
```

Discard changes to a file:

```bash
git restore file.txt
```

Change the last commit message:

```bash
git commit --amend -m "New message"
```

## 7. The Most Important Workflow

```text
Make changes
    ↓
git status
    ↓
git add .
    ↓
git commit -m "Describe changes"
    ↓
git pull
    ↓
git push
```

## Key Ideas

- **Repository (repo)** → Your project tracked by Git.
    
- **Commit** → A saved version of your changes.
    
- **Branch** → A separate line of development.
    
- **Remote** → An online copy of your repository.
    
- **GitHub** → A service for hosting Git repositories and collaborating.
    
- **Pull** → Download changes from the remote.
    
- **Push** → Upload your commits to the remote.
    

**Remember:**  
`add` → prepare changes  
`commit` → save changes locally  
`push` → upload changes  
`pull` → download changes