// logout/actions.ts
"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const signout = async () => {
  const supabase = createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Error signing out:", error.message);
    redirect("/");
    return;
  }

  // Perform any necessary revalidation or navigation
  revalidatePath("/");
  redirect("/login");
};

export default signout;
