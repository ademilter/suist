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
        "grid gap-6 rounded-2xl bg-white p-6 shadow md:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
