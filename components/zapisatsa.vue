<template>
   <div class="zapis">
    <div class="dd">
    <div class="zapis-content">
        <div class="name-block block">
            <input class="name" ref="name" v-model="name" placeholder="Имя">
        </div>
        <div class="surname-block block">
            <input class="surname" ref="surname" v-model="surname" placeholder="Фамилия">
        </div>
        <div class="email-block block">
            <input class="email" ref="email" v-model="email" placeholder="Почта">
        </div>
        <div class="textarea-block block">
            <textarea v-model="message" ref="message" placeholder="Опишите свою проблему, вопросы, предложения."></textarea>
    </div>
    </div>
    </div>
    <div class="description">
                    <p>Нажимая на кнопку "Отправить заявку" Вы соглашаетесь с политикой конфиденциальности <nuxt-link to="/plans">Серика Аубакирова.</nuxt-link></p>
                </div>
                       <div class="main-buttons">
                <div class="zapisatsa" @click.prevent="send"  @click="$emit('someEvent')">
                <p>ОТПРАВИТЬ</p>
                </div>
                </div>
</div>
</template>
<script>
    export default{
        data () {
    return {
        name: '',
        surname: '',
        email: '',
        message: '',
    }
  },
        methods: {
    send() {
      this.$axios.$post('/mail/send',{
        from: 'ededededdd',
        subject: 'Contact form message',
        html: `Имя:${this.$refs.name.value},<br>Фамилия:${this.$refs.surname.value}<br>Почта:${this.$refs.email.value}<br>Проблема: ${this.$refs.message.value}`,
        to: this.email,
      })
  },
            
 }
}

</script>
<style scoped>
    .dd{
        margin-bottom: 56px;
        display: flex;
        justify-content: center;
    }
    .block{
        padding:0 24px;
        display: flex;
        justify-content: center;
    }
    .block input{
        width: 350px;
        height: 48px;
        border: 1px solid rgba(0, 66, 105, 0.28);
        background-color: #FFFFFF;
        color: black;
        margin-bottom: 32px;
        padding-left: 12px;
        font-size: 18px;
        font-weight: 500;
        border-radius: 4px;
        outline: none;
    }
    .block textarea{
        width: 350px;
        height: 90px;
        background-color: #FFFFFF;
        border: 1px solid rgba(0, 66, 105, 0.28);
        padding: 8px 0 0 12px;
        font-size: 18px;
        font-weight: 500;
        border-radius: 4px;
        outline: none;
    }
    .description{
        text-align: center;
        font-size: 14px;
        margin-bottom: 24px;
    }
    .description p a{
        font-weight: 700;
        font-size: 15px;
    }
    .main-buttons{
        justify-content: center;
    }
     .zapisatsa{
        margin: 4px !important;
        align-self: center;
        cursor: pointer;
    }
    .zapisatsa p{
        margin: 0;
        line-height: normal
    }

    
    
    
    @media (max-width: 768px) {
        
         
    }
    @media (max-width: 560px) {
        .main-title p{
            font-size: 22px;
        }
        
        .main-buttons{
            flex-wrap: wrap;
        }
        .block input{
        width: 300px;
        height: 48px;
        margin-bottom: 24px;
        padding-left: 12px;
        font-size: 18px;
     }
        .block textarea{
          width: 300px;
    }
    }
</style>