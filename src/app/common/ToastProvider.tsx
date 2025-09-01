"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

type ToastVariant = "success" | "error" | "info" | "warning";
type Toast = {
  id: string;
  title?: string;
  message: string;
  variant?: ToastVariant;
  duration?: number; // ms
};

type ToastContextValue = {
  push: (t: Omit<Toast, "id">) => string;
  remove: (id: string) => void;
  success: (
    message: string,
    opts?: Omit<Toast, "id" | "message" | "variant">
  ) => string;
  error: (
    message: string,
    opts?: Omit<Toast, "id" | "message" | "variant">
  ) => string;
  info: (
    message: string,
    opts?: Omit<Toast, "id" | "message" | "variant">
  ) => string;
  warning: (
    message: string,
    opts?: Omit<Toast, "id" | "message" | "variant">
  ) => string;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider />");
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [mounted, setMounted] = useState(false);
  const idRef = useRef(0);

  useEffect(() => setMounted(true), []);

  const remove = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const push = useCallback(
    (t: Omit<Toast, "id">) => {
      const id = `t_${++idRef.current}`;
      const toast: Toast = {
        id,
        duration: 3000,
        variant: "info",
        ...t,
      };
      setToasts((prev) => [...prev, toast]);

      // auto-dismiss
      const timeout = setTimeout(() => remove(id), toast.duration);
      // optional: store/clear timeout refs if you add hover-to-pause, etc.
      void timeout;

      return id;
    },
    [remove]
  );

  const success = useCallback(
    (message: string, opts: Omit<Toast, "id" | "message" | "variant"> = {}) =>
      push({ message, variant: "success", ...opts }),
    [push]
  );
  const error = useCallback(
    (message: string, opts: Omit<Toast, "id" | "message" | "variant"> = {}) =>
      push({ message, variant: "error", ...opts }),
    [push]
  );
  const info = useCallback(
    (message: string, opts: Omit<Toast, "id" | "message" | "variant"> = {}) =>
      push({ message, variant: "info", ...opts }),
    [push]
  );
  const warning = useCallback(
    (message: string, opts: Omit<Toast, "id" | "message" | "variant"> = {}) =>
      push({ message, variant: "warning", ...opts }),
    [push]
  );

  const value = useMemo(
    () => ({ push, remove, success, error, info, warning }),
    [push, remove, success, error, info, warning]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      {mounted &&
        createPortal(
          <div className="fixed top-4 right-4 z-[9999] space-y-3 w-[min(92vw,380px)]">
            {toasts.map((t) => (
              <div
                key={t.id}
                className="animate-in fade-in slide-in-from-top-2"
                role="status"
                aria-live="polite"
              >
                <div
                  className={`alert shadow-md flex items-center justify-between ${
                    t.variant === "success"
                      ? "alert-success"
                      : t.variant === "error"
                      ? "alert-error"
                      : t.variant === "warning"
                      ? "alert-warning"
                      : "alert-info"
                  }`}
                >
                  <div className="flex-1">
                    {t.title && <p className="font-semibold">{t.title}</p>}
                    <p>{t.message}</p>
                  </div>
                  <button
                    onClick={() => remove(t.id)}
                    className="ml-3 text-lg leading-none hover:text-black/70"
                    aria-label="Dismiss"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  );
}
