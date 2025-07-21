import { SignUpCredentials, User } from "./types";

export const signup = async (credentials: SignUpCredentials): Promise<User> => {
  // Sanitize inputs (basic example, expand as needed)
  const sanitizedCredentials = {
    ...credentials,
    name: credentials.name.trim(),
    email: credentials.email.trim().toLowerCase(),
    businessName: credentials.businessName?.trim(),
    serviceCategory: credentials.serviceCategory?.trim(),
    location: credentials.location?.trim(),
  };

  try {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Assume CSRF token is handled by backend or middleware
      },
      body: JSON.stringify(sanitizedCredentials),
    });

    if (!response.ok) {
      throw new Error("Registration failed");
    }

    return await response.json();
  } catch (error) {
    // Avoid exposing sensitive error details
    throw new Error("Registration failed");
  }
};