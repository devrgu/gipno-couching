<template>
<div class="main-page">
  <mainw></mainw>
  <therapy></therapy>
   <div class="body">
       <div class="body-content">
          <biography></biography>
           <div class="mail">
               <div class="mail-content content">
                  <div class="mail-text">
                   <div class="mail-title">
                       <p>Есть вопросы? Пройдите консультацию!</p>
                   </div>
                   <div class="mail-subtitle">
                       <p>Обратитесь ко мне. Я отвечу на ваши вопросы!</p>
                   </div>
                   <img src="/Polygon%201.svg">
                   </div>
                  <div class="main-buttons mail-button">
                   <div class="konsultatsia mail-konsultatsia">
                     <p>КОНСУЛЬТАЦИЯ</p>
                   </div>
                   
                 </div>
               </div>
           </div>
           <div class="hapiness">
               <div class="hapiness-content content">
                  <div class="hapiness-text">
                      <div class="decorate-word"><p>#Смелее!</p></div>
                   <div class="title">
                       <p>Я помогу вам обрести счастье и успех,<br>
                           <span>Вы достигните своих целей!</span></p>
                   </div>
                      <div class="hapiness-conspect">
                       <div>Психологи тщетно пытаются лечить симптомы дисгармоничных отношений. Они работают с убеждениями и эмоциями. Моя же методика устраняет глубинные причины непонимания и конфликтов. Речь о деструктивных подсознательных установках. Именно проработка глубинных программ подсознания гарантирует, что отношения наладятся быстро и надолго.</div>
                       <div>Я не минимизирую проблемы. Я не учу вас жить в токсичной обстановке, терпеть унижения и обманывать себя ежедневными аффирмациями. Нет нужды смотреть на неработающие отношения под другим углом, искать плюсы или жить воспоминаниями о былой любви. Я могу помочь вам все исправить и снова почувствовать себя счастливыми.</div>
                       <div>Единственный метод, которому такое под силу, — гипно-программирование. Только она способна обойти критический фильтр и дать возможность работать напрямую с вашим сверх сознанием. Это самый быстрый, эффективный и притом абсолютно безопасный способ устранить ментальные рубцы от психотравм, которые разрушили ваши отношения.</div>
                   </div>
                    </div>
                   <div class="hapiness-img">
                       <img src="/hapiness%20img%20block.png">
                   </div>
                   <div class="avtor">
                       <div class="avtor-img"></div>
                       <div class="avtor-text">
                           <p>Серик Аубакиров Айыпович
                               <span><br>Ваш путеводитель по жизни.<br></span></p>
                       </div>
                   </div>
               </div>
           </div>
           <conque>
               Вы всего в шаге от того, чтобы все исправить.<br>Я помогу вам. Мы сделаем это вместе!
           </conque>
           <helpingyou></helpingyou>
           <whyme />
           <conque>
               Человеку нужен человек. А чтобы они были действительно счастливы вместе, порой нужна помощь специалиста.
           </conque>
           <reklama></reklama>
           <div class="certificate content">
            <div class="title"><p>Дополнительное:</p></div>
             <div class="certificate-content">
               <img src="/certificate.jpg">
            </div>
           </div>
    </div>
   </div>
</div>
</template>
<script>
  export default{
      name: 'IndexPage'
  }
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
  /* Указываем box sizing */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Убираем внутренние отступы */
ul[class],
ol[class] {
  padding: 0;
}

/* Убираем внешние отступы */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Выставляем основные настройки по-умолчанию для body */
body {
  font-family: 'Montserrat', sans-serif;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  background-color: #070A11;
}
    .content{
        max-width: 1440px ;
        margin: 0 auto;
    }

/* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/
ul[class],
ol[class] {
  list-style: none;
}

/* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */
a:not([class]) {
  text-decoration-line: auto
}

/* Упрощаем работу с изображениями */
img {
  max-width: 100%;
  display: block;
}

