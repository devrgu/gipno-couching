<template>
    <div class="success">
        <div class="succes">
            <div class="container">
               <svg viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
               <path d="M 18 32.34 l -8.34 -8.34 -2.83 2.83 11.17 11.17 24 -24 -2.83 -2.83 z" stroke="#3da35a" fill="transparent"/>
               </svg>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        middleware: 'success',
        data(){
            return{
                
            }
        }
    }
</script>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-11023770095"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-11023770095');
</script>
<style>
.container {
  width: 120px;
  height: 300px;
  margin: 0 auto;
}

svg {
  width: 100%;
  height: 100%;
}

path {
  stroke-dasharray: 99.47578430175781;
  stroke-dashoffset: -99.47578430175781;
  fill: transparent;
}

svg.animate path {
  animation: 1.7s ease forwards draw;
  opacity:1;
}

@keyframes draw {
  0% {
    opacity: 1;
    stroke-dashoffset: -99.47578430175781;
    fill: transparent;
    transform: translateY(0);
  }
  
  35% {
    stroke-dashoffset: 0;
    fill: transparent;
  }
  
  60% {
    fill: #3da35a;
    opacity: 1;
    transform: translateY(0);
  }
  
  100% {
    fill: #3da35a;
    stroke-dashoffset: 0;
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>