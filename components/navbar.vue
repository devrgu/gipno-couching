<template>
  <header class="content">
    <nav>
      <div>
        <img src="/logo.png">
      </div>
      <ul>
        <li><nuxt-link to="/" exact>ГЛАВНОЕ</nuxt-link></li>
          <li><a href="tel:+87771235176">+8 (777) 123 51 76</a></li>
             <div class="button" @click="dialog = true"><p>ЗАПИСАТЬСЯ</p></div>
      </ul>
    </nav>
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
  </header>
</template>
<script>
import zapisatsa from '~/components/zapisatsa.vue'
export default {
  data () {
    return {
        dialog: false,
        data:'',
        isActive: false
    }
  },
    components: {
      zapisatsa,
      
  },
    methods:{
    Close () {
      this.dialog = false
    },
    Changekonsultatsia () {
      this.component = 'zapisatsa'
    },
    Changezapisatsa () {
      this.component = 'konsultatsia'
    }
    }
  }
    
</script>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');
    .content{
      max-width: calc(1440px - 176px);
      margin: 0 auto;
    }
    nav li a:focus:after, 
    nav li a:hover,
    nav li a.nuxt-link-active,
    nav li a.nuxt-link-exact-active:after{
      color: #FFFFFF;
      cursor: pointer;
      width: 100%;
    }
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height:80px;
    }
    nav ul {
        display: flex;
        align-items: center;
    }
    nav div img{
        width: 64px;
    }
    ul li {
        display: inline-block;
        margin: 20.5px
    }
    li a {
       font-size: 16px;
        font-weight: 500;
        color: #7A7A7A;
        position: relative;
	line-height: 1; /*задаём высоту строки*/
    }
    li a img {
        vertical-align: middle;
    }
    .button p{
        color: #0085FF;
        padding: 11px 30px;
        border-radius: 10px;
        background-color: #FFFFFF;
        box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.75);
        font-size: 16px;
        font-weight: 700;
        
    }
    .button{
        margin-left: 128px;
        cursor: pointer;
    }
    li a {
    text-decoration: none;    
}
   li a:after {
	display: block;
	position: absolute;
	left: 0; /*изменить на right:0;, чтобы изменить направление подчёркивания */
	width: 0;/*задаём длинну линии до наведения курсора*/
	height: 2px; /*задаём ширину линии*/
	background-color: #0085FF
; /*задаём цвет линии*/
	content: "";
	transition: width 0.3s ease-out; /*задаём время анимации*/
}
     .v-application--wrap {
      min-height: unset !important;
    }
    .v-dialog__content--active{
        overflow: hidden;
    }
    .v-card{
        overflow: hidden;
        font-family: 'Montserrat', sans-serif;
    }
    .window{
        margin: 64px 0 64px 0;
        display: flex;
        justify-content: center;
    }
    .window-title{
        font-size: 32px;
        font-weight: 600;
        text-align: center;
        margin-bottom: 56px;
    }
    .window-title span{
        color: #326BFF
    }
    
    
    
    
   
    
</style>

