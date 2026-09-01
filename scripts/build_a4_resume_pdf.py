from pathlib import Path
import textwrap

from PIL import Image, ImageOps, ImageDraw
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas


ROOT = Path("/Users/mengzhu/Documents/个人网站")
OUT = ROOT / "output" / "resume" / "孟竹_AI美术导演_A4竖版简历.pdf"
PORTRAIT = ROOT / "src" / "assets" / "profile-portrait.jpg"
TMP_PHOTO = ROOT / "tmp" / "resume_portrait_pdf.png"

W, H = A4
M = 36
LEFT_W = 150
GAP = 28
RIGHT_X = M + LEFT_W + GAP
RIGHT_W = W - RIGHT_X - M
ACCENT = HexColor("#F2B600")
INK = HexColor("#111111")
MUTED = HexColor("#5F6266")
LIGHT = HexColor("#D8D8D8")
PALE = HexColor("#F3F3F3")


pdfmetrics.registerFont(TTFont("STHeiti", "/System/Library/Fonts/STHeiti Medium.ttc"))
CN = "STHeiti"
EN = "Helvetica"
ENB = "Helvetica-Bold"


def make_photo():
    img = Image.open(PORTRAIT).convert("RGB")
    w, h = img.size
    target_ratio = 0.76
    crop_h = int(h * 0.92)
    crop_w = int(crop_h * target_ratio)
    if crop_w > w:
        crop_w = w
        crop_h = int(crop_w / target_ratio)
    left = max(0, int((w - crop_w) * 0.5))
    top = max(0, int(h * 0.04))
    img = img.crop((left, top, left + crop_w, top + crop_h))
    img = ImageOps.grayscale(img)
    img = ImageOps.autocontrast(img, cutoff=1)
    img = ImageOps.colorize(img, black="#080808", white="#f1f1f1")
    img = img.resize((600, 790))
    draw = ImageDraw.Draw(img)
    draw.polygon([(0, 700), (80, 790), (0, 790)], fill="#F2B600")
    TMP_PHOTO.parent.mkdir(exist_ok=True)
    img.save(TMP_PHOTO)
    return TMP_PHOTO


def chars_width(text, cn_width=1.78):
    width = 0
    for ch in text:
        width += cn_width if ord(ch) > 127 else 1
    return width


def wrap_mixed(text, max_units):
    lines, line, units = [], "", 0
    for ch in text:
        w = 1.78 if ord(ch) > 127 else 1
        if units + w > max_units and line:
            lines.append(line)
            line, units = ch, w
        else:
            line += ch
            units += w
    if line:
        lines.append(line)
    return lines


def draw_text(c, x, y, text, size=8, color=MUTED, font=CN):
    c.setFillColor(color)
    c.setFont(font, size)
    c.drawString(x, y, text)


def draw_heading(c, x, y, text):
    c.setFillColor(INK)
    c.setFont(ENB, 12)
    c.drawString(x, y, text.upper())
    return y - 22


def draw_kicker(c, x, y, text):
    c.setFillColor(INK)
    c.setFont(ENB, 7.5)
    c.drawString(x, y, f"// {text}")
    return y - 14


def draw_bullet(c, x, y, text, max_units=24, size=7.2, leading=10):
    lines = wrap_mixed(text, max_units)
    c.setFillColor(INK)
    c.setFont(EN, size)
    c.drawString(x, y, "•")
    for idx, line in enumerate(lines):
        draw_text(c, x + 14, y - idx * leading, line, size, MUTED)
    return y - max(1, len(lines)) * leading - 2


def draw_body(c, x, y, text, max_units=54, size=7.5, leading=10.5, color=MUTED):
    lines = wrap_mixed(text, max_units)
    for idx, line in enumerate(lines):
        draw_text(c, x, y - idx * leading, line, size, color)
    return y - len(lines) * leading


def draw_exp(c, x, y, title, subtitle, bullets):
    c.setStrokeColor(INK)
    c.setLineWidth(0.65)
    c.line(x, y + 3, x, y - 58)
    c.circle(x, y + 1, 1.3, fill=1)
    draw_text(c, x + 20, y, title, 9.2, INK)
    draw_text(c, x + 20, y - 12, subtitle, 7.2, INK)
    yy = y - 24
    for b in bullets:
        yy = draw_bullet(c, x + 20, yy, b, max_units=55, size=6.8, leading=8.8)
    return yy - 5


def draw_project(c, x, y, title, subtitle, desc):
    draw_text(c, x, y, title, 8.0, INK)
    draw_text(c, x + 132, y, subtitle, 6.7, MUTED)
    y -= 10
    return draw_body(c, x, y, desc, max_units=72, size=6.8, leading=8.8) - 2


def draw_rating(c, x, y, heading, rows):
    draw_text(c, x, y, heading, 8.5, INK, ENB)
    y -= 13
    for label, dots in rows:
        draw_text(c, x, y, label, 6.4, MUTED, EN)
        for i in range(5):
            c.setFillColor(INK if i < dots else HexColor("#CECECE"))
            c.circle(x + 70 + i * 6, y + 2, 1.8, fill=1, stroke=0)
        y -= 10


def build():
    OUT.parent.mkdir(parents=True, exist_ok=True)
    photo = make_photo()
    c = canvas.Canvas(str(OUT), pagesize=A4)
    c.setFillColor(HexColor("#FAFAFA"))
    c.rect(0, 0, W, H, fill=1, stroke=0)

    # Left column.
    c.drawImage(str(photo), M, H - M - 185, width=126, height=166, mask="auto")
    y = H - M - 225
    y = draw_heading(c, M, y, "Skills")
    y = draw_kicker(c, M, y, "AIGC / TECH")
    for item in ["MJ / SD / Runway", "Sora / Veo3", "关键帧 / 风格迭代", "角色一致性 / 场景连贯性"]:
        y = draw_bullet(c, M, y, item, max_units=23)
    y -= 5
    y = draw_kicker(c, M, y, "DESIGN")
    for item in ["角色与场景概念设定", "色彩体系 / 光影氛围", "PS / AI / ID", "Blender / SketchUp", "AutoCAD"]:
        y = draw_bullet(c, M, y, item, max_units=23)
    y -= 7
    y = draw_heading(c, M, y, "Education")
    for title, desc in [
        ("上海戏剧学院", "艺术与科技 硕士 | 2023 - 2026"),
        ("南京大学金陵学院", "环境设计 本科 | GPA 4.17"),
        ("台湾元智大学", "交换生 | 日本语中高阶进修"),
    ]:
        draw_text(c, M, y, title, 7.6, INK)
        y -= 10
        y = draw_body(c, M, y, desc, max_units=24, size=6.8, leading=8.6) - 6
    y = draw_heading(c, M, y, "Honors")
    for item in ["2026 香港国际 AI 电影节优秀作品入选", "2024 大学生 AI 艺术季入围", "平面设计师证 / 美术教师资格证", "英语 CET-6 / 日语 N2"]:
        y = draw_bullet(c, M, y, item, max_units=23, size=6.8, leading=8.8)
    y -= 6
    y = draw_heading(c, M, y, "Contact")
    for item in ["P: 15605162339", "E: 740050785@qq.com", "A: 上海", "D: AI 美术 / AIGC 视觉指导"]:
        draw_text(c, M, y, item, 7.0, MUTED, CN if any(ord(ch) > 127 for ch in item) else EN)
        y -= 10

    # Header right.
    top = H - M - 18
    c.setFont(ENB, 27)
    c.setFillColor(ACCENT)
    c.drawString(RIGHT_X, top, "/")
    c.setFillColor(INK)
    c.setFont(ENB, 21)
    c.drawString(RIGHT_X + 20, top, "Meng")
    c.setFont(ENB, 34)
    c.drawString(RIGHT_X, top - 38, "ZHU")
    c.setLineWidth(0.6)
    c.setStrokeColor(INK)
    c.line(RIGHT_X, top - 65, RIGHT_X, top - 40)
    draw_text(c, RIGHT_X + 15, top - 58, "AI ART DIRECTOR / AIGC VISUAL LEAD", 9.4, INK, EN)

    cx = RIGHT_X + 245
    for idx, (label, value) in enumerate([("P", "15605162339"), ("E", "740050785@qq.com"), ("L", "Shanghai"), ("S", "Visual / Brand / Spatial Design")]):
        yy = top - idx * 13
        draw_text(c, cx, yy, f"{label}:", 7.0, INK, ENB)
        draw_text(c, cx + 15, yy, value, 7.0, MUTED, EN)

    y = top - 98
    intro = "艺术设计硕士，AIGC 视觉与美术方向深度实践者。擅长以导演思维统领 AI 影像叙事，从概念设定、关键帧、角色与场景构建到成片审校，稳定控制风格一致性、情绪氛围与商业落地品质。"
    y = draw_body(c, RIGHT_X, y, intro, max_units=74, size=7.6, leading=11.2) - 18

    y = draw_heading(c, RIGHT_X, y, "Work Experience")
    for title, subtitle, bullets in [
        ("漫剧项目", "AI 美术主导 / 视频质量把控 | 2025.08 - 2026.03", ["负责整体视觉风格、美术方向、角色设计、场景构建与画面氛围。", "主导 AI 画面生成与成片视觉审核，保障角色一致性、场景连贯性与剪辑节奏。", "作品于红果上线，斩获千万级热度，验证 AI 内容商业化转化能力。"]),
        ("APB 艺术节 & 无锡蠡湖生态设计节", "视觉设计师 | 2024.03 - 2024.12", ["输出 AIGC 展演视觉方案，落地主视觉海报、KV 展板、场刊与展陈物料。", "从 0 到 1 参与生态设计节摄影展策划、建模与现场布置，观展 10 万+，媒介报道 10+。"]),
        ("上海铁海文化艺术交流策划有限公司", "设计师（实习） | 2023.09 - 2023.11", ["承接西岸艺术与博览会展位空间设计，以用户体验思维完成功能分区和模块化布局。", "完成展签、画册、施工深化与现场布展协作，推动展览按期落地。"]),
    ]:
        y = draw_exp(c, RIGHT_X + 6, y, title, subtitle, bullets)

    y -= 4
    y = draw_heading(c, RIGHT_X, y, "Core AIGC Projects")
    for title, subtitle, desc in [
        ("AI 影片《重生》", "导演 / AI 美术 / 视觉 | 2026", "入围首届香港国际 AI 电影节官方评选；完成非线性叙事结构、整体视觉风格、角色与场景构建，并把控全片风格一致性。"),
        ("生成式 AI 艺术展《创世纪 · 和合共生》", "AI 视觉主创 | 2024 - 2025", "负责整体视觉语言、关键帧生成与互动装置设计；项目于上海展出并赴保加利亚巡展。"),
        ("沉浸式 AI&MR 戏曲《黛玉葬花》", "AIGC 视觉创意 | 2024", "完成园林微观场景与 MR 的视觉融合，支撑戏曲叙事的情绪与氛围呈现。"),
        ("未来戏剧展厅", "AI 生成视觉内容 / UI 设计", "负责 AI 生成音乐区域 UI 与视觉内容，落地图形智能编译、自然语言驱动动态视觉生成亮点。"),
    ]:
        y = draw_project(c, RIGHT_X, y, title, subtitle, desc)

    # Footer ability matrix.
    fy = 76
    c.setStrokeColor(LIGHT)
    c.setLineWidth(0.7)
    c.line(M, fy + 24, W - M, fy + 24)
    footer_items = [
        ("AIGC VISUAL", [("Style Control", 5), ("Keyframes", 5), ("Video Tools", 4)]),
        ("ART DIRECTION", [("Character", 5), ("Scene", 4), ("Color/Light", 5)]),
        ("SPATIAL DESIGN", [("Exhibition", 5), ("CAD/SketchUp", 4), ("Execution", 4)]),
        ("BRAND TOOLS", [("PS/AI/ID", 5), ("Blender", 4), ("Bilingual", 4)]),
    ]
    for i, item in enumerate(footer_items):
        draw_rating(c, M + i * 132, fy, item[0], item[1])

    c.showPage()
    c.save()
    print(OUT)


if __name__ == "__main__":
    build()
