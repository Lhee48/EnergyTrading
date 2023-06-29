import { redirect } from '@sveltejs/kit';

export async function load({cookies}) {
  const uID = cookies.get("userID");
  cookies.delete("userID");
  throw redirect(303, '/');
}
