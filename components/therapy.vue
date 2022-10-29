<template>
            <div class="therapy-from-serik">
                <div class="tfs"></div>
              <div class="tfs-text">
               <div class="tfs-title">
                   <p>ЧТО ВЫ ПОЛУЧИТЕ ОТ МЕНЯ<br>ВО ВРЕМЯ ЛЕЧЕНИЯ?</p>
               </div>
               <div class="tfs-subtitle">
                   <p>Не упустите такие возможности в вашей жизни.</p>
               </div>
           </div>
               <div class="tfs-content">
                   <div class="tfs-block-1 tfs-block tfs-block-therapy">
                       <div class="tfs-block-title">
                           <p>Вырвем корни ваших<br>проблем</p>
                       </div>
                       <div class="tfs-block-icon">
                           <img src="/iconpobeditel.svg">
                       </div>
                       <div class="tfs-block-text">
                           <p>В процессе лечения, найдем эмоциональные травмы, это инфовирус которые обросли корнем как паразит высасывая жизненную энергию называется это "убеждения" и привели бы самоуничтожению, остановим и вырвем с корнем, меняем убеждения.</p>
                       </div>
                   </div>
                   <div class="tfs-block-2 tfs-block tfs-block-therapy">
                       <div class="tfs-block-title">
                           <p>Начнете думать верно и<br>правильно</p>
                       </div>
                       <div class="tfs-block-icon ">
                           <img src="/mislipravilnie.svg">
                       </div>
                       <div class="tfs-block-text"> 
                           <p>У вас включится подсознательный процесс исцеления и регенерация здоровья. Вы будете интуитивно чувствовать правильный образ мышления, управления себя, эмоциональный подъем, взаимодействие с окружающим миром. </p>
                       </div>
                   </div>
                   <div class="tfs-block-3 tfs-block tfs-block-therapy">
                       <div class="tfs-block-title">
                           <p>Станете лучшей версией<br>себя</p>
                       </div>
                       <div class="tfs-block-icon">
                           <img src="/mozg.svg">
                       </div>
                       <div class="tfs-block-text">
                           <p>Вы будете в процессе "чувствовать" и "видеть", в вашем нынешнем пути продвижение в делах, бизнесе, отношениях, избавление от окружающих токсичных личностей.</p>
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
        width: 353px;
        background-color: #0C0F16;
        text-align: center;
        border-radius: 30px;
        margin: 0 24px 0 24px;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5)
        
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
        padding-bottom: 16px;
        
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
            font-size: 30px;
        }
    }
</style>