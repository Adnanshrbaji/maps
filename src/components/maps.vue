<template>
    <div class="box">
      
     
     
     
      <div class="in">
          <label for="name">maps</label>
        
         <textarea id="map" name="map" rows="4" cols="50"> 
    
    
    
    
      </div>
    
      <div class="arrival_time">
      <label for="name">Arrival time  </label>
           <input type="text" v-model="arrival " placeholder="arrival time"/>
           </div>

         </br>
         <div class "Expected arrival time ">
         <label for="name">Expected arrival time   </label>
      
          <input type="text" v-model="expected " placeholder="Expected arrival time "/>
          </div>
          <div class "delay_time">
          <label for="name"> delay time   </label>
      
          <input type="text" v-model="delay time " placeholder="arrival time "/>
          </div>
          
          <div class "Shipment_Type">
          <label for="name"> Shipment Type   </label>
      
          <input type="text" v-model="Shipment Type " placeholder="Shipment Type "/>
          </div>

          <div class "sources">
          <label for="name"> source    </label>
      
          <input type="text" v-model="source" placeholder="source "/>
          </div>       


           <div class " Arrival Location">
          <label for="name">  Arrival Location   </label>
      
          <input type="text" v-model=" Arrival Location " placeholder=" Arrival Location "/>
          </div>   

    </template>

    <script>
export defult {

    data() {
        return {
            arrival:"",
            expected:"",
            delay time:"",
            Shipment Type:"",
            source:"",
            Arrival Location""
        };

    }







      

    </script>
    <style>




    </style>

