import { getAllOrders, getProcOrder, getTableOrders } from '$lib/server/database.js';

export const actions = {
  async get_csv({request, cookies}) {
    const data = await request.formData();
    const something = await data.get('csv_file')
    const test = await something.text();
    const test2 = test.split("\n");
    for (let i in test2) {
      const hold = test2[i].split(",");
      if (hold.length > 1){
        const buyer = hold[0]
        const seller = hold[1]
        const quantity = hold[2]
        const price = hold[3]
        const time = hold[4] + ' ' + hold[5]
        await getProcOrder({
          buyer,
          seller,
          quantity,
          price,
          time
        })
      }
    }
  }
}

export async function load(){
  const data = await getAllOrders();
  const to_arrange = [['name','type','quantity (kwh)','price (p/kwh)']];
  for (let key in data) {
    let order = data[key];
    let something = [];
    for (let item in order) {
      something.push(order[item])
    }
    to_arrange.push(something);
  }

  const processed = await getTableOrders();
  const to_table = [];
  for (let proc in processed) {
    let order_t = processed[proc];
    let something_t = [];
    for (let item_t in order_t) {
      something_t.push(order_t[item_t]);
    }
    to_table.push(something_t);
  }
  return {
    to_arrange,
    to_table
  };
}
