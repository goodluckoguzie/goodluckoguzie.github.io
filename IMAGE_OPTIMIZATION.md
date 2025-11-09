# Image Optimization Guide

This guide explains how to optimize images for the website to improve performance and loading times.

## WebP Format Support

The website now supports WebP images with automatic fallbacks. WebP provides:
- **25-35% smaller file sizes** compared to JPEG
- **50% smaller** compared to PNG
- Same or better quality
- Automatic fallback for older browsers

## How to Convert Images to WebP

### Option 1: Online Tools
1. Visit [Squoosh.app](https://squoosh.app/) or [CloudConvert](https://cloudconvert.com/)
2. Upload your image
3. Select WebP format
4. Adjust quality (recommended: 80-90%)
5. Download the optimized image

### Option 2: Command Line (ImageMagick)
```bash
# Install ImageMagick first
magick input.jpg -quality 85 output.webp
```

### Option 3: Python Script
```python
from PIL import Image
import os

def convert_to_webp(input_path, output_path, quality=85):
    image = Image.open(input_path)
    image.save(output_path, 'WEBP', quality=quality, optimize=True)

# Example
convert_to_webp('goodluck.jpg', 'goodluck.webp', quality=85)
```

## Recommended Image Sizes

### Profile Photos
- **Size:** 400x400px (square)
- **Format:** WebP (with JPG fallback)
- **Quality:** 85%
- **Max file size:** 50KB

### Research Images/Diagrams
- **Size:** Max width 1200px
- **Format:** WebP (with PNG fallback for diagrams)
- **Quality:** 85-90%
- **Max file size:** 200KB

### Screenshots/Demos
- **Size:** Max width 1600px
- **Format:** WebP
- **Quality:** 80-85%
- **Max file size:** 300KB

## Implementation

### Using WebP with Fallback

```html
<picture>
  <source srcset="/assets/images/image.webp" type="image/webp">
  <img src="/assets/images/image.jpg" alt="Description" loading="lazy">
</picture>
```

### Current Implementation

The website automatically:
- ✅ Adds `loading="lazy"` to all images
- ✅ Adds `decoding="async"` for better performance
- ✅ Detects WebP support
- ✅ Handles broken images gracefully

## Image Compression Checklist

- [ ] Convert all images to WebP format
- [ ] Keep original formats as fallbacks
- [ ] Optimize image dimensions (don't use oversized images)
- [ ] Use appropriate quality settings (80-90%)
- [ ] Add descriptive alt text
- [ ] Use `loading="lazy"` for below-fold images
- [ ] Compress images before uploading

## Tools for Image Optimization

1. **Squoosh** - https://squoosh.app/ (Best for one-off conversions)
2. **TinyPNG** - https://tinypng.com/ (Great compression)
3. **ImageOptim** - Desktop app for Mac
4. **GIMP** - Free image editor with WebP export
5. **Photoshop** - Export as WebP (File > Export > Save for Web)

## Performance Impact

Optimized images can improve:
- ⚡ **Page load time:** 30-50% faster
- 📱 **Mobile data usage:** 25-35% less
- 🎯 **SEO score:** Better Core Web Vitals
- 💰 **Bandwidth costs:** Reduced hosting costs

## Next Steps

1. Convert existing images to WebP
2. Replace image references in markdown files
3. Test on different browsers
4. Monitor performance improvements

