<script setup lang="ts">
import Detail from "@/components/Detail/Detail.vue";
import Carousels from "@/components/FirstScreen/Carousels/Carousels.vue";
import { ref, onMounted, computed } from 'vue';

interface DetailType {
  // 根据你的 Detail 组件的数据结构定义相应的属性
  videoID: string,
  videoTitle: string,
  videoType: string,
  videoImage: string,
  videoUrl: string,
  playNumber: number,
  commentNumber: number,
}

// 使用 ref 来创建响应式变量来存储从后端API获取的数据
const details = ref<DetailType[]>([]);
const mainRow = ref<DetailType[]>([]); // 指定类型为 DetailType[]
const rows = ref<DetailType[][]>([]);

// 在组件挂载后调用 fetchData 来获取数据
onMounted(() => {
  fetchData();
});

// 创建一个函数来从API获取数据
async function fetchData() {
  try {
    const response = await fetch('http://api.coleduck.cn/get_json/'); // 替换成实际的API地址
    const jsonString = await response.json();
    const data = JSON.parse(jsonString); // 解析 JSON 字符串为 JavaScript 对象

    if (Array.isArray(data)) {
      details.value = data.map(item => item.fields); // 将获取的数据保存在 details 变量中
      // console.log(data.map(item => item.fields));
    } else {
      console.error('API 返回的数据不是数组类型');
    }

    // 计算行数和列数的数组结构，类似上面的代码
    const numberOfRows = computed(() => Math.ceil(details.value.length / 4));

    for (let rowIndex = 0; rowIndex < numberOfRows.value; rowIndex++) {
      const startIndex = rowIndex * 4;
      const endIndex = startIndex + 4;
      const row = details.value.slice(startIndex, endIndex);
      if (rowIndex == 0) {
        mainRow.value = row;
      } else {
        rows.value.push(row);
      }
    }
    console.log(mainRow.value);
    console.log(rows.value);

  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}
</script>


<template>
  <v-container  style="padding: 0">

    <!-- 创建一个4列2行的栅格布局 -->
    <v-row align="stretch" no-gutters>
      <!-- 左边的2x2格子 -->
      <v-col cols="6">
        <carousels class="ma-2"/>
      </v-col>

      <v-col cols="3">
        <Detail
          v-if="mainRow.length > 0"
          :video-i-d="mainRow[0]?.videoID as string"
          :video-image="mainRow[0]?.videoImage as string"
          :video-title="mainRow[0]?.videoTitle as string"
          :video-url="mainRow[0]?.videoUrl as string"
          :play-number="mainRow[0]?.playNumber as number"
          :comment-number="mainRow[0]?.commentNumber as number"
        />
        <Detail
          v-if="mainRow.length > 0"
          :video-i-d="mainRow[1]?.videoID as string"
          :video-image="mainRow[1]?.videoImage as string"
          :video-title="mainRow[1]?.videoTitle as string"
          :video-url="mainRow[1]?.videoUrl as string"
          :play-number="mainRow[1]?.playNumber as number"
          :comment-number="mainRow[1]?.commentNumber as number"
        />
      </v-col>

      <v-col cols="3">
        <Detail
          v-if="mainRow.length > 0"
          :video-i-d="mainRow[2]?.videoID as string"
          :video-image="mainRow?.[2]?.videoImage as string"
          :video-title="mainRow?.[2]?.videoTitle as string"
          :video-url="mainRow?.[2]?.videoUrl as string"
          :play-number="mainRow?.[2]?.playNumber as number"
          :comment-number="mainRow?.[2]?.commentNumber as number"
        />
        <Detail
          v-if="mainRow.length > 0"
          :video-i-d="mainRow[3]?.videoID as string"
          :video-image="mainRow[3]?.videoImage as string"
          :video-title="mainRow[3]?.videoTitle as string"
          :video-url="mainRow[3]?.videoUrl as string"
          :play-number="mainRow[3]?.playNumber as number"
          :comment-number="mainRow[3]?.commentNumber as number"
        />
      </v-col>

    </v-row>


    <v-row no-gutters v-for="(row, rowIndex) in rows" :key="rowIndex">
      <v-col cols="3" v-for="(detail, columnIndex) in row" :key="columnIndex">
        <Detail
          v-if="detail"
          :video-i-d="detail?.videoID as string"
          :video-title="detail?.videoTitle as string"
          :video-url="detail?.videoUrl as string"
          :video-image="detail?.videoImage as string"
          :play-number="detail?.playNumber as number"
          :comment-number="detail?.commentNumber as number"
        />
      </v-col>
    </v-row>


  </v-container>
</template>

<style scoped lang="scss">
.videoBox {
  border-radius: 20px;
}
</style>
