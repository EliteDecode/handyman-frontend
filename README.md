# HANDYMAN Project Guidelines

## 📁 Project Structure
```
src/
├── assets/          # Images, fonts, static files
├── components/      # Reusable UI components
├── hooks/           # Custom React hooks
├── layouts/         # Layout components
├── lib/            # Third-party library configurations
├── pages/          # Page components
├── routes/         # Route configurations
├── services/       # API and external service integrations
├── store/          # State management
├── types/          # TypeScript types/interfaces
└── utils/          # Helper functions
```

## 🔧 Technology Stack
- ShadcN UI
- Tailwind CSS
- MUI Components
- Icons: Lucide React/Icon libraries

## 📋 Development Rules
1. **Types**
   - All types must be in `src/types` folder
   - No `any` types allowed
   - Export interfaces/types from separate files

2. **Components**
   - One function per page
   - Use hooks when needed
   - Comment complex logic only

3. **Styling**
   - Prefer Tailwind classes
   - ShadcN components take priority
   - Use MUI components when necessary

## 🌿 Git Workflow Rules

### Daily Development
```bash
# Start of day - Update your feature branch
git checkout development
git pull origin development
git checkout your-feature-branch
git merge development
```

### If Conflicts Occur
```bash
# 1. When merge shows conflicts
git status  # Check conflicting files

# 2. Open each conflicting file and resolve conflicts
# Look for <<<<<<< HEAD, =======, and >>>>>>> markers

# 3. After resolving
git add .
git commit -m "resolved conflicts with development branch"
```

### When Stuck/Need to Reset
```bash
# If you need to undo changes in your feature branch
git fetch origin
git reset --hard origin/development
git checkout -b feature/your-branch-name
```

### Before Making Pull Request
```bash
# 1. Update your branch
git checkout development
git pull origin development
git checkout your-feature-branch
git merge development

# 2. Fix any conflicts
# 3. Test your changes
# 4. Then push
git push origin your-feature-branch
```

### Emergency Fix Process
```bash
# If you find a bug in your feature
git checkout your-feature-branch
# Fix the issue
git commit -m "fix: description of the fix"
git push origin your-feature-branch
```

## ⚠️ Important Rules
1. **NEVER** push directly to `master` or `development`
2. Always create Pull Request for review
3. Keep commits small and focused
4. Write clear commit messages
5. Pull from `development` daily
6. Resolve conflicts in your feature branch

## 🚨 Commit Message Format
```
feat: add new feature
fix: bug fix
style: styling changes
refactor: code refactoring
docs: documentation updates
test: adding tests
```

## 🔄 Branch Naming
```
feature/feature-name
bugfix/bug-description
hotfix/urgent-fix
```

## 📝 Pull Request Process
1. Update your feature branch with development
2. Resolve any conflicts
3. Push your changes
4. Create PR on GitHub
5. Wait for code review
6. Address review comments
7. Get approval
8. Merge will be done by lead

## 🚫 Common Issues & Solutions

### 1. Stuck with Bad Changes
```bash
# Discard all local changes
git checkout -- .

# Or reset to last commit
git reset --hard HEAD
```

### 2. Wrong Branch
```bash
# Save your changes
git stash
git checkout correct-branch
git stash pop
```

### 3. Bad Merge
```bash
# Undo last merge
git reset --hard HEAD~1
```

### 4. Update Branch After PR Comments
```bash
# Make changes
git add .
git commit -m "fix: PR review changes"
git push origin your-feature-branch
```

For any Git-related issues, contact the team lead before making major changes.
