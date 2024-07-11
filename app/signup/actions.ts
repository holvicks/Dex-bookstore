// actions.ts (server-side)
'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export async function signup(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      data: {
        firstname: formData.get('firstname') as string,
        lastname: formData.get('lastname') as string,
        gender: formData.get('gender') as string,
        phone_number: formData.get('phone_number') as string,
      }
    }
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    console.error('Signup error:', error);
    redirect('/error');
  } else {
    revalidatePath('/');
    redirect('/login');
  }
}
