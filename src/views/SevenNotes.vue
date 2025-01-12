<template>
  <div class="notes-page">
    <div class="header">

      <router-link  to="/">
        <img class="main-logo" style="width: 70px" src="../assets/logo.png">
      </router-link>

      <nav class="nav">

        <a data-cursor-hover class="navTxt">{{ loca.welcome }}</a>
        <a data-cursor-hover href="#" @click.prevent="scrollToComponent('about')" class="navTxt">{{loca.about}}</a>
        <a data-cursor-hover href="#" @click.prevent="scrollToComponent('music')" class="navTxt">{{loca.music}}</a>
        <a data-cursor-hover href="#" @click.prevent="scrollToComponent('stories')" class="navTxt">{{loca.stories}}</a>
        <a data-cursor-hover href="#" @click.prevent="scrollToComponent('contact')" class="navTxt">{{loca.contact}}</a>
      </nav>

      <LangContainer/>
    </div>

 <div style="">
   <span>Кто придумал названия семи нот</span>
 </div>


<!--    Задумывались ли вы когда-нибудь о том, кто придумал нотную грамоту и почему именно До-Ре-Ми-Фа-Соль-Ля-Си, и что собственно означают названия семи нот?-->

<!--    Интересная информация о происхождении нот и тайна их названия.-->



<!--    Изобретателем всемирно известной нотной грамоты считается монах Гвидо Аретинский (Гвидо д'Ареццо), живший в 991-1060 года нашей эры. Как и все прекрасное в те времена, нотная грамота зародилась близь Флоренции, небольшом городке в Тоскане – Ареццо. Во Флоренции установлен памятник монаху.-->

<!--    Гвидо был учителем музыки и хорового церковного пения при разных храмах, он много путешествовал по Италии, встречался в Риме с Папой Иоанном XIX и много трудился над созданием музыкальной грамоты, которая стала бы общепринятой.-->
<!--    Однажды, стараясь придумать более легкий способ заучивания незнакомых мелодий для песнопения, Гвидо придумал систему сольмизации на основе акростиха молитвы к Иоанну Крестителю:-->

<!--    UT queant laxis-->
<!--    REsonare fibris-->
<!--    MIra gestorum-->
<!--    FAmuli tuorum-->
<!--    SOLve polluti-->
<!--    LAbii reatum-->
<!--    Sancte Ioannes-->
<!--    (В переводе с латинского: "Чтобы слуги твои голосами своими смогли воспеть чудные деяния твои, очисти грех с наших опороченных уст, о, Святой Иоанн")-->
<!--    Названия всех нот, кроме первой, заканчиваются на гласный звук, их удобно петь. Слог ut – закрытый и пропеть его подобно прочим невозможно. Поэтому название первой ноты октавы, ut, в шестнадцатом веке заменили на do (скорее всего, от латинского слова Dominus – Господь).-->

<!--    Современная интерпретация названий нот выглядит так:-->
<!--    Do – Dominus – Господь-->
<!--    Re – rerum – материя-->
<!--    Mi – miraculum – чудо-->
<!--    Fa – familias рlanetarium – семья планет, т.е. солнечная система-->
<!--    Sol – solis – Солнце-->
<!--    La – lactea via – Млечный путь-->
<!--    Si – siderae – небеса-->



<!--    Благодаря авторитету Гвидо латинская буквенная нотация утвердилась как общепринятая в западной Европе и сохраняется до наших дней.-->
<!--    Помимо всего прочего, Гвидо принадлежит и огромная заслуга в прогрессе письменной части нотной грамоты. Во время выступления хора, Гвидо для указания нот использовал свою левую руку, сгибая суставы пальцев он указывал, какую ноту брать в то или иное время.-->

<!--    Впоследствии, Гвидо начал отмечать звуки нотами (от латинского слова nota – знак). Ноты, заштрихованные квадратики, размещались на нотном стане, состоящем из четырех параллельных линий. Сейчас этих линий пять, и ноты изображают кругом, а не квадратом, но принцип, введенный Гвидо, остался без изменений.-->

    <footer>
      <div class="parallax">
        <div style=" justify-content: center; display: flex">
          <div style="  display: flex;
                  justify-content: center; flex-direction: column">
            <nav class="footer-links">
              <a href="#" class="footer-link-txt"
                 @click.prevent="scrollToTop()">{{loca.welcome}}</a>
              <a href="#" class="footer-link-txt"
                 @click.prevent="scrollToComponent('about')">{{loca.about}}</a>
              <a href="#" class="footer-link-txt"
                 @click.prevent="scrollToComponent('music')">{{loca.music}}</a>
              <a href="#" class="footer-link-txt"
                 @click.prevent="scrollToComponent('stories')">{{loca.stories}}</a>
              <a href="#" class="footer-link-txt"
                 @click.prevent="scrollToComponent('contact')">{{loca.contact}}</a>
            </nav>
            <span class="footer-txt">{{loca.copyright}}</span></div>
        </div>
      </div>
    </footer>


  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import LangContainer from "@/UI/LangContainer";

export default {
  name: "SevenNotes",
  components: {LangContainer},
  mounted() {
 console.log('7notes' + JSON.stringify(this.loca))
  },
  computed: {
    ...mapState(['loca']),
  },
}
</script>

<style scoped>
.notes-page {
  /*padding: 30px 70px;*/
  background: linear-gradient(to bottom, #835A3C 0%, #C18553 50%,#E8D1A7  100%);
  display: block;
  min-height: 100vh;
}

.header{
  padding: 30px 90px;
  box-shadow: inset 0 0 500px rgba(0, 0, 0, 0.93);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav{
  display: flex;
  gap: 25px
}


.navTxt {
  font-size: 20px;
  font-family: 'Playfair Display', cursive;
  display: flex;
  font-style: italic;
  margin: 36px 0
}




footer {
  display: flex;
  justify-content: center;
  margin: auto;
  position: relative;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  color: white;
}

.footer-links {
  padding: 0 10px 20px 10px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  gap: 50px
}

.footer-txt {
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  font-size: 16px;
  font-family: 'Playfair Display', serif;
  font-style: italic;
}
</style>