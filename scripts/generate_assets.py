from math import cos, sin, pi
from pathlib import Path
import random

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "src" / "assets"
ASSETS.mkdir(parents=True, exist_ok=True)


def font(size, bold=False):
    names = [
        "/System/Library/Fonts/PingFang.ttc",
        "/System/Library/Fonts/STHeiti Light.ttc",
        "/System/Library/Fonts/Supplemental/Songti.ttc",
        "/System/Library/Fonts/Supplemental/Arial Unicode.ttf",
        "/System/Library/Fonts/Supplemental/Arial.ttf",
    ]
    for name in names:
        if Path(name).exists():
            for index in ([0, 1, 2, 3, 4, 5, 8] if bold else [0, 1, 2, 3, 4, 5]):
                try:
                    return ImageFont.truetype(name, size=size, index=index)
                except OSError:
                    continue
    return ImageFont.load_default()


def gradient(size, colors):
    w, h = size
    sw, sh = min(w, 240), min(h, 160)
    img = Image.new("RGB", (sw, sh), colors[0])
    px = img.load()
    for y in range(sh):
        for x in range(sw):
            nx = x / max(1, sw - 1)
            ny = y / max(1, sh - 1)
            t = min(1, max(0, (nx * 0.62 + ny * 0.7)))
            if t < 0.5:
                a, b, p = colors[0], colors[1], t / 0.5
            else:
                a, b, p = colors[1], colors[2], (t - 0.5) / 0.5
            px[x, y] = tuple(int(a[i] * (1 - p) + b[i] * p) for i in range(3))
    return img.resize(size, Image.Resampling.BICUBIC)


def draw_lines(draw, w, h, seed):
    random.seed(seed)
    for _ in range(58):
        points = []
        base_y = random.randint(int(h * 0.12), int(h * 0.88))
        amp = random.randint(14, 72)
        phase = random.random() * pi
        for x in range(-80, w + 90, 34):
            y = base_y + sin((x / w) * pi * 3 + phase) * amp + random.randint(-9, 9)
            points.append((x, y))
        color = random.choice([(120, 247, 255), (184, 255, 104), (255, 207, 112), (244, 247, 245)])
        alpha = random.randint(28, 92)
        draw.line(points, fill=(*color, alpha), width=random.choice([1, 1, 2, 3]))


def make_project(path, title, subtitle, palette, seed):
    w, h = 1500, 980
    img = gradient((w, h), palette).convert("RGBA")
    overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay, "RGBA")
    draw_lines(draw, w, h, seed)
    random.seed(seed)
    for i in range(22):
        cx, cy = random.randint(0, w), random.randint(0, h)
        r = random.randint(80, 260)
        col = random.choice([(120, 247, 255, 34), (184, 255, 104, 26), (255, 207, 112, 24)])
        draw.ellipse((cx - r, cy - r, cx + r, cy + r), outline=col, width=random.randint(1, 3))
    for x in range(0, w, 92):
        draw.line((x, 0, x, h), fill=(244, 247, 245, 12), width=1)
    for y in range(0, h, 92):
        draw.line((0, y, w, y), fill=(244, 247, 245, 10), width=1)
    img = Image.alpha_composite(img, overlay.filter(ImageFilter.GaussianBlur(0.15)))
    shade = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    sd = ImageDraw.Draw(shade, "RGBA")
    sd.rectangle((0, int(h * 0.42), w, h), fill=(2, 4, 7, 150))
    img = Image.alpha_composite(img, shade)
    d = ImageDraw.Draw(img, "RGBA")
    d.text((62, h - 202), title, font=font(68, True), fill=(244, 247, 245, 238))
    d.text((66, h - 112), subtitle, font=font(28), fill=(244, 247, 245, 166))
    d.line((66, h - 244, 320, h - 244), fill=(184, 255, 104, 180), width=3)
    img.convert("RGB").save(ASSETS / path, quality=92)


def make_portrait():
    w, h = 1100, 1400
    img = gradient((w, h), [(10, 12, 16), (18, 24, 31), (8, 10, 12)]).convert("RGBA")
    d = ImageDraw.Draw(img, "RGBA")
    for r in range(520, 60, -22):
        alpha = int(9 + (520 - r) / 520 * 24)
        d.ellipse((w / 2 - r, 180 - r / 3, w / 2 + r, 180 + r * 1.65), outline=(120, 247, 255, alpha), width=2)
    d.ellipse((352, 225, 748, 620), fill=(38, 47, 54, 230), outline=(244, 247, 245, 42), width=2)
    d.polygon([(254, 1260), (386, 705), (714, 705), (850, 1260)], fill=(28, 35, 42, 235))
    d.polygon([(380, 720), (550, 1040), (720, 720)], fill=(244, 247, 245, 18))
    for i in range(24):
        y = 740 + i * 20
        d.line((330, y, 780, y + random.randint(-8, 8)), fill=(120, 247, 255, 22), width=1)
    d.text((72, 82), "MENG ZHU", font=font(54, True), fill=(244, 247, 245, 218))
    d.text((76, 152), "AI ART DIRECTION", font=font(25), fill=(184, 255, 104, 184))
    img = img.filter(ImageFilter.UnsharpMask(radius=1.2, percent=105))
    img.convert("RGB").save(ASSETS / "portrait.png", quality=92)


def make_contact_bg():
    w, h = 1800, 1100
    img = gradient((w, h), [(4, 6, 9), (12, 18, 22), (4, 5, 8)]).convert("RGBA")
    d = ImageDraw.Draw(img, "RGBA")
    draw_lines(d, w, h, 99)
    for i in range(16):
        x = int(w * (i / 15))
        d.line((x, h, int(w * 0.58), int(h * 0.24)), fill=(244, 247, 245, 15), width=1)
    img.filter(ImageFilter.GaussianBlur(0.3)).convert("RGB").save(ASSETS / "contact-bg.png", quality=90)


def make_hero_frames():
    w, h = 1280, 720
    frame_dir = ASSETS / "hero_frames"
    frame_dir.mkdir(exist_ok=True)
    for frame in range(48):
        t = frame / 48
        img = gradient((w, h), [(3, 5, 8), (10, 18, 23), (3, 4, 7)]).convert("RGBA")
        d = ImageDraw.Draw(img, "RGBA")
        for i in range(36):
            phase = t * pi * 2 + i * 0.27
            y = h * (0.18 + 0.64 * ((i % 9) / 8))
            points = []
            for x in range(-120, w + 140, 42):
                yy = y + sin(x / 160 + phase) * (24 + (i % 5) * 9) + cos(x / 230 - phase) * 34
                points.append((x, yy))
            color = [(120, 247, 255, 74), (184, 255, 104, 48), (255, 207, 112, 38)][i % 3]
            d.line(points, fill=color, width=1 + (i % 3 == 0))
        for i in range(10):
            cx = w * (0.15 + 0.72 * ((i * 0.137 + t * 0.08) % 1))
            cy = h * (0.22 + 0.52 * ((i * 0.217 + t * 0.05) % 1))
            r = 90 + 18 * sin(t * pi * 2 + i)
            d.ellipse((cx - r, cy - r, cx + r, cy + r), outline=(120, 247, 255, 18), width=2)
        img.convert("RGB").save(frame_dir / f"frame_{frame:03d}.jpg", quality=86)
    Image.open(frame_dir / "frame_000.jpg").save(ASSETS / "hero-poster.png")


def main():
    make_project("project-rebirth.png", "重生", "AI Film · Visual Direction", [(8, 9, 13), (23, 33, 38), (3, 5, 9)], 11)
    make_project("project-genesis.png", "创世纪 · 和合共生", "Generative Exhibition · Installation", [(6, 10, 12), (22, 38, 35), (4, 6, 8)], 22)
    make_project("project-daiyu.png", "黛玉葬花", "AI & MR Opera · Stage Visual", [(8, 8, 12), (34, 24, 40), (5, 7, 9)], 33)
    make_project("project-commercial.png", "商业广告", "AI Commercial · Brand Film", [(5, 7, 9), (35, 32, 22), (6, 6, 8)], 44)
    make_portrait()
    make_contact_bg()
    make_hero_frames()


if __name__ == "__main__":
    main()
