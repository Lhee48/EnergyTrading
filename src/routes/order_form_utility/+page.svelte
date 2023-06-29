<script>
  import CSVDownload from '$lib/CSVDownload.svelte';
  export let data;

  let files;

  console.log(data);
  console.log(data.to_table);
</script>

<body>
  <div class="grid-container">
    <div class="grid-item grid-item-1">
      <a href='/home'>
        <img src='logo.png' alt='PVP Energy Trading'>
      </a>
    </div>

    <div class="grid-item grid-item-2">
      <h3>
        Processed Orders
      </h3> 
      <table>
        <thead>
          <tr>
            <th>Buyer</th>
            <th>Seller</th>
            <th>Quantity</th>
        <th>Price</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {#each data.to_table as row}
          <tr>
            {#each row as cell}
              <td contenteditable="false" bind:innerHTML={cell} />
            {/each}
          </tr>
          {/each}
        </tbody>
      </table>
 
      <CSVDownload
        data={data.to_arrange}
        type={'button'}
        filename={'data'}
        bom={true}
      >
        Export Data
      </CSVDownload>
      <label for="files" class="look_button">Upload Data</label>
      <form
        method=POST
        action="/order_form_utility?/get_csv"
        enctype=multipart/form-data
      >
      <input 
        type="file"
        id="files"
        name="csv_file"
        bind:files
        style="display:none"
        accept=".csv"
        method="POST"
      >
      <input
        type="submit"
        value="Add Data"
      >
      </form>
    </div>
  </div>
</body>


<style>
  .grid-container{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 5px;
    justify-content: center;
    height: 100vh;
  }

  .grid-item {
    margin: auto;
    vertical-align: top;
  }

  .grid-item-1 {
    grid-column: span 1;
    grid-row: span 1;
  }

  .grid-item-2 {
    grid-column: span 1;
    grid-row: span 1;
    padding: auto;
    margin: auto;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 10px;
    width: 400px;
    height: 150px;
  }
	
	h1, h2, h3 {
  margin: 1em auto;
  text-align: center;
	}
  
  .look_button {
    min-width: 100px;
    border-radius: 5px;
    background-color: #FC7456;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    border: 0px;
    box-shadow: 2px 4px 5px black;
    text-decoration: None;
    padding: 10px 10px;
  }
  
  form {
    width: 100%;
    margin: 0 auto;
    padding-bottom: 2em;
  }

  fieldset {
    border: collapse;
    padding: 2rem 10;
    background-color: #FBF7F5;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    text-align: center;
  }

  input {
    display: inline;
    margin: 1em auto 1em auto;
    width: 96%;
    min-height: 2em;
    background-color: #E3DAC9;
    border-radius: 5px;
    padding: auto;
  }

  input[type="submit"] {
    display: block;
    width: 60%;
    margin: 1em auto;
    height: 2em;
    font-size: 1.1rem;
    background-color: #FC7456;
    border-radius: 5px;
    color: white;
    min-width: 300px;
  }

	table {
    border-collapse: collapse;
    border-radius: 5px;
    margin: 20px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    background-color: white;
    min-width: 400px;
		box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    padding-bottom: 2em, 2em;
	}
	thead tr {
    text-align: center;
	}
	
	th, td {
		padding: 12px 15px;
	}
	
	tbody tr {
    border-bottom: 1px;
	}
	
	tbody tr:last-of-type {
    border-bottom: 2px solid #FC7456;
	}

</style>
