<template>

  <!-- carousel nece se prikazat -->

<!-- <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="@/assets/bootstrap.png" class="d-block w-100">
    </div>
    <div class="carousel-item active">
      <img src="@/assets/bootstrap.png" class="d-block w-100">
    </div>
    <div class="carousel-item active">
      <img src="@/assets/bootstrap.png" class="d-block w-100">
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> -->


<!-- cards -->
<div class="row">
  <div class="col-2">filtri/linkovi
  </div>
  <div class="col-7">
    <div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-body-secondary">
    2 days ago
  </div>
</div>
    
  </div>
  <div class="col-3">blok
   </div>
  </div>
 </template>

<script>
// @ is an alias to /src
// 
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
