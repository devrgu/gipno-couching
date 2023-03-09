<template>
            <div class="therapy-from-serik">
                <div class="tfs"></div>
              <div class="tfs-text">
               <div class="tfs-title">
                   <p>Что вы получите от меня <br>ВО время лечения?</p>
               </div>
               <div class="tfs-subtitle">
                   <p>Не упустите такие возможности в вашей жизни.</p>
               </div>
           </div>
               <div class="tfs-content">
                  <div class="tfs-block-2 tfs-block tfs-block-therapy">
                     <div class="back_side">
                       <div class="tfs-block-title">
                           <p>Активизируете подсознательное исцеление</p>
                       </div>
                       <div class="tfs-block-text">
                           <p>У вас включится подсознательный процесс исцеления и регенераций здоровья. Онкологические заболевания которые могут возникнуть у вас в большинстве случаев связанные с депрессией и негативными эмоциями, ГАРАНТИРОВАННО начнут лечиться!</p>
                       </div>
                     </div>
                   </div>
                   <div class="tfs-block-1 tfs-block tfs-block-therapy">
                      <div class="front_side">
                       <div class="tfs-block-title">
                           <p>Вырвем корни ваших<br>проблем</p>
                       </div>
                       <div class="tfs-block-icon">
                           <img src="/korni.svg">
                       </div>
                       <div class="tfs-block-text">
                           <p>В процессе лечения, найдем эмоциональные травмы или же инфовирус...</p>
                       </div>
                     </div>
                     <div class="back_side">
                       <div class="tfs-block-title">
                           <p>Вырвем корни ваших<br>проблем</p>
                       </div>
                       <div class="tfs-block-text">
                           <p>В процессе лечения, найдем эмоциональные травмы или же инфовирус, который оброс корнем как паразит высасывая жизненную энергию. Эти "убеждения", могут привести вас к самоуничтожению. Мы вместе с вами остановим и вырвем с корнем их, улучшев ваше мировозрение.</p>
                       </div>
                     </div>
                   </div>
                   <div class="tfs-block-3 tfs-block tfs-block-therapy">
                      <div class="front_side">
                       <div class="tfs-block-title">
                           <p>У вас будет исцеление<br>тела и разума</p>
                       </div>
                       <div class="tfs-block-icon">
                           <img src="/vosstanov.svg">
                       </div>
                       <div class="tfs-block-text">
                           <p>Вы будете в процессе "чувствовать" и "видеть", в вашем нынешнем пути, продвижение в делах...</p>
                       </div>
                     </div>
                     <div class="back_side">
                       <div class="tfs-block-title">
                           <p>У вас будет исцеление<br>тела и разума</p>
                       </div>
                       <div class="tfs-block-text">
                           <p>Вы будете в процессе "чувствовать" и "видеть", в вашем нынешнем пути, продвижение в делах, бизнесе, отношениях, избавитесь от токсичных личностей в окружений.</p>
                       </div>
                     </div>
                   </div>
               </div>
    </div> 
</template>
<style>
    .therapy-from-serik{
        margin-bottom: 160px;
        position: relative;
        margin-top: 32px;
    }
    .tfs{
        background-color: #326BFF;
        height: 462px;
        position: absolute;
        width: 100%;
        z-index: -2;
        left: 0;
        top: 0;
    }
    .tfs-block{
        position: relative;
         width: 353px;
        height: 378px;
        perspective: 1000px;
        margin: 0 24px 0 24px;
    }
    .tfs-block-therapy{
        box-sizing:border-box;
    }
    .tfs-block-title{
        font-size: 22px;
        font-weight: 700;
        color: #FFFFFF;
        margin: 56px 0 44px 0;
    }
    .tfs-block-text{
        color: #A7A7A7;
        padding: 0 12px 16px 12px;
        
    }
    .tfs-block-icon{
        display: inline-block;
        margin-bottom: 44px;
    }
    .tfs-text{
        text-align: center;
        padding: 80px 0 56px 0;
    }
    .tfs-title{
        color: #FFFFFF;
        font-size: 36px;
        font-weight: 700;
    }
    .tfs-subtitle{
        color: #E9E9E9;
        font-size: 18px;
        margin-top: 8px;
    }
    .tfs-content{
        display: flex;
        justify-content: center;
        max-width: calc(1440px - (103px + 103px));
        margin: 0 auto;
        flex-wrap: wrap;
    }
    .front_side, .back_side {
        position: absolute;
         width: 100%;
        min-height: 100%;
        background-color: #0C0F16;
        text-align: center;
        border-radius: 30px;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
      transition: 1s; 
      backface-visibility: hidden;
      border-radius: 10px;      
    }
    .tfs-block-2 .back_side{
        transform: rotateY(360deg);
    }
    .back_side {
        background-color: #326BFF;
      transform: rotateY(180deg);
    }
    .back_side div{
        color: #FFFFFF;
    }
    .tfs-block:not([disabled]):hover .front_side {transform: rotateY(180deg);}
    .tfs-block:not([disabled]):hover .back_side {transform: rotateY(360deg);}
    @media (max-width: 1024px) {
        .tfs-block{
            margin-top: 36px;
        }
        .tfs-text{
           text-align: center;
           padding: 60px 0 38px 0;
    }
        
    }
    @media (max-width: 768px) {
        .tfs-title{
            font-size: 32px;
        }
        
    }
    @media (max-width: 568px) {
        .tfs-title{
            font-size: 25px;
        }
    }
        @media (max-width: 415px) {
        .tfs-title{
            font-size: 21px;
        }
        .tfs-subtitle{
          font-size: 17px;
        }
        .tfs-block-title{
        font-size: 20px;
        margin: 40px 0 36px 0;
     }
       .tfs-block-text{
           padding: 0 8px 12px 12px;
        
    }
      @media (max-width: 330px) {
        .tfs-block{
          height: 389px;
    }
    }
    }
</style>