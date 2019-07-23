<template>
    <section class="treatments-content">
        <div class="container">
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
                          <nuxt-link active-class="active" :to="'/treatments/treat?id=' + treatment.id" class="button-extend-normal-round">Read More</nuxt-link>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </div>
    </section>
</template>

<script>
  export default {
    name: "app-page-treatments-dental-content",
    data() {
      return {
        treatments: [
          {
            id: '1',
            title: 'Prevention',
            subTitle: 'General',
            description: `In our clinic we offer two kind of treatments. Read more about all our treatments below.`,
          },
          {
            id: '2',
            title: 'Restorative',
            subTitle: 'General',
            description: `In our clinic we offer two kind of treatments. Read more about all our treatments below.`,
          },
          {
            id: '3',
            title: 'Rehabilitation',
            subTitle: 'General',
            description: `In our clinic we offer two kind of treatments. Read more about all our treatments below.`,
          },
          {
            id: '4',
            title: 'Implants',
            subTitle: 'General',
            description: `In our clinic we offer two kind of treatments. Read more about all our treatments below.`,
          },
          {
            id: '5',
            title: 'Cosmetic Dentistry',
            subTitle: 'General',
            description: `In our clinic we offer two kind of treatments. Read more about all our treatments below.`,
          },
          {
            id: '6',
            title: 'Periodontics',
            subTitle: 'Speciality',
            description: `In our clinic we offer two kind of treatments. Read more about all our treatments below.`,
          },
          {
            id: '7',
            title: 'Endodontics',
            subTitle: 'Speciality',
            description: `In our clinic we offer two kind of treatments. Read more about all our treatments below.`,
          },
          {
            id: '8',
            title: 'Oral Surgery',
            subTitle: 'Speciality',
            description: `In our clinic we offer two kind of treatments. Read more about all our treatments below.`,
          },
          {
            id: '9',
            title: 'Orthodontics',
            subTitle: 'Speciality',
            description: `In our clinic we offer two kind of treatments. Read more about all our treatments below.`,
          },
        ]
      }
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>
