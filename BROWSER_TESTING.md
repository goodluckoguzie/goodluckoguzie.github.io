# Browser Testing Checklist

## Test Environment Setup

### Browsers to Test
- ✅ Chrome/Edge (Chromium-based)
- ✅ Firefox
- ✅ Safari (if available)
- ✅ Mobile browsers (Chrome Mobile, Safari Mobile)

### Testing Tools
- Browser DevTools
- Responsive Design Mode
- Network Throttling (Slow 3G)
- Lighthouse (Performance, Accessibility, SEO)

---

## Feature Testing Checklist

### 1. 3D/4D Visual Effects
- [ ] **Chrome/Edge**: Cards tilt on hover
- [ ] **Firefox**: Cards tilt on hover
- [ ] **Safari**: Cards tilt on hover
- [ ] **Mobile**: Reduced effects work correctly
- [ ] **Dark Mode**: All effects work in dark mode
- [ ] **Performance**: No lag or jank on scroll

### 2. 5D Holographic Effects
- [ ] **Chrome/Edge**: Rainbow text animations visible
- [ ] **Firefox**: Rainbow text animations visible
- [ ] **Safari**: Rainbow text animations visible (may need -webkit prefix)
- [ ] **Mobile**: Animations disabled/reduced
- [ ] **Holographic sweeps**: Cards show rotating rainbow sweeps
- [ ] **Chromatic aberration**: Text splits on hover
- [ ] **Badge effects**: Rainbow gradients animate
- [ ] **Button effects**: Rainbow on hover

### 3. Search Functionality
- [ ] **Chrome/Edge**: Search opens with Ctrl+K
- [ ] **Firefox**: Search opens with Ctrl+K
- [ ] **Safari**: Search opens with Cmd+K (Mac)
- [ ] **Mobile**: Search button works (tap)
- [ ] **Results**: Search returns relevant results
- [ ] **Highlighting**: Search terms highlighted
- [ ] **Keyboard nav**: Enter key selects first result
- [ ] **Escape**: Closes search overlay

### 4. Social Sharing
- [ ] **Twitter**: Opens with correct URL and text
- [ ] **LinkedIn**: Opens share dialog
- [ ] **Email**: Opens email client
- [ ] **Copy Link**: Copies URL to clipboard
- [ ] **Visual feedback**: Buttons show hover effects

### 5. Citation Tools
- [ ] **Detection**: Citations appear on publications
- [ ] **Format switching**: APA, MLA, Chicago, BibTeX work
- [ ] **Copy button**: Copies citation correctly
- [ ] **Visual feedback**: Shows "Copied!" message
- [ ] **Multiple publications**: Works on all publications

### 6. Reading Time
- [ ] **Calculation**: Shows accurate reading time
- [ ] **Display**: Appears on all pages
- [ ] **Format**: Shows "X min read" correctly

### 7. Accessibility Features
- [ ] **Skip link**: Appears on Tab key press
- [ ] **Focus states**: Visible outlines on all interactive elements
- [ ] **Keyboard navigation**: All links/buttons accessible via keyboard
- [ ] **Screen reader**: ARIA labels work correctly
- [ ] **Color contrast**: Meets WCAG AA standards

### 8. Performance Features
- [ ] **Lazy loading**: Images load as you scroll
- [ ] **Preload**: Critical resources load first
- [ ] **Image optimization**: WebP detection works
- [ ] **Error handling**: Broken images handled gracefully

### 9. Enhanced Features
- [ ] **Scroll progress**: Rainbow bar at top
- [ ] **Copy code**: Buttons appear on code blocks
- [ ] **Keyboard shortcuts**: H, P, R keys work
- [ ] **404 page**: Search button works
- [ ] **404 page**: All links work

### 10. Responsive Design
- [ ] **Mobile (320px)**: Layout adapts correctly
- [ ] **Tablet (768px)**: Layout adapts correctly
- [ ] **Desktop (1200px+)**: Full features work
- [ ] **Touch targets**: Buttons large enough on mobile
- [ ] **Navigation**: Mobile menu works

### 11. Dark Mode
- [ ] **Toggle**: Theme toggle works
- [ ] **Persistence**: Preference saved in localStorage
- [ ] **All pages**: Dark mode works on all pages
- [ ] **Holographic effects**: Adjusted for dark mode
- [ ] **Contrast**: Text readable in dark mode

