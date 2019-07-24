<template>
  <section class="contact-form">
    <div class="container">

      <div class="contact-form-title">
        <h1>Contact</h1>
      </div>

      <b-form id="contact">
        <b-row>
          <b-col sm="6">
            <b-form-group label="First Name" label-for="first_name">
              <b-form-input type="text"
                            id="first_name"
                            placeholder="Type Here"
                            v-model="form.firstName"
                            required/>
            </b-form-group>
          </b-col>
          <b-col sm="6">
            <b-form-group label="Last Name" label-for="last_name">
              <b-form-input type="text"
                            id="last_name"
                            placeholder="Type Here"
                            v-model="form.lastName"
                            required/>
            </b-form-group>
          </b-col>
        </b-row>

        <b-form-group label="Email" label-for="email">
          <b-form-input type="email"
                        id="email"
                        placeholder="Type Here"
                        v-model="form.email"
                        required/>
        </b-form-group>

        <b-form-group label="Phone" label-for="phone">
          <b-form-input type="text"
                        id="phone"
                        placeholder="Type Here"
                        v-model="form.phone"
                        required/>
        </b-form-group>

        <b-form-group label="Address" label-for="address">
          <b-form-input type="text"
                        id="address"
                        placeholder="Type Here"
                        v-model="form.address"
                        required/>
        </b-form-group>

        <label>Message</label>
        <b-form-textarea
          placeholder="Yes I agree on the term and service, read them here."
          rows="3"
          max-rows="6"
          v-model="form.message">
        </b-form-textarea>

        <b-form-checkbox
          id="accept"
          name="accept"
          value="accepted"
          unchecked-value="not_accepted"
          v-model="form.status">
          Yes I agree on the term and service, read them here.
        </b-form-checkbox>

        <div class="view-more">
          <a href="#" class="button-extend-normal-round">Send</a>
        </div>

      </b-form>
    </div>
  </section>
</template>

<script>
  export default {
    name: "app-page-contact-form",
    data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          email: '',
          address: '',
          phone: '',
          message: '',
          status: 'not_accepted'
        }
      }
    }
  }
</script>

<style scoped>

</style>
