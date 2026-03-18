# Git Branch Switching Issues - Solutions and Explanations

## Problem Summary

You encountered two main issues when trying to switch branches:

1. **"fatal: invalid reference: mintlify"** and similar errors for other branches
2. **Branch name typos** causing confusion (feature/mintlifyPage vs feature/mintlyfyPage)

---

## Issue 1: Cannot Switch to Remote Branches

### Root Cause
When you ran `git branch`, you saw:
```
* CursorLandingPage
  feature/mintlyfyPage
  main
```

However, when trying to switch to `mintlify`, you got:
```
fatal: invalid reference: mintlify
```

**Why?** The branch `mintlify` exists on the remote (GitHub) but not in your local repository. You can only see local branches with `git branch`.

### Solution

To see all branches including remote ones:
```bash
git branch -a
```

To switch to a remote branch that doesn't exist locally yet:
```bash
git switch -c mintlify origin/mintlify
```
Or simply:
```bash
git switch mintlify
```
This will automatically create a local tracking branch from `origin/mintlify`.

---

## Issue 2: Branch Name Typos

### The Confusion
Looking at your commands, there's a typo in your branch name:
- In `git branch` output: **feature/mintlyfyPage** (notice "lyfyPage")
- When trying to switch: **feature/mintlifyPage** (notice "lifyPage")

These are two different branch names!

### Solution

1. **Check the exact branch name:**
   ```bash
   git branch
   ```

2. **Switch to the correct branch name:**
   ```bash
   git switch feature/mintlyfyPage
   ```
   (Note the spelling: mint**lyfy**Page)

3. **If you want to rename the branch to fix the typo:**
   ```bash
   # First, switch to the branch
   git switch feature/mintlyfyPage

   # Rename it
   git branch -m feature/mintlifyPage

   # If the branch exists on remote, update it
   git push origin :feature/mintlyfyPage feature/mintlifyPage
   git push origin -u feature/mintlifyPage
   ```

---

## Issue 3: Directory Deletion Failures

When switching from `CursorLandingPage` to `main`, you saw:
```
Deletion of directory 'public' failed. Should I try again? (y/n)
```

### Root Cause
This happens when:
- Files are locked by another process (IDE, file explorer, running server)
- Permission issues
- Files are in use by the system

### Solutions

1. **Close all programs** that might be accessing the files:
   - VS Code / Cursor IDE
   - Running development servers (npm, node, etc.)
   - File explorers with the directory open

2. **Force close processes using the files** (Windows):
   ```bash
   # Find what's using the directory
   handle.exe public

   # Or restart your IDE/terminal
   ```

3. **Try the switch again:**
   ```bash
   git switch main
   ```

4. **As a last resort, clean and reset:**
   ```bash
   git clean -fd
   git switch main
   ```
   ⚠️ Warning: `git clean -fd` will delete untracked files!

---

## Complete Quick Reference

### To see all available branches:
```bash
# Local branches only
git branch

# All branches (local + remote)
git branch -a

# Remote branches only
git branch -r
```

### To switch to an existing local branch:
```bash
git switch BranchName
```

### To switch to a remote branch (create local tracking branch):
```bash
git switch BranchName
# or
git switch -c BranchName origin/BranchName
```

### To create a new branch:
```bash
git switch -c NewBranchName
```

### To update your list of remote branches:
```bash
git fetch origin
```

---

## Your Available Branches

Based on the remote repository, these branches exist:
- `main`
- `CursorLandingPage`
- `mintlify`
- `feature/mintlyfyPage` (note the spelling!)

### To switch to mintlify:
```bash
git switch mintlify
```

### To switch to feature/mintlyfyPage:
```bash
git switch feature/mintlyfyPage
```

---

## Preventive Tips

1. **Always fetch before switching:**
   ```bash
   git fetch origin
   git switch BranchName
   ```

2. **Use tab completion** to avoid typos (press Tab after typing part of the branch name)

3. **Check branch names before switching:**
   ```bash
   git branch -a
   ```

4. **Close IDEs and servers** before switching branches to avoid file lock issues

5. **Use consistent naming conventions:**
   - feature/my-feature (kebab-case)
   - feature/myFeature (camelCase)
   - Pick one and stick with it!

---

## Summary

Your specific issues were:
1. ✅ Branch `mintlify` exists remotely but not locally → Use `git switch mintlify`
2. ✅ Branch name typo: `mintlyfyPage` vs `mintlifyPage` → Check spelling with `git branch`
3. ✅ File deletion failures → Close IDE and running processes before switching

You should now be able to switch to any branch successfully!
