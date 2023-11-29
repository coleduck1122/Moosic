<script setup lang="ts">

import {useRouter} from "vue-router";

const imgSrc: { bigImage: string; smallImage: string; title: string; desc: string}[] = [
  {
    bigImage: "http://cdn.coleduck.cn/minibilibili/Anime/windows/big-1.jpg",
    smallImage: "http://cdn.coleduck.cn/minibilibili/Anime/windows/small-1.jpg",
    title: "咒术回战 第二季",
    desc: "第7话 前夜祭",
  },
  {
    bigImage: "http://cdn.coleduck.cn/minibilibili/Anime/windows/big-2.jpg",
    smallImage: "http://cdn.coleduck.cn/minibilibili/Anime/windows/small-2.jpg",
    title: "假面骑士 极狐",
    desc: "第38话 倾慕F：九尾白狐！",
  },
  {
    bigImage: "http://cdn.coleduck.cn/minibilibili/Anime/windows/big-3.jpg",
    smallImage: "http://cdn.coleduck.cn/minibilibili/Anime/windows/small-3.jpg",
    title: "主宰七魔剑",
    desc: "第14话 魅魔的末裔",
  },
  {
    bigImage: "http://cdn.coleduck.cn/minibilibili/Anime/windows/big-4.jpg",
    smallImage: "http://cdn.coleduck.cn/minibilibili/Anime/windows/small-4.jpg",
    title: "砂糖苹果童话故事",
    desc: "第13话 湖水与绿色的工坊",
  },
  {
    bigImage: "http://cdn.coleduck.cn/minibilibili/Anime/windows/big-5.jpg",
    smallImage: "http://cdn.coleduck.cn/minibilibili/Anime/windows/small-5.jpg",
    title: "狩龙人拉格纳",
    desc: "第2话 故事的开始",
  },
  {
    bigImage: "http://cdn.coleduck.cn/minibilibili/Anime/windows/big-6.jpg",
    smallImage: "http://cdn.coleduck.cn/minibilibili/Anime/windows/small-6.jpg",
    title: "动画版 莱莎的炼金工房",
    desc: "第9话 最后的课题",
  },
]

const innerContent: { bigTitle: string; cardStyle: { backgroundColor: string; background: string; backgroundImage: string }; firstLine: Array<string>; secondLine: Array<string>}[] = [
  {
    bigTitle: '番剧索引 >',
    cardStyle: {
      backgroundColor: 'linear-gradient(83.84deg, rgba(255, 139, 244, 0.12) 0%, rgba(255, 139, 244, 0.07) 100%)',
      background: 'right center / contain no-repeat',
      // background: 'linear-gradient(83.84deg, rgba(255, 139, 244, 0.12) 0%, rgba(255, 139, 244, 0.07) 100%) right center / contain no-repeat'
      backgroundImage: 'url(http://cdn.coleduck.cn/minibilibili/Anime/windows/bg-1.png)'
    },
    firstLine: ['追番人数', '最高评分', ''],
    secondLine: ['更新时间', '播放数量', ''],
  },
  {
    bigTitle: '类型风格 >',
    cardStyle: {
      backgroundColor: 'linear-gradient(83.84deg, rgba(108, 226, 169, 0.12) 0%, rgba(108, 226, 169, 0.07) 100%)',
      background: 'right center / contain no-repeat',
      // background: 'linear-gradient(83.84deg, rgba(108, 226, 169, 0.12) 0%, rgba(108, 226, 169, 0.07) 100%) right center / contain no-repeat',
      backgroundImage: 'url(http://cdn.coleduck.cn/minibilibili/Anime/windows/bg-2.png)'
    },
    firstLine: ['原创', '小说改', '特摄', ''],
    secondLine: ['漫画改', '游戏改', '布袋戏', ''],
  },
  {
    bigTitle: '首播时间 >',
    cardStyle: {
      backgroundColor: 'linear-gradient(83.84deg, rgba(114, 184, 255, 0.12) 0%, rgba(108, 226, 169, 0.07) 100%)',
      background: 'right center / contain no-repeat',
      // background: 'linear-gradient(83.84deg, rgba(114, 184, 255, 0.12) 0%, rgba(108, 226, 169, 0.07) 100%) right center / contain no-repeat',
      backgroundImage: 'url(http://cdn.coleduck.cn/minibilibili/Anime/windows/bg-3.png)'
    },
    firstLine: ['2023', '2022', '2021', '2020', ''],
    secondLine: ['2019', '2018', '2017', '2016', ''],
  },
  {
    bigTitle: '热搜 >',
    cardStyle: {
      backgroundColor: 'linear-gradient(83.84deg, rgba(255, 122, 122, 0.12) 0%, rgba(108, 226, 169, 0.07) 100%)',
      background: 'right center / contain no-repeat',
      // background: 'linear-gradient(83.84deg, rgba(255, 122, 122, 0.12) 0%, rgba(108, 226, 169, 0.07) 100%) right center / contain no-repeat',
      backgroundImage: 'url(http://cdn.coleduck.cn/minibilibili/Anime/windows/bg-4.png)'
    },
    firstLine: ['咒术回站 第二季', ''],
    secondLine: ['白圣女与黑牧师', ''],
  },

]
import { ref, onMounted, onUnmounted } from 'vue';


