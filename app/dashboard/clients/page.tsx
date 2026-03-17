import { desc, eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import Client from "@/app/dashboard/clients/client";
import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { teamMembers } from "@/lib/db/schema";

// Placeholder for team-scoped client CRM entity (to be defined in schema).
// Currently passes empty array.
// Replicate this pattern for all additional dashboard features.

export const dynamic = "force-dynamic";

export default async function ClientsPage() {
  const session = await getAuthSession();
  if (!session) redirect("/auth#signin");

  const [membership] = await db
    .select({
      teamId: teamMembers.teamId,
      role: teamMembers.role,
    })
    .from(teamMembers)
    .where(eq(teamMembers.userId, session.userId))
    .limit(1);

  if (!membership) {
    return (
      <Client
        status={null}
        message={null}
        canManage={false}
        items={[]}
      />
    );
  }

  // Pull list of clients for current team here once schema is ready.
  // For now, pass in empty list.
  return (
    <Client
      status={null}
      message={null}
      canManage={membership.role === "owner" || membership.role === "admin"}
      items={[]}
    />
  );
}