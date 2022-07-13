<template>
  <div class="Date">
    <v-dialog
        @click:outside="clickOutsite"
        v-model="actionPickerDate"
        persistent
        max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
        >
          Pick a Date
        </v-btn>
      </template>
      <v-card>
        <v-date-picker
            v-model="date"
            color="green lighten-1"
        ></v-date-picker>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="green darken-1"
              text
              @click="clickOutsite"
          >
            Disagree
          </v-btn>
          <v-btn
              color="green darken-1"
              text
              @click="dateSummit"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "DatePicker",
  props: {
    actionPickerDate: Object

  },
  data(){
    return{
      date:''
    }

  },
  methods:{
    dateSummit(){
      // console.log(this.date);
      this.actionPickerDate = false;
    },
    clickOutsite(){
      this.actionPickerDate = false;
    }
  }
}
</script>

<style scoped>

</style>