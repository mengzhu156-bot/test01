# test01
# 视频外链配置

仓库不再把作品视频打包进网站。视频地址统一从环境变量读取，配置文件示例见 [`.env.example`](./.env.example)。

1. 将视频上传到支持跨域（CORS）和 HTTP Range 请求的对象存储/CDN，例如 Cloudflare R2、Bunny、S3 或 CloudFront。
2. 在部署平台（Vercel、Netlify 等）的 Environment Variables 中，按 `.env.example` 的变量名填写每支视频的公开 HTTPS 地址。
3. 重新部署。没有填写地址的视频会保留海报图，不会请求本地大文件。

视频地址必须是可直接播放的 MP4/WebM 文件 URL，而不是网盘分享页；建议设置 `Content-Type: video/mp4`、开启 CORS，并保留 Range 支持以便拖动播放。
