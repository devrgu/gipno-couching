<template>
<div class="problem">
    <div class="problem-content content">
        <div class="problem-title title">
            <p>Вы устали от этой знакомой боли?</p>
        </div>
        <div class="problem-sections">
            <div class="problem-section-1 problem-section">
               <div class="problem-section-1-icon problem-section-icon"><img src="/broken-heart.svg"></div>
               <div class="problem-section-1-text problem-section-text">
                <div class="problem-section-1-title problem-section-title title">
                    <h3>Вам кажется что вся ваша жизнь это сплошная боль...</h3>
                </div>
                <div class="problem-section-1-information problem-section-information">
                    <p>Вы настолько привыкли к не дающим вам покоя проблемам, что ваше мировозрение поменялось. Жизнь является для вас борьбой за нее, но не проживанием ее счастливо.</p>
                </div>
            </div>
            </div>
            <div class="problem-section-1 problem-section">
               <div class="problem-section-1-icon problem-section-icon"><img src="/nohealth.svg"></div>
               <div class="problem-section-1-text problem-section-text">
                <div class="problem-section-1-title problem-section-title title">
                    <h3>Вы неохотно поняли что, навязанные врачами методы не помогали...</h3>
                </div>
                <div class="problem-section-1-information problem-section-information">
                    <p>Вы начинаете осознавать что дорогие препараты и "хорошие" врачи не помогают, а в глубине души вы поняли что вас не лечили, а грабили.</p>
                </div>
            </div>
        </div>
            <div class="problem-section-1 problem-section">
                <div class="problem-section-1-icon problem-section-icon"><img src="/noplan.svg"></div>
                <div class="problem-section-1-text problem-section-text">
                <div class="problem-section-1-title problem-section-title title">
                    <h3>Вы ставили амбициозные планы на будущее, но все они внезапно оборвались...</h3>
                </div>
                <div class="problem-section-1-information problem-section-information">
                    <p>У вас буквально отняли выбор вашей жизни, вы выбросили свои будущие планы и вам оставалось только их вспоминать.</p>
                </div>
            </div>
        </div>
            <div class="problem-section-1 problem-section">
               <div class="problem-section-1-icon problem-section-icon"><img src="/suicide.svg"></div>
               <div class="problem-section-1-text problem-section-text">
                <div class="problem-section-1-title problem-section-title title">
                    <h3>Вы даже задумывались закончить все это...</h3>
                </div>
                <div class="problem-section-1-information problem-section-information">
                    <p>От ежедневного стресса и чувства безысходности, вы не хотите больше все это терпеть, но у вас есть близкие и родные и вам не хочется подводить их.</p>
                </div>
            </div>
        </div>
            <div class="problem-section-1 problem-section">
               <div class="problem-section-1-icon problem-section-icon"><img src="/zavist.svg"></div>
               <div class="problem-section-1-text problem-section-text">
                <div class="problem-section-1-title problem-section-title title">
                    <h3>Вы с грустной завистью смотрели на окружающих вас людей...</h3>
                </div>
                <div class="problem-section-1-information problem-section-information">
                    <p>Вы сравнивали себя с другими, хотели бы быть на их месте и это расстраивало вас еще больше.</p>
                </div>
                </div>
            </div>
            <div class="problem-section-1 problem-section">
               <div class="problem-section-1-icon problem-section-icon"><img src="/notime.svg"></div>
               <div class="problem-section-1-text problem-section-text">
                <div class="problem-section-1-title problem-section-title title">
                    <h3>Вы боитесь что не успеете или даже не сможете вылечиться...</h3>
                </div>
                <div class="problem-section-1-information problem-section-information">
                    <p>Вы каждый день беспокоитесь о завтрашнем дне, вас охватывает страх от неизвестности перед будущим из-за этого вы могли обращаться к гадалкам и колдуньям.</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>
<style>
    .problem{
        margin-top: 100px;
    }
    .problem-content{
        text-align: center;
    }
    .problem-sections{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 80px 0 0 0;
    }
    .problem-section{
        max-width: 350px;
        margin: 20px;
        padding-bottom: 20px;
        text-align: center
    }
    .problem-section-icon{
        height: 100px;
        width: 100px;
        background-color:#326BFF;
        border-radius: 100px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
    .problem-section-icon img{
        width: 56px;
    }
    .problem-section-information{
        color: #A7A7A7;
        margin-top: 10px;
    }
    .title{
        white-space: normal !important
    }
    .title h3{
        font-size: 18px;
    }
</style>