<template>
  <div  data-cursor-hover class="container header-container"
  style=" display: flex;  justify-content: flex-end;">
    <div class="header">
      <Transition name="scale-lang">
        <div class="flags-container" :class="{scaleAnimation: isDropped}" @click="isDropped = !isDropped" >
          <ul class="list">
            <li class="flag">
              <img class="flag.slug" :src="require('@/assets/lang-flags/'+language[selected].icon)" alt=""/>
            </li>
          </ul>

          <Transition name="slide-fade">
            <ul class="list all" v-if="isDropped">
              <li
                  class="flag"
                  v-for="(flag) in filteredLanguages"
                  :key="flag.slug"
                  @click="selectLang(flag.index)"
              >
                <img
                    class="flag.slug slug"
                    :src="require('@/assets/lang-flags/' + flag.icon)"
                    alt=""
                />
              </li>
            </ul>
          </Transition>

<!--          <Transition name="slide-fade">-->
<!--            <ul class="list all" v-if="isDropped">-->
<!--              <li class="flag  " v-for="(flag, index) in language" :key="index" v-if="index !== selected" @click="selectLang(index)">-->
<!--                <img class="flag.slug slug " :src="require('@/assets/'+flag.icon)" alt=""/>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </Transition>-->


        </div>
      </Transition>

    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
// import apiService from "@/APIServices/APIService";

export default {
  name: 'LangContainer',
  data() {
    return {
      isDropped: false,
      selected: 0,
      lang: null,
      language: [

        {
          slug: 'en',
          name: "EN",
          icon: "GB.svg"
        },   {
          slug: 'az',
          name: "AZ",
          icon: "AZ.svg"
        },
        {
          slug: 'ru',
          name: "RU",
          icon: "RU.svg"
        }
      ],
    }
  },
  computed: {
    ...mapState(['loca']),


    filteredLanguages() {
      return this.language
          .map((flag, index) => ({ ...flag, index }))
          .filter((flag) => flag.index !== this.selected);
    },
  },
  created() {
    this.setLanguage();
  },
  mounted() {
    console.log(this.language, this.loca )
  },
  methods: {
    ...mapActions(['updateAuthed', 'updateLoca', 'updatePage', 'updateCurrentLang']),


    setLanguage() {
      let language = localStorage.getItem("language");
      if (language != "en" && language != "az" && language != "ru") {
        language = null;
      }

      language = language ? language : "en";
      const index = this.language.findIndex((item) => item.slug === language);
      this.selected = index;
      this.updateLoca(language);

    },

    selectLang(index) {
      this.selected = index;
      localStorage.setItem('language', this.language[index].slug);
      this.updateCurrentLang(this.language[index].slug);
      this.updateLoca(this.language[index].slug);
    },
  }
}
</script>

<style scoped >

.header {
  box-sizing: border-box;
  height: 42px;
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}


.flex {
  width: 50%;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  column-gap: 10px;
}

.request-txt {
  width: 100%;
  font-weight: 600;
  font-size: 14px;
  line-height: 130%;
  color: #6F0BBB;
}


.flags-container {
 background:  #f8dcbf6e;
  cursor: pointer;
  width: 50px;
  height: 36px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  position: relative;
  z-index: 999;
  transition: all 0.7s ease;
}

.flag {

  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

}
li> img{  border-radius: 5px;
  border: 1px solid #C1C1C1;
}
.scaleAnimation {
  height: 110px;
  /*margin-top:73px;*/
  transition: all 0.3s ease;
}

.AZ {
  margin: 0 auto;
  display: block
}

.GB, .RU {
  margin: 0 auto;
  display: block
}

.list {
  margin: 0 0 0 0;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in-out;
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

@media (min-width: 900px) {
  .header {
    /*margin-top: 30px;*/
  }
  .request-txt {
    width: 100% !important;
    justify-items: center;

    text-align: left;
  }
}

</style>
