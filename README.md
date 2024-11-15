# Project Development Guidelines

## 📚 Tech Stack & Libraries

### UI Components & Styling
- ShadcN UI
- Tailwind CSS
- Material-UI (MUI)

### Icons
- Primary: Lucide React
- Alternative icon libraries can be used when necessary (document usage in comments)

## 🏗 Code Structure

### Directory Structure
```
src/
├── components/
│   ├── ui/           # ShadcN components
│   └── shared/       # Reusable components
├── types/            # TypeScript type definitions
├── hooks/            # Custom React hooks
├── pages/           # Page components
├── utils/           # Helper functions
└── styles/          # Global styles
```

### TypeScript Guidelines
- **MANDATORY**: All components, functions, and variables must be typed
- Place shared types in `src/types/` directory
- Example:
  ```typescript
  // src/types/user.ts
  export interface User {
    id: string;
    name: string;
    email: string;
  }

  // src/types/props.ts
  export interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
  }
  ```

## 🔧 Development Rules

### 1. Page Structure
- One main function per page
- Keep pages modular and focused
- Example:
  ```typescript
  // pages/About.tsx
  const AboutPage: React.FC = () => {
    return (
      <div>
        {/* Page content */}
      </div>
    );
  };

  export default AboutPage;
  ```

### 2. Hook Usage
- Create custom hooks for reusable logic
- Place hooks in `src/hooks/` directory
- Use meaningful naming: `use[Feature]`
- Example:
  ```typescript
  // hooks/useFormValidation.ts
  export const useFormValidation = (initialValues: FormValues) => {
    // Hook logic
  };
  ```

### 3. Component Structure
```typescript
// Good Component Structure
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import type { ComponentProps } from '@/types/props';

const ExampleComponent: React.FC<ComponentProps> = ({ title }) => {
  // State declarations
  const [data, setData] = useState<string>('');

  // Event handlers
  const handleClick = (): void => {
    // Logic
  };

  return (
    <div>
      {/* JSX */}
    </div>
  );
};
```

### 4. Commenting Guidelines
Add comments for:
- Complex business logic
- Non-obvious state manipulations
- Complex UI calculations
- API integrations
- Workarounds or temporary solutions

Example:
```typescript
// Calculates the total price including tax and shipping
const calculateTotal = (items: CartItem[]): number => {
  // First sum up the base prices
  const basePrice = items.reduce((sum, item) => sum + item.price, 0);
  
  // Add 8% tax
  const withTax = basePrice * 1.08;
  
  // Add flat rate shipping of $5 for orders under $50
  return basePrice < 50 ? withTax + 5 : withTax;
};
```

## 🚀 Getting Started

1. Clone the repository
```bash
git clone [repository-url]
```

2. Switch to your assigned feature branch
```bash
git checkout feature/[your-feature-branch]
```

3. Install dependencies
```bash
npm install
```

4. Start development server
```bash
npm run dev
```

## 🔍 Code Review Checklist
- [ ] Types are properly defined
- [ ] Components are in appropriate directories
- [ ] Custom hooks are used where necessary
- [ ] Code is properly commented
- [ ] No unused imports or variables
- [ ] Consistent naming conventions
- [ ] Responsive design principles followed
- [ ] No hardcoded values

## 🤝 Contribution Guidelines
1. Always work on your assigned feature branch
2. Pull latest changes from development branch regularly
3. Write meaningful commit messages
4. Create PR (Pull Request) when feature is complete
5. Ensure all types are properly defined
6. Add necessary comments for complex logic

## ⚠️ Common Pitfalls to Avoid
- Mixing different UI library styles unnecessarily
- Skipping type definitions
- Writing monolithic components
- Insufficient commenting on complex logic
- Hardcoding values that should be configurable

For any questions or clarifications, contact the team lead.
