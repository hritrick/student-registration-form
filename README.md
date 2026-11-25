# Student Registration Form (React)

A minimal, readable React application demonstrating single-state form handling, dynamic input validation, and conditional rendering.

## What this Project Does
- Renders a student registration form with fields: `name`, `email`, and an `I accept the terms` checkbox.
- Tracks all inputs in a single unified state object using a single `handleChange` function.
- Keeps the **Submit** button disabled until both text inputs contain non-empty text and the checkbox is checked.
- Prevents page reload on submit (`e.preventDefault()`) and renders the submitted student details in a card below the form.

---

## Step-by-Step Commands (From Scratch)

### 1. Create project from an empty folder
```bash
npm create vite@latest student-registration-form -- --template react
cd student-registration-form
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

The app will start on default Vite port: **`http://localhost:5173`** (or next available port).

---

## Required Ports & Services
- **Port:** `5173` (Frontend Vite dev server)
- **Database:** None (pure client-side React app)

---

## File-by-File Implementation Notes

| File | Purpose & Requirements Covered |
| :--- | :--- |
| `src/App.jsx` | - **One state object for all fields**: `const [formData, setFormData] = useState({ name: '', email: '', isTermsAccepted: false })`<br>- **Single `handleChange`**: extracts `name`, `type`, `value`, `checked` and sets `[name]: type === 'checkbox' ? checked : value`<br>- **Validation**: `isFormValid` checks non-empty name, non-empty email, and `isTermsAccepted === true`<br>- **Disabled button**: `<button disabled={!isFormValid}>`<br>- **Submit handler**: `e.preventDefault()`, stores `formData` in `submittedData`<br>- **Display section**: Conditionally renders `submittedData` below the form |
| `src/main.jsx` | Mounts the `<App />` component into `#root` with `React.StrictMode` |
| `src/index.css` | Minimal, clean CSS styling for form inputs, button states, and the result display card |
| `vite.config.js` | Configures the standard Vite React plugin |
| `package.json` | Project scripts (`dev`, `build`, `preview`) and dependencies (`react`, `react-dom`) |
