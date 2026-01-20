"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Spinner } from "../ui/spinner";

interface SearchBarProps {
  placeholder?: string;
  paramName?: string;
  className?: string;
}

const SearchBar = ({
  placeholder = "Search here...",
  paramName = "search",
  className = "",
}: SearchBarProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [value, setValue] = useState(searchParams.get(paramName) || "");
  const [debouncedValue] = useDebounce(value, 500); // 500ms debounce
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (value !== debouncedValue) {
      setIsLoading(true);
    }
  }, [value, debouncedValue]);

  useEffect(() => {
  const currentValue = searchParams.get(paramName) || "";

  if (currentValue === debouncedValue) {
    setIsLoading(false);
    return;
  }

  const params = new URLSearchParams(searchParams.toString());

  if (debouncedValue) {
    params.set(paramName, debouncedValue);
  } else {
    params.delete(paramName);
  }

  router.replace(`${pathname}?${params.toString()}`);
  setIsLoading(false);
}, [debouncedValue, pathname, paramName, router]); 


  return (
    <div className="relative md:w-1/2 w-full lg:1/2, xl:1/3 flex items-center justify-between">
      <div
        className={cn(
          `border rounded-md  w-full border-line-2  outline-none flex items-center focus-within:ring-2 focus-within:ring-secondary ${className}`
        )}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <Icon icon="solar:magnifer-linear" className=" ml-5 text-lg" />
        )}

        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="ml-5 w-full h-full bg-transparent py-2 outline-none"
        />
      </div>
      {isLoading ? (
        <Loader2 size={28} className="animate-spin" color="#803300" />
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
