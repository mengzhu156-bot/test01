from pathlib import Path
from random import Random

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageOps


ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path("/Users/mengzhu/Desktop/孟/photo/近期肖像.jpg")
OUT = ROOT / "src" / "assets" / "hero-eyes.jpg"


def main():
    src = Image.open(SOURCE).convert("RGB")
    crop = src.crop((620, 380, 4100, 4200))
    crop = crop.resize((1380, 1515), Image.Resampling.LANCZOS)

    mono = ImageOps.grayscale(crop)
    mono = ImageOps.autocontrast(mono, cutoff=1)
    mono = ImageEnhance.Contrast(mono).enhance(1.28)
    mono = ImageEnhance.Brightness(mono).enhance(0.72)
    portrait = ImageOps.colorize(mono, black="#030405", white="#e5e1d7").convert("RGBA")

    canvas = Image.new("RGBA", (1920, 1080), "#050505")
    photo_layer = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    photo_layer.alpha_composite(portrait, (340, -475))

    mask = Image.new("L", canvas.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((450, 310, 1480, 700), fill=218)
    draw.ellipse((560, 365, 1370, 625), fill=255)
    draw.rectangle((560, 425, 1370, 610), fill=232)
    mask = mask.filter(ImageFilter.GaussianBlur(58))

    visible = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    visible = Image.composite(photo_layer, visible, mask)
    canvas = Image.alpha_composite(canvas, visible)

    shadow = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    sd = ImageDraw.Draw(shadow, "RGBA")
    sd.rectangle((0, 0, 1920, 310), fill=(0, 0, 0, 218))
    sd.rectangle((0, 700, 1920, 1080), fill=(0, 0, 0, 232))
    sd.polygon([(0, 0), (760, 0), (360, 1080), (0, 1080)], fill=(0, 0, 0, 152))
    sd.polygon([(1920, 0), (1370, 0), (1640, 1080), (1920, 1080)], fill=(0, 0, 0, 172))
    sd.rectangle((0, 0, 1920, 1080), outline=(0, 0, 0, 60), width=120)
    shadow = shadow.filter(ImageFilter.GaussianBlur(18))
    canvas = Image.alpha_composite(canvas, shadow)

    tint = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    td = ImageDraw.Draw(tint, "RGBA")
    td.ellipse((520, 330, 1380, 690), fill=(255, 105, 58, 28))
    td.ellipse((640, 370, 1280, 650), fill=(244, 247, 245, 18))
    tint = tint.filter(ImageFilter.GaussianBlur(80))
    canvas = Image.alpha_composite(canvas, tint)

    grain = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    gp = grain.load()
    rng = Random(24)
    for y in range(0, 1080, 2):
        for x in range(0, 1920, 2):
            value = rng.randint(0, 24)
            gp[x, y] = (255, 255, 255, value)
    grain = grain.filter(ImageFilter.GaussianBlur(0.25))
    canvas = Image.alpha_composite(canvas, grain)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    canvas.convert("RGB").save(OUT, quality=92, optimize=True)


if __name__ == "__main__":
    main()
