<style scoped lang="scss">
.UploadTabCard {
  margin: 25px;
}
.UploadBtn {
  margin: auto;
  margin-bottom: 20px;
  min-width: 30%;
  min-height: 40px;
  background-color: #3AA1D7;
  color: #F6F7F8;
  font-size: 17px;
}
.progress-bar {
  width: 100%;
  height: 15px;
  background-color: #ccc;
  margin-top: 10px;
  position: relative;
  margin-bottom: 50px;
}

.progress {
  height: 100%;
  background-color: #007bff;
  transition: width 0.3s;
}
</style>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import View from "@/layouts/UploadView/View.vue";

const tab = ref(0);
const uploadProgress = ref(0);
const success_dialog = ref(false);
const fail_dialog = ref(false);
const uncomplete_dialog = ref(false);

const videoTitle = ref('');
const videoType = ref('');
const videoInputRef = ref<File[]>([]);
const imageInputRef = ref<File[]>([]);
async function uploadFile() {

  if (videoInputRef.value.length == 0
    || imageInputRef.value.length == 0
    || videoTitle.value == ''
    || videoType.value == ''
  ) {
    uncomplete_dialog.value = true;
    return ;
  }

  try {
    // // 发送 GET 请求来获取 CSRF 令牌
    // axios.get('http://api.coleduck.cn/get_csrf_token/')
    //   .then(response => {
    //     const csrfToken = response.data.csrf_token;
    //     // 在这里可以保存 csrfToken 到全局变量、Vuex 状态管理或其他合适的位置
    //     console.log(csrfToken);
    //
    //     // 设置 CSRF 令牌头部
    //     // axios.defaults.headers.common['X-CSRFToken'] = csrfToken;
    //
    //   })
    //   .catch(error => {
    //     console.error('获取 CSRF 令牌失败', error);
    //   });

    const formData = new FormData();

    formData.append('video_title', videoTitle.value);
    formData.append('video_type', videoType.value);
    formData.append('video_file', videoInputRef.value[0]);
    formData.append('image_file', imageInputRef.value[0]);
    console.log(formData);

    // 发送 POST 请求
    axios.post('http://api.coleduck.cn/upload_video/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
      timeout: 600000, // 增加请求超时时间，单位是毫秒
      onUploadProgress: (progressEvent) => {
        if (progressEvent.total !== undefined) {
          uploadProgress.value = Math.round((progressEvent.loaded / progressEvent.total) * 100);
        } else {
          // 处理 total 为 undefined 的情况
          uploadProgress.value = 0;
        }
      },
    })
    .then(response => {
      // 处理响应
      success_dialog.value = true;
      console.log('文件上传成功', response.data);

      // 清除文件信息
      videoTitle.value = '';
      videoType.value = '';
      videoInputRef.value = [];
      imageInputRef.value = [];
    })
    .catch(error => {
      // 处理错误
      fail_dialog.value = true;
      console.error('传输视频文件失败', error);
    });

  } catch (error) {
    console.log(error);
  }

}

const items = ref(['搞笑', '音乐', '游戏', '教育', '电影', '剧集', '科技', '娱乐', '美食', '体育', '动画', '生活', '新闻', '恐怖', '儿童', '纪录片', '健康', '财经', '旅游', '情感', '历史', '科幻', '奇幻', '悬疑', '战争', '犯罪', '爱情', '冒险', '家庭', '动作', '文艺', '古装', '青春', '校园', '穿越', '治愈', '励志', '推理', '幽默', '励志']);
const value = ref([]);
</script>

<template>
  <v-card class="UploadTabCard">
    <v-tabs v-model="tab" color="light-blue" align-tabs="start">
      <v-tab :key="0">视频投稿</v-tab>
      <v-tab :key="1">专栏投稿</v-tab>
      <v-tab :key="2">互动视频投稿</v-tab>
      <v-tab :key="3">音频投稿</v-tab>
      <v-tab :key="4">贴纸投稿</v-tab>
      <v-tab :key="5">视频素材投稿</v-tab>
    </v-tabs>

    <v-tab-item :key="0">
      <view v-if="tab === 0">
        <v-container>
          <v-form ref="form">
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="videoTitle"
                  clearable
                  label="Title"
                  type="text"
                  variant="outlined"
                  required
                >
                  <template v-slot:prepend>
                    <span style="color: #ff0000">*</span>
                    <span class="ma-1">标题</span>
                  </template>

                  <template v-slot:append>
                    <v-tooltip location="bottom">
                      <template v-slot:activator="{ props }">
                        <v-icon v-bind="props" icon="mdi-help-circle-outline"></v-icon>
                      </template>
                      视频标题长度不大于30，并且不能包含特殊字符 \ / * , . [ ] ( )
                    </v-tooltip>
                  </template>
                </v-text-field>
              </v-col>

              <v-col cols="12">
                <v-select
                  v-model="value"
                  :items="items"
                  chips
                  label="为视频添加一些标签吧"
                  variant="outlined"
                  multiple
                >
                  <template v-slot:prepend>
                    <span style="opacity: 0">*</span>
                    <span class="ma-1">标签</span>
                  </template>

                  <template v-slot:append>
                    <v-icon icon="null"></v-icon>
                  </template>
                </v-select>
              </v-col>

              <v-col cols="12">
                <v-select
                  v-model="videoType"
                  label="选择投放的区域"
                  :items="['番剧', '国创', '综艺', '动画', '鬼畜', '舞蹈', '娱乐', '科技', '美食', '电影', '电视剧', '纪录片', '游戏', '音乐', '影视', '知识', '资讯']"
                  variant="outlined"
                  required
                >
                  <template v-slot:prepend>
                    <span style="color: #ff0000">*</span>
                    <span class="ma-1">分区</span>
                  </template>

                  <template v-slot:append>
                    <v-icon icon="null"></v-icon>
                  </template>
                </v-select>
              </v-col>

              <v-col cols="12">
                <v-file-input
                  v-model="videoInputRef"
                  chips
                  show-size
                  label="上传视频文件"
                  accept="video/mp4, video/avi"
                  variant="outlined"
                  prepend-icon="mdi-message-video"
                  required
                >
                  <template v-slot:prepend>
                    <span style="color: #ff0000" class="ma-1">*</span>
                  </template>

                  <template v-slot:append>
                    <v-tooltip location="bottom">
                      <template v-slot:activator="{ props }">
                        <v-icon v-bind="props" icon="mdi-help-circle-outline"></v-icon>
                      </template>
                      视频上传大小不能超过512MB，支持的格式 AVI / MP4
                    </v-tooltip>
                  </template>
                </v-file-input>
              </v-col>

              <v-col cols="12">
                <v-file-input
                  v-model="imageInputRef"
                  chips
                  show-size
                  label="上传视频封面"
                  accept="image/png, image/jpeg, image/bmp"
                  variant="outlined"
                  prepend-icon="mdi-image"
                  required
                >
                  <template v-slot:prepend>
                    <span style="color: #ff0000" class="ma-1">*</span>
                  </template>

                  <template v-slot:append>
                    <v-tooltip location="bottom">
                      <template v-slot:activator="{ props }">
                        <v-icon v-bind="props" icon="mdi-help-circle-outline"></v-icon>
                      </template>
                      支持的图像格式 JPG / PNG / BMP
                    </v-tooltip>
                  </template>
                </v-file-input>
              </v-col>

              <v-col cols="12">
                <div class="progress-bar">
                  <div class="progress" :style="{ width: `${uploadProgress.valueOf()}%` }"></div>
                </div>
              </v-col>

            </v-row>

            <v-row>
              <!-- 添加一个按钮来触发文件上传 -->
              <v-btn
                @click="uploadFile"
                class="UploadBtn"
              >
                视频上传
              </v-btn>

              <v-dialog
                v-model="success_dialog"
                width="auto"
                transition="dialog-top-transition"
              >
                <v-card>
                  <v-card-text>
                    上传成功
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="primary" block @click="success_dialog = false">好的</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-dialog
                v-model="fail_dialog"
                width="auto"
                transition="dialog-top-transition"
              >
                <v-card>
                  <v-card-text>
                    上传失败
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="primary" block @click="fail_dialog = false">嗯</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-dialog
                v-model="uncomplete_dialog"
                width="auto"
                transition="dialog-top-transition"
                persistent
              >
                <v-card>
                  <v-card-text>
                    请确保信息完整
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="primary" block @click="uncomplete_dialog = false">收到</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

            </v-row>

          </v-form>
        </v-container>
      </view>
    </v-tab-item>

    <v-tab-item :key="1">
      <view v-if="tab === 1">
        <v-card-text>
          这是选项卡 2 的内容
        </v-card-text>
      </view>
    </v-tab-item>

    <v-tab-item :key="2">
      <view v-if="tab === 2">
        <v-card-text>
          这是选项卡 3 的内容
        </v-card-text>
      </view>
    </v-tab-item>

    <v-tab-item :key="3">
      <view v-if="tab === 3">
        <v-card-text>
          这是选项卡 4 的内容
        </v-card-text>
      </view>
    </v-tab-item>

    <v-tab-item :key="4">
      <view v-if="tab === 4">
        <v-card-text>
          这是选项卡 5 的内容
        </v-card-text>
      </view>
    </v-tab-item>

    <v-tab-item :key="5">
      <view v-if="tab === 5">
        <v-card-text>
          这是选项卡 6 的内容
        </v-card-text>
      </view>
    </v-tab-item>

  </v-card>
</template>

