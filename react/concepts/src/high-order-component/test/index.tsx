import React, { ComponentType, useState, useEffect } from "react";

// HOC that adds loading functionality
function withLoading<P extends object>(WrappedComponent: ComponentType<P>) {
  return function WithLoadingComponent(props: P & { isLoading?: boolean }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate API call
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
}

// Example component that displays user data
interface UserProfileProps {
  username: string;
  email: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ username, email }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {username}</p>
      <p>Email: {email}</p>
    </div>
  );
};

// Create enhanced component with loading functionality
const UserProfileWithLoading = withLoading(UserProfile);

// Usage example
const App: React.FC = () => {
  return (
    <div>
      <h1>HOC Example</h1>
      <UserProfileWithLoading username="john_doe" email="john@example.com" />
    </div>
  );
};

export default App;
