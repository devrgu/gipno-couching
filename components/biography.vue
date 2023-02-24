<template>
    <div class="biography content">
              <div class="biography-content">
                <div class="biography-img">
                      <img src="/photo-serik.jpg">
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
                             <span>Обращайтесь ко мне, я знаю всю вашу боль. Я знаю, как пройти через это. Вам в подсознание нужен образ мира, которого вы не замечаете. Это ваше притяжение! Я приведу вас в ресурсное состояние покоя. Только при этом раскладе у вас откроется притяжение <strong>"белой полосы" в жизни</strong>, избавитесь от депрессий, психотравм, фобий и других психосамотических недугов. А так же ваше <strong>здоровье улучшится на 100%.</strong></span>
                             <span>Я не очередной семейный психолог или какой-нибудь экстрасенс, к которому нужно ходить как на работу. Вам не понадобится много сеансов, ведь я не просто выслушиваю своих пациентов, а <strong>помогаю устранить первопричину проблем</strong> и даю четкие инструкции, как снова <strong>стать счастливым(ой) и обрести наконец-то покой, став</strong> человеком обретающий вдохновление в новом процессе жизни</span></p>
                    </div>
                  </div>
              </div>
          </div>
</template>
<style>
    .biography{
        color: #d1d1d1;
    }
    .biography-content{
        display: flex;
        margin: 0 24px 0 24px;
        justify-content: center;
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
        height: 600px;
        display: flex;
        flex-shrink: 0;
        justify-content: center;
        position: relative;
    }
    .biography-img img{
        max-width: none;
        position: relative;
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
    @media (max-width: 1440px) {
        .biography-img{
            display: flex;
            justify-content: center;
            overflow: hidden;
            margin-right: 48px;
        }
        .biography-img img{
            position: relative;
            
        }
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
            margin: 0;
            align-items:flex-start;
            justify-content: center;
            
        }
        .biography-img img{
            height: 850px;
            position: relative;
            bottom: 203px;
        }
        
        .biography-conspect{
           text-align: center
          }
        .biography-title{
          margin-top: 36px;
            font-size: 32px;
        }
        .biography-content{
        flex-wrap: wrap;
            justify-content: center;
    }
        
    }
    
    
    
    
    @media (max-width: 767px) {
        .title{
            white-space: normal;
        }
        .biography-img img{
            display: block;
        }
        .biography-title{
            font-size: 28px;
        }
        .biography-content{
            margin: 0;
        }
        .biography-conspect{
            margin: 0 16px 0 16px;
        }
    
    }
    @media (max-width: 415px) {
        .biography-conspect{
           font-size: 16px;
          }
        .biography-title{
            font-size: 24px;
        }
    }
         @media (max-width: 363px) {
        .biography-title{
            font-size: 22px;
        }
        .biography-conspect{
          font-size: 14px;
          }
              @media (max-width: 319px) {
        .biography-title{
            font-size: 20px;
        }
        .biography-conspect{
          font-size: 14px;
          }
     }
    
    }
</style>