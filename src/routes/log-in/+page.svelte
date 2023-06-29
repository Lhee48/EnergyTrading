<body>    
  <main>
    <section>
      <a href='/'>
        <img src='logo.png' alt='PVP Energy Trading'>
      </a>
      <form method="POST" action="/log-in?/verify">        
        <fieldset>
          <h2>
            Log In
          </h2>

          <input 
            id="email" 
            type="text" 
            name="email"
            placeholder="Email"
            required
          >

          <input 
            id="password" 
            type="password"
            name="password" 
            placeholder="Password"
            required
          >

          <input 
            type="submit" 
            value="Log In"
          >

          <p>
            Don't have an account? 
            <a href="/sign-up">
              Sign Up
            </a>
          </p>

        </fieldset>

        <p>
          <a href="">
            Forgot your password?
          </a>
        </p>
      
      </form> 
    </section>
  </main>
</body>


<style>
  body {
    width: 100%;
    height: 100vh;
    margin: 0;
  }

  h2, p {
    margin: 1em auto;
    text-align: center;
  }

  a {
    color: #B03419;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 10px;
    width: 400px;
    height: 150px;
  }

  form {
    width: 60vw;
    max-width: 500px;
    min-width: 300px;
    margin: 0 auto;
    padding-bottom: 2em;
  }

  fieldset {
    border: collapse;
    padding: 2rem 10;
    background-color: #FBF7F5;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }

  label {
    display: block;
    margin: 0.5rem 0;
  }

  input,
  textarea,
  select {
    margin: 10px 0 0 0 ;
    width: 100%;
    min-height: 2em;
    background-color: #E3DAC9;
    border-radius: 5px;
  }

  .inline {
    width: unset;
    margin: 0 0.5em 0 0;
    vertical-align: middle;
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

  input[type="file"] {
    padding: 1px 2px;
  }
</style>
