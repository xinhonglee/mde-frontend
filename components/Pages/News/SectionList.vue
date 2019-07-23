<template>
  <section class="news-content">
    <div class="container">
      <div class="active-news">
        <b-row>
          <b-col md="8">
            <nuxt-link active-class="active" :to="'/news/item?id=' + activeNews.id">
              <div class="news-image">
                <!--<img :src="activeNews.image"/>-->
              </div>
            </nuxt-link>
          </b-col>
          <b-col md="4">
            <div class="news-content">
              <div class="news-content-title">
                <h2>{{activeNews.title}}</h2>
              </div>
              <div class="news-content-description">
                <p>{{activeNews.description}}</p>
                <small>{{activeNews.publishedAt}} - {{activeNews.author}}</small>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="news-list">
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
      <div class="view-more">
        <a href="#" class="button-extend-normal-round">View More</a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "app-page-news-list",
    data() {
      return {
        activeNews: {
          id: '1',
          title: 'News item title1',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...`,
          image: '',
          publishedAt: 'Date and time',
          author: 'Written by'
        },
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
          {
            id: '4',
            title: 'News item title4',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...`,
            image: '',
            publishedAt: 'Date and time',
            author: 'Written by'
          },
          {
            id: '5',
            title: 'News item title5',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...`,
            image: '',
            publishedAt: 'Date and time',
            author: 'Written by'
          },
          {
            id: '6',
            title: 'News item title6',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...`,
            image: '',
            publishedAt: 'Date and time',
            author: 'Written by'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
