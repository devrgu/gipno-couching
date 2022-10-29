<template>
    <div class="conque">
       <div class="conque-content">
         <hr>
           <div class="conque-text"><p><slot></slot></p></div>       
       </div> 
    </div>
</template>
<style>
    .conque{
        margin-bottom: 160px;
    }
    .conque-content{
        height: 160px;
        width: 485px;
        border: 8px solid #FFFFFF;
        background: #070A11;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .conque hr{
      position: absolute;
        width: 100%;
        z-index: -5;
    }
    .conque{
        display: flex;
        justify-content: center;
    }
    .conque-text{
        font-size: 18px;
        font-weight: 300;
        color: #A7A7A7;
        text-align: center;
    }
</style>