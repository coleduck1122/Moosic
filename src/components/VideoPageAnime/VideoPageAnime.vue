<script setup lang="ts">
import {ref, onMounted, computed} from 'vue';
import {de} from "vuetify/locale";

interface DetailType {
  // 根据你的 Detail 组件的数据结构定义相应的属性
  video_id: {
    type: string,
    default: ''
  },
  video_title: {
    type: string,
    default: ''
  },
  video_type: {
    type: string,
    default: ''
  },
  image_url: {
    type: string,
    default: ''
  },
  video_url: {
    type: string,
    default: ''
  },
  video_playNumber: {
    type: number,
    default: 0
  },
  video_commentNumber: {
    type: number,
    default: 0
  },
}

const data_loaded = ref(false);

// 使用 ref 来创建响应式变量来存储从后端API获取的数据
const details = ref<DetailType[]>([]);
const currentIndex = ref(1);

async function fetchData() {
  data_loaded.value = true;
  try {
    const response = await fetch('http://api.coleduck.cn/bangumi/'); // 替换成实际的API地址
    const jsonString = await response.json();
    details.value = jsonString.videos;

    console.log(details.value);
  } catch (error) {
    console.error('Failed to fetch data:', error);
  } finally {
    data_loaded.value = false; // 无论成功还是失败，都设置 loading 为 false
  }
}

const changeAnime = (index : number) => {
  currentIndex.value = index;
}

const loading = ref(false);
const onClick = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false
  }, 2000);
};

// 创建一个 ref 用于存储 video_id 参数
const videoID = ref<string | null>(null);

onMounted(() => {
  fetchData();
});

</script>


<!--@mounted="..."-->
<!--@ready="..."-->
<!--@play="..."-->
<!--@pause="..."-->
<!--@ended="..."-->
<!--@seeking="..."-->

<template>
  <v-container class=" pa-0">

    <v-row no-gutters style="margin-top: 30px;">
      <v-col cols="8">
        <v-col>
          <v-row class="text-black text-h5 mb-1">
            <span class="ml-2"> {{details[currentIndex]?.video_title}} </span>
          </v-row>
          <v-row class="text-grey mb-1">
            <v-icon class="ml-2" icon="mdi-play-outline"></v-icon>
            <span class="ml-1">{{details[currentIndex]?.video_playNumber}}</span>
            <v-icon class="ml-2" icon="mdi-comment-text-outline"></v-icon>
            <span class="ml-1">{{details[currentIndex]?.video_commentNumber}}</span>
            <span class="ml-3">2023-08-31 11:24:56</span>
            <v-icon class="ml-2" icon="mdi-alert-box-outline"></v-icon>
            <span class="ml-1">未经作者授权，禁止转载</span>
          </v-row>
        </v-col>
        <!--        src="http://cdn.coleduck.cn/minibilibili/videos/home/2023-06-24%2019-05-40.mp4"-->
        <div class="card-container">
          <video-player
            ref="videoPlayer"
            :src="details[currentIndex]?.video_url"
            controls
            :loop="true"
            :volume="0.6"
            class="video-container"
          >
            <template v-slot="{ state }">
              <div class="custom-player-controls">
                <v-icon
                  v-if="!state.playing"
                  icon="mdi-play-box"
                  class="pause-button"
                ></v-icon>
                <!-- more custom controls elements ... -->
              </div>
            </template>
          </video-player>
        </div>

        <div class="custom-controls-container">
          <v-row class="align-center justify-center pa-4">
            <span class="text-grey">1 人正在看， 已装填 0 条弹幕</span>
            <!--            <v-icon icon="mdi-comment-plus-outline"></v-icon>-->
            <!--            <v-icon icon="mdi-comment-plus-outline"></v-icon>-->
            <v-text-field
              :loading="loading"
              density="compact"
              variant="solo"
              label="发个友善的弹幕见证下"
              single-line
              hide-details
              class="ml-4"
            >
              <template v-slot:prepend-inner>
                <v-icon icon="mdi-square-edit-outline"></v-icon>
              </template>
              <template v-slot:append-inner>
                <span class="append-inner-btn">弹幕礼仪 ></span>
              </template>
              <template v-slot:append>
                <v-btn class="danmu-btn text-white" @click="onClick">发送</v-btn>
              </template>
            </v-text-field>
          </v-row>
        </div>
      </v-col>

      <v-col cols="4" class="pl-5">
        <v-card style="background-color: #F1F2F3; height: 84px"></v-card>
        <v-card class="menuList" style="flex-grow: 1;">
          <v-row no-gutters class="pt-5 align-center justify-center ">
            <v-btn
              v-for="(item, index) in details.length"
              :key="index"
              class="menuListBtn"
              :class="{ active: index === currentIndex }"
              @click="changeAnime(index)"
            >
              {{item}}
            </v-btn>
          </v-row>

        </v-card>
        <v-card class="menuList" style="flex-grow: 1;"></v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.append-inner-btn {
  width: 80px;
  color: gray;
}
.append-inner-btn:hover {
  color: #3AA1D7;
}

.danmu-btn {
  background-color: #00aeec;
}

.custom-controls-container {
  position: relative;
  bottom: 0; /* 底部对齐，可以根据需要调整 */
  width: 100%; /* 与父容器宽度相同 */
  background-color: rgba(255, 255, 255, 1); /* 背景色，可根据需求修改 */
  //display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  box-sizing: border-box;
  border: 1px solid #777; /* 2px 的实线边框，颜色为 #333 */
}

.pause-button {
  font-size: 100px;
  position: absolute;
  right: 7%;
  bottom: 10%;
}

.menuList {
  background-color: #f1f2f3;
  height: 50%;
  border-radius: 10px;
  margin-top: 30px;
}
.menuListBtn {
  margin: auto;
  color: #0d47a1;
}
.active {
  background-color: #39c5bb; /* 设置选中按钮的背景颜色 */
  color: white; /* 设置选中按钮的文字颜色 */
}

.custom-player-controls-btn {
  background-color: #3AA1D7;

}
.custom-player-controls {
  //background-color: #3AA1D7;
  display: flex;
  justify-content: center;
  align-items: center;
}


.video-container {
  //display: flex;
  //position: relative;
  width: 800px;
  height: 450px;
  align-items: center;
  justify-content: center;
}

.card-container {
  //width: 800px;  /* 设置卡片的宽度 */
  //height: 450px; /* 设置卡片的高度 */
  //padding-top: 56.25%; /* 设置占位符的高度，以实现 16:9 比例 (9 / 16 * 100%) */
  overflow: hidden; /* 隐藏视频溢出部分 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-container video {
  max-width: 100%; /* 限制视频的最大宽度为卡片宽度 */
  max-height: 100%; /* 限制视频的最大高度为卡片高度 */
  width: auto; /* 自动调整宽度，保持纵横比 */
  height: auto; /* 自动调整高度，保持纵横比 */
}

//.card-container {
//  width: 100%;  /* 设置卡片的宽度 */
//  padding-top: 56.25%; /* 设置占位符的高度，以实现 16:9 比例 (9 / 16 * 100%) */
//  position: relative; /* 确保占位符相对于容器定位 */
//  overflow: hidden; /* 隐藏视频溢出部分 */
//  display: flex;
//  align-items: center;
//  justify-content: center;
//}
//
//.card-container-video {
//  width: 100%; /* 填充整个宽度 */
//  height: 0; /* 设置高度为0，以保持比例 */
//  position: absolute; /* 相对于占位符定位 */
//  top: 0;
//  left: 0;
//}
</style>
