<template>
   <div class="otzivi">
    <div class="otzivi-content content">
      <div class="otzivi-titles">
        <div class="title">
           <div class="decorate-word"><p>#А чего вы ждете?</p></div>
            <p>Счастливые люди, сделавшие<br><span>правильный выбор!</span></p>
        </div>
    </div>
    <div class="video-content">
        <div class="1-block-video block-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/OAZcjdgQCv4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="2-block-video block-video">
           <iframe width="560" height="315" src="https://www.youtube.com/embed/98ce17-TOJg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="1-block-video block-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/TJGvNQviIsQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="2-block-video block-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hwYjwam3LoQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="1-block-video block-video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/-iWjUG3xA2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="2-block-video block-video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/p1yxLen1Ppc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
    </div>
</div>
</template>
<style scoped>
    .otzivi{
        display: flex;
        justify-content: center;
        text-align: center;
        overflow: hidden;
    }
    .otzivi-content{
          overflow: hidden;
    }
    .title{
    }
    .title div p{
       
        
    }
    .decorate-word{
        text-align: left;
        
    }
    .otzivi-titles{
        margin-bottom: 64px;
    }
    .video-content{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .block-video{
        margin: 24px;
        
    }
    @media (max-width: 768px) {
        iframe {
         transform: scale(0.65); 
        }
        .block-video{
          margin: 24px 0 24px 0;
        
    }
        
        
         
    }
    @media (max-width: 568px) {
        .decorate-word{
          text-align: center;
        
    }
    }

</style>