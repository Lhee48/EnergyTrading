import { redirect } from '@sveltejs/kit';
import { getUserByEmail } from '$lib/server/database.js';
import bcrypt from 'bcrypt';

 
export const actions = {
  async verify({ request, cookies }) {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');
    console.log({ email, password})
    
    // Verify user
    const result_sql = await getUserByEmail(email);
    const verify_email = result_sql['email'];
    const verify_password = result_sql['password'];
    const userID = result_sql['id'];
    const hashed = await bcrypt.hash(password, 10);
    console.log({verify_email, verify_password, hashed})
    const izU = await bcrypt.compare(password, verify_password)
    console.log(izU)
    if ((email == "utility-operator@gmail.com") && password=="1234") {
      throw redirect(302, '/order_form_utility')
    }
    if ((verify_email == email) && izU) {
      cookies.set('userID', userID);
      throw redirect(302, '/home')
    }
  }
}
