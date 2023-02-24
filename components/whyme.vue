<template>
<div class="whyme">
               <div class="whyme-content content">
                 <div class="whyme-img">
                       <img loading="lazy" src="/photo_beach.avif">
                   </div>
                  <div class="whyme-text">
                      <div class="decorate-word"><p>#Я такой же как вы</p></div>
                   <div class="title">
                       <p>Почему вы должны мне
                           <span>доверять?</span></p>
                   </div>
                      <div class="whyme-conspect">
                          <p>Я знаю всю эту боль изнутри. Я знаю, как пройти через это. Я понимаю и чувствую вас в деталях. Я на собственном опыте убедился, что гипнотерапия - инструмент позволяющий, вылечить его от "неизлечимых" болезней, получить крепкое здоровье, вытащить человека с нищеты и обрести прочную любовь. Обратитесь ко мне на консультацию.</p>
                       <div class="whyme-punkts">
                           <div class="punkt-1 punkt">
                                   <img src="/circle_check.svg">
                                   <div class="punkt-text">
                                   <div class="punkt-title">
                                       <p>Я учился у лучших</p>
                                   </div>
                                   <p>Я сертифицированный специалист American Academy Holistic Mind Therapy, основанной Павлом Дмитриевым — главным русскоязычным экспертом по гипнотерапии, учеником Джеральда Кейна и Ричарда Бендлер.</p>
                                   </div>
                           </div>
                           <div class="punkt-2 punkt">
                                   <img src="/circle_check.svg">
                                   <div class="punkt-text">
                                   <div class="punkt-title">
                                       <p>Я такой же как вы</p>
                                   </div>
                                   <p>Не каждый становится специалистом - ими становятса только те, кто имел и решал проблемы обращающиеся к нему людей.</p>
                                   </div>
                           </div>
                           <div class="punkt-3 punkt">
                                   <img src="/circle_check.svg">
                                   <div class="punkt-text">
                                   <div class="punkt-title">
                                       <p>Вы не первый с такой проблемой</p>
                                   </div>
                                   <p>Я сумел помочь сотням людям, с разными и очень необычными проблемами, которыми удивились бы и вы. Но ваша проблема и ее решение всегда будет для меня в приоритете. </p>
                                   </div>
                           </div>
                       </div>
                   </div>
                  </div>
               </div>
           </div>
</template>
<style scoped>
    .whyme{
        margin-bottom: 128px;
    }
    .whyme-content{
        display: flex
    }
    .whyme-img{
       flex-shrink: 1;
       height: 585px;
       max-width: 100%;
    }
    .whyme-img img{
        width: 100%;
      height: 100%;
       object-fit: cover;
     object-position: 0 0;
    }
    .title{
        margin: 0 0 36px 0;
        font-size: 36px;
    }
    .title span{
        font-size: 36px;
    }
    .whyme-text{
        overflow: hidden;
        padding-left: 32px;
        flex-shrink: 3
    }
    .whyme-conspect{
        color: #FFFFFF;
        font-size: 18px;
    }
    .whyme-punkts{
        margin: 48px 48px 48px 24px;
    }
    .punkt{
        margin-bottom: 40px;
    }
    .punkt img{
        float: left;
        margin-right: 32px;
	    display:inline; /* для IE6, чтоб отступ слева не удвоился */
    }
    .punkt-text{
        overflow: hidden;
    }
    .punkt-text p:not(.punkt-title p){
        margin-top: 16px;
    }
    .punkt-title{
        font-size: 24px;
        font-weight: 600;
        line-height: normal;
    }
    @media (max-width: 1480px) {
        .title{
            white-space: normal;
        }
        .punkt-text{
           overflow: visible;
        }
        }
    @media (max-width: 1024px) {
        .decorate-word{
            margin-top: 24px;
        }
        .whyme-content{
          display: block
        }
        .whyme-img{
            height: auto;
        }
         
    }
    @media (max-width: 768px) {
        .whyme-conspect{
          margin-right:16px;
         }
        .whyme-punkts{
           margin: 48px 0px 0px 18px;
        }
        .punkt-text{
        overflow: visible;
    }
         
    }
</style>