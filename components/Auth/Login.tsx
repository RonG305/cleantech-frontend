'use client';

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import styles from "./auth.module.css";
import { Avatar } from "../ui/avatar";
import { Icon } from "@iconify/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "./actions";
import { showToast } from "../common/Toast/ShowToast";
import InputErrorText from "../common/InputErrorText";
import { Spinner } from "../ui/spinner";
import Link from "next/link";

const authSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

type formFields = z.infer<typeof authSchema>;

const handleRedirect = (roles: string[]) => {
    const roleLower = roles.map(r => r.toLowerCase())[0] || '';
    switch (roleLower) {
        case 'admin':
            return '/admin/dashboard';
        case 'provider':
            return '/provider/dashboard';
        case 'customer':
            return '/customer/dashboard';
        default:
            return '/';
    }
}

export function Login() {
    const { register, handleSubmit, formState: { errors }, setError } = useForm<formFields>({
        resolver: zodResolver(authSchema)
    })

    const router = useRouter()
    const {mutate, isPending} = useMutation({
        mutationFn: async (data: formFields) => loginUser(data),
        onSuccess: (data: any) => {
            console.log("Login response data:", data);
            if(data?.error) {
                showToast({
                    title: "Login Failed",
                    message: data.error,
                    type: "error"
                })
            }
            showToast({
                title: "Login Successful",
                type: "success",
                message: data?.message || "You have logged in successfully"
            })
            const redirectPath = handleRedirect(data.roles || []);
            router.push(redirectPath);
        },
        onError: (error: any) => {
            setError("root", { type: "server", message: error.message })
            showToast({
                title: "Login Failed",
                message: error.message,
                type: "error"
            })
        }

    })

    const onSubmit = (data: formFields) => {
        mutate(data)
    }
  return (
    <div className={styles.authContainer}>
      <Card className="w-full max-w-lg mx-4">
        <CardHeader className="flex items-center flex-col justify-center">
          <CardTitle className="font-semibold text-2xl md:text-3xl">Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>

        </CardHeader>
        <div>
            <Avatar className="mx-auto" >
              <span className="text-4xl">
                <Icon icon="mdi:lock-open-outline" />
              </span>
            </Avatar>
        </div>
        <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Icon
                  icon={"ic:baseline-mail-outline"}
                  className="absolute left-3 top-3 h-5 w-5 text-muted-foreground"
                />
                <Input
                  type="email"
                  aria-invalid={!!errors.email}
                  {...register("email")}
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  className="pl-10 "
                />
              </div>
              <InputErrorText error={errors.email?.message} />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Icon
                  icon={"solar:lock-keyhole-linear"}
                  className="absolute left-3 top-3 h-5 w-5 text-muted-foreground"
                />
                <Input
                  type="password"
                    aria-invalid={!!errors.password}
                  {...register("password")}
                  id="password"
                  name="password"
                  placeholder="Enter password "
                  className="pl-10 "
                />
              </div>
              <InputErrorText error={errors.password?.message} />
            </div>

            <Button type="submit" className="w-full mt-4">
            {isPending ? <Spinner /> : "Login"}
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-2">
              Don't have an account ?{" "}
              <Link href="/auth/register" className="text-primary hover:underline">
                Register here
              </Link>
            </p>
          </form>
        </CardContent>
       
      </Card>
    </div>
  );
}
