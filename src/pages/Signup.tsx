import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Github, Mail, BookOpen, Users } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { signup } from "@/services/authApi";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState<"instructor" | "student">("student"); // Default role
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { mutate, isPending } = useMutation({
    mutationFn: ({ email, password, role }: { email: string; password: string; role: string }) =>
      signup(email, password, role),
    onSuccess: (data) => {
      setSuccess("Signup successful! Redirecting to login...");
      setError("");
      console.log("Signup successful:", data);
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    },
    onError: (error: Error) => {
      setError(error.message || "Signup failed. Please try again.");
      setSuccess("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (!email) {
      setError("Email is required");
      return;
    }
    if (!password) {
      setError("Password is required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    // Call API
    mutate({ email, password, role });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
      <Card className="w-full max-w-md card-3d">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-display font-bold text-foreground">
            Create Account
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Sign up for a new Code Nexus account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 bg-destructive/10 border border-destructive text-destructive rounded-md text-sm">
                {error}
              </div>
            )}
            {success && (
              <div className="p-3 bg-green-100 border border-green-500 text-green-700 rounded-md text-sm">
                {success}
              </div>
            )}

            {/* Role Selection */}
            <div className="space-y-3">
              <Label className="text-base font-semibold">I am a</Label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRole("student")}
                  disabled={isPending}
                  className={`relative p-4 rounded-lg border-2 transition-all duration-200 flex flex-col items-center gap-2 ${
                    role === "student"
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <Users className="h-6 w-6" />
                  <span className="font-semibold text-sm">Student</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole("instructor")}
                  disabled={isPending}
                  className={`relative p-4 rounded-lg border-2 transition-all duration-200 flex flex-col items-center gap-2 ${
                    role === "instructor"
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <BookOpen className="h-6 w-6" />
                  <span className="font-semibold text-sm">Instructor</span>
                </button>
              </div>
            </div>

            <div className="border-t border-border pt-4" />

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isPending}
                className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password (min. 8 characters)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={isPending}
                  className="pr-10 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isPending}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  disabled={isPending}
                  className="pr-10 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  disabled={isPending}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors disabled:opacity-50"
                >
                  {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-display font-semibold py-2.5 transition-all duration-200 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "Signing up..." : "Sign Up"}
            </Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" disabled={isPending} className="transition-all duration-200 hover:shadow-md">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline" disabled={isPending} className="transition-all duration-200 hover:shadow-md">
              <Mail className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary hover:text-primary/80 font-semibold transition-colors"
            >
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}