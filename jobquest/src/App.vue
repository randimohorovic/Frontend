  <template>
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
    <a id="logo" class="navbar-brand" href="/">JobQuest</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a  class ="nav-link">
        <router-link to="/">Home</router-link> </a>
      </li>
      <li class="nav-item active">
        <a class ="nav-link">
          <router-link to="/signup">Signup</router-link> </a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form  class="form-inline my-2 my-lg-0">
      <input id="search" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button id="button" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>

    
    <!-- <router-link to="/">Home</router-link> 
    <router-link to="/signup">Signup</router-link> -->
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  
}

#nav {
  padding: 10px;
  background-color: #000 !important;
  
  a {
    font-weight: bold;
    color: #ccc;
    &:hover{
      color: #FDD835;
      text-decoration: none;
    }
    &.router-link-exact-active {
      border-bottom: 2px solid #FDD835;
      color: #FDD835;  
    }

  }
  

  .navbar-toggler {
    
    &:active {
      border-color: blue ;
    }
    background-color: #FDD835;
    border-color: #FDD835;
  }
  
}
#logo {
  &:hover {
    color:#FDD835 !important;
  }
}

#search {
  border-color: #FDD835; // search input outline
  
}

#button {
  color: #FDD835; // "search"
  border-color: #FDD835; // outline buttona 
  &:hover {
    background-color: #FDD835 !important; //hover button color, obrub mi smeta..
    color: #000000;
  }
  // &:active {
  //     border-color: #cd0000 !important;
  //   }
  // &:focus{
  //   border-color: ;
  // }
}


</style>
