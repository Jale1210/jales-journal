<template>
  <div class="notes-page">

    <!--       mobile version -->
    <div class="nav-mobile show-mobile ">
      <router-link to="/">
        <img class="main-logo" style="width: 120px;" src="../assets/../assets/J5.png">
      </router-link>
    </div>

<!--    <LangContainer class="show-mobile" style="display: block;-->
<!--right: 100px;-->
<!--    top: 20px;-->

<!--    position: fixed;-->
<!--    z-index: 100;-->
<!--    cursor: pointer;" />-->

    <div id="sidemenu">
      <button class="sidemenu__btn" v-on:click="isMenuOpen=!isMenuOpen"
              v-bind:class="{active:isMenuOpen}">
        <span class="top"></span>
        <span class="mid"></span>
        <span class="bottom"></span>
      </button>
      <transition name="translateX">
        <nav v-show="isMenuOpen">
          <div class="sidemenu__wrapper">
            <ul class="sidemenu__list">
              <li class="sidemenu__item" @click="this.toggleMenu">
                <a href="#welcome" @click.prevent="scrollToTop()">
                  {{ loca.welcome }}
                </a>
              </li>
              <li class="sidemenu__item" @click="this.toggleMenu">
                <a href="#about" @click.prevent="scrollToComponent('about')">
                  {{ loca.about }}
                </a>
              </li>
              <li class="sidemenu__item" @click="this.toggleMenu">
                <a href="#music" @click.prevent="scrollToComponent('music')">
                  {{ loca.music }}
                </a>
              </li>
              <li class="sidemenu__item" @click="this.toggleMenu">
                <a href="" @click.prevent="scrollToComponent('stories')">
                  {{ loca.stories }}
                </a>
              </li>
              <li class="sidemenu__item" @click="this.toggleMenu">
                <a href="#contact" @click.prevent="scrollToComponent('contact')">
                  {{ loca.contact }}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </transition>
    </div>

    <!--    mobile version end-->

    <!-- Header Section -->
    <header class="header show-desktop">
      <router-link to="/" data-cursor-hover>
        <img class="main-logo" src="../assets/J5.png" alt="Jale's Journal Logo"/>
      </router-link>

      <nav class="nav">
        <a data-cursor-hover class="navTxt">{{ loca.welcome }}</a>
        <a data-cursor-hover href="#" @click.prevent="scrollToComponent('about')" class="navTxt">{{ loca.about }}</a>
        <a data-cursor-hover href="#" @click.prevent="scrollToComponent('music')" class="navTxt">{{ loca.music }}</a>
        <a data-cursor-hover href="#" @click.prevent="scrollToComponent('stories')" class="navTxt">{{
            loca.stories
          }}</a>
        <a data-cursor-hover href="#" @click.prevent="scrollToComponent('contact')" class="navTxt">{{
            loca.contact
          }}</a>
      </nav>


      <LangContainer/>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <span class="elegant-text textRight">Изобретатель нотной грамоты</span>

        <div class="sectionContainer">
          <img class="gvidoImg" src="../assets/music-img/gvido.jpg"/>

          <span class="description textRight">
              Изобретателем всемирно известной нотной грамоты считается монах Гвидо Аретинский (Гвидо д'Ареццо), живший в 991–1060 годах. Как и многое прекрасное того времени, нотная грамота зародилась близ Флоренции, в небольшом городке Тосканы – Аретцо.
              Сегодня во Флоренции установлен памятник этому монаху. <br/>
              Гвидо был учителем музыки и хорового церковного пения при храмах. Он много путешествовал по Италии, встречался с Папой Иоанном XIX и трудился над созданием музыкальной грамоты, которая стала бы общепринятой.</span>
        </div>

        <span class="elegant-text">Почему До-Ре-Ми?</span>

        <div>
          <span class="description justify">
            Однажды Гвидо, чтобы облегчить заучивание незнакомых мелодий для песнопений, придумал систему сольмизации на основе молитвы к Иоанну Крестителю:
          </span>

          <div class="listContainer">
            <ul class="description">
              <li>
                UT queant laxis
              </li>
              <li>
                REsonare fibris
              </li>
              <li>
                MIra gestorum
              </li>
              <li>
                FAmuli tuorum
              </li>
              <li>
                SOLve polluti
              </li>
              <li>
                LAbii reatum
              </li>
              <li>
                Sancte Ioannes
              </li>
            </ul>

            <img class="hymnImg" src="../assets/music-img/hymnus.jpg"/>

          </div>

          <span class="description justify">
            Перевод с латинского:
           "Чтобы слуги твои голосами своими смогли воспеть чудные деяния твои, очисти грех с наших порочных уст, о, Святой Иоанн".
            <br/>
            Названия всех нот, кроме первой, заканчиваются на гласный звук, что делает их удобными для пения. Первая нота "Ут" была закрытым звуком, и в XVI веке её заменили на "До" (вероятно, от латинского Dominus – Господь).
          </span>
        </div>

        <span class="elegant-text">Что означают названия нот?</span>

        <div>
          <span class="description block">
            Каждое название имеет латинский корень и свой смысл:
          </span>

          <div class="listContainer">
            <ul class="description">
              <li>
                <a class="description">До – Dominus <br/>(Господь)</a>
              </li>
              <li>
                <a class="description">Ре – Rerum <br/>(Материя)</a>
              </li>
              <li>
                <a class="description">Ми – Miraculum <br/>(Чудо)</a>
              </li>
              <li>
                <a class="description">Фа – Familias Planetarium <br/>(Семья планет, то есть Солнечная система)</a>
              </li>
              <li>
                <a class="description">Соль – Solis <br/>(Солнце)</a>
              </li>
              <li>
                <a class="description">Ля – Lactea Via <br/>(Млечный путь)</a>
              </li>
              <li>
                <a class="description">Си – Siderae <br/>(Небеса)</a>
              </li>
            </ul>

            <img src="../assets/music-img/notes2.jpg" class="notesImg"/>
          </div>
        </div>


        <span class="elegant-text">Вклад Гвидо в музыку</span>

        <div class="sectionContainer">
          <span class="description textLeft">
            Гвидо Аретинский также внёс огромный вклад в развитие нотной записи.
            <br/>Во время выступлений хора он использовал свою левую руку: сгибая суставы пальцев, он указывал, какую ноту нужно взять.
           <br/> Позже он начал отмечать звуки символами (от латинского nota – знак).
            <br/>Ноты изображались в виде закрашенных квадратиков на четырёх параллельных линиях.
            <br/>Сегодня используется пять линий, а ноты рисуют в виде кружков, но основополагающий принцип Гвидо остаётся неизменным.
          </span>

          <img class="handImg" src="../assets/music-img/hand.jpg"/>

        </div>

        <div>
          <span class="elegant-text source">
            For more details, visit the <a
              href="https://velskdshi.ru/p17aa1detales6.html#:~:text=%D0%92%D0%BE..." target="_blank"
              rel="noopener noreferrer">official website</a>.
          </span>
        </div>

      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer">
      <nav class="footer-links">
        <a href="#" @click.prevent="scrollToTop()" class="footer-link">{{ loca.welcome }}</a>
        <a href="#" @click.prevent="scrollToComponent('about')" class="footer-link">{{ loca.about }}</a>
        <a href="#" @click.prevent="scrollToComponent('music')" class="footer-link">{{ loca.music }}</a>
        <a href="#" @click.prevent="scrollToComponent('stories')" class="footer-link">{{ loca.stories }}</a>
        <a href="#" @click.prevent="scrollToComponent('contact')" class="footer-link">{{ loca.contact }}</a>
      </nav>
      <p class="footer-text">© 2024 Исмаилова Жале. Все права защищены.</p>
    </footer>
  </div>
</template>

<script>
import {mapState} from "vuex";
import LangContainer from "@/UI/LangContainer";

export default {
  name: "SevenNotes",
  components: {LangContainer},
  computed: {
    ...mapState(["loca"]),
  },
  data() {
    return {


      isMenuOpen: false

    }
  },
  mounted() {
    if (window.innerWidth <= 768) {  // For mobile devices
      document.querySelector('.notes-page').style.height = `${window.innerHeight}px`;
    }
    // this.handleScroll = this.onScroll.bind(this);
    // window.addEventListener('scroll', this.handleScroll);
    this.scrollToTop()

  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      let scroll = document.querySelector('.scroll');
      scroll.style.display = "none";

      document.addEventListener('scroll', function () {
        if (document.documentElement.scrollTop > 20) {
          scroll.style.display = "block";
        } else {
          scroll.style.display = "none";
          console.log(scroll.style.opacity);
        }
      });
    },

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

  }
};
</script>