const onboarding = ref(0);
// const isHovered = ref<boolean[]>([false, false, false, false, false, false]);
const isHovered = [false, false, false, false, false, false];


const onButtonMouseOver = (index: number) => {
  for (let i = 0; i < 6; i ++ ) {
    stopCountdown(i);
  }
  onboarding.value = index;
  isHovered[index] = true;
  stopAutoSwitch(); // 取消轮播
};

const onButtonMouseLeave = (index: number) => {
  isHovered[index] = false;
  startAutoSwitch(); // 开启轮播
  startCountdown(index);  // 开启计时器
};

// const intervalId = ref<number | null>(null);
const intervalId = ref<NodeJS.Timeout | null>(null);

// 定时切换逻辑，每过3秒自动切换
const startAutoSwitch = () => {
  intervalId.value = setInterval(() => {
    onboarding.value = (onboarding.value + 1) % 6;
    startCountdown(onboarding.value);
  }, 3000); // 3秒
};

// 停止定时切换
const stopAutoSwitch = () => {
  if (intervalId.value) {
    stopCountdown(onboarding.value);
    clearInterval(intervalId.value!);
    intervalId.value = null;
  }
};

// 在组件挂载时启动定时切换
onMounted(() => {
  startAutoSwitch();
});

// 在组件销毁时停止定时切换
onUnmounted(() => {
  stopAutoSwitch();
});

const countdownInterval = 50; // 每50毫秒更新一次进度条
const countdownWidth = ref<string[]>([]); // 存储进度条宽度
let countdownIntervalArray = ref();

const startCountdown = (index: number) => {
  let width = 0; // 初始宽度为0
  countdownWidth.value[index] = `${width}%`;

  const interval = setInterval(() => {
    width += (100 / 3000) * countdownInterval; // 每100毫秒增加1%
    countdownWidth.value[index] = `${width}%`;

    if (width >= 100) {
      clearInterval(interval);
      countdownWidth.value[index] = '0%';
    }
  }, countdownInterval);
  countdownIntervalArray.value = interval;
};

const stopCountdown = (index: number) => {
  clearInterval(countdownIntervalArray.value);
  countdownWidth.value[index] = '0%';
};


const router = useRouter();
const openAnime = () => {
  router.push({ name: 'Bangumi'});
}

</script>

