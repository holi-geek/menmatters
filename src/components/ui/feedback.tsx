import { Loader2 } from "lucide-react";

export const LoadingSpinner = ({ label = "Loading…" }: { label?: string }) => (
  <div
    role="status"
    aria-live="polite"
    className="flex flex-col items-center justify-center gap-3 py-16 text-muted-foreground"
  >
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
    <span className="text-sm">{label}</span>
  </div>
);

export const ErrorMessage = ({ message }: { message: string }) => (
  <div
    role="alert"
    className="mx-auto max-w-md rounded-xl border border-destructive/30 bg-destructive/10 p-6 text-center text-destructive"
  >
    <p className="font-semibold">Something went wrong</p>
    <p className="mt-1 text-sm">{message}</p>
  </div>
);
