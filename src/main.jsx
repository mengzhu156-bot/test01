import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Lock,
  Play,
  X,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import './styles.css';
import SpecularButton from './SpecularButton';
import HeroCarousel from './HeroCarousel';
import ContactReveal from './ContactReveal';
import AuroraBeam from './AuroraBeam';
import heroPoster from './assets/hero-poster.png';
import portraitImage from './assets/profile-portrait.jpg';
import projectDaiyu from './assets/project-daiyu.png';
import projectGenesis from './assets/project-genesis.png';
import commercialReference from './assets/aigc-commercial-reference.png';
import installationImage from './assets/profile-installation.jpg';
import ecologyFestivalImage from './assets/ecology-festival.jpg';
import ecologyAerialImage from './assets/ecology-aerial.png';
import ecologyRenderImage from './assets/ecology-render.png';
import scaffoldDimensionsImage from './assets/scaffold-dimensions.png';
import ecologyProjectSitePlan from './assets/ecology-project-site-plan.png';
import ecologyScaffoldDetails from './assets/ecology-scaffold-details.png';
import ecologyGraphicDesign from './assets/ecology-graphic-design.png';
import exhibitionScrollMaskImage from './assets/exhibition-scroll-mask.jpg';
import daiyuExhibition01 from './assets/daiyu-exhibition-01.jpg';
import daiyuExhibition02 from './assets/daiyu-exhibition-02.jpg';
import daiyuExhibition03 from './assets/daiyu-exhibition-03.png';
import daiyuExhibition04 from './assets/daiyu-exhibition-04.jpg';
import daiyuExhibition05 from './assets/daiyu-exhibition-05.jpg';
import daiyuHandbook01 from './assets/daiyu-handbook-01.png';
import daiyuHandbook02 from './assets/daiyu-handbook-02.png';
import daiyuHandbook03 from './assets/daiyu-handbook-03.png';
import daiyuExhibitionNew06 from './assets/daiyu-exhibition-new-06.png';
import daiyuHandbookFinal01 from './assets/daiyu-handbook-final-01.png';
import daiyuHandbookFinal02 from './assets/daiyu-handbook-final-02.png';
import mengZhuCertificate from './assets/meng-zhu-certificate.png';
import visualArchive01 from './assets/visual-archive-hi-01.jpg';
import visualArchive02 from './assets/visual-archive-hi-02.jpg';
import visualArchive03 from './assets/visual-archive-hi-03.jpg';
import visualArchive04 from './assets/visual-archive-hi-04.jpg';
import visualArchive05 from './assets/visual-archive-hi-05.jpg';
import rebirthCover from './assets/rebirth-cover.png';
import rebirthPoster from './assets/rebirth-poster.png';
import rebirthAwardPoster from './assets/rebirth-award-poster.png';
import rebirthFrame02 from './assets/frame-02.png';
import rebirthGridOne from './assets/rebirth-grid-1.png';
import rebirthGridTwo from './assets/rebirth-grid-2.png';
import { videoUrls } from './videoUrls';
import rebirthGridThree from './assets/rebirth-grid-3.png';
import rebirthBoard07 from './assets/rebirth-portfolio-07.png';
import rebirthBoard08 from './assets/rebirth-portfolio-08.png';
import rebirthBoard09 from './assets/rebirth-portfolio-09.png';
import rebirthBoard10 from './assets/rebirth-portfolio-10.png';
import rebirthBoard11 from './assets/rebirth-portfolio-11.png';
import rebirthBoard12 from './assets/rebirth-portfolio-12.png';
import rebirthBoard14 from './assets/rebirth-portfolio-14.png';
import rebirthBoard15 from './assets/rebirth-portfolio-15.png';
import rebirthStoryboard from './assets/rebirth-storyboard.jpg';
import rebirthStill2 from './assets/rebirth-still-2.png';
import rebirthStill3 from './assets/rebirth-still-3.png';
import rebirthStill4 from './assets/rebirth-still-4.png';
import rebirthStill5 from './assets/rebirth-still-5.png';
import rebirthFrame01 from './assets/rebirth-frame-01.png';
import rebirthFrame03 from './assets/rebirth-frame-03.png';
import rebirthFrame05 from './assets/rebirth-frame-05.png';
import gsap from 'gsap';

const cinematicHeroVideo =
  videoUrls.cinematicHero;

const stats = [
  { value: '15+', label: 'AIGC影像项目' },
  { value: '63集', label: 'AI漫剧视觉制作' },
  { value: '10万+', label: '展览项目观众' },
  { value: '10+', label: '媒体报道与传播' },
];

const projects = [
  {
    title: '病变纪元之下我无敌',
    role: 'AI视频制作专员 / 漫剧AI美术主导',
    year: '2025｜63集',
    splitMeta: true,
    image: projectDaiyu,
    video: videoUrls.diseaseEra,
    tags: ['AIGC', '漫剧', 'Visual Direction'],
    desc: '负责剧本拆解、角色与场景设定、AI镜头生成、素材筛选及成片视觉审核。项目上线红果平台后，平台热度突破2000万。',
  },
  {
    title: '肠安之战',
    role: 'AIGC 漫剧 / 视觉设计',
    year: '2026',
    image: rebirthCover,
    video: videoUrls.intestineBattle,
    tags: ['AIGC', '漫剧', 'Visual Direction'],
    desc: 'AIGC 漫剧视觉作品，围绕微观世界中的乳酸菌群展开奇幻叙事。',
  },
  {
    title: '宝莲灯',
    role: 'AIGC 漫剧 / 视觉设计',
    year: '2026',
    image: rebirthCover,
    video: videoUrls.baolianLamp,
    tags: ['AIGC', '漫剧', 'Visual Direction'],
    desc:
      'AIGC 漫剧视觉作品，以宝莲灯为主题展开东方奇幻叙事。',
  },
  {
    title: '地府卷王',
    role: 'AIGC漫剧/美术设计·视频制作',
    year: '2025',
    image: projectGenesis,
    video: videoUrls.underworldKing,
    tags: ['AIGC', '漫剧', 'Visual Direction'],
    desc:
      'AIGC 漫剧视觉作品，以地府世界为背景展开奇幻叙事。',
  },
  {
    title: '抽奖吧，霸总！',
    role: 'AIGC漫剧/美术设计·视频制作',
    year: '2025',
    image: rebirthCover,
    video: videoUrls.ceoLottery,
    tags: ['AIGC', '漫剧', 'Visual Direction'],
    desc: 'AIGC 漫剧视觉作品，围绕霸总题材展开轻松有趣的故事表达。',
  },
];

const disciplines = [
  {
    slug: 'commercial',
    title: 'AIGC 商业落地',
    english: 'AI COMMERCIAL · BRAND FILM',
    image: commercialReference,
    text: '将产品功能与品牌卖点转化为可传播的 AI 影像内容。',
    meta: '产品叙事 · 视觉转译 · 成片交付',
  },
  {
    slug: 'exhibition',
    title: '沉浸式戏曲XR《黛玉葬花》',
    english: 'EXHIBITION · SPATIAL DESIGN',
    image: installationImage,
    text: '从主题策划、空间动线到现场布展，建立让观众真正参与的展示体验。',
    meta: '环境设计 · 平面视觉 · 编辑系统',
  },
  {
    slug: 'ecology-festival',
    title: '无锡蠡湖生态艺术节·摄影展策划',
    english: 'EXHIBITION · PHOTOGRAPHY CURATION',
    image: ecologyFestivalImage,
    text: '从 0 到 1 策划无锡蠡湖生态设计节摄影展，以湖边实景对照强化作品感染力，完成视觉设计、物料制作与现场布展，吸引 10 万 + 观众。',
    meta: '展览策划 · 摄影展视觉 · 现场执行',
  },
];

const artworkCarouselItems = [
  { id: 'visual-01', title: 'Campaign Key Visual', caption: 'Creative direction · Product planning · Model shoot', image: visualArchive01 },
  { id: 'visual-02', title: 'Adornment in Motion', caption: 'Jewelry styling · Material contrast · Editorial portrait', image: visualArchive02 },
  { id: 'visual-03', title: 'Hero Jewelry Portrait', caption: 'Statement piece · Model styling · Lighting direction', image: visualArchive03 },
  { id: 'visual-04', title: 'Sculptural Detail', caption: 'Accessory focus · Chromatic light · Campaign image', image: visualArchive04 },
  { id: 'visual-05', title: 'Editorial Finale', caption: 'Full-look styling · Visual consistency · Series close', image: visualArchive05 },
];

const workExperiences = [
  {
    company: '灵漫艺创科技（上海）有限公司',
    role: 'AI视频制作专员 / 漫剧AI美术主导',
    time: '2025.08 – 2026.03',
    intro: '负责多个平台漫剧项目的AI视觉开发与视频制作，根据剧本拆解场次、人物、情绪及镜头需求，完成角色、场景和视觉风格设定。',
    bullets: [
      '运用多模型协同工作流完成AI镜头生成、素材筛选与动态制作，解决角色漂移、场景连续性及视觉风格统一问题。',
      '负责成片视觉质量审核与版本反馈，对构图、表演、镜头衔接、节奏及画面一致性进行把控。',
      '代表作63集《病变纪元之下我无敌》上线红果平台后热度突破2000万。',
      '沉淀可复用的角色、场景和视觉风格资产，形成镜头生成、问题修正与成片审核流程。',
    ],
  },
  {
    company: '北京科意文创企业管理有限公司',
    role: '策划设计（实习）',
    time: '2024.03 – 2024.05',
    intro: '从0到1参与无锡蠡湖生态设计节摄影展策划，负责视觉设计、空间建模、展签物料设计及现场布置。项目累计吸引10万+观众，获得10+媒体报道，宣传触达数十万级。',
  },
  {
    company: '上海铁海文化艺术交流策划有限公司',
    role: '展览设计实习（西岸艺博会主办方）',
    time: '2023.09 – 2023.11',
    intro: '参与西岸艺术与设计博览会展位空间设计，以用户体验思维划分接待区、主题展区、互动体验区与休息区，创新采用可移动展板与模块化结构。',
    bullets: [
      '完成CAD施工图深化与施工技术交底，助力项目前期施工筹备。',
      '负责展签、画册等平面物料设计，完成艺术家资料整理与展品布局。',
      '参与现场布展与执行协调，保障展览按期落地。',
    ],
  },
  {
    company: '南京立派新媒体科技有限公司',
    role: '项目助理 · 展览策划',
    time: '2023.01 – 2023.07',
    intro: '参与老门东展览项目现场考察与提案，输出“艺术与医院”展览提案及整体视觉方案。',
    bullets: [
      '“禅意装置表演 + ASMR”创意获采用。',
      '统筹展品、艺术家资源、现场安全与物料，处理设备未按时进场等突发问题，推动上万人次展览落地。',
      '独立撰写20+页项目复盘PPT并完成汇报，提炼项目成果与后续优化建议。',
    ],
  },
  {
    company: '臻格贝雅品牌管理（南京）有限公司',
    role: '商品企划',
    time: '2021.12 – 2022.12',
    intro: '开展市场趋势、竞品表现和目标消费客群分析，负责珠宝新品的概念定位、产品卖点、视觉方向及采买计划。',
    bullets: [
      '协同设计、供应链及推广团队推进新品系列开发，跟进从选品到上市推广的完整流程。',
      '参与打造8款高表现产品，带动相关产品转化率提升25%。',
      '根据产品特征制定拍摄脚本及内容方向，参与真人拍摄美术指导。',
      '统筹海外博主内容合作，审核产品图片、推广视频及社交媒体素材。',
    ],
  },
];

const educationExperiences = [
  {
    school: '上海戏剧学院',
    degree: '艺术与科技 · 硕士',
    time: '2023.09 – 2026.06',
    text: '研究方向为AIGC影像与展演科技。参与文化和旅游数字化创新示范“十佳案例”项目——沉浸式戏曲《黛玉葬花》的持续迭代与展演，负责视觉概念、场景构建与AI影像设计。第一作者论文入选ICISIP 2025国际会议并于日本长崎大学口头报告。',
  },
  {
    school: '南京大学金陵学院',
    degree: '环境设计 · 本科',
    time: '2013.09 – 2017.07',
    text: '系统学习空间设计、视觉传达与设计理论。期间作为交换生赴台湾元智大学进行短期交流（2016.02–2016.07），毕业后赴日本进行中高阶日语进修（2017.08–2019.10）。',
  },
];

const skillGroups = [
  {
    title: 'AIGC视频工作流',
    skills: ['Stable Diffusion', 'ComfyUI', 'Midjourney', 'Runway', '可灵', '即梦', 'Seedance'],
  },
  {
    title: '视频与视觉',
    skills: ['After Effects', 'Premiere Pro', '剪映', 'Photoshop', 'Illustrator'],
  },
  {
    title: '三维与空间',
    skills: ['Blender', 'AutoCAD', 'SketchUp'],
  },
  {
    title: '语言与证书',
    skills: ['英语 CET-6', '日语 N2', '美术教师资格证'],
  },
];

const recognitions = [
  { year: '2026', title: '《重生》入围香港国际AI电影节' },
  { year: '2025', title: '第一作者论文入选ICISIP 2025国际会议口头报告' },
  { year: '2025', title: '《和合共生》获中保青少年非遗创作展金奖' },
  { year: '2024', title: '《HOPE》入围大学生AI艺术季' },
  { year: '2023', title: '《黛玉葬花》入选文旅数字化创新示范“十佳案例”' },
];

function Nav() {
  return (
    <header className="site-header" aria-label="主导航">
      <a className="wordmark" href="#hero">
        MENG ZHU
      </a>
      <nav className="site-nav">
        <a href="#about">ABOUT</a>
        <a href="#projects">WORKS</a>
        <a href="#advantages">SKILLS &amp; RECOGNITION</a>
        <a href="#contact">CONTACT</a>
      </nav>
      <SpecularButton size="sm" radius={999} href="mailto:740050785@qq.com" className="nav-specular nav-cta">
        LET&apos;S TALK
      </SpecularButton>
    </header>
  );
}

function Hero() {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    let frameId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (event) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      targetX = ((event.clientX - cx) / cx) * 20;
      targetY = ((event.clientY - cy) / cy) * 20;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      gsap.set(video, { x: currentX, y: currentY });
      frameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section className="hero section" id="hero">
      <video
        className="hero-video"
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
        onLoadedMetadata={(event) => {
          event.currentTarget.playbackRate = 1.25;
        }}
      >
        <source src={cinematicHeroVideo} type="video/mp4" />
      </video>
      <div className="hero-scrim" />
      <Nav />
      <div className="hero-inner">
        <div className="hero-headline">
          <h1>
            Direct vision with AI.
            <span>Shape emotion through images.</span>
          </h1>
        </div>
        <div className="hero-bottom-block">
          <p className="hero-copy">
            <span>AI视觉设计师 · 内容创意策划。</span>
            以导演思维统筹视觉创意与影像表达，融合AI生成、视觉开发与空间设计经验，贯通从概念、剧本分镜到镜头生成、剪辑与成片的完整创作流程。
          </p>
          <SpecularButton size="lg" radius={999} href="#projects" className="hero-cta">
            View selected works
          </SpecularButton>
          <div className="hero-secure">
            <Lock size={13} strokeWidth={1.5} />
            <span>Visual Content Designer · AIGC Video · Creative Production</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about section" id="about">
      <div className="shell split-grid">
        <div className="portrait-wrap">
          <img src={portraitImage} alt="孟竹个人形象照" />
        </div>
        <div className="about-content">
          <p className="section-kicker">Profile</p>
          <h2>把 AI 生成力转化为稳定、统一、可落地的视觉表达。</h2>
          <p>
            艺术与科技硕士，专注于 AI 视觉与影像内容创作。具备从创意策划、剧本分析、导演分镜、视觉开发，到 AI 生成、剪辑包装与成片审核的全流程实践经验。
          </p>
          <p>
            参与 AI 漫剧、AIGC 短片、产品概念影像及 XR 文化项目，能够通过角色与场景资产管理、多模型协同生成、关键帧控制及后期剪辑，解决视觉统一、镜头连续性与内容表达等实际问题。
          </p>
          <p>
            同时具备展览空间、品牌视觉与商品企划经验，能够从内容需求出发，将抽象概念、产品功能与文化信息转化为 <strong>清晰、具有审美并能够真正落地的视觉内容。</strong>
          </p>
          <div className="contact-row">
            <a href="mailto:740050785@qq.com">
              <Mail size={17} />
              740050785@qq.com
            </a>
            <a href="tel:15605162339">
              <Phone size={17} />
              15605162339
            </a>
            <span>
              <MapPin size={17} />
              上海
            </span>
          </div>
          <div className="stats-grid">
            {stats.map((item) => (
              <div className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <VisualStory />
      <Projects />
      <div className="shell experience-wrap">
        <section className="resume-section" aria-labelledby="work-experience-title">
          <div className="resume-section__heading">
            <p className="section-kicker">Work Experience</p>
            <h2 id="work-experience-title">工作经历</h2>
          </div>
          <p className="career-summary">近五年间，我从跨境市场与品牌商品企划出发，逐步进入展览策划、空间视觉与 AIGC 影像制作领域。跨领域经验让我能够同时理解市场需求、视觉表达与制作执行，将创意转化为具有审美、可传播并能够落地的视觉内容。</p>
          <div className="resume-list">
            {workExperiences.map((item, index) => (
              <article className="resume-entry" key={`${item.company}-${item.time}`}>
                <span className="resume-entry__index">{String(index + 1).padStart(2, '0')}</span>
                <div className="resume-entry__main">
                  <div className="resume-entry__title"><h3>{item.company}</h3><time>{item.time}</time></div>
                  <p className="resume-entry__role">{item.role}</p>
                  <p>{item.intro}</p>
                  {item.bullets ? <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="resume-section resume-section--education" aria-labelledby="education-title">
          <div className="resume-section__heading">
            <p className="section-kicker">Education</p>
            <h2 id="education-title">教育背景</h2>
            <p>从环境设计到艺术与科技，持续探索AI生成技术在影像、戏剧、品牌与展览场景中的应用。</p>
          </div>
          <div className="education-grid">
            {educationExperiences.map((item) => (
              <article className="education-card" key={item.school}>
                <time>{item.time}</time><h3>{item.school}</h3><p className="education-card__degree">{item.degree}</p><p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}

function Projects() {
  const [activeProject, setActiveProject] = React.useState(null);

  React.useEffect(() => {
    if (!activeProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveProject(null);
      }
    };

    document.body.classList.add('modal-open');
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeProject]);

  return (
    <section className="projects section" id="projects">
      <div className="shell">
        <div className="section-heading">
          <p className="section-kicker">Selected Works</p>
          <h2 className="projects-title">AIGC漫剧精选</h2>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <button
              className={`project-card${index === 0 ? ' featured' : ''}`}
              type="button"
              key={project.title}
              onClick={() => project.video && setActiveProject(project)}
              aria-label={`播放 ${project.title}`}
            >
              <video
                src={project.video}
                poster={project.image}
                muted
                loop
                autoPlay
                playsInline
                preload="metadata"
                aria-hidden="true"
              />
              <span className="play-cue" aria-hidden="true"><Play size={21} fill="currentColor" /></span>
              <span className="project-overlay">
                <span>
                  <p className={project.splitMeta ? 'project-meta project-meta--split' : 'project-meta'}>
                    <span>{project.role}</span>{project.splitMeta ? <br /> : ' · '}<span>{project.year}</span>
                  </p>
                  <h3>{project.title}</h3>
                </span>
                <span className="project-desc">{project.desc}</span>
                <span className="tag-row">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
      {activeProject ? (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label={`${activeProject.title} 视频播放`}>
          <button className="video-backdrop" type="button" onClick={() => setActiveProject(null)} aria-label="关闭视频" />
          <div className="video-dialog">
            <button className="video-close" type="button" onClick={() => setActiveProject(null)} aria-label="关闭视频">
              <X size={24} />
            </button>
            <video
              src={activeProject.video}
              poster={activeProject.image}
              controls
              autoPlay
              playsInline
            />
            <div className="video-caption">
              <p>{activeProject.role} · {activeProject.year}</p>
              <h3>{activeProject.title}</h3>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function DisciplineSection() {
  return (
    <section className="discipline-section section" aria-label="更多实践方向">
      <div className="shell discipline-wrap">
        <div className="discipline-heading">
          <p className="section-kicker">More Practice Areas</p>
          <h3>同一套视觉方法，跨越影像、商业与空间现场。</h3>
        </div>
        <div className="discipline-grid">
          {disciplines.map((item) => (
            <a className="discipline-card" key={item.title} href={`#${item.slug}`}>
              <div className="discipline-card__media"><img src={item.image} alt={item.title} /></div>
              <div className="discipline-card__body">
                <p className="discipline-card__english">{item.english}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span>{item.meta}</span>
                <span className="discipline-card__prompt">VIEW PROJECT <b aria-hidden="true">→</b></span>
              </div>
            </a>
          ))}
        </div>
        <HeroCarousel
          items={artworkCarouselItems}
          defaultIndex={0}
          archiveLabel="Jewelry Campaign"
          categoryLabel="PRODUCT PLANNING / STYLING / MODEL SHOOT"
          ariaLabel="饰品品牌商品企划与模特拍摄系列"
        />
        <p className="jewelry-project-note">
          负责商品选择、创意方向、模特造型与拍摄统筹，围绕未来感金属饰品建立统一的灯光、妆容与视觉语言，完成系列主视觉及传播图片。
        </p>
        <div className="discipline-cta-wrap">
          <a className="discipline-cta" href="#projects">
            <span>VIEW ALL WORKS</span>
            <span className="discipline-cta__arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function PracticeDetail({ item }) {
  if (!item) return null;
  if (item.slug === 'exhibition') return <ExhibitionDetail item={item} />;
  const commercialVideos = [
    { title: 'SMART WARDROBE', label: '智能衣橱', src: videoUrls.smartWardrobe },
    { title: 'SMART MIRROR', label: '智能镜', src: videoUrls.smartMirror },
    { title: 'SMART STORE', label: '智能门店', src: videoUrls.smartStore },
  ];
  return (
    <main className="practice-detail">
      <header className="detail-header">
        <a className="wordmark" href="#hero">MENG ZHU</a>
        <a className="detail-back" href="#projects">返回作品集 <ArrowUpRight size={16} /></a>
      </header>
      <section className="practice-detail__hero">
        <img src={item.image} alt={item.title} />
        <div className="practice-detail__scrim" />
        <div className="practice-detail__hero-copy">
          <p className="section-kicker">{item.english}</p>
          <h1>{item.title}</h1>
          <p>{item.text}</p>
        </div>
      </section>
      <section className={`practice-detail__body shell${item.slug === 'commercial' ? ' practice-detail__body--commercial' : ''}`}>
        <div>
          <p className="section-kicker">Project Focus</p>
          <h2>{item.meta}</h2>
        </div>
        {item.slug === 'commercial' ? (
          <div className="commercial-breakdown">
            <div className="scroll-stack" aria-label="三支商业影像"><p className="section-kicker">SCROLL STACK / THREE FILMS</p>{commercialVideos.map((video, index) => <article className="scroll-stack__card" style={{ '--stack-index': index }} key={video.title}><video src={video.src} muted playsInline loop autoPlay preload="metadata" /><div><span>{String(index + 1).padStart(2, '0')}</span><strong>{video.title}</strong><em>{video.label}</em></div></article>)}</div>
            <p>从甲方产品资料、文字脚本与参考图片出发，将抽象功能转化为场景、镜头和视觉反馈，完成三支产品概念片及配套视觉资产。</p>
            <div className="commercial-flow"><span>Product Brief</span><b>→</b><span>Script & Reference</span><b>→</b><span>Scene Planning</span><b>→</b><span>AI Visual Production</span><b>→</b><span>Edit & Delivery</span></div>
            <div className="commercial-scenes">
              <article><p className="section-kicker">01 / SMART WARDROBE</p><h3>衣物识别 · 穿搭推荐 · 衣物定位</h3><p><strong>功能：</strong>智能识别衣物并生成推荐组合。<br/><strong>画面：</strong>衣柜扫描、分类标签、推荐造型与光线定位。<br/><strong>视觉语言：</strong>暖色家居场景 + 半透明数据层 + 柔和光线反馈。</p></article>
              <article><p className="section-kicker">02 / SMART MIRROR</p><h3>风格选择 · 虚拟试衣 · 场景化体验</h3><p><strong>功能：</strong>通过镜面 UI 预览不同风格与服装。<br/><strong>画面：</strong>度假、都市、晚宴等镜中场景随造型切换。<br/><strong>视觉语言：</strong>现实空间与镜中世界对照 + 电影化光影 + 触控波纹。</p></article>
              <article><p className="section-kicker">03 / SMART STORE</p><h3>顾客识别 · 智能导购 · 空间导航</h3><p><strong>功能：</strong>空间理解用户并引导完成选择。<br/><strong>画面：</strong>扫描识别、数字导购、智能镜推荐、衣架灯光定位。<br/><strong>视觉语言：</strong>极简科技空间 + 连续光流 + 金色粒子品牌收尾。</p></article>
            </div>
            <div className="project-facts"><div><span>项目角色</span><strong>导演 / AIGC 视觉设计</strong></div><div><span>制作周期</span><strong>2026.01 – 2026.04（约 3 个月）</strong></div><div><span>具体负责内容</span><strong>① 围绕智能衣橱、智能镜、智能门店三个使用场景，拆解衣物识别、AI 穿搭推荐、衣物定位及数据同步等用户链路；② 将不可见的 AI 算法转译为扫描光效、UI 信息层、数据流与生活化演示；③ 独立完成创意策划、脚本分镜、产品视觉、AI 镜头生成、UI 动效、剪辑与交付</strong></div><div><span>项目结果</span><strong>交付 3 支产品概念片 + 关键帧 + 产品场景图 + 跨平台宣传素材，形成统一的智能家居影像语言</strong></div></div>
          </div>
        ) : item.slug === 'ecology-festival' ? (
          <div className="ecology-project-focus">
            <div className="ecology-project-images" aria-label="生态艺术节场地与脚手架设计图">
              <figure><img src={ecologyAerialImage} alt="生态艺术节场地航拍图" /><figcaption>Aerial Site Study / 场地航拍</figcaption></figure>
              <figure><img src={ecologyRenderImage} alt="生态艺术节展览空间渲染图" /><figcaption>Spatial Rendering / 空间渲染</figcaption></figure>
              <figure><img src={scaffoldDimensionsImage} alt="脚手架尺寸与节点图" /><figcaption>Scaffold System / 尺寸与节点</figcaption></figure>
            </div>
            <div className="project-facts"><div><span>项目角色</span><strong>策划设计 / 展览视觉 / 空间执行</strong></div><div><span>制作周期</span><strong>2024.03 – 2024.05（从策划到现场落地）</strong></div><div><span>具体负责内容</span><strong>从0到1参与摄影展策划，完成主题梳理、视觉方向、空间建模、展签与展板物料设计，并参与现场布置与执行协调。</strong></div><div><span>项目结果</span><strong>项目累计吸引10万+观众，获得10+媒体报道，宣传触达数十万级。</strong></div></div>
            <div className="ecology-project-statement"><span>项目阐述 / SITE DIALOGUE</span><p>蠡湖本身就是无锡重要的自然生态系统和城市景观水体。将摄影作品置于湖边，让作品内容与其所处的真实环境形成直接的、沉浸式的对话。观众在观看照片的同时，抬眼或转身就能看到真实的蠡湖风光，这种实景对照能极大地强化作品的感染力，使“三境”中的“自然之境”变得触手可及。</p></div>
            <div className="ecology-project-focus-gallery" aria-label="生态艺术节补充设计资料">
              <figure><img src={ecologyProjectSitePlan} alt="生态艺术节场地总平面图" /><figcaption>Site Plan / 场地总平面</figcaption></figure>
              <figure><img src={ecologyScaffoldDetails} alt="展览脚手架结构与尺寸细节" /><figcaption>Scaffold Details / 结构与尺寸</figcaption></figure>
              <figure><img src={ecologyGraphicDesign} alt="生态艺术节图文视觉设计" /><figcaption>Graphic System / 图文设计</figcaption></figure>
            </div>
          </div>
        ) : <p>从前期洞察、概念设定到视觉执行，建立清晰、统一并可落地的内容体验。</p>}
      </section>
    </main>
  );
}

function ExhibitionDetail({ item }) {
  const sectionRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0);
  const [galleryIndex, setGalleryIndex] = React.useState(0);
  const galleryImages = [daiyuExhibition01, daiyuExhibition02, daiyuExhibition03, daiyuExhibition04, daiyuExhibition05, daiyuExhibitionNew06, daiyuHandbookFinal01, daiyuHandbookFinal02];

  React.useEffect(() => {
    let frameId = 0;
    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      setProgress(Math.min(1, Math.max(0, -rect.top / travel)));
    };
    const onScroll = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const maskSize = `${4 + progress * 76}%`;

  return (
    <main className="practice-detail exhibition-detail">
      <header className="detail-header">
        <a className="wordmark" href="#hero">MENG ZHU</a>
        <a className="detail-back" href="#projects">返回作品集 <ArrowUpRight size={16} /></a>
      </header>
      <section className="exhibition-mask" ref={sectionRef} style={{ '--mask-size': maskSize }}>
        <div className="exhibition-mask__sticky">
          <div className="exhibition-mask__base" aria-hidden="true" />
          <img className="exhibition-mask__image" src={exhibitionScrollMaskImage} alt="展览现场与 VR 互动装置" />
          <div className="exhibition-mask__shade" aria-hidden="true" />
          <div className="exhibition-mask__copy">
            <p className="section-kicker">{item.english}</p>
            <h1>{item.title}</h1>
            <p>{item.text}</p>
          </div>
          <div className="exhibition-mask__progress" aria-hidden="true">
            <span style={{ transform: `scaleX(${progress})` }} />
            <em>SCROLL TO REVEAL</em>
          </div>
        </div>
      </section>
      <section className="exhibition-gallery shell" aria-label="黛玉葬花展演现场图片">
        <div className="exhibition-gallery__header"><p className="section-kicker">EXHIBITION DOCUMENTATION</p><span>{String(galleryIndex + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}</span></div>
        <div className="exhibition-gallery__stage">
          <img src={galleryImages[galleryIndex]} alt={`《黛玉葬花》展演现场 ${galleryIndex + 1}`} />
          <button type="button" aria-label="上一张图片" onClick={() => setGalleryIndex((galleryIndex - 1 + galleryImages.length) % galleryImages.length)}>←</button>
          <button type="button" aria-label="下一张图片" onClick={() => setGalleryIndex((galleryIndex + 1) % galleryImages.length)}>→</button>
        </div>
        <div className="exhibition-gallery__dots">{galleryImages.map((_, index) => <button key={index} type="button" aria-label={`查看第 ${index + 1} 张图片`} className={index === galleryIndex ? 'is-active' : ''} onClick={() => setGalleryIndex(index)} />)}</div>
      </section>
      <section className="practice-detail__body shell exhibition-detail__body">
        <p className="section-kicker exhibition-detail__kicker">Project Focus</p>
        <div className="exhibition-focus-layout"><div className="exhibition-focus-media" aria-label="项目场刊与证书"><figure><img src={daiyuHandbookFinal01} alt="《黛玉葬花》项目场刊" /><figcaption>Project Handbook / Cover &amp; Documentation</figcaption></figure><figure><img src={daiyuHandbookFinal02} alt="《黛玉葬花》项目介绍场刊" /><figcaption>Project Handbook / Introduction</figcaption></figure><figure><img src={mengZhuCertificate} alt="孟竹参与亚太戏剧联盟艺术节证书" /><figcaption>Festival Certificate / Meng Zhu</figcaption></figure></div><div className="exhibition-detail__rows">
          <div className="exhibition-detail__row"><strong>项目角色</strong><p>场景构建与交互策划 / 展陈视觉设计</p></div>
          <div className="exhibition-detail__row"><strong>制作周期</strong><p>2023 – 2025（持续迭代与多场地展演）</p></div>
          <div className="exhibition-detail__row"><strong>具体负责内容</strong><div className="exhibition-detail__content"><ol>
            <li><strong>前期场景构建策划：</strong>围绕戏曲叙事与园林微观场景，参与视觉概念设定与场景构建，将传统戏曲空间转译为可体验的沉浸式场景。</li>
            <li><strong>交互设计策划：</strong>参与 AI/MR 技术融合的交互体验策划，设计观众与戏曲内容的互动路径，规划技术实现与叙事节奏的配合。</li>
            <li><strong>实际展览展陈设计：</strong>根据不同展览场地和技术条件，完成展陈空间设计、内容适配与现场优化，保障作品在不同规模场地均可落地呈现。</li>
            <li><strong>物料设计：</strong>负责展陈物料、视觉宣传物料及场刊等配套设计，保障对外传播视觉统一。</li>
          </ol></div></div>
          <div className="exhibition-detail__row"><strong>项目结果</strong><div className="exhibition-detail__content"><ol>
            <li>入选<strong>文化和旅游数字化创新示范“十佳案例”</strong>。</li>
            <li>先后于<strong>元宇宙相关大会、Tech Shanghai 上海科技博览会、印度新德里亚太戏剧联盟（APB）艺术节</strong>完成多场地展演。</li>
            <li>以第一作者撰写论文《数字戏剧中参与式情感体验设计研究 —— 以 XR 作品〈黛玉葬花〉为例》，<strong>入选 ICISIP 2025 国际会议口头报告</strong>，于日本长崎大学完成汇报。</li>
          </ol></div></div>
        </div></div>
      </section>
    </main>
  );
}

function Advantages() {
  return (
    <section className="advantages section" id="advantages">
      <div className="shell">
        <div className="recognition-heading">
          <p className="section-kicker">SKILLS &amp; RECOGNITION</p>
          <h2>能力与认可</h2>
          <p>将生成式AI、影像制作与空间设计工具转化为稳定的创作能力，并以真实项目、学术成果与行业认可持续验证。</p>
        </div>
        <div className="skills-recognition-grid">
          <section className="skills-panel" aria-labelledby="skills-title">
            <div className="skills-panel__label"><span>01</span><h3 id="skills-title">能力</h3><em>SKILLS</em></div>
            <div className="skill-map" aria-label="职业能力图谱">
              <div className="skill-map__title"><span>MY SKILL MAP</span><strong>职业能力图谱</strong></div>
              <svg className="skill-map__orbits" viewBox="0 0 760 600" aria-hidden="true">
                <defs>
                  <linearGradient id="orbit-cyan" x1="0" x2="1"><stop stopColor="#1de7ff"/><stop offset="1" stopColor="#87fff0"/></linearGradient>
                  <linearGradient id="orbit-green" x1="0" x2="1"><stop stopColor="#c7ff3f"/><stop offset="1" stopColor="#32e5b2"/></linearGradient>
                  <filter id="map-glow"><feGaussianBlur stdDeviation="7" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                </defs>
                <path className="orbit orbit--one" d="M308 384 C390 210 632 85 674 138 C714 189 535 304 322 394"/>
                <path className="orbit orbit--two" d="M306 388 C430 250 652 293 626 421 C602 538 392 478 306 388"/>
                <path className="orbit orbit--three" d="M304 387 C395 300 435 118 318 105 C207 92 194 277 304 387"/>
                <path className="orbit orbit--four" d="M300 390 C217 345 66 394 74 508 C82 619 264 548 300 390"/>
                <circle className="orbit-dot orbit-dot--one" cx="674" cy="138" r="11"/>
                <circle className="orbit-dot orbit-dot--two" cx="626" cy="421" r="10"/>
                <circle className="orbit-dot orbit-dot--three" cx="318" cy="105" r="10"/>
                <circle className="orbit-dot orbit-dot--four" cx="74" cy="508" r="9"/>
              </svg>
              <div className="skill-map__core"><i/><span>AI × VISUAL</span><strong>创意生产核心</strong></div>
              {skillGroups.map((group, index) => (
                <article className={`skill-node skill-node--${index + 1}`} key={group.title}>
                  <span>{['Generative', 'Visual', 'Spatial', 'Language'][index]}</span>
                  <h4>{group.title}</h4>
                  <p>{group.skills.join(' / ')}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="recognition-panel" aria-labelledby="recognition-title">
            <div className="skills-panel__label"><span>02</span><h3 id="recognition-title">认可</h3><em>RECOGNITION</em></div>
            <ol className="recognition-list">
              {recognitions.map((item) => <li key={`${item.year}-${item.title}`}><time>{item.year}</time><strong>{item.title}</strong></li>)}
            </ol>
          </section>
        </div>
      </div>
    </section>
  );
}

function VisualStory() {
  const videoRef = React.useRef(null);

  const playVideo = () => {
    videoRef.current?.play().catch(() => {});
  };

  const pauseVideo = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  return (
    <section className="visual-story section" aria-label="视觉叙事展示">
      <div className="visual-story__canvas" onMouseEnter={playVideo} onMouseLeave={pauseVideo}>
        <div className="visual-story__empty">
          <video
            ref={videoRef}
            className="visual-story__video"
            src={videoUrls.rebirthFilm}
            poster={rebirthFrame02}
            muted
            playsInline
            loop
            preload="metadata"
            aria-label="《重生》影片预览"
          />
        </div>
        <div className="visual-story__rail" aria-hidden="true">
          <span className="visual-story__thumb"><img src={rebirthGridOne} alt="REBIRTH 场景 1" /></span>
          <span className="visual-story__thumb"><img src={rebirthGridTwo} alt="REBIRTH 场景 2" /></span>
          <span className="visual-story__thumb"><img src={rebirthGridThree} alt="REBIRTH 场景 3" /></span>
          <small>导演 / 视觉设计 / 后期制作</small>
          <strong>2026｜AIGC短片</strong>
          <em>香港国际AI电影节入围 / 优秀作品展映</em>
        </div>
        <a className="visual-story__button" href="#rebirth" aria-label="查看重生项目详情">
          <ArrowUpRight size={30} strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}

function RebirthDetail() {
  const [playing, setPlaying] = React.useState(false);
  const synopsis = '《重生》是一部由 AI 参与完成的非线性影像短片。影片以“时间是否可靠”为核心命题，通过现实时间、规则时间与结果时间三重结构的交错，在海面与海底之间往返，呈现一段被时间折叠的关系与记忆。影片不以线性因果推进故事，而是通过时间错位与信息延迟，让人物的选择、失去、代价与重生在不同时间层中反复显影，并在碎片化的记忆中逐步重构事件的真实因果。';
  const designBoards = [
    { image: rebirthBoard07, eyebrow: '01 / POSTER ANALYSIS', title: '情绪板', text: '以时间、海洋与记忆为核心意象，建立《重生》的世界观与情绪基调。' },
    { image: rebirthBoard08, eyebrow: '02 / EARLY STORYBOARD CONCEPT', title: '叙事设计', text: '用 A-line、B-line、C-line 三条时间线并行推进，让现实、规则与结果彼此折叠。' },
    { image: rebirthBoard10, eyebrow: '03 / DIRECTOR LANGUAGE', title: '角色设计 · 渔夫', text: '从人物经历、服装材质、动作姿态与色彩关系出发，建立角色在海边世界中的生存质感。' },
    { image: rebirthBoard12, eyebrow: '04 / DIRECTOR LANGUAGE', title: '角色设计 · 母亲', text: '用沉静、克制的造型语言承载家庭关系与时间痕迹，让人物成为现实与记忆的锚点。' },
    { image: rebirthBoard14, eyebrow: '05 / DIRECTOR LANGUAGE', title: '场景设计 · 水上渔屋', text: '以木桩、浓雾、水面与暖灯构成边缘空间，明确现实世界与未知海域的边界。' },
    { image: rebirthBoard09, eyebrow: '06 / NARRATIVE STRUCTURE', title: '叙事结构', text: '二条时间线交织并行，通过出海、选择、失去与重逢，完成非线性叙事的情绪闭环。' },
    { image: rebirthBoard11, eyebrow: '07 / RESULT', title: '色彩系统', text: '以深海蓝为主色，辅以冷青、雾灰与暖金，统一镜头中的现实、记忆和异界层次。' },
    { image: rebirthBoard15, eyebrow: '08 / PROCESS', title: '最终制作与导演反思', text: '通过镜头筛选、时间剪辑、视觉统一、声音设计与最终输出，把大量生成素材收束为完整影像。' },
  ];

  return (
    <main className="rebirth-detail">
      <header className="detail-header">
        <a className="wordmark" href="#projects">MENG ZHU</a>
        <a className="detail-back" href="#projects">返回作品集 <ArrowUpRight size={16} /></a>
      </header>
      <section className="detail-hero">
        <img src={rebirthAwardPoster} alt="《重生》入围海报" />
        <div className="detail-hero__synopsis"><p className="section-kicker">SYNOPSIS</p><p>{synopsis}</p></div>
        <button className="detail-hero__play" type="button" onClick={() => setPlaying(true)} aria-label="播放《重生》预览"><Play size={24} fill="currentColor" /><span>PLAY FILM</span></button>
      </section>
      {playing ? <div className="rebirth-video-modal" role="dialog" aria-modal="true" aria-label="《重生》影片预览"><button type="button" className="rebirth-video-modal__backdrop" onClick={() => setPlaying(false)} aria-label="关闭视频" /><div className="rebirth-video-modal__dialog"><button type="button" className="rebirth-video-modal__close" onClick={() => setPlaying(false)} aria-label="关闭视频">×</button><video src={videoUrls.rebirthFilm} controls autoPlay playsInline /></div></div> : null}
      <ParallaxStills />
      <section className="detail-intro shell">
        <div className="rebirth-facts" aria-label="项目制作信息">
          <div><span>项目角色</span><strong>导演 / AI 视觉创意 / 全流程制作（独立）</strong></div>
          <div><span>制作周期</span><strong>2026.04 – 2026.05（约 1.5 个月，成片 2 分 30 秒）</strong></div>
          <div><span>具体负责内容</span><strong>① 独立完成创意构思、剧本、导演分镜、视觉开发、AI 镜头生成、剪辑及声音设计；② 以非线性叙事完成主题表达；③ 通过关键帧控制、镜头筛选、色彩统一和剪辑修正解决角色一致性与视觉风格问题</strong></div>
          <div><span>项目结果</span><strong>入围 2026 香港国际 AI 电影节，入选优秀作品展映</strong></div>
        </div>
      </section>
      <section className="detail-process shell">
        <div className="detail-section-title">
          <p className="section-kicker">From Script To Screen</p>
          <h2>一部短片的设计逻辑</h2>
          <p>从剧本中的时间结构出发，逐步推导人物、场景、色彩与镜头调度，最终形成可执行、可统一的视觉系统。</p>
        </div>
        <div className="detail-board-grid">
          {designBoards.map((board) => (
            <article className="detail-board" key={board.image}>
              <div className="detail-board__image"><img src={board.image} alt={board.title} /></div>
              <p>{board.eyebrow}</p>
              <h3>{board.title}</h3>
              <span>{board.text}</span>
            </article>
          ))}
        </div>
      </section>
      <section className="detail-storyboard shell">
        <div className="detail-section-title">
          <p className="section-kicker">Storyboard Archive</p>
          <h2>连续分镜：把抽象时间变成可观看的镜头</h2>
          <p>前期先以黑白分镜验证景别、动作和情绪转折，再将其转译为最终的影像语言。</p>
        </div>
        <div className="detail-storyboard__frame"><img src={rebirthStoryboard} alt="《重生》竖版连续分镜" /></div>
      </section>
    </main>
  );
}

function ParallaxStills() {
  const stills = [
    { image: rebirthFrame01, label: '01 / 远景建立：驶入雾海' },
    { image: rebirthStill4, label: '02 / 情绪与镜头语言' },
    { image: rebirthStill3, label: '03 / 场景与光色系统' },
    { image: rebirthFrame03, label: '04 / 动作细节：拉网' },
    { image: rebirthFrame05, label: '05 / 记忆折叠：水中倒影' },
    { image: rebirthStill5, label: '06 / 非重力空间' },
    { image: rebirthStill2, label: '07 / 结果空间：门与海' },
  ];
  const [active, setActive] = React.useState(1);
  const [dragging, setDragging] = React.useState(false);
  const dragStart = React.useRef(0);
  const dragOffset = React.useRef(0);

  const shift = (direction) => setActive((current) => (current + direction + stills.length) % stills.length);
  const onPointerDown = (event) => {
    dragStart.current = event.clientX;
    dragOffset.current = 0;
    setDragging(true);
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };
  const onPointerMove = (event) => {
    if (!dragging) return;
    dragOffset.current = event.clientX - dragStart.current;
  };
  const onPointerUp = () => {
    if (!dragging) return;
    if (Math.abs(dragOffset.current) > 70) shift(dragOffset.current < 0 ? 1 : -1);
    setDragging(false);
    dragOffset.current = 0;
  };

  return (
    <section className="stills-section shell">
      <div className="detail-section-title">
        <p className="section-kicker">Stills / Parallax Carousel</p>
        <h2>关键帧</h2>
        <p>以一组关键剧照呈现人物、空间与时间层的变化。拖动图片，沿着短片的情绪轨迹继续观看。</p>
      </div>
      <div
        className={`stills-carousel${dragging ? ' is-dragging' : ''}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="region"
        aria-label="《重生》剧照轮播"
      >
        {stills.map((still, index) => {
          const offset = (index - active + stills.length) % stills.length;
          const normalized = offset > stills.length / 2 ? offset - stills.length : offset;
          const visible = Math.abs(normalized) <= 2;
          return (
            <figure
              className={`still-card${visible ? '' : ' is-hidden'}`}
              key={still.image}
              style={{ '--card-offset': normalized, '--card-depth': Math.abs(normalized) }}
            >
              <img src={still.image} alt={still.label} draggable="false" />
            </figure>
          );
        })}
        <button className="stills-control stills-control--prev" type="button" onClick={() => shift(-1)} aria-label="上一张剧照">←</button>
        <button className="stills-control stills-control--next" type="button" onClick={() => shift(1)} aria-label="下一张剧照">→</button>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer className="contact-section section" id="contact">
      <AuroraBeam />
      <div className="shell contact-inner">
        <p className="section-kicker">Contact</p>
        <ContactReveal />
        <div className="contact-info-grid">
          <div className="contact-info-item">
            <span>Target Roles</span>
            <strong>AI视觉设计师 · AIGC影像创意 · AI视频制作 · 视觉开发</strong>
          </div>
          <div className="contact-info-item">
            <span>Availability</span>
            <strong>上海｜全职工作</strong>
          </div>
          <a className="contact-info-item contact-info-item--link" href="/resume.pdf" download>
            <span>Download Resume</span>
            <strong>下载PDF简历 <ArrowUpRight size={18} /></strong>
          </a>
        </div>
        <div className="contact-actions">
          <a className="primary-btn large" href="mailto:740050785@qq.com">
            <Mail size={21} />
            发送邮件
          </a>
          <a className="ghost-btn large" href="tel:15605162339">
            <Phone size={20} />
            电话联系
          </a>
        </div>
        <div className="footer-meta">
          <span>孟竹 Meng Zhu</span>
          <span>Shanghai · AI Visual Design · Content Creative Planning</span>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const practiceBySlug = React.useMemo(() => Object.fromEntries(disciplines.map((item) => [item.slug, item])), []);
  const [route, setRoute] = React.useState(() => window.location.hash.slice(1));

  React.useEffect(() => {
    const syncRoute = () => setRoute(window.location.hash.slice(1));
    window.addEventListener('hashchange', syncRoute);
    return () => window.removeEventListener('hashchange', syncRoute);
  }, []);

  if (route === 'rebirth') return <RebirthDetail />;
  if (practiceBySlug[route]) return <PracticeDetail item={practiceBySlug[route]} />;

  return (
    <>
      <Hero />
      <About />
      <DisciplineSection />
      <Advantages />
      <Contact />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
