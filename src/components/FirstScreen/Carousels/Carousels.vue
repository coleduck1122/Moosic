<script setup lang="ts">

// const infos: { image: string; desc: string }[] = [
//   {
//     image: '/src/assets/image/carousel1.jpg',
//     desc: '国创动画陪你清凉一夏'
//   },
//   {
//     image: '/src/assets/image/carousel2.jpg',
//     desc: '萌猫憨狗勇闯江湖'
//   },
//   {
//     image: '/src/assets/image/carousel3.jpg',
//     desc: '身边处处有设计，分享你的设计观点，瓜分万元奖金>>'
//   },
//   {
//     image: '/src/assets/image/carousel4.jpg',
//     desc: '我的中秋踏秋日记~'
//   },
//   {
//     image: '/src/assets/image/carousel5.jpg',
//     desc: '小长假出行计划等你来分享，瓜分5W奖金！'
//   },
//   {
//     image: '/src/assets/image/carousel6.jpg',
//     desc: '欢聚亚运总动员！一起助力杭州亚运！'
//   },
//   {
//     image: '/src/assets/image/carousel7.jpg',
//     desc: '状况频出？装修届最惊险合集'
//   },
//   {
//     image: '/src/assets/image/carousel8.jpg',
//     desc: '毓庆宫：从太子宫殿变为皇子教室'
//   },
// ];


const infos: { image: string; desc: string }[] = [
  {
    image: 'http://cdn.coleduck.cn/minibilibili/carousels/carousel1.jpg',
    desc: '国创动画陪你清凉一夏'
  },
  {
    image: 'http://cdn.coleduck.cn/minibilibili/carousels/carousel2.jpg',
    desc: '萌猫憨狗勇闯江湖'
  },
  {
    image: 'http://cdn.coleduck.cn/minibilibili/carousels/carousel3.jpg',
    desc: '身边处处有设计，分享你的设计观点，瓜分万元奖金>>'
  },
  {
    image: 'http://cdn.coleduck.cn/minibilibili/carousels/carousel4.jpg',
    desc: '我的中秋踏秋日记~'
  },
  {
    image: 'http://cdn.coleduck.cn/minibilibili/carousels/carousel5.jpg',
    desc: '小长假出行计划等你来分享，瓜分5W奖金！'
  },
  {
    image: 'http://cdn.coleduck.cn/minibilibili/carousels/carousel6.jpg',
    desc: '欢聚亚运总动员！一起助力杭州亚运！'
  },
  {
    image: 'http://cdn.coleduck.cn/minibilibili/carousels/carousel7.jpg',
    desc: '状况频出？装修届最惊险合集'
  },
  {
    image: 'http://cdn.coleduck.cn/minibilibili/carousels/carousel8.jpg',
    desc: '毓庆宫：从太子宫殿变为皇子教室'
  },
];
</script>

<template>
  <v-carousel
    cycle
    hide-delimiter-background
    show-arrows="hover"
    class="slide-container"
    height="420px"
  >
    <v-carousel-item
      v-for="(item, i) in infos"
      :key="i"
    >
      <!-- 包装容器，包含图片和文本 -->
      <div class="image-container">
        <v-img :src="item.image" alt="Slide Image" class="image" />
        <!-- 文本描述信息 -->
        <div class="description">{{item.desc}}</div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped lang="scss">
.slide-container {
  margin-bottom: 50px;
  width: 584px; /* 设置轮播的宽度 */
  max-height: 100%; /* 使用百分比以适应父容器 */
  height: 484px; /* 设置轮播的高度 */
  background-color: rgba(0, 0, 0, 0.6); /* 背景颜色 */
  border-radius: 20px;
}
.image-container {
  position: relative;
  width: 584px;
  height: 330px;
}
.image {
  width: 100%;
  height: 100%;
  //border-radius: 20px;
  object-fit: cover; /* 图片填充整个容器，不缩放也不裁剪 */
}
.description {
  position: absolute;
  bottom: -50px; /* 调整垂直位置，可以根据需要调整 */
  left: 10px; /* 调整水平位置，可以根据需要调整 */
  color: #F6F7F8; /* 文本颜色，可以根据需要调整 */
  padding: 5px; /* 调整内边距，可以根据需要调整 */
  font-size: large;
}
</style>
