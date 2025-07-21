import { Navigate } from "react-router-dom";
import { SignUp } from "../auth/Signup";
import { useAuth } from "../hooks/useAuth";

export const SignUpPage = () => {
  const { isAuthenticated } = useAuth(); // Assume useAuth hook provides auth state
  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <div className="container mx-auto px-4 py-16">
      <SignUp />
    </div>
  );
};