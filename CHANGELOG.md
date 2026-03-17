# Changelog
<!--
  Purpose:
  - Track project change history over time.
  - Record date, summary, and key files touched for each change set.
  - Keep entries append-only (do not delete past entries).
-->

## 2026-05-18 LeadFlow Brand & CRM Conversion
- Rebranded all public and internal UI surfaces to LeadFlow for internal CRM use
- Updated main landing content: hero, features, benefits, services, “why LeadFlow”, footer, and all CTAs for CRM/internal use
- Updated all navigation menus, labels, logos, and dashboard chrome to LeadFlow branding
- Refactored dashboard sidebar to CRM-focused navigation (“Clients”, “Contacts”, “Deals”, “Notes/Activity”)
- Refreshed all visible onboarding and auth copy for LeadFlow/in-team context; clarified company/tenant/role focus
- [content/home.ts, components/layout/navbar.tsx, app/dashboard/layout.tsx, components/dashboard/sidebar-nav.tsx, app/dashboard/page.tsx, app/dashboard/client.tsx, app/auth/client.tsx]

## 2026-05-19 Add dashboard scaffolded pages for all CRM features
- Added scaffold pages for dashboard sections: Clients, Contacts, Deals, Notes/Activity as per sidebar
- Each section includes `page.tsx` (server route), `client.tsx` (interactive UI), and placeholder `actions.tsx` for CRUD
- Wired all new features to use proper permission and auth checks; set up empty/feedback UI states ready for future DB connection
- [app/dashboard/clients/page.tsx, app/dashboard/clients/client.tsx, app/dashboard/clients/actions.tsx, app/dashboard/contacts/page.tsx, app/dashboard/contacts/client.tsx, app/dashboard/contacts/actions.tsx, app/dashboard/deals/page.tsx, app/dashboard/deals/client.tsx, app/dashboard/deals/actions.tsx, app/dashboard/notes/page.tsx, app/dashboard/notes/client.tsx, app/dashboard/notes/actions.tsx]