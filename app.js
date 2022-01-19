const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullName: "",
    };
  },
  watch: {
    name(value) {
      if (value) {
        this.fullName = `${value} Escobar`;
      } else {
        this.fullName = "";
      }
    },
  },
  // computed: {
  //   fullName() {
  //     return this.name ? `${this.name} Escobar` : "";
  //   },
  // },
  methods: {
    outputFullName() {
      return this.name ? `${this.name} Escobar` : "";
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
