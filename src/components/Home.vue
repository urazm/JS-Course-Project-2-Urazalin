<template>
  <div v-if="!loading">
    <v-container>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="(product, i) in promoProducts"
              :key="i"
              :src="product.imageSrc"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-layout row>
        <v-flex
          xs12
          sm6
          md4
          v-for="(product, i) in products"
          :key="i"
        >
        <router-link
          :area-label="product.title"
          :to="'/product/' + product.id"
        >
        <v-img
            class="white--text align-end"
            height="330px"
            :src="product.imageSrc"
          >
          </v-img>
        </router-link>
          <v-card
            max-width="380"
          >
      <v-card-text class="text--primary">
        <div>
          <h3 class="card_heading heading">{{ product.title }}</h3>
          <div class="card_describe">
            <p class="subheading">{{ product.description.substring(0,60) }}...</p>
            <p class="subheading card_price"><span class="title">Price: </span>${{ product.price }}</p>
          </div>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="white"
          rounded
          :to="'/product/' + product.id"
        >
          Description
        </v-btn>
        <app-buy-dialog
          :product="product"
        >
        </app-buy-dialog>
      </v-card-actions>
    </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <div v-else class="text-center">
    <v-container>
      <v-layout row>
        <v-flex xs12 class="align-center pt-5">
          <v-progress-circular
            :size="300"
            :width="4"
            color="green"
            indeterminate
          ></v-progress-circular>

        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    promoProducts () {
      return this.$store.getters.promoProducts
    },
    products () {
      return this.$store.getters.products
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style scoped>
  .card_heading {
    font-weight: bold;
    word-wrap: break-word;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .card_describe {
    margin-top: auto;
    padding-left: 1rem;
  }
  .card_price {
    color: red;
    font-size: 18px;
  }

</style>
