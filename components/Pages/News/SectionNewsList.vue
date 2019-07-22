<template>
  <section class="news-content">
    <div class="container">
      <div class="active-news">
        <b-row>
          <b-col md="8">
            <div class="news-image">
              <!--<img :src="activeNews.image"/>-->
            </div>
          </b-col>
          <b-col md="4">
            <div class="news-content">
              <div class="news-content-title">
                <h2>{{activeNews.title}}</h2>
              </div>
              <div class="news-content-description">
                <p>{{activeNews.description}}</p>
                <small>Date and time - Written by</small>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
      <div class="news-list">
        <b-row>
          <b-col md="4" v-for="(news, index) in newsList" :key="index">
            <div class="news-item">
              <div class="news-image">
                <!--<img :src="news.image"/>-->
              </div>
              <div class="news-content">
                <div class="news-content-title">
                  <h5>{{news.title}}</h5>
                </div>
                <div class="news-content-description">
                  <p>{{news.description}}</p>
                  <small>Date and time - Written by</small>
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
          title: 'News item title1',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...`,
          image: ''
        },
        newsList: [
          {
            title: 'News item title1',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...`,
            image: ''
          },
          {
            title: 'News item title2',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...`,
            image: ''
          },
          {
            title: 'News item title3',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...`,
            image: ''
          },
          {
            title: 'News item title4',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...`,
            image: ''
          },
          {
            title: 'News item title5',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...`,
            image: ''
          },
          {
            title: 'News item title6',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...`,
            image: ''
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