### 12. SEO & Meta Tags
- [ ] **Structured data**: Validates in Google Rich Results Test
- [ ] **Meta descriptions**: Present on all pages
- [ ] **Open Graph**: Preview works on social media
- [ ] **Sitemap**: Accessible at /sitemap.xml
- [ ] **Robots.txt**: Accessible at /robots.txt

---

## Browser-Specific Issues to Check

### Chrome/Edge (Chromium)
- ✅ Should work perfectly (modern browser)
- Check: CSS Grid, Flexbox, CSS Variables
- Check: Intersection Observer
- Check: Clipboard API

### Firefox
- ⚠️ May need: `-moz-` prefixes (already handled)
- Check: backdrop-filter support
- Check: CSS animations
- Check: WebP support

### Safari
- ⚠️ May need: `-webkit-` prefixes (already handled)
- Check: backdrop-filter (Safari 9+)
- Check: CSS Grid support
- Check: Intersection Observer
- Check: WebP support (Safari 14+)

### Mobile Browsers
- ⚠️ Reduced effects should activate
- Check: Touch events work
- Check: Viewport meta tag
- Check: Performance on slow connections

---

## Performance Testing

### Lighthouse Scores (Target: 90+)
- [ ] **Performance**: 90+
- [ ] **Accessibility**: 95+
- [ ] **Best Practices**: 90+
- [ ] **SEO**: 95+

### Core Web Vitals
- [ ] **LCP** (Largest Contentful Paint): < 2.5s
- [ ] **FID** (First Input Delay): < 100ms
- [ ] **CLS** (Cumulative Layout Shift): < 0.1

### Network Testing
- [ ] **Fast 3G**: Site loads in < 5s
- [ ] **Slow 3G**: Site loads in < 10s
- [ ] **Offline**: 404 page shows (no service worker yet)

---

## Known Browser Compatibility

### CSS Features Used
- ✅ CSS Grid (All modern browsers)
- ✅ Flexbox (All modern browsers)
- ✅ CSS Variables (All modern browsers)
- ✅ backdrop-filter (Chrome 76+, Firefox 103+, Safari 9+)
- ✅ clip-path (All modern browsers)
- ✅ transform-style: preserve-3d (All modern browsers)

### JavaScript Features Used
- ✅ Intersection Observer (Chrome 51+, Firefox 55+, Safari 12.1+)
- ✅ Clipboard API (Chrome 66+, Firefox 63+, Safari 13.1+)
- ✅ async/await (All modern browsers)
- ✅ Classes (All modern browsers)
- ✅ Arrow functions (All modern browsers)

### Fallbacks Implemented
- ✅ Reduced effects on mobile
- ✅ Graceful degradation for older browsers
- ✅ Image error handling
- ✅ Feature detection before use

---

## Testing Commands

### Local Testing
```bash
# Start Jekyll server
bundle exec jekyll serve

# Test on localhost:4000
# Open in different browsers
```

### Validate HTML
```bash
# Use W3C Validator
# https://validator.w3.org/
```

### Validate CSS
```bash
# Use W3C CSS Validator
# https://jigsaw.w3.org/css-validator/
```

### Test Structured Data
```bash
# Google Rich Results Test
# https://search.google.com/test/rich-results
```

---

## Quick Test Script

Run these in browser console on each page:

```javascript
// Test 1: Check if search works
document.querySelector('.search-toggle')?.click();

// Test 2: Check if citation tools exist
document.querySelectorAll('.citation-tools').length;

// Test 3: Check if reading time exists
document.querySelectorAll('.reading-time').length;

// Test 4: Check if social sharing exists
document.querySelectorAll('.social-share').length;

// Test 5: Test keyboard shortcuts
// Press H, P, R keys

// Test 6: Test dark mode toggle
document.getElementById('theme-toggle')?.click();

// Test 7: Check scroll progress
document.querySelector('.scroll-progress')?.style.width;
```

---

## Reporting Issues

If you find issues, note:
1. Browser and version
2. Operating system
3. Page where issue occurs
4. Steps to reproduce
5. Screenshot if possible
6. Console errors (F12 → Console)

---

## Test Results Template

```
Browser: Chrome 120
OS: Windows 11
Date: [Date]

✅ Search: Working
✅ Citations: Working
✅ Social Sharing: Working
✅ 3D Effects: Working
✅ Holographic Effects: Working
⚠️ Issue: [Describe any issues]
```

