<template>
  <nav id="header">
    <div class="row">
      <div id="logo" class="grid-item">
        <img src="src/assets/marmara.png" alt="" />
      </div>
      <div id="search-box" class="grid-item">
        <input type="text" placeholder="Search" />
        <button id="btn-search">
          <i class="fas fa-search"></i>
        </button>
      </div>
      <div id="contact" class="grid-item">
        <button id="btn-phone">
          <i class="fa fa-phone"></i>
        </button>
            <a href="tel:05418826364"> 0541 882 6364 </a>
      </div>
    </div>

  </nav>
  

  
</template>

<script>

export default {};

</script>


<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400&display=swap");
nav {
  background-color: #232f3e;
  width: 100%;
  margin: 0;
  padding: 0;
 
}
.row {
  width: 80%;
  margin: auto;
  padding-top: 3%;
  height: 100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}
.grid-item {
  flex-basis: 23%;
}
#logo {
  padding-left: 4%;
}
#search-box {
  flex-basis: 50%;
  text-align: center;
}
#search-box input {
  width: 50%;
  height: 35px;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
input::placeholder {
  text-align: center;
}
input:focus {
  outline: none !important;
  outline-color: rgb(14, 14, 73);
  box-shadow: 0 0 10px #979930;
}
#contact {
  text-align: right;
}
#contact a {
  display: inline-block;
  color: #fff;
  text-decoration: none;
}
#btn-search {
  cursor: pointer;
  display: inline-block;
  padding: 10.5px 3%;
  background-color: rgb(219, 219, 52);
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
#btn-search:hover {
  background-color: rgba(39, 39, 207, 0.555);
  color: white;
}
#btn-phone {
  cursor: pointer;
  border: none;
  color: #fff;
  background-color: #232f3e;
}
#contact a:hover {
  color: rgb(228, 150, 77);
}

/*header*/
#nav {
  height: 70px;
  display: flex;
  flex-flow: row wrap;
  border-top: 1px solid white;
  background-color: #232f3e;
  width: 100%;
  position: sticky;
  top: 100px;
  
  
}
.navbar {
  color: white;
  text-align: center;
  text-decoration: none;
  width: 80%;
  margin: auto;
}
.navbar a {
  text-decoration-line: none;
  color: #fff;
}
.nav-item {
  display: inline-block;
  list-style-type: none;
  margin: 10px 2%;
  font-family: "Rubik", sans-serif;
  font-size: 1.2rem;
  text-transform: uppercase;
}
.nav-item a:hover {
  color: #e4964d;
}
</style>