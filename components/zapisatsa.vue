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
                    <p>Нажимая на кнопку "Отправить заявку" Вы соглашаетесь с политикой конфиденциальности <nuxt-link to="/rights">Серика Аубакирова.</nuxt-link></p>
                </div>
                       <div class="main-buttons">
                <div class="zapisatsa" @click.prevent="send"  @click="$emit('someEvent')">
                <nuxt-link to="/success">ОТПРАВИТЬ</nuxt-link>
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
        html: `Имя:${this.$refs.name.value},<br>Фамилия:${this.$refs.surname.value}<br>Почта:${this.$refs.email.value}<br>Проблема: ${this.$refs.message.value}`
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
    .zapis-content{
        overflow: hidden;
        padding: 0 24px;
    }
    .block{
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
    .main-buttons{
        justify-content: center;
    }
    @media (max-width: 560px) {
        .main-title p{
            font-size: 22px;
        }
        
        .main-buttons{
            flex-wrap: wrap;
        }
        .block{
            max-width: 300px;
        }
    }
</style>
<style>
.zapisatsa{
        margin: 4px !important;
        align-self: center;
    }
    .zapisatsa a{
        margin: 0;
        line-height: normal;
        text-decoration: none;
        color: #FFFFFF;
        text-align: -webkit-center;
        vertical-align: middle;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
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
</style>