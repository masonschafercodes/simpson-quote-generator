var app = new Vue({
  el: "#app",
  data: {
    character: "",
    image_url: "",
    quote: "",
    response: null,
  },
  methods: {
        getNewQuote: async function() {
            const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
            this.response = await response.json();
            this.character = this.response[0].character;
            this.image_url = this.response[0].image;
            this.quote = this.response[0].quote;
        } 
  }
});