/* Указываем понятную периодичность в потоке данных у article*/

    .body{
        margin: 120px 0 0;
    }
    .mail{
        width: 100%;
        height: 120px;
        background-color: #326BFF;
        position: relative;
        margin: 160px 0 160px 0;
    }
    .mail-text{
        border-right: 3px solid #070A11;
        height: 120px;
        text-align: center;
         white-space:nowrap;
        padding-right: 64px;
        position: relative;
    }
    .mail-title{
        font-size: 32px;
        font-weight: 700;
        color: #FFFFFF;
        margin-top: 24px;
    }
    .mail-subtitle{
        font-size: 18px;
        font-weight: 400;
        color: #FFFFFF;
    }
    .mail-text{
        width: 70%;
    }
    .mail-text img{
        position: absolute;
        right: -16px;
        top: 16px;
    }
    .mail-content{
        display: flex;
        position: relative;
        max-width: calc(1440px - (120px * 2))
    }
    .main-buttons div{
        cursor: pointer;
    }
    .mail-button{
        display: flex;
        margin-left: 3.363vw;
        position: relative; 
    }
    .mail-button div{
        border: none;
        background-color: #FFFFFF;
        margin: none;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
        align-self: center;
        position: absolute;
        
        
    }
    .mail-konsultatsia p{
        color: #326BFF !important;
    }
    .hapiness{
        margin-bottom: 120px
    }
    .title{
        display: inline-block;
        font-size: 36px;
        font-weight: 700;
        color: #FFFFFF;
        white-space: nowrap;
    }
    .title p span{
        font-size: 32px;
        font-weight: 700;
        color: #0085FF;
        
    }
    .hapiness-text{
        font-size: 18px;
        color: #d1d1d1;
        max-width: 637px;
        display: inline-block;
         white-space:normal;
    }
    .decorate-word{
        font-size: 18px;
        color: #A7A7A7;
        font-weight: 400;
    }
    .hapiness-conspect div{
        margin-top: 24px;
    }
    .hapiness-conspect{
        margin: 40px 0;
    }
    .hapiness-img{
        float: right;
        display: inline-block;
    }
    .avtor{
        display: flex;
        margin: 14px 0 0 40px;
    }
    .avtor-img{
        width: 100px;
        height: 100px;
        background-image: url(/Serik.jpg);
        background-size: cover;
        border-radius: 100px;
    }
    .avtor-text{
        margin-left: 16px;
        margin-top: 16px;
    }
    .avtor-text p{
        font-size: 18px;
        color: #FFFFFF;
        font-weight: 700;
    }
    .avtor-text p span{
        font-size: 16px;
        color: #A7A7A7;
        font-weight: 400;
    }
    
    
    
    
    
    @media (max-width: 1600px) {
        .mail-title{
            font-size: 30px;
        }
        .mail-subtitle{
            font-size: 17px;
        }
        
        
        
        
    }
    @media (max-width: 1440px) {
        .mail-title{
            font-size: 28px;
        }
        .mail-subtitle{
            font-size: 16px;
        }
        .content{
            max-width: 1340px;
        }
        
        
        
        
        
        
        nav a{
            font-size: 14px; 
        }
        
    }
    
    
    
    
    @media (max-width: 1280px) {
        .content{
            max-width: 1180px;
        }
        .hapiness{
            text-align: center;
        }
        .hapiness-img{
            width: 100%;
            float: none;
            margin: none;
            display: flex;
            justify-content: center;
        }
        .hapiness-img img{
            margin: 0;
        }
        .hapiness-text{
            text-align: center;
        }
        .avtor{
            margin-top: 36px;
        }
        .avtor-img{
            display: inline-block;
        }
        .hapiness-conspect div{
            white-space: normal;
        }
        
        
           
        
        
        
    }
    
    
    
    
    @media (max-width: 1024px) {
        .content{
            max-width: 768px;
        }
        .mail{
            height: 200px
        }
        .mail-text{
            border-right: none;
            width: 100%;
            padding-top: 24px;
            padding-right: 0;
        }
        .mail-text img{
            display: none;
        }
        .mail-title{
            margin-top: 0;
        }
        .mail-content{
            display: block;
        }
        .mail-button{
            display: flex;
            justify-content: center;
        }
        .title{
            white-space: normal;
        }
        .mail-text{
            padding-top: 28px;
            margin-bottom: 28px;
        }
        
    }
    
    
    
    
    @media (max-width: 768px) {
        
        .content{
            max-width: 568px;
        }
        .mail{
            height: 250px
        }
        .mail-title{
            margin-top: 0;
            white-space: normal;
            font-size: 26px;
        }
        .mail-text{
            padding-top: 48px;
            margin-bottom: 48px;
        }
        .title{
            white-space: normal;
        }
        .title{
        font-size: 32px;
        }
        .title p span{
           font-size: 28px;
        
        
       }
         
    }
    @media (max-width: 568px) {
        .mail{
            height: 300px
        }
        .mail-subtitle{
            margin-top: 12px;
            white-space: normal;
        }
        .mail-text{
            padding-top: 40px;
            margin-bottom: 108px;
        }
        .hapiness-conspect{
            font-size: 16px;
            
        }
        .decorate-word{
            font-size: 16px;
        }
    }
    @media (max-width: 360px) {
        .title{
        font-size: 25px;
        }
        .title p span{
           font-size: 20px;
        }
        .hapiness-conspect{
            font-size: 15px;
            
        }
         .mail-title{
            font-size: 24px;
        }
    }
    .certificate{
        text-align: center;
        margin-top: 88px;
    }
    .certificate .title{
        margin-bottom: 56px
    }
    .certificate-content{
        display: flex;
        justify-content: center;
    }
</style>