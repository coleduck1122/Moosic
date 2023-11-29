<script setup lang="ts">
import NavButton2 from "@/components/FirstScreen/NavBar/NavButton2/NavButton2.vue";
import Menubtn from "@/components/FirstScreen/NavBar/MenuBtn/Menubtn.vue";
</script>

<template>
  <v-row no-gutters class="navBar">
    <v-responsive width="10%" class="navBlock">
      <v-row>
        <v-btn icon="mdi-heart" style="margin-left: 15px">动态</v-btn>
        <v-btn icon="mdi-heart" style="margin-left: 10px">热门</v-btn>
      </v-row>
    </v-responsive>

    <v-responsive width="90%" class="navBlock">
      <v-row>
        <menubtn
          buttonText="番剧"
          class="ml-5"
          :menu-item-first="['连载动画', '完结动画', '资讯', '官方延伸']"
          :menu-item-second="['新番时间表', '番剧索引']"
        />

        <menubtn
          buttonText="国创"
          :menu-item-first="['国产动画', '国产原创相关', '布袋戏', '动态漫·广播剧']"
          :menu-item-second="['资讯', '新番时间表', '国产动画索引']"
        />

        <menubtn
          buttonText="综艺"
        />

        <menubtn
          buttonText="动画"
          :menu-item-first="['MAD·AMV', 'MMD·3D', '短片·手书', '配音']"
          :menu-item-second="['手办·模玩', '特摄', '动漫杂谈', '综合']"
        />

        <menubtn
          buttonText="鬼畜"
          :menu-item-first="['鬼畜调教', '音MAD', '人力VOCALOID', '鬼畜剧场']"
          :menu-item-second="['教程演示']"
        />

        <menubtn
          buttonText="舞蹈"
          :menu-item-first="['宅舞', '街舞', '明星舞蹈', '国风舞蹈']"
          :menu-item-second="['手势·网红舞', '舞蹈综合', '舞蹈教程']"
        />

        <menubtn
          buttonText="娱乐"
          :menu-item-first="['综艺', '娱乐杂谈', '粉丝创作', '明星综合']"
          :menu-item-second="[]"
        />

        <menubtn
          buttonText="科技"
          :menu-item-first="['数码', '软件应用', '计算机技术', '科工机械']"
          :menu-item-second="['极客DIY']"
        />

        <menubtn
          buttonText="美食"
          :menu-item-first="['美食制作', '美食侦探', '美食测评', '田园美食']"
          :menu-item-second="['美食记录']"
        />

        <v-divider vertical thickness="2px" class="ml-2 mr-2"></v-divider>
        <nav-button2 :buttonText="'专栏'" :icon="'mdi-text-box'"></nav-button2>
        <nav-button2 :buttonText="'活动'" :icon="'mdi-flag'"></nav-button2>
      </v-row>
      <v-row>
        <menubtn
          buttonText="电影"
          class="ml-5"
        />

        <menubtn
          buttonText="电视剧"
        />

        <menubtn
          buttonText="纪录片"
        />

        <menubtn
          buttonText="游戏"
          :menu-item-first="['单机游戏', '电子竞技', '手机游戏', '网络游戏']"
          :menu-item-second="['桌游棋牌', 'GMV', '音游', 'Mugen']"
          :menu-item-third="['游戏赛事']"
        />

        <menubtn
          buttonText="音乐"
          :menu-item-first="['原创音乐', '翻唱', '演奏', 'VOCALOID·UTAU']"
          :menu-item-second="['音乐现场', 'MV', '乐评盘点', '音乐教学']"
          :menu-item-third="['音乐综合', '说唱']"
        />

        <menubtn
          buttonText="影视"
          :menu-item-first="['影视杂谈', '影视剪辑', '小剧场', '短片']"
          :menu-item-second="['预告·资讯']"
        />

        <menubtn
          buttonText="知识"
          :menu-item-first="['科学科普', '社科·法律·心理', '人文历史', '财经商业']"
          :menu-item-second="['校园学习', '职业职场', '设计·创意', '野生技能协会']"
        />

        <menubtn
          buttonText="知识"
          :menu-item-first="['热点', '环球', '社会', '综合']"
          :menu-item-second="[]"
        />

        <menubtn
          buttonText="更多"
          :menu-item-first="['生活', '汽车', '时尚', '运动']"
          :menu-item-second="['动物圈', 'VLOG', '搞笑', '单机游戏']"
          :menu-item-third="['虚拟UP主', '公益', '公开课']"
        />

        <v-divider vertical thickness="2px" class="ml-2 mr-2"></v-divider>
        <nav-button2 :buttonText="'直播'" :icon="'mdi-video-minus'"></nav-button2>
        <nav-button2 :buttonText="'课堂'" :icon="'mdi-emoticon-happy'"></nav-button2>
      </v-row>
    </v-responsive>
  </v-row>

</template>

<style scoped lang="scss">
.navBar {
  height: 100px;
}
.navBlock {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
</style>
