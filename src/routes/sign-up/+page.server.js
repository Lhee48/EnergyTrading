import { redirect } from '@sveltejs/kit';
import { createUser } from '$lib/server/database.js';

export const actions = {
  async create({ request, cookies }) {
    const data = await request.formData();
    const email = data.get('email');
    const fullname = data.get('full-name');
    const password = data.get('password');
    console.log({ email, fullname, password})
    
    // creating a new user
    const userID = await createUser({
      fullname,
      password,
      email
    });

    // set cookie
    cookies.set('userID', userID);
    throw redirect(302, '/home')
  }
}
