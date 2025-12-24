import { supabase } from "../../lib/supabase";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Zod schema
const resetPasswordSchema = z
  .object({
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;

export default function ResetPassword() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = async (data: ResetPasswordFormData) => {
    const { error } = await supabase.auth.updateUser({
      password: data.password,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Password reset successful. Please log in.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#8c16f9] to-[#7424e0]">
      <div className="bg-white w-full max-w-sm rounded-2xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-center text-[#7a1df2] mb-2">
          Reset your password
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Enter a new password for your account
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Password */}
          <label className="block text-sm mb-1">New Password</label>
          <div className="relative mb-1">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 pr-16 focus:outline-[#7a1df2]"
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
            <p className="text-sm text-red-500 mb-3">
              {errors.password.message}
            </p>
          )}

          {/* Confirm password */}
          <label className="block text-sm mt-4 mb-1">
            Confirm New Password
          </label>
          <div className="relative mb-1">
            <input
              type={showConfirmPassword ? "text" : "password"}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 pr-16 focus:outline-[#7a1df2]"
              placeholder="••••••••"
              {...register("confirmPassword")}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-[#7a1df2] font-semibold cursor-pointer"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>

          {errors.confirmPassword && (
            <p className="text-sm text-red-500 mb-4">
              {errors.confirmPassword.message}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#8a2be2] text-white py-3 rounded-full font-semibold cursor-pointer hover:opacity-90 disabled:opacity-50 mt-4"
          >
            {isSubmitting ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        {/* Login */}
        <p className="text-center text-sm mt-4">
          Remembered your password?{" "}
          <a
            href="/login"
            className="text-[#7a1df2] font-semibold cursor-pointer hover:underline"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
