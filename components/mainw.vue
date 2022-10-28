<template>
    <div class="main">
 <div class="content">
  <div class="main-flex">
   <div class="main-content">
       <div class="main-text">
          <div class="main-title">
            <p>ГИПНОТЕРАПИЯ НА<br>ПРОФФЕСИОНАЛЬНО -<br>ПОДСОЗНАТЕЛЬНОМ УРОВНЕ</p>
          </div>
          <div class="main-subtitle">
            <p>Запишитесь к Серику, на сеанс<br>для финансового, социального успеха!</p>
          </div>
       </div>
       <div class="main-buttons">
           <div class="zapisatsa" @click="dialog = true">
               <p>ЗАПИСАТЬСЯ</p>
           </div>
           <div class="konsultatsia" @click="dialog = true">
               <p>КОНСУЛЬТАЦИЯ</p>
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
         <div class="bonus-3 bonus-"><img src="/galochka.svg"><p>Скидки до 45%</p></div>
       </div>
   </div>
  </div>
 </div>
 <v-app>
      <v-dialog v-model="dialog" width="600">
        <v-card height="800">
          <div class="window">
            <div class="window-content">
               <div class="window-title">
                       <p>Оставьте заявку для<br>
                           <span>Обратной связи</span></p>
                   </div>
                   <div class="window-forms">
                <keep-alive>
                <zapisatsa @someEvent="Close"/>

                </keep-alive>
              </div>
            </div>
          </div>
        </v-card>
      </v-dialog>
    </v-app>
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
    },}
}

</script>
<style>
.main{
        max-height: calc(908px - 80px);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    .main-flex{
        display: flex;
        justify-content: space-between;
    }
    .main-text{
        margin: 10.417vw 0 0 0;
    }
    
    .main-title p{
        color: #FFFFFF;
        font-size: 40px;
        font-weight: bold;
    }
    .main-subtitle p{
        color: #A7A7A7;
        font-size: 24px;
        font-weight: 400;
        margin: 8px 0 32px;
    }
    .main-buttons{
        display: flex;
    }
    .main-buttons div p{
        color: #FFFFFF;
        font-weight: 600;
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
    .main-img img{
        max-width: 70vw;
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
        height: 260px;
        position: relative;
        background: linear-gradient(5.5deg, #070A11 37.9%, rgba(7, 10, 17, 0) 90.42%);
        z-index: -1;
    }
    .bonus{
        position: absolute;
        bottom: 16px;
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
            margin-left: 48px;
        }
        .main-title p{
            font-size: 36px;
        }
        .main-subtitle p{
            font-size: 22px;
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
            margin-left: 48px;
            margin-bottom: 64px;
        }
        
        
        
        
        
        nav{
            margin-right: 64px;
        }
        nav li a{
            font-size: 15px
        }
        nav ul .button{
            margin-left: 90px;
        }
    }
    @media (max-width: 1440px) {
        .main-title p{
            font-size: 32px;
        }
        .main-subtitle p{
            font-size: 20px;
        }
        .main-buttons div p{
          font-size: 16px;
       }
        .main-img{
            right: -8%;
        }
        .bonus{
            margin-bottom: 80px;
        }
        
        
        
        
        
        
        nav a{
            font-size: 14px; 
        }
        nav ul .button{
            margin-left: 80px;
        }
    }
    
    
    
    
    @media (max-width: 1200px) {
        .main-title p{
            font-size: 28px;
        }
        .main-subtitle p{
          font-size: 18px;
        }
        .main-buttons div p{
          font-size: 15px;
          font-weight: 500
       }
        .main-buttons div{
        width: 205px;
        height: 51px;
       }
           
        
        
        
        
        nav li a{
            font-size: 13px
        }
        nav ul .button p{
            padding: 9px 26px;
            font-size: 14px;
        }
        nav ul .button{
            margin-left: 70px;
        }
    }
    
    
    
    
    @media (max-width: 1000px) {
        .main-title p{
          font-size: 24px;
        }
        .main-subtitle p{
        font-size: 16px;
        }
        .main-buttons div p{
          font-size: 15px;
       }
        .main-buttons div{
          width: 185px;
          height: 46px;
       }
        
        
        
        nav div img{
            width: 44px;
        }
        nav ul .button{
            margin-left: 60px;
        }
    }
    
    
    
    
    @media (max-width: 800px) {
        .main-title p{
          font-size: 20px;
        }
        .main-subtitle p{
        font-size: 15px;
        }
        .main-buttons div p{
          font-size: 14px;
       }
        .main-buttons div{
          width: 165px;
          height: 41px;
       }
        
        
        
         
        nav li a{
            font-size: 12px
        }
        nav ul .button{
            margin-left: 50px;
        }
    }
</style>