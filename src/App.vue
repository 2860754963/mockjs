<template>
  <div class="">
    <button @click="getuserinfo">用户信息</button>
    <button @click="getuserinfolist">用户信息列表</button>
  </div>
</template>

<script>
/*
 * @Author: Mazw
 * @Date: 2023-07-23 11:31:12
 * @Last Modified by: Mazw
 * @Describe: demo
 */
import { getuserinfo, getuserinfolist as aaaa } from '@/api/mzw.js';
export default {
  name: '',
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    async getuserinfo() {
      let userinfo = await getuserinfo();
      console.log(userinfo, 'userinfouserinfouserinfo');
    },
    async getuserinfolist() {
      let getuserinfolist = await aaaa();
      console.log(getuserinfolist, 'getuserinfolistgetuserinfolist');
    },
  },
  created() {},
  mounted() {},
};
</script>

<style scoped></style>
