<br />
<p align="center">
  <a href="https://music.qier222.com" target="blank">
    <img src="images/logo.png" alt="Logo" width="156" height="156">
  </a>
  <h2 align="center" style="font-weight: 600">YesPlayMusic</h2>

  <p align="center">
    高颜值的第三方网易云播放器
    <br />
    <a href="https://music.qier222.com" target="blank"><strong>🌎 访问DEMO</strong></a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <a href="#%EF%B8%8F-安装" target="blank"><strong>📦️ 下载安装包</strong></a>&nbsp;&nbsp;|&nbsp;&nbsp;
    <a href="https://t.me/yesplaymusic" target="blank"><strong>💬 加入交流群</strong></a>
    <br />
    <br />
  </p>
</p>

## ✨ 特性

- ✅ 使用 Vue.js 全家桶开发
- 🔴 网易云账号登录（扫码/手机/邮箱登录）
- 📺 支持 MV 播放
- 📃 支持歌词显示
- 📻 支持私人 FM / 每日推荐歌曲
- 🚫🤝 无任何社交功能
- 🌎️ 海外用户可直接播放（需要登录网易云账号）
- ✔️ 每日自动签到（手机端和电脑端同时签到）
- 🌚 Light/Dark Mode 自动切换
- 🛠 更多特性开发中

## 📦️ 安装



## ⚙️ 部署至 Vercel

除了下载本地使用外，你还可以将本项目部署到 Vercel 或你的服务器上。下面是部署到 Vercel 的方法。

[![Powered by Vercel](https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg)](https://vercel.com/?utm_source=ohmusic&utm_campaign=oss)

1. 部署网易云 API，详情参见 [Binaryify/NeteaseCloudMusicApi](https://neteasecloudmusicapi.vercel.app/#/?id=%e5%ae%89%e8%a3%85)
   。你也可以将 API 部署到 Vercel。

2. 点击本仓库右上角的 Fork，复制本仓库到你的 GitHub 账号。

3. 点击仓库的 Add File，选择 Create new file，输入 `vercel.json`，将下面的内容复制粘贴到文件中，并将 `https://your-netease-api.example.com` 替换为你刚刚部署的网易云 API 地址：

```json
{
  "rewrites": [
    {
      "source": "/api/:match*",
      "destination": "https://your-netease-api.example.com/:match*"
    }
  ]
}
```

4. 打开 [Vercel.com](https://vercel.com)，使用 GitHub 登录。

5. 点击 Import Git Repository 并选择你刚刚复制的仓库并点击 Import。

6. 点击 PERSONAL ACCOUNT 旁边的 Select。

7. 点击 Environment Variables，填写 Name 为 `VUE_APP_NETEASE_API_URL`，Value 为 `/api`，点击 Add。最后点击底部的 Deploy 就可以部署到
   Vercel 了。

## ⚙️ 部署到自己的服务器

除了部署到 Vercel，你还可以部署到自己的服务器上

1. 部署网易云 API，详情参见 [Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)
2. 克隆本仓库

```sh
git clone --recursive https://github.com/qier222/YesPlayMusic.git
```

3. 安装依赖

```sh
yarn install

```

4. （可选）使用 Nginx 反向代理 API，将 API 路径映射为 `/api`，如果 API 和网页不在同一个域名下的话（跨域），会有一些 bug。

5. 复制 `/.env.example` 文件为 `/.env`，修改里面 `VUE_APP_NETEASE_API_URL` 的值为网易云 API 地址。本地开发的话可以填写 API 地址为 `http://localhost:3000`，YesPlayMusic 地址为 `http://localhost:8080`。如果你使用了反向代理 API，可以填写 API 地址为 `/api`。

```
VUE_APP_NETEASE_API_URL=http://localhost:3000
```

6. 编译打包

```sh
yarn run build
```

7. 将 `/dist` 目录下的文件上传到你的 Web 服务器

## 💻: 配置开发环境

本项目由 [NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi) 提供 API。

运行本项目

```shell
# 安装依赖
yarn install

# 创建本地环境变量
cp .env.example .env

# 运行（网页端）
yarn serve

# 运行（electron）
yarn electron:serve
```

本地运行 NeteaseCloudMusicApi，或者将 API [部署至 Vercel](#%EF%B8%8F-部署至-vercel)

```shell
# 运行 API （默认 3000 端口）
yarn netease_api:run
```

## ☑️ Todo

查看 Todo 请访问本项目的 [Projects](https://github.com/qier222/YesPlayMusic/projects/1)

欢迎提 Issue 和 Pull request。

## 📜 开源许可

本项目仅供个人学习研究使用，禁止用于商业及非法用途。

基于 [MIT license](https://opensource.org/licenses/MIT) 许可进行开源。

## 灵感来源

API 源代码来自 [Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)

- [Apple Music](https://music.apple.com)
- [YouTube Music](https://music.youtube.com)
- [Spotify](https://www.spotify.com)
- [网易云音乐](https://music.163.com)

## 🖼️ 截图