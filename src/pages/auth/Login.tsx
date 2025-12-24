import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod schema
const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    const { data: authData, error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    const user = authData.user;

    if (!user?.email_confirmed_at) {
      toast.error("Please verify your email before logging in");
      await supabase.auth.signOut();
      return;
    }

    toast.success("Logged in successfully");
  };

  return (
    <div className="min-h-screen p-4 flex items-center justify-center bg-gradient-to-b from-[#8c16f9] to-[#7424e0]">
      <div className="bg-white w-full max-w-sm rounded-2xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-center text-[#7a1df2] mb-2">
          Log in to flowva
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Log in to receive personalized recommendations
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <label className="block text-sm mt-4 mb-1">Email</label>
          <input
            className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-1 focus:outline-[#7a1df2]"
            placeholder="user@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mb-3">{errors.email.message}</p>
          )}

          {/* Password */}
          <label className="block text-sm mt-4 mb-1">Password</label>
          <div className="relative mb-1">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-1 focus:outline-[#7a1df2]"
              placeholder="••••••••"
              {...register("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#7a1df2] font-semibold cursor-pointer"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {errors.password && (
            <p className="text-sm text-red-500 mb-2">
              {errors.password.message}
            </p>
          )}

          {/* Forgot password */}
          <div className="text-right mb-4">
            <a
              href="/forgot-password"
              className="text-[#7a1df2] text-sm font-semibold cursor-pointer hover:underline"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#8a2be2] text-white py-3 rounded-full font-semibold cursor-pointer hover:opacity-90 disabled:opacity-50"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </button>
        </form>

        {/* Signup */}
        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-[#7a1df2] font-semibold cursor-pointer hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
