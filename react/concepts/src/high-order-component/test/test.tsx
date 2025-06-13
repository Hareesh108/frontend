import React, { ComponentType, useState } from "react";

// Form interface
interface FormData {
  username: string;
  email: string;
}

// Props interface for the HOC
interface WithFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading?: boolean;
}

// HOC function
const withFormHandling = <
  P extends WithFormProps & {
    formData: FormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
>(
  WrappedComponent: ComponentType<P>
) => {
  return (
    props: Omit<P, keyof WithFormProps | "formData" | "handleChange">
  ) => {
    const [formData, setFormData] = useState<FormData>({
      username: "",
      email: "",
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      setLoading(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    return (
      <WrappedComponent
        {...(props as P)}
        onSubmit={handleSubmit}
        loading={loading}
        formData={formData}
        handleChange={handleChange}
      />
    );
  };
};

// Basic form component
const SimpleForm: React.FC<
  WithFormProps & {
    formData: FormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
> = ({ onSubmit, loading, formData, handleChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

// Create enhanced form component using HOC
const EnhancedForm = withFormHandling(SimpleForm);

// Usage example
const TestComponent: React.FC = () => {
  return (
    <div>
      <h2>Form with HOC Example</h2>
      <EnhancedForm />
    </div>
  );
};

export default TestComponent;
