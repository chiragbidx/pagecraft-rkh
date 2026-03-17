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
        <h1 className="text-2xl font-semibold tracking-tight">Clients</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          View and manage your client accounts in LeadFlow.
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
          You can view all clients, but only owner/admin can create, edit, or archive.
        </p>
      ) : null}
      <div className="rounded border p-4 bg-card">
        <p className="text-center text-muted-foreground">
          {/* Real client list will render here after schema/data model implementation */}
          No clients yet. Create your first client to get started.
        </p>
      </div>
    </section>
  );
}