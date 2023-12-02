<template>

  <div class="card text-center">
       <div class="card-header">Featured </div>
        <div class="card-body p-0"></div>
        <img  class="card-img-top" :src="info"/> 
        
        <div class="card-footer text-body-secondary">2 days ago</div>
   </div>

</template>

<script>
import { initCustomFormatter } from 'vue';

export default {
  props: ['info'],  // elementi aaraya su nazivi parametra koje vue.js komponenta prima, parametarar "info"
  name: 'ListingJob',

  };
</script>



