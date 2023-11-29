<script setup lang="ts">
import { ref, defineProps } from 'vue';
import {useRouter} from "vue-router"; // 导入 Vue 3 的相关模块

const props = defineProps({
  // 在这里定义组件的props
  videoID: {
    type: String,
    default: 'xxxxx'
  },
  videoTitle: {
    type: String,
    default: 'default-title'
  },
  videoImage: {
    type: String,
    default: 'http://cdn.coleduck.cn/minibilibili/touming.png'
  },
  videoUrl: {
    type: String,
    default: ''
  },
  playNumber: {
    type: Number,
    default: 0, // 设置默认值为 0
  },
  commentNumber: {
    type: Number,
    default: 0, // 设置默认值为 0
  },
});

const playNumber = props.playNumber;
const commentNumber = props.commentNumber;

function formatNumber(num: number): string {
  if (num >= 10000) {
    return (num / 10000).toFixed(2) + "w";
  } else {
    return num.toString();
  }
}

const formattedPlayNumber = formatNumber(playNumber as number); // "1.2w"
const formattedCommentNumber = formatNumber(commentNumber as number); // "2.5w"

const router = useRouter();
const openVideo = (video_id: string) => {
  router.push({ name: 'AnimeDetail', query: { video_id } });
  // window.open(url, '_blank'); // 打开新网页
}

const showButton = ref(false);
const snackbar = ref(false);
const timeout = ref(1500);
const buttonClickHandler = () => {
  snackbar.value = true;
}
</script>

<template>
  <v-lazy
    :options="{'threshold':0.5}"
    transition="fade-transition"
  >
    <v-card
      class="videoBox ma-2"
      @click="openVideo(videoID)"
      @mouseenter="showButton = true"
      @mouseleave="showButton = false"
    >
<!--      <video-player-->
<!--        src="http://api.coleduck.cn/videos/Miku-4k60fps.mp4"-->
<!--        :poster="videoImage!"-->
<!--        controls-->
<!--        :loop="true"-->
<!--        :volume="0.6" >-->
      <v-img
        :src="videoImage!"
        class="align-end"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="160px"
        cover
      >
        <v-btn
          v-show="showButton"
          icon
          class="btn-top-right"
          :class="{ 'show': showButton }"
          color="surface-variant"
          @click.stop="buttonClickHandler"
        >
          <v-icon>mdi-motion-play-outline</v-icon>
        </v-btn>
        <v-snackbar
          v-model="snackbar"
          :timeout="timeout"
        >
          已添加至稍后观看~
          <template v-slot:actions>
            <v-btn
              color="pink"
              variant="text"
              @click="snackbar = false"
            >
              关闭
            </v-btn>
          </template>
        </v-snackbar>
        <v-row
          v-show="!showButton"
          class="info-bottom"
        >
          <v-icon class="text-white">mdi-play-box-outline</v-icon>
          <span class="text-white">{{formattedPlayNumber}}</span>

          <v-icon class="text-white ml-2">mdi-comment-text-outline</v-icon>
          <span class="text-white">{{formattedCommentNumber}}</span>
        </v-row>
      </v-img>
<!--        </video-player>-->
      <v-card-actions>
        <span class="text-black"> {{videoTitle}} </span>
      </v-card-actions>
    </v-card>
  </v-lazy>
</template>

<style scoped lang="scss">
.videoBox {
  border-radius: 15px;
  height: 210px;
}

.btn-top-right {
  position: absolute;
  top: 10px; /* 调整按钮距离顶部的距离 */
  right: 10px; /* 调整按钮距离右侧的距离 */
  border-radius: 10px;
  height: 35px;
  width: 35px;
}

.info-bottom {
  position: absolute;
  bottom: 10px; /* 调整按钮距离顶部的距离 */
  left: 10px; /* 调整按钮距离右侧的距离 */
  width: 100%;
  padding: 10px;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 1));
}

</style>
