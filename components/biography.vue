<template>
    <div class="biography content">
              <div class="biography-content">
                <div class="biography-img">
                      <img src="/serikphoto.jpg">
                  </div>
                 <div class="biography-text">
                  <div class="biography-title">
                     <p class="decorate-word">#Я тот кто вам нужен!</p>
                      <p>Вы не потеряли надежду?<br> 
                          Значит <span>выход есть!</span></p>
                  </div>
                   <div class="biography-line">
                       <hr>
                   </div>
                     <div class="biography-conspect">
                         <p><span>Меня зовут <strong>Аубакиров Серик</strong>, я сертифицированный специалист и эксперт American Academy Holistic Mind Therapy.</span>
                             <span>Обращайтесь ко мне, я знаю всю вашу боль. Я знаю, как пройти через это. Вам в подсознание нужен образ мира, которого вы не замечаете. Это ваше притяжение! Я приведу вас в ресурсное состояние покоя. Только при этом раскладе у вас откроется притяжение <strong>богатства и денег</strong>, появится нужный вам мужчина которого вы хотите искренне и всей душой. И ваше <strong>здоровье улучшится на 100%.</strong></span>
                             <span>Я не очередной семейный психолог, к которому нужно ходить как на работу. Вам не понадобится много сеансов, ведь я не просто выслушиваю своих пациентов, а <strong>помогаю устранить первопричину проблем</strong> в отношениях и даю четкие инструкции, как снова <strong>стать счастливой и любящей парой</strong> и человеком обретающий вдохновление в новом процессе жизни</span></p>
                    </div>
                  </div>
              </div>
          </div>
</template>
<style>
    .biography{
        color: #FFFFFF;
    }
    .biography-content{
        display: flex;
        margin: 0 24px 0 24px;
    }
    .biography-line hr{
        width: 100px;
        height: 4px;
        background-color: #A7A7A7;
        display: inline-block;
        margin: 24px 0;
    }
    .biography-line{
        text-align: center;
    }
    .biography-title{
        font-size: 36px;
        font-weight: 600;
        text-align: center;
    }
    .biography-title p span{
        color: #326BFF
    }
    .biography-img{
        margin-right: 64px;
    }
    .biography-img img{
        max-width: none;
    }
    .biography-conspect{
        max-width: 746px;
        font-size: 18px;
        line-height: 27px;
    }
    .biography-conspect p span{
        display: block;
        margin-bottom: 24px;
    }
    @media (max-width: 1370px) {
    }
    
        
        
        
        
        
    
    
    
    @media (max-width: 1280px) {
        .mail-title{
            font-size: 26px;
        }
        .mail-subtitle{
            font-size: 15px;
        }
        .content{
            max-width: 1180px;
        }
           
        
        
        
        
    }
    
    
    
    
    @media (max-width: 1024px) {
        .biography-img{
            max-width: 100%;
            height: 250px;
            overflow: hidden;
            margin: 0;
            display: flex;
            align-items:flex-start;
            
    }
        .biography-conspect{
       text-align: center
    }
        .biography-title{
        margin-top: 36px;
    }
        .biography-img img{
            position: relative;
            bottom: 25px
        }
        
        .biography-content{
        flex-wrap: wrap;
            justify-content: center;
    }
        
    }
    
    
    
    
    @media (max-width: 768px) {
        .mail-title{
            font-size: 21px;
        }
        .mail-subtitle{
            font-size: 13px;
        }
        .title{
            white-space: normal;
        }
        .biography-img img{
            display: block;
        }
        
    
    }
</style>