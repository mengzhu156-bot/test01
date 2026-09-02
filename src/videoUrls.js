/**
 * Video URLs are deliberately kept outside the repository.
 * Set these VITE_VIDEO_* variables in your hosting provider's environment.
 * Empty values are safe: the corresponding card keeps its poster image and
 * simply does not attempt to download a video.
 */
const env = import.meta.env;

export const videoUrls = {
  baolianLamp: env.VITE_VIDEO_BAOLIAN_LAMP || 'https://personalwb-1479417155.cos.ap-shanghai.myqcloud.com/videos/VITE_VIDEO_BAOLIAN_LAMP.mp4',
  intestineBattle: env.VITE_VIDEO_INTESTINE_BATTLE || 'https://personalwb-1479417155.cos.ap-shanghai.myqcloud.com/videos/VITE_VIDEO_INTESTINE_BATTLE.mp4',
  diseaseEra: env.VITE_VIDEO_DISEASE_ERA || 'https://personalwb-1479417155.cos.ap-shanghai.myqcloud.com/videos/VITE_VIDEO_DISEASE_ERA.mp4',
  underworldKing: env.VITE_VIDEO_UNDERWORLD_KING || 'https://personalwb-1479417155.cos.ap-shanghai.myqcloud.com/videos/VITE_VIDEO_UNDERWORLD_KING.mp4',
  ceoLottery: env.VITE_VIDEO_CEO_LOTTERY || 'https://personalwb-1479417155.cos.ap-shanghai.myqcloud.com/videos/VITE_VIDEO_CEO_LOTTERY.mp4',
  rebirthFilm: env.VITE_VIDEO_REBIRTH_FILM || 'https://personalwb-1479417155.cos.ap-shanghai.myqcloud.com/videos/REBIRTH.mov',
  smartWardrobe: env.VITE_VIDEO_SMART_WARDROBE || 'https://personalwb-1479417155.cos.ap-shanghai.myqcloud.com/videos/VITE_VIDEO_SMART_WARDROBE.mp4',
  smartMirror: env.VITE_VIDEO_SMART_MIRROR || 'https://personalwb-1479417155.cos.ap-shanghai.myqcloud.com/videos/VITE_VIDEO_SMART_MIRROR.mp4',
  smartStore: env.VITE_VIDEO_SMART_STORE || 'https://personalwb-1479417155.cos.ap-shanghai.myqcloud.com/videos/VITE_VIDEO_SMART_STORE.mp4',
  cinematicHero:
    env.VITE_VIDEO_CINEMATIC_HERO ||
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260510_060007_60275ce7-030c-4668-a160-8f364ec537d3.mp4',
};
