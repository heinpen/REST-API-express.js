import Vue from "https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.esm.browser.js";

new Vue({
  el: "#app",
  data() {
    return {
      form: {
        name: "",
        value: "",
      },
    };
  },
  methods: {
    createContact() {
      const { ...contact } = this.form;
      console.log(contact);
    },
  },
});
