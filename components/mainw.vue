<template>
    <div class="main">
 <div class="content">
  <div class="main-flex">
   <div class="main-content">
      <div class="main-text-wrap">
       <div class="main-text">
          <div class="main-title title">
              <p>Целительство онкологических<br> заболеваний, <span>без операций!</span><br></p>
          </div>
          <div class="main-subtitle">
            <p>
            <span>
            Вы многие годы, каждую ночь до слез волнуетесь насчет своих диагнозов, за родных? Вы замучили свое здоровье из-за множеств химических лекарств? Вы хотите жить как окружающие вас люди, но у вас нет выбора кроме как бороться за жизнь?
            </span>
            <span>На бесплатной консультации, Я ВАМ ГАРАНТИРОВАННО раскрою настоящую причину ваших бед, которая забрала у вас годы радости и наслаждений!</span>
            <span>После всего что с вами случилось, вы наконец-то перестанете жить в страхе и печали, сможете позволить себе спокойно проводить время с семьей, заниматься любимым делом которое пришлось отложить и вы поймете что такое счастье!</span>  
                </p>
          </div>
       </div>
       <div class="main-buttons">
           <div class="zapisatsa" @click="dialogTrue">
               <p>ЗАПИСАТЬСЯ</p>
           </div>
           <div class="konsultatsia" @click="dialogTrue">
               <p>КОНСУЛЬТАЦИЯ</p>
           </div>
       </div>
    </div>
   </div>
   <div class="main-img">
   <img src="/main-img.jpg">
   </div>
   </div>
   <div class="bottom-gradient">
   <div class="bonus">
       <div class="bonus-title">
           <p>Бонусы для новых клиентов:</p>
       </div>
       <div class="bonuses">
         <div class="bonus-1 bonus-"><img src="/galochka.svg"><p>Дополнительная проработка</p></div>
         <div class="bonus-2 bonus-"><img src="/galochka.svg"><p>Бесплатная консультация</p></div>
         <div class="bonus-3 bonus-"><img src="/galochka.svg"><p>Дополнительные советы от эксперта</p></div>
       </div>
   </div>
  </div>
 </div>
</div>
</template>
<script>
    export default {
  data () {
    return {
        dialog: false,
        data:''
    }
  },
        methods:{
    Close () {
      this.dialog = false
    },
    dialogTrue(){
      this.$store.commit('dialog/dialogMutation', true);
       
    }
  }
}

</script>
<style>
.main{
        height: 50%;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        overflow: hidden;
            position: relative;
    word-wrap: break-word
    }
    .main-flex{
        display: flex;
    }
    .main-text{
        margin: 8.417vw 0 0 0;
    }
    
    .main-title p{
        color: #FFFFFF;
        font-size: 40px;
        font-weight: bold;
    }
    .main-title p span{
        font-size: inherit !important
    }
    .main-subtitle{
        max-width: 680px;
    }
    .main-subtitle p{
        color: #b5b5b5;
        font-size: 18px;
        font-weight: 400;
        margin: 8px 0 32px;
    }
    .main-subtitle p span{
        display: inline-block;
        margin: 8px 0;
    }
    .main-buttons{
        display: flex;
    }
    .main-buttons div p{
        color: #FFFFFF;
        font-weight: 500;
        font-size: 18px;
    }
    .main-buttons div{
        margin: 8px;
        width: 240px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .main-buttons .zapisatsa{
        background-color: #326BFF;
         border-radius: 100px;
    }
    .main-buttons .konsultatsia{
        border: 1px solid #FFFFFF;
         border-radius: 100px;
    }
    .main-img{
        position: absolute;
        right: 0%;
        z-index: -5;
        
        
    }
    .main-img::before{
        content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  background: radial-gradient(50% 285.92% at 50% 50%, rgba(7, 10, 17, 0) 37.52%, rgba(7, 10, 17, 0.75) 100%);

    }
    .bottom-gradient{
        max-width: 1440px;
        height: 220px;
        position: relative;
        background: linear-gradient(5.5deg, #070A11 37.9%, rgba(7, 10, 17, 0) 90.42%);
        z-index: -1;
    }
    .bonus{
        position: absolute;
        bottom: 16px
    }
    .bonus-title{
        font-size: 18px;
        font-weight: 800;
        color:#FFFFFF;
        margin-bottom: 16px;
    }
    .bonuses{
        display: flex;
    }
    .bonus-{
        display: flex;
        margin: 0 8px;
    }
    .bonus- p{
        color: #A7A7A7;
        font-size: 14px;
        align-self: center;
        padding-left: 1px;
    }
    .socials{
        display: flex;
        position: absolute;
        bottom: 16px;
        right: 0
    }
    .socials a{
        align-self: center;
        
    }
    @media (max-width: 1600px) {
        .main-flex{
            margin-left: 24px;
        }
        .main-title p{
            font-size: 36px;
        }
        .main-subtitle p{
            font-size: 17px;
        }
        .main-buttons div p{
          font-size: 17px;
       }
        .main-buttons div{
        width: 225px;
        height: 56px;
      }
        .main-img{
            right: -8%;
        }
        .bonus{
            margin-left: 24px;
        }
        
        
        
        
        
    }
    @media (max-width: 1440px) {
        .main-title p{
            font-size: 32px;
        }
        .main-subtitle p{
            font-size: 16px;
        }
        .main-buttons div p{
          font-size: 16px;
       }
        .main-img{
            right: -16%;
        }
        .main-subtitle{
          max-width: 600px;
       }
    }
    
    
    
    
    @media (max-width: 1280px) {
        .main-title p{
            font-size: 30px;
        }
        .main-img{
            right: -24%;
        }
        .main-subtitle{
          max-width: 560px;
       }
        
    
        nav .button p{
            padding: 9px 26px;
            font-size: 14px;
        }
        nav{
            margin-right: 36px;
        }
    }
    
    
    
    @media (max-width: 1140px) {
        .main-img{
            right: -30%;
        }
    }
    
    
    
    
    @media (max-width: 1024px) { 
        .main-buttons{
            justify-content: center;
        }
        .main-img{
             display: flex;
             justify-content: center;
             top: 55%;
             left: 50%;
             transform: translate(-50%, -50%);
             right: -28%;
       }
        .main-img::before{
            background-color: rgba(7, 10, 17, 0.7);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            content: "";
            position: absolute;
            height: 100%;
            width: 100vw;
        }
        
        .main-img img{
            max-width: none;
          }
        .main-text{
           margin: 10.417vw 16px 0 16px;
        }
        .main-subtitle{
            margin: 24px 0 24px 0;
        }
        .main-content{
            display: flex;
            justify-content: center;
        }
        .main-flex{
            margin: 0;
            justify-content: center;
        }
        .bonus{
            text-align: center;
        }
        .main-buttons div{
        margin-top: 16px;
        width: 240px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .
        
        
        
        nav div img{
            width: 44px;
        }
    }
    
    
    
    
    @media (max-width: 768px) {
        .main-title p{
            font-size: 28px;
        }
        .main-title p br{
            display: none;
        }
        .bonuses{
        display: block;
       }
        nav div img{
            display: none;
        }
         
    }
    @media (max-width: 560px) {
        .main-title p{
            font-size: 22px;
        }
        
        .main-buttons{
            flex-wrap: wrap;
        }
    }
</style>