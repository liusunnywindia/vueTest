<template>
    <div>
      <v-cart></v-cart>
    </div>
</template>
<script type="es6">
  import  cart from '@/components/cart'
    export default {
        data() {
            return {}
        },
      components:{
        'v-cart':cart
      }
    }
</script>
