<template>
  <section class="news-content">
    <div class="container">
      <b-row>
        <b-col md="12">
          <div id="slider">
            <no-ssr>
              <slick-slide ref="slick" :options="slickOptions" v-if="news.length > 0">
                <div class="slider-item" v-for="(item, index) in news" :key="index">
                  <div class="slider-item-image">
                    <!--<img :src="item.image" alt="News image">-->
                  </div>
                  <div class="slider-item-description">
                    <p>{{item.description}}</p>
                    <small>{{item.publishedAt}} - {{item.author}}</small>
                  </div>
                </div>
              </slick-slide>
            </no-ssr>
          </div>
        </b-col>
      </b-row>
      <div class="news-list">
        <h2>More News</h2>
        <b-row>
          <b-col md="4" v-for="(news, index) in newsList" :key="index">
            <div class="news-item">
              <nuxt-link active-class="active" :to="'/news/item?id=' + news.id">
                <div class="news-image">
                  <!--<img :src="news.image"/>-->
                </div>
              </nuxt-link>
              <div class="news-content">
                <div class="news-content-title">
                  <h5>{{news.title}}</h5>
                </div>
                <div class="news-content-description">
                  <p>{{news.description}}</p>
                  <small>{{news.publishedAt}} - {{news.author}}</small>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "app-page-news-item-content",
    data() {
      return {
        slickOptions: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<div class="slick-prev slick-arrow"></div>',
          nextArrow: '<div class="slick-next slick-arrow"></div>'
        },
        news: [
          {
            image: '',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
             velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
             culpa qui officia deserunt mollit anim id est laborum.`,
            publishedAt: 'Date and time',
            author: 'Written by'
          },
          {
            image: '',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
             velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
             culpa qui officia deserunt mollit anim id est laborum.`,
            publishedAt: 'Date and time',
            author: 'Written by'
          },
          {
            image: '',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
             velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
             culpa qui officia deserunt mollit anim id est laborum.`,
            publishedAt: 'Date and time',
            author: 'Written by'
          }
        ],
        newsList: [
          {
            id: '1',
            title: 'News item title1',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...`,
            image: '',
            publishedAt: 'Date and time',
            author: 'Written by'
          },
          {
            id: '2',
            title: 'News item title2',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...`,
            image: '',
            publishedAt: 'Date and time',
            author: 'Written by'
          },
          {
            id: '3',
            title: 'News item title3',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...`,
            image: '',
            publishedAt: 'Date and time',
            author: 'Written by'
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
