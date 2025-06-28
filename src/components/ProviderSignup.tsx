import { useState } from "react";
import { Button } from "../components/Button";

export const ProviderSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    serviceCategory: "",
    experience: "",
    location: "",
  });

  const [idFile, setIdFile] = useState<File | null>(null);
  const [selfieFile, setSelfieFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setFile: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("phone", formData.phone);
    payload.append("password", formData.password);
    payload.append("serviceCategory", formData.serviceCategory);
    payload.append("experience", formData.experience);
    payload.append("location", formData.location);

    if (idFile) payload.append("idDocument", idFile);
    if (selfieFile) payload.append("selfie", selfieFile);

    // Replace this with your backend API call
    console.log("Submitting provider signup payload...");
    for (const pair of payload.entries()) {
      console.log(pair[0], pair[1]);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">
        Become a Provider
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Create Password"
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
        <input
          type="text"
          name="serviceCategory"
          placeholder="Service Category (e.g. Plumbing)"
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
        <input
          type="text"
          name="experience"
          placeholder="Years of Experience"
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Your Location"
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />

        <div>
          <label className="block font-medium">Upload ID Document</label>
          <input
            type="file"
            accept="image/*,application/pdf"
            onChange={(e) => handleFileChange(e, setIdFile)}
            className="mt-1"
          />
          {idFile && (
            <div className="mt-2 text-sm text-gray-700">
              Selected file: {idFile.name}
            </div>
          )}
        </div>

        <div>
          <label className="block font-medium">Take a Selfie</label>
          <input
            type="file"
            accept="image/*"
            capture="user"
            onChange={(e) => handleFileChange(e, setSelfieFile)}
            className="mt-1"
          />
          {selfieFile && (
            <div className="mt-2">
              <img
                src={URL.createObjectURL(selfieFile)}
                alt="Selfie Preview"
                className="w-32 h-32 object-cover rounded-full border"
              />
            </div>
          )}
        </div>

        <Button>Register</Button>
      </form>
    </div>
  );
};
