<script>
</script>

<body>
  <nav role='navigation'>
    <div class='left_div'>
      <a href='/'>
        <img src='logo.png'>
      </a>
    </div>

    <div class='right_div'>
      <a href='/log-in'>
        Log In
      </a>

      <a href='/sign-up'>
        Free Sign Up
      </a>
    </div>
  </nav>

  <div class='container-main'>
    <div>
      <h1 class='heading'><pre>
<!--   -->Trade your excess 
<!--   -->Energy at home
      </pre></h1>
      <pre class='paragraph'>
<!--   -->Our peer-to-peer energy trading platform allows 
<!--   -->individuals or households to buy and sell renewable 
<!--   -->energy directly with one another, without the need 
<!--   -->for intermediaries.
      </pre>
      <a class='look_button' href='/sign-up'>
        Sign Up Now
      </a>
    </div>

    <div class='main_image'>
      <img src='landing_page.png' 
        alt='PVP Energy at Home'>
    </div>
  </div>
  
  <div class='cards'>
  <a href='/order_form' class='card_link'>
  <div class='card'>
    <img src='icon.png'
    alt='something'>

    <div class='container'>
      <h4>Order Form</h4>
      <p>
        Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a. Nulla quia cum aliquam dolores beatae tempore harum pariatur. Velit amet officiis.
      </p>
    </div>
  </div>
  </a>

  <div class='card'>
    <img src='icon.png'
    alt='something'>

    <div class='container'>
    <h4>Monitor the Market</h4>
    <p>
      Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a. Nulla quia cum aliquam dolores beatae tempore harum pariatur. Velit amet officiis.
    </p>
    </div>
  </div>

  <a href='/sign-up' class='card_link'>
  <div class='card'>
    <img src='icon.png'
    alt='something'>
   <div class='container'>
   <h4>Sign up to Trade</h4>
    <p>
      Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a. Nulla quia cum aliquam dolores beatae tempore harum pariatur. Velit amet officiis.
    </p>
    </div>
  </div>
  </a>

  <div class='card'>
    <img src='icon.png'
    alt='something'>
    <div class='container'>
    <h4>Sign in as Utility Operator</h4>
    <p>
    Expedita laborum suscipit sequi et nobis voluptas fuga placeat. Omnis est ratione. Repellendus recusandae a. Nulla quia cum aliquam dolores beatae tempore harum pariatur. Velit amet officiis.
    </p>
    </div>
  </div>
  </div>

</body>

<style>
  :global(body) {
    width: 100%;
    height: 100vh;
    font-family: Tahoma;
    font-size: 16px;
    color: #111111;
    background-color: #3EB489;
    padding: 0px;
    margin: 0px;
  }

  body {
    background-color: #FBF7F5;
  }

  .cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  :global(.card) {
    box-shadow: 2px 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
    transition: 0.3s;
    width: 400px;
  }

  .card {
    margin: 25px 25px;
  }

  .card h4 {
    text-align: center;
  }

  .card_link{
    text-decoration: None;
    color: black;
  }

  .card img{
    display: block;
    height: 200px;
    margin: auto;
    padding: 10px 0 0 0;
    width: auto;
  }
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .container { 
    padding: 5px 16px;
    text-align: justify;
  }

  img {
    border-radius: 5px 5px 0 0;
  }

  nav {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 0px;
    margin: 0px;
  }

  nav a {
    color: #626A72;
    font-weight: bold;
    padding: 0 0.4rem;
    text-decoration: none;
  }

  nav div{
    flex: 1;
    padding: 1rem;
  }

  nav img{
    height: 60px;
    width: 150px;
  }

  .right_div {
    text-align: right;
    margin-right: 10px;
  }

  .container-main {
    display: flex;
    flex-direction: row;
    background:
      linear-gradient(180deg, white 0 .5%, #3EB489 3% 95%, white 100%);
  }

  .container-main div {
    padding: 2rem;
    flex: 1;
  }

  .container-main img {
    height: 500px;
    width: 675px;
  }

  .heading {
    box-sizing: border-box;
    font-size: 46px;
    font-weight: 600;
    line-height: 1.25em;
    margin: 0px;
    padding: 0px;
  }

  .paragraph {
    box-sizing: border-box;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.5em;
    margin-top: 0px;
    margin-bottom: 0px;
    opacity:0.9;
  }

  .look_button {
    min-width: 200px;
    border-radius: 10px;
    background-color: #FC7456;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    border: 0px;
    box-shadow: 2px 4px 5px black;
    text-decoration: None;
    padding: 10px 10px;
  }
</style>
