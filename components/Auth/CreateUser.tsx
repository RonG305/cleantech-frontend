"use client";

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
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser } from "./actions";
import { showToast } from "../common/Toast/ShowToast";
import InputErrorText from "../common/InputErrorText";
import { Spinner } from "../ui/spinner";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useEffect, useState } from "react";
import { set } from "date-fns";

const authSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  roles: z
    .array(z.string())
    .min(1, { message: "At least one role must be selected" }),
  account_type: z.enum(["INDIVIDUAL", "COMPANY"], {
    message: "Account type is required",
  }),
  company_name: z.string().optional(),
  company_website: z.string().url({ message: "Invalid URL" }).optional(),
  company_registration_number: z.string().optional(),
});

type formFields = z.infer<typeof authSchema>;

export function CreateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    control,
    watch,
    setValue
  } = useForm<formFields>({
    resolver: zodResolver(authSchema),
  });

  const [role, setRole] = useState<string[]>(["CUSTOMER"]);

  const router = useRouter();
  const accountType = watch("account_type");
  console.log("Account Type:", accountType);

 useEffect(() => {
  if (accountType === "INDIVIDUAL") {
    setRole(["CUSTOMER"]);
    setValue("roles", ["CUSTOMER"], { shouldValidate: true });
  }

  if (accountType === "COMPANY") {
    setRole(["PROVIDER"]);
    setValue("roles", ["PROVIDER"], { shouldValidate: true });
  }
}, [accountType, setValue]);


  const { mutate, isPending } = useMutation({
    mutationFn: async (data: formFields) => registerUser(data),
    onSuccess: (data) => {
      if (data?.error) {
        showToast({
          title: "Registration Failed",
          message: data.error,
          type: "error",
        });
      }
      showToast({
        title: "Registration Successful",
        type: "success",
        message: data?.message || "You have registered successfully",
      });
    },
    onError: (error: any) => {
      setError("root", { type: "server", message: error.message });
      showToast({
        title: "Registration Failed",
        message: error.message,
        type: "error",
      });
    },
  });

  const onSubmit = (data: formFields) => {
    mutate(data);
  };
  return (
    <div className={styles.authContainer}>
      <Card className="w-full max-w-2xl mx-4">
        <CardHeader className="flex items-center flex-col justify-center">
          <CardTitle className="font-semibold text-2xl md:text-3xl">
            Register account
          </CardTitle>
          <CardDescription>
            Register a new account to access services
          </CardDescription>
        </CardHeader>
        <div>
          <Avatar className="mx-auto">
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
              <Label htmlFor="password">Set password</Label>
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

            <div className="grid gap-2">
              <Label htmlFor="account_type">Select account Type</Label>

              <Controller
                control={control}
                name="account_type"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select account type" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Account Type</SelectLabel>
                        <SelectItem value="INDIVIDUAL">Individual</SelectItem>
                        <SelectItem value="COMPANY">Company</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              <InputErrorText error={errors.account_type?.message} />
            </div>

            {accountType === "COMPANY" && (
             <>
             <h3 className="mt-4 font-medium text-primary text-lg">Company Details</h3>
                <div className="grid gap-2">
              <Label htmlFor="company_name">Company Name</Label>
              <div>
                <Input
                  type="text"
                  aria-invalid={!!errors.company_name}
                  {...register("company_name")}
                  id="company_name"
                  name="company_name"
                  placeholder="Enter company name"
                />
              </div>
              <InputErrorText error={errors.company_name?.message} />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="company_website">Company Website</Label>
              <div>
                <Input
                  type="text"
                  aria-invalid={!!errors.company_website}
                  {...register("company_website")}
                  id="company_website"
                  name="company_website"
                  placeholder="Enter company website"
                />
              </div>
              <InputErrorText error={errors.company_website?.message} />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="company_registration_number">
                Company Registration Number
              </Label>
              <div>
                <Input
                  type="text"
                  aria-invalid={!!errors.company_registration_number}
                  {...register("company_registration_number")}
                  id="company_registration_number"
                  name="company_registration_number"
                  placeholder="Enter company registration number"
                />
              </div>
              <InputErrorText
                error={errors.company_registration_number?.message}
              />
            </div>
             </>
            )}
            <div className="grid gap-2 ">
              <Label htmlFor="role">Role</Label>
              <div>
                <Input
                  type="text"
                  aria-invalid={!!errors.roles}
                  {...register("roles")}
                  value={role.join(", ")}
                  readOnly
                  id="roles"
                  name="roles"
                  placeholder="Enter role"
                />
              </div>
              <InputErrorText error={errors.roles?.message} />
            </div>

            <Button type="submit" className="w-full mt-4">
              {isPending ? <Spinner /> : "Register"}
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-2">
              Have and account ?{" "}
              <Link href="/auth/login" className="text-primary hover:underline">
                Login here
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
