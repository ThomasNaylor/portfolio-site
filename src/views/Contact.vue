<template>
  <div id="contact" class="app app__contact">
      <v-container fluid fill-height>
        <v-layout  align-center justify-center row wrap>

          <v-flex class="text__center" xs12 sm12 md6>
            <h1 class="section__heading">Contact Me.</h1>
          </v-flex>

          <v-flex  xs12 sm12 md6>
            <h1 class="content__heading">Need some awesomeness?</h1> <br>
            <v-form ref="form" v-model="valid">
              <v-text-field
                v-model="name"
                :rules="nameRules"
                :counter="15"
                label="Name"
                required
                outline
                dark
              ></v-text-field>
              <v-text-field
                v-model="number"
                :rules="numberRules"
                :counter="10"
                label="Number"
                required
                outline
                dark
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                outline
                dark
              ></v-text-field>
              <v-textarea
                v-model="textMessage"
                label="Message"
                :counter="200"
                :rules="textareaRules"
                outline
                dark
              ></v-textarea>
              <v-checkbox
                dark
                v-model="checkbox"
                :rules="checkboxRules"
                label="Do you agree?"
                required
              ></v-checkbox>
              <v-btn
                dark
                outline
                :disabled="!valid"
                @click="sendMail">
                Send
              </v-btn>
            </v-form>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<script>
export default {
  name: 'contact',
  data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 20 || 'Name must be less than 20 characters'
      ],
      number: '',
      numberRules: [
        v => !!v || 'Number is required',
        v => v.length <= 10 || 'Cannot be more than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      textMessage: '',
      textareaRules: [
        v => v.length <= 200 || 'cannot be more than 200 characters'
      ],
      checkbox: false,
      checkboxRules: [
        v => !!v || 'You must agree to continue!'
      ]
  }),
  methods: {
    sendMail () {
      if(this.$refs.form.validate()) {
        const msg = {
          from: this.email,
          text: 'Name: ' + this.name + '<br>' +
                'Number: ' + this.number + '<br>' +
                'Message: ' + this.textMessage
        }

        this.$store.dispatch('sendMail', msg);
        this.clear();
      }
    },

    clear () {
        this.$refs.form.reset()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.app__contact {
  background-color: #34495e;
}
</style>