<template>
  <v-card
    theme="dark"
    flat
    rounded="0"
  >
    <v-window v-model="onboarding">
      <v-window-item
        v-for="(item, index) in imgSrc"
        :key="`card-${index}`"
        :value="index"
      >
        <v-card
          height="440px"
          class="position-relative bg-white"
        >
          <img :src="item.bigImage" class="fill-height" alt="Item Image" @click="openAnime"/>
        </v-card>
      </v-window-item>
    </v-window>

    <v-col class="banner-group position-absolute bottom-0">
      <v-row class="ma-3 pa-2">▶ {{imgSrc[onboarding].title}} {{imgSrc[onboarding].desc}}</v-row>
      <v-row justify="center">
        <v-btn
          v-for="(item, index) in imgSrc"
          :key="index"
          :class="['button-banner', { 'button-hover': index == onboarding }]"
          @mouseover="onButtonMouseOver(index)"
          @mouseleave="onButtonMouseLeave(index)"
          @click="openAnime"
        >
          <div class="button-content">
            <img :src="item.smallImage" class="img-button-icon" /> <!-- 嵌入图片 -->
            <span class="text-overlay">{{ item.title }}</span>
            <div class="countdown-bar" :style="{ width: countdownWidth[index] }"></div>
          </div>
        </v-btn>
      </v-row>
    </v-col>
  </v-card>

  <v-row
    class="background-container justify-space-between"
    style="margin-top: 20px;"
  >
    <v-card
      class="myCard"
      v-for="(item, index) in innerContent" :key="index"
      :style="item.cardStyle"
    >
      <v-col >
        <v-row class="text-h5 text-black mb-2" >{{item.bigTitle}}</v-row>
        <v-row class="justify-space-between">
          <div v-for="(itemInfo, index) in item.firstLine" :key="index">
            <span class="item-link">{{itemInfo}}</span>
          </div>
        </v-row>
        <v-row class="justify-space-between">
          <div  v-for="(itemInfo, index) in item.secondLine" :key="index">
            <span class="item-link">{{itemInfo}}</span>
          </div>
        </v-row>
      </v-col>
    </v-card>
  </v-row>

  <v-row class="background-container">

    <v-row class="align-center ma-3" style="height: 40px;">
      <img src="http://cdn.coleduck.cn/minibilibili/Anime/windows/icon-heart.png" alt="我的追番" class="h-100">
      <span class="textHeader">正在追</span>
    </v-row>

  </v-row>


</template>

<style scoped lang="scss">

.textHeader {
  font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,Helvetica,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,sans-serif;
  font-weight: 600;
  font-size: 24px;
}

.item-link {
  color: #61666d;
  white-space: nowrap;
  overflow: hidden;
}
.item-link:hover {
  color: #3AA1D7;
}

.myCard {
  height: 120px;
  width: 23%;
  //margin: auto;
  padding-top: 1%;
  padding-left: 2%;
}

.background-container {
  //margin-top: 20px;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
}

/* 添加进度条样式 */
.countdown-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 5px; /* 进度条高度 */
  border-radius: 3px;
  background-color: #39c5bb; /* 进度条颜色 */
  transition: width 0.1s linear; /* 进度条动画效果 */
}

.button-banner {
  min-height: 110px;
  border-radius: 15px;
  width: 15%;
  margin: auto;
  padding: 0;
}
//.button-banner:hover {
//  transform: scale(1.2); /* 按钮放大效果 */
//  transition: transform 0.2s ease; /* 过渡效果 */
//}
.button-hover {
  transform: scale(1.2); /* 按钮放大效果 */
  transition: transform 0.2s ease; /* 过渡效果 */
}

.img-button-icon {
  max-width: 100%; /* 图片最大宽度 */
  max-height: 100%; /* 图片最大高度 */
  display: block; /* 使图片成为块级元素 */
  border-radius: 15px;
}

.button-content {
  text-align: center; /* 文本居中 */
  position: relative;
}

.text-overlay {
  position: absolute; /* 使用绝对定位 */
  bottom: 5px; /* 距离底部的距离 */
  left: 5px; /* 距离左侧的距离 */
  background-color: rgba(255, 255, 255, 0); /* 设置文本背景颜色 */
  padding: 5px; /* 添加一些内边距 */
  border-radius: 3px; /* 添加圆角 */
}


.banner-group {
  width: 100%;
  height: 200px;
  padding-left: 5%;
  padding-right: 5%;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 1));
}

.position-relative {
  position: relative; /* 使卡片成为定位上下文 */
}

.position-absolute {
  position: absolute; /* 设置 span 为绝对定位 */
}

.bottom-0 {
  bottom: 0; /* 将 span 放到底部 */
}

.left-0 {
  left: 0; /* 将 span 放到左侧 */
}

.fill-height {
  width: 100%; /* 设置图像宽度为100% */
  height: 100%; /* 设置图像高度为100% */
  object-fit: cover; /* 保持图像比例并填充整个容器 */
}
</style>
