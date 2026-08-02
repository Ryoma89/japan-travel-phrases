import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

export function PageContainer({ children }: PageContainerProps) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-5 py-5 sm:px-8 sm:py-9">
      {children}
    </div>
  );
}
