const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function() {
          that.counter = 0;
          alert('Counter reseted, max value excedeed');
        }, 2000)
      }
    }
  //   name(value) {
  //     if (value) {
  //       this.fullName = `${value} Escobar`;
  //     } else {
  //       this.fullName = "";
  //     }
  //   },
  },
  computed: {
    fullName() {
      return this.name && this.lastName 
        ? `${this.name} ${this.lastName}` 
        : "";
    },
  },
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
