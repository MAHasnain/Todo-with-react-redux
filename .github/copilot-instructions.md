# TaskFlow Todo App - AI Coding Agent Instructions

## Project Overview

TaskFlow is a React + Redux todo application with a focus on clean UX. It uses modern tooling: Vite for bundling, Redux Toolkit for state management, Material UI + Flowbite for components, and Tailwind CSS for styling.

## Architecture & Data Flow

### State Management (Redux Toolkit)

- **Single reducer**: `src/features/todoSlice.js` manages all todo state
- **Store setup**: `src/app/store.js` configures the Redux store with just the todoReducer
- **State shape**:
  ```javascript
  { todo: [{ id: string, text: string }, ...] }
  ```
- **Actions**: `addTodo(text)`, `removeTodo(id)`, `editTodo(id)` exported from todoSlice
- **Pattern**: Use Redux Toolkit's `createSlice` for all state mutations; reducers mutate draft state directly (Immer handles immutability)

### Component Structure

- **App.jsx**: Root layout component wrapping header, footer, and page content in MUI Container
- **Pages** (`src/pages/`): Route-level components (Home, About, etc.) - only Home is currently routed
- **Components** (`src/components/`): Shared UI components (Header with Flowbite navbar, Footer with Flowbite footer)
- **Layout pattern**: Header → Container(page content) → Footer; all MUI spacing uses sx props

### Styling Approach

- **Tailwind + Material UI coexist**: Use `sx` props for MUI components, Tailwind classes for custom styling
- **Flowbite React**: Used for navbar/footer components with Tailwind foundation
- **CSS**: `src/index.css` imports Tailwind and Flowbite; most legacy CSS is commented out
- **Container styling**: `App.jsx` uses `<Container maxWidth="xl" sx={{ px: 0 }}>` to handle padding

## Development Workflow

### Commands

- `npm run dev`: Start Vite dev server with HMR (React Fast Refresh enabled)
- `npm run build`: Vite production build to `dist/`
- `npm run lint`: ESLint check (flat config format)
- `npm run preview`: Preview production build locally

### Build Configuration (Vite)

- **Plugins**: React (with Babel React Compiler), Tailwind CSS, Flowbite React
- **React Compiler**: Enabled via babel-plugin-react-compiler (may impact dev/build performance)
- **Entry point**: `src/main.jsx` wraps app with Redux Provider and React Router BrowserRouter

### Routing (React Router v7)

- **Setup**: `main.jsx` configures BrowserRouter with single route: `path="/"` → App component
- **Router context**: App and all pages have access to React Router's useNavigate, useParams hooks
- **Current limitation**: Only home route exists; other pages (about, features, addTodo, allTodos, notFound) are defined but not routed

## Key Patterns & Conventions

### ESLint Rules (Important)

- Unused variable rule: varsIgnorePattern `^[A-Z_]` (ignores uppercase constants and component names)
- React Hooks: `reactHooks.configs.flat.recommended` enforces dependency arrays
- React Refresh: `reactRefresh.configs.vite` ensures dev HMR works correctly

### Component Naming & File Organization

- Components: PascalCase (e.g., Header.jsx, Footer.jsx)
- Pages: PascalCase (e.g., Home.jsx, about.jsx - though about is lowercase, follow Home pattern)
- Redux features: lowercase with Slice suffix (todoSlice.js)
- Exports: Default export per file (standard React pattern)

### Redux Patterns

- All state lives in todoSlice; add new features as new slices if state grows
- Always dispatch actions through Redux; avoid prop-drilling state to children
- Use `useSelector` to read state, `useDispatch` to trigger actions

### Material UI + Flowbite

- MUI: Typography, Container, Button, Stack for layout and styled components
- Flowbite: Navbar, Footer, NavbarLink for pre-built navigation
- **Conflict avoidance**: Don't mix MUI and Flowbite styling for same component; choose one
- Container padding: MUI Container has default padding; override with `sx={{ px: 0 }}` when needed

## Integration Points & Dependencies

### External Libraries

- `@reduxjs/toolkit` + `react-redux`: State management
- `@mui/material` + Emotion: Material Design components
- `flowbite-react`: Tailwind-based component library (navbar, footer, buttons)
- `react-router`: Client-side routing (v7 setup in main.jsx)
- `tailwindcss` + `@tailwindcss/vite`: Utility-first CSS

### Critical File Relationships

- Redux actions are dispatched from page/component files; always import from `features/todoSlice.js`
- App.jsx must remain flexible for future routing expansion (currently only renders Home)
- Store configuration in `app/store.js` should remain minimal; add reducers here as features grow

## Common Tasks

### Adding a New Todo Feature

1. Add action to `todoSlice.js` as a new reducer
2. Export action from todoSlice
3. Import `useDispatch` in component, call action with `dispatch(actionName(payload))`
4. Use `useSelector(state => state.todo)` to read todos

### Adding a New Page

1. Create component in `src/pages/`
2. Add route in `main.jsx` Routes configuration
3. Link from Header navbar if needed

### Styling a Component

- Prefer Material UI `sx` prop for MUI components
- Use Tailwind classes (`className`) for custom styling
- Avoid mixing inline styles with either system

---

**Last Updated**: This reflects the current application state with Redux managing todos, MUI + Flowbite UI components, and Tailwind styling system.
