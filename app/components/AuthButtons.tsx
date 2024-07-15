import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import signout from "../logout/actions";
import { createClient } from '@/utils/supabase/server'


export const AuthButtons = async () => {
  const supabase = createClient();

const {data:{session}} = await supabase.auth.getSession()

if(session) {
return (
  <form action={signout}>
        <Button type="submit">Signout</Button>
      </form>
)
}

  return (
<>

      <Button className='bg-[#4338CA] hover:bg-[#3b31ad]' aria-label="Login/signp">
        <Link href="/login">
        Login/Signup
        </Link>
        </Button>
</>
  );
};