<script setup lang="ts">
import DrawerButton from "@/components/NavDrawers/DrawerButton/DrawerButton.vue";
</script>

<style scoped lang="scss">
.menu-text {
  position: relative;
  margin-left: auto;
}
.menu-icon {

}
.custom-upload-button {
  margin: 15% 10% 15% 10%;
  min-width: 80%;
  background-color: #3AA1D7; /* 自定义背景颜色 */
  color: white; /* 按钮文本颜色 */
  /* 其他样式设置 */
}
</style>

<template>
  <div>

    <v-btn class="custom-upload-button" :prepend-icon="'mdi-tray-arrow-up'">投稿</v-btn>

    <v-expansion-panels>

      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon icon="mdi-home-lightning-bolt-outline" class="menu-icon"></v-icon>
          <div class="menu-text">首页</div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <drawer-button :buttonText="'首页'"></drawer-button>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon icon="mdi-file-document-minus-outline" class="menu-icon"></v-icon>
          <div class="menu-text">内容管理</div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <drawer-button :buttonText="'稿件管理'"></drawer-button>
          <drawer-button :buttonText="'申诉管理'"></drawer-button>
          <drawer-button :buttonText="'字幕管理'"></drawer-button>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title >
          <v-icon icon="mdi-weather-cloudy-clock" class="menu-icon"></v-icon>
          <div class="menu-text">数据中心</div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <drawer-button :buttonText="'数据中心'"></drawer-button>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon icon="mdi-account-badge-outline" class="menu-icon"></v-icon>
          <div class="menu-text">粉丝中心</div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <drawer-button :buttonText="'粉丝中心'"></drawer-button>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon icon="mdi-chat-processing-outline" class="menu-icon"></v-icon>
          <div class="menu-text">互动管理</div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <drawer-button :buttonText="'评论管理'"></drawer-button>
          <drawer-button :buttonText="'弹幕管理'"></drawer-button>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon icon="mdi-currency-usd" class="menu-icon"></v-icon>
          <div class="menu-text">收益管理</div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <drawer-button :buttonText="'收益中心'"></drawer-button>
          <drawer-button :buttonText="'创作激励'"></drawer-button>
          <drawer-button :buttonText="'充电计划'"></drawer-button>
          <drawer-button :buttonText="'悬赏带货'"></drawer-button>
          <drawer-button :buttonText="'任务广场'"></drawer-button>
          <drawer-button :buttonText="'花火平台'"></drawer-button>
          <drawer-button :buttonText="'模板激励'"></drawer-button>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon icon="mdi-school-outline" class="menu-icon"></v-icon>
          <div class="menu-text">创作成长</div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <drawer-button :buttonText="'任务成就'"></drawer-button>
          <drawer-button :buttonText="'创作学院'"></drawer-button>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon icon="mdi-flag-outline" class="menu-icon"></v-icon>
          <div class="menu-text">创作权益</div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <drawer-button :buttonText="'版权保护'"></drawer-button>
          <drawer-button :buttonText="'bilibili认证'"></drawer-button>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon icon="mdi-account-group-outline" class="menu-icon"></v-icon>
          <div class="menu-text">必合协作</div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <drawer-button :buttonText="'必合协作'"></drawer-button>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon icon="mdi-flask-round-bottom" class="menu-icon"></v-icon>
          <div class="menu-text">创作实验室</div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <drawer-button :buttonText="'创作实验室'"></drawer-button>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon icon="mdi-script-text-outline" class="menu-icon"></v-icon>
          <div class="menu-text">社区公约</div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <drawer-button :buttonText="'社区公约'"></drawer-button>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-title>
          <v-icon icon="mdi-cog-outline" class="menu-icon"></v-icon>
          <div class="menu-text">创作设置</div>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <drawer-button :buttonText="'创作设置'"></drawer-button>
        </v-expansion-panel-text>
      </v-expansion-panel>

<!--      <v-divider style="margin-bottom: 15px"></v-divider>-->

    </v-expansion-panels>
  </div>
</template>

<script>

</script>