<style scoped>

.nav-mobile{

  padding: 20px 50px;
  text-align: center;
  color: #f2cd9d;  background:none;
}

.nav-mobile:before{
  background-color: rgba(16, 76, 56, 0.9);

  box-shadow: none;
}

#sidemenu nav{
  background-color: rgba(16, 76, 56, 1);;
}


ol {
  list-style: symbols(cyclic "♪");
}

@counter-style thumbs {
  system: cyclic;
  symbols: "♪" ;
  suffix: " ";
}

ul {
  flex-direction: column;
  align-items: initial;
  list-style: thumbs;
}

li {
  text-align: left;
  padding: 0 5px
}

.justify {
  text-align: justify;
}

.block {
  display: block !important;
}

/******** General Page Styling ********/
.notes-page {
  font-family: 'Playfair Display', serif;
  background: url('../assets/roses-bg.jpg') no-repeat center center fixed;
  background-size: cover;
   min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
}

/******** Header Styling ********/
.header {
  background-color: rgba(16, 76, 56, 0.9);
  padding: 20px 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}

.main-logo {
  width: 180px;
}

.nav {
  display: flex;
  gap: 20px;
}

.navTxt {
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 500;
  color: #f2cd9d;
  transition: color 0.3s ease;
  cursor: pointer;
}

.navTxt:hover {
  color: #ffad60;
}

/******** Hero Section Styling ********/
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  text-align: center;
}

.hero-content {
  background: rgba(242, 205, 157, 0.9);
  /*padding: 30px;*/
  margin: 20px;
  color: #333;
  font-family: 'Playfair Display', serif;
  line-height: 1.6;


  padding: 30px 70px;
  width: calc(100% - 260px);
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.elegant-text {
  font-size: 28px;
  /*margin-bottom: 20px;*/
  color: #3b2b20;

  padding: 20px 0;
  display: block;
  text-align: center;
  font-weight: 500;
  /*font-size: 32px;*/
  font-style: italic;
  /*color: #333;*/
}

.description {
  display: flex;
  font-family: cursive;
  gap: 18px;
  /*align-items: center;*/
  font-size: 20px;
  color: #333;
}

/******** Footer Styling ********/
.footer {
  background-color: rgba(16, 76, 56, 0.9);
  padding: 20px 50px;
  text-align: center;
  color: #f2cd9d;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 10px;
}

.footer-link {
  font-size: 18px;
  color: #f2cd9d;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: #ffad60;
}

.footer-text {
  font-size: 14px;
  font-style: italic;
}

.textRight {
  text-align: right;
}

.textLeft {
  text-align: left;
}

.gvidoImg {
  float: right;
  margin: 10px 0 10px 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  width: 200px;
  height: 266px;
  border-radius: 50%;
  border: 3px solid #333;
  padding: 10px
}

.hymnImg {
  margin: 10px 0 10px 20px;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  width: 500px;
  border: 3px solid #333;
  padding: 10px
}

.notesImg {
  margin: 10px 0 10px 20px;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  width: 500px;
  border: 3px solid rgb(51, 51, 51);
  padding: 10px;
}

.handImg {
  margin: 10px 0 10px 20px;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);


  border-radius: 50%;
  border: 3px solid rgb(51, 51, 51);
  padding: 10px;
  width: 200px;
  height: 300px;
}

.sectionContainer {
  display: flex;
  gap: 20px;
  padding: 10px 0px;
}

.listContainer {
  display: flex;
  padding: 10px 0;
  gap: 10px;
  justify-content: space-between;
  align-items: center
}

.source {
  text-align: left;
  font-size: 32px !important;
}

/* less than 1225 */
@media only screen and (max-width: 1225px) {
  .hymnImg, .notesImg {
    width: 330px;
  }
  ul {
    /*align-items: center;*/
  }

  li {
    /*text-align: center;*/
  }
}


/* less than 950 */
@media only screen and (max-width: 950px) {
  .elegant-text {
    text-align: center;
  }

  .description{
    font-size: 18px;
  }

  a > .description{
    align-items: initial!important;
    text-align: left!important;
  }

  .sectionContainer> span {
    text-align: center;
  }
  .justify{
    text-align: center;
  }

  .sectionContainer {
    flex-direction: column;
  }

  .show-desktop {
    display: none;
  }

  .show-mobile{
    display: flex;
  }

  .notes-page  {
    /*overflow-x: hidden;
    //overflow-y: auto;
    //width: 100vw;
    height: calc(100vh + 50px);
     no-repeat center center
    */
    background: url("../assets/roses-bg-mobile.jpg");
  }


  #sidemenu
  {
    display: flex!important;
  }
  .main-logo{
    width: 130px!important;

  }

  .hero-content{
    margin-top:130px;
  }

  .hero {
    margin: 30px 0;
  }

  .gvidoImg, .hymnImg , .notesImg ,   .handImg {
    margin:auto;
  }

}

/* less than 850 */
@media only screen and (max-width: 850px) {
  .listContainer {
    flex-direction: column;
    justify-content: flex-start;
  }
  ul{
    width: 100%;
  }
}

/* less than 600 */
@media only screen and (max-width: 600px) {
 .hymnImg, .notesImg{
   width: 100%;
 }
}


</style>
