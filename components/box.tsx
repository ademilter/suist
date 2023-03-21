import { ReactNode } from "react";
import { cx } from "@/lib/utils";

export default function Box({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "grid gap-6 rounded-xl bg-white p-4 shadow md:p-6",
        className
      )}
    >
      {children}
    </div>
  );
}
