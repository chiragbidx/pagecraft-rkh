import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

import Client from "@/app/dashboard/deals/client";
import { getAuthSession } from "@/lib/auth/session";
import { db } from "@/lib/db/client";
import { teamMembers } from "@/lib/db/schema";

export const dynamic = "force-dynamic";

export default async function DealsPage() {
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

  return (
    <Client
      status={null}
      message={null}
      canManage={membership.role === "owner" || membership.role === "admin"}
      items={[]}
    />
  );
}