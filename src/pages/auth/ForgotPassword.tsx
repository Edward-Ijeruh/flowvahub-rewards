import { supabase } from "../../lib/supabase";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Zod schema
const forgotPasswordSchema = z.object({
  email: z.string().email("Enter a valid email"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    const { error } = await supabase.auth.resetPasswordForEmail(data.email, {
      redirectTo: "http://localhost:5173/reset-password",
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Password reset link sent to your email");
    }
  };

  return (
    <div className="min-h-screen p-4 flex items-center justify-center bg-gradient-to-b from-[#8c16f9] to-[#7424e0]">
      <div className="bg-white w-full max-w-sm rounded-2xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-center text-[#7a1df2] mb-2">
          Reset password
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Enter your email to receive a reset link
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <label className="block text-sm mb-1">Email</label>
          <input
            className="w-full border border-gray-200 rounded-lg px-4 py-3 mb-1 focus:outline-[#7a1df2]"
            placeholder="user@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mb-4">{errors.email.message}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#8a2be2] text-white py-3 rounded-full font-semibold cursor-pointer hover:opacity-90 disabled:opacity-50 mt-4"
          >
            {isSubmitting ? "Sending..." : "Send reset link"}
          </button>
        </form>

        {/* Back to login */}
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
