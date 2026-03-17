"use client";

type ClientProps = {
  status: "success" | "error" | null;
  message: string | null;
  canManage: boolean;
  items: any[];
};

export default function Client({ status, message, canManage, items }: ClientProps) {
  return (
    <section className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Contacts</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage all client contacts and associated people.
        </p>
      </header>
      {status && message ? (
        <p
          className={`rounded-md border px-3 py-2 text-sm ${
            status === "success"
              ? "border-emerald-500/30 text-emerald-600"
              : "border-destructive/30 text-destructive"
          }`}
        >
          {message}
        </p>
      ) : null}
      {!canManage ? (
        <p className="text-sm text-muted-foreground">
          You can view contacts, but only owner/admin can add or modify.
        </p>
      ) : null}
      <div className="rounded border p-4 bg-card">
        <p className="text-center text-muted-foreground">
          {/* Real contacts list will render here after model implementation */}
          No contacts yet. Add your first contact.
        </p>
      </div>
    </section>
  );
}