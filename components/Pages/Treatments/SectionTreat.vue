<template>
  <section class="treatments-content">
    <div class="container">
      <b-row>
        <b-col md="12">
          <div id="slider">
            <no-ssr>
              <slick-slide ref="slick" :options="slickOptions" v-if="treatment.length > 0">
                <div class="slider-item" v-for="(item, index) in treatment" :key="index">
                  <div class="slider-item-image">
                    <img src="~/assets/images/treatments/dental-tooth.png" alt="treatment image">
                  </div>
                  <div class="slider-item-description">
                    <p>{{item.description}}</p>
                  </div>
                  <div class="slider-item-specs" v-if="item.specs.length > 0" >
                    <div class="slider-item-specs-item"  v-for="(spec, i) in item.specs" :key="i">
                      <div class="slider-item-specs-item-title">
                        <h6>{{spec.title}}</h6>
                      </div>
                      <div class="slider-item-specs-item-description">
                        <p>{{spec.description}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </slick-slide>
            </no-ssr>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="12">
          <h3>Other Treatments in category</h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="3" md="6" v-for="(treatment, index) in treatments" :key="index">
          <div class="treatments-content-item">
            <div class="item-image">
              <img src="~/assets/images/treatments/dental-tooth.png"/>
            </div>
            <div class="item-description">
              <h5>{{treatment.title}}</h5>
              <h6>{{treatment.subTitle}}</h6>
              <p>{{treatment.description}}</p>
            </div>
            <div class="item-button">
              <a href="#" class="button-extend-normal-round" @click="loadTreatment(treatment.id)">Read More</a>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>

  export default {
    name: "app-page-treatments-treat-content",
    data() {
      return {
        slickOptions: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<div class="slick-prev slick-arrow"></div>',
          nextArrow: '<div class="slick-next slick-arrow"></div>'
        },
        treatments: [
          {
            id: '1',
            title: 'Prevention',
            subTitle: 'General',
            description: `In our clinic we offer two kind of treatments. Read more about all our treatments below.`
          },
          {
            id: '2',
            title: 'Prevention',
            subTitle: 'General',
            description: `In our clinic we offer two kind of treatments. Read more about all our treatments below.`
          },
          {
            id: '3',
            title: 'Prevention',
            subTitle: 'General',
            description: `In our clinic we offer two kind of treatments. Read more about all our treatments below.`
          },
          {
            id: '4',
            title: 'Prevention',
            subTitle: 'General',
            description: `In our clinic we offer two kind of treatments. Read more about all our treatments below.`
          }
        ],
        treatment: [
          {
            description: `Lorem ipsum dolor sit amet, consectetur adipm.Lorem ipsum ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      Lorem ipsum dolor sit amet, consectetur adipm.Lorem ipsum ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
            specs: [
              {
                title: 'Specs 1',
                description: 'In our clinic we offer two kind of treatments. Read more about all our treatments below.'
              },
              {
                title: 'Specs 2',
                description: 'In our clinic we offer two kind of treatments. Read more about all our treatments below.'
              },
              {
                title: 'Specs 3',
                description: 'In our clinic we offer two kind of treatments. Read more about all our treatments below.'
              }
            ]
          },
          {
            description: `Lorem ipsum dolor sit amet, consectetur adipm.Lorem ipsum ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      Lorem ipsum dolor sit amet, consectetur adipm.Lorem ipsum ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
            specs: [
              {
                title: 'Specs 1',
                description: 'In our clinic we offer two kind of treatments. Read more about all our treatments below.'
              },
              {
                title: 'Specs 2',
                description: 'In our clinic we offer two kind of treatments. Read more about all our treatments below.'
              },
              {
                title: 'Specs 3',
                description: 'In our clinic we offer two kind of treatments. Read more about all our treatments below.'
              }
            ]
          },
          {
            description: `Lorem ipsum dolor sit amet, consectetur adipm.Lorem ipsum ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      Lorem ipsum dolor sit amet, consectetur adipm.Lorem ipsum ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
            specs: [
              {
                title: 'Specs 1',
                description: 'In our clinic we offer two kind of treatments. Read more about all our treatments below.'
              },
              {
                title: 'Specs 2',
                description: 'In our clinic we offer two kind of treatments. Read more about all our treatments below.'
              },
              {
                title: 'Specs 3',
                description: 'In our clinic we offer two kind of treatments. Read more about all our treatments below.'
              }
            ]
          }
        ]
      };
    },
    mounted() {
      if (!_.isNil(this.$route.query.id)) {
        this.loadTreatment(this.$route.query.id);
      }
    },
    methods: {
      loadTreatment(id) {
        if (event) {
          event.preventDefault();
        }
        console.log(`load treatment data ${id}`);
      }
    }
  }
</script>

<style scoped>

</style>
