  <template>
  <div>
    <TabbarChild>
      首页插槽
    </TabbarChild>
    <router-view class="home"></router-view>
  </div>
</template>

<script>
import TabbarChild from '../components/Tabbar-child'
export default {
  name: 'home',
  components: {
    TabbarChild
  }
}
</script>

<style scoped>
  .home{
    width:960px;
    margin:0 auto
  }
</style>