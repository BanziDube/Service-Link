import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signup } from "./api";
import { UserType, SignUpCredentials } from "./types";

const userSchema = z.object({
  userType: z.enum(["user", "provider"]),
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be 50 characters or less"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
});

const providerSchema = userSchema.extend({
  businessName: z.string().min(2, "Business name must be at least 2 characters").max(100, "Business name must be 100 characters or less"),
  serviceCategory: z.string().min(1, "Service category is required"),
  location: z.string().min(2, "Location must be at least 2 characters").max(100, "Location must be 100 characters or less"),
});

const schema = z.discriminatedUnion("userType", [
  userSchema,
  providerSchema,
]);

export const SignUp = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpCredentials>({
    resolver: zodResolver(schema),
    defaultValues: { userType: "user" },
  });

  const userType = watch("userType");

  const onSubmit = async (data: SignUpCredentials) => {
    setIsLoading(true);
    setError(null);
    try {
      await signup(data);
      // On success, redirect or update auth context (handled in SignUpPage)
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Sign Up
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* User Type Toggle */}
        <div>
          <label className="block text-gray-700 mb-2">Account Type</label>
          <select
            {...register("userType")}
            className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            <option value="user">Regular User</option>
            <option value="provider">Service Provider</option>
          </select>
          {errors.userType && (
            <p className="text-red-500 text-sm mt-1">{errors.userType.message}</p>
          )}
        </div>

        {/* Name */}
        <div>
          <label className="block text-gray-700 mb-2">Name</label>
          <input
            type="text"
            {...register("name")}
            className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            {...register("email")}
            className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            {...register("password")}
            className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
            placeholder="********"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Provider-Specific Fields */}
        {userType === "provider" && (
          <>
            <div>
              <label className="block text-gray-700 mb-2">Business Name</label>
              <input
                type="text"
                {...register("businessName")}
                className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Your Business Name"
              />
              {errors.businessName && (
                <p className="text-red-500 text-sm mt-1">{errors.businessName.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Service Category</label>
              <select
                {...register("serviceCategory")}
                className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                <option value="">Select a category</option>
                <option value="House Cleaning">House Cleaning</option>
                <option value="Repairs & Maintenance">Repairs & Maintenance</option>
                <option value="Landscaping">Landscaping</option>
                <option value="Childcare">Childcare</option>
                <option value="Laundry">Laundry</option>
                <option value="Cooking">Cooking</option>
              </select>
              {errors.serviceCategory && (
                <p className="text-red-500 text-sm mt-1">{errors.serviceCategory.message}</p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Location</label>
              <input
                type="text"
                {...register("location")}
                className="p-2 border rounded-md w-full focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="e.g., Johannesburg"
              />
              {errors.location && (
                <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
              )}
            </div>
          </>
        )}

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full p-2 rounded-md text-white ${
            isLoading ? "bg-teal-300 cursor-not-allowed" : "bg-teal-500 hover:bg-teal-600"
          } transition duration-300`}
        >
          {isLoading ? "Registering..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};