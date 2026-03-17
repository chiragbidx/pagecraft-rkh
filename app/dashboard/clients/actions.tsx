"use server";

// Placeholder for clients server actions (CRUD).
// To be implemented with full schema and business logic after schema/model expansion.

export async function createClientAction(formData: FormData) {
  // Accept and validate form fields here
  // Validate input and session ownership
  // Insert client record scoped to team
}

export async function updateClientAction(formData: FormData) {
  // Accept and validate form fields here
  // Update client record if owned by team
}

export async function archiveClientAction(formData: FormData) {
  // Accept and validate form fields here
  // Archive/soft-delete if allowed
}