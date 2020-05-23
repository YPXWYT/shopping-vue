<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
    import {mapActions} from 'vuex'
    import FooterGuide from './components/FooterGuide/FooterGuide'
    import {reqFoodCategorys} from './api'

    export default {
        async mounted(){
            // this.$store.dispatch('getAddress')
            this.getAddress()
            this.getUserInfo()//自动登陆
          // const result = await reqFoodCategorys();
          // console.log(result)
        },
        methods: {
            ...mapActions(['getAddress', 'getUserInfo'])
        },
        components: {
            FooterGuide
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
