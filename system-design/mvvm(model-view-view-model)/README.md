
---

```markdown
# MVVM Architecture in Next.js

## 🧱 MVVM Components

- **Model**: Handles data logic and API calls (e.g., `getUserApi`, `getUserRoleApi`).
- **ViewModel**: Contains logic, state management, and data transformations (e.g., `useForm`, `useEffect` in `UserForm`).
- **View**: The JSX/TSX UI elements shown to users (e.g., `Field.Input`, `SheetContent`, `Loader`).

## 📌 Data Flow

```

Model → ViewModel → View
View → ViewModel → Model (via form submit or interaction)

````

## ✅ Advantages

- **Low coupling** between view and logic
- **Testable** logic through ViewModel
- **Reusable** view and logic separation
- **Declarative UI** via React

---

## 📦 Simple Example: MVVM User Form in Next.js

### 1. Model – `lib/api/user.ts`

```ts
export async function getUserById(id: string) {
  const res = await fetch(`/api/users/${id}`);
  if (!res.ok) throw new Error("Failed to fetch user");
  return res.json();
}
````

---

### 2. ViewModel – `hooks/useUserForm.ts`

```ts
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getUserById } from "@/lib/api/user";

export function useUserForm(userId: string) {
  const [loading, setLoading] = useState(true);
  const form = useForm({ defaultValues: { name: "", email: "" } });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserById(userId);
        form.reset(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [userId]);

  return { form, loading };
}
```

---

### 3. View – `components/UserForm.tsx`

```tsx
"use client";

import { useUserForm } from "@/hooks/useUserForm";
import { FormProvider } from "react-hook-form";

export function UserForm({ userId }: { userId: string }) {
  const { form, loading } = useUserForm(userId);

  if (loading) return <div>Loading...</div>;

  return (
    <FormProvider {...form}>
      <form className="space-y-4">
        <input {...form.register("name")} placeholder="Name" />
        <input {...form.register("email")} placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
}
```

---

## ✅ Summary

| Layer         | Component Example           |
| ------------- | --------------------------- |
| **Model**     | `getUserById()`             |
| **ViewModel** | `useUserForm()` Hook        |
| **View**      | `<UserForm />` UI component |

This structure keeps logic, data access, and presentation cleanly separated — a modern React/Next.js approach using the **MVVM pattern**.
