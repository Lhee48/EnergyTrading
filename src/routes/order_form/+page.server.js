import { getOrder, getUserByID, getTableOrders } from '$lib/server/database.js';

export const actions = {
  async get_order({ request, cookies }) {
    const data = await request.formData();
    const ordertype = data.get('order');
    const quantity = data.get('quantity');
    const price = data.get('price');
    const result_sql = await getUserByID(cookies.get('userID'));
    const fullname = result_sql['fullname']
    
    // Adding order to Database
    await getOrder({
      fullname,
      ordertype,
      quantity,
      price
    });
  }
}

export async function load() {
  const processed = await getTableOrders();
  const to_table = []
  for (let i in processed) {
    let order = processed[i];
    let hold = []
    for (let item in order) {
      hold.push(order[item])
    }
    to_table.push(hold);
  }
  return {to_table};
}
