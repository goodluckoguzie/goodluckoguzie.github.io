# Goodluck Oguzie - Academic Website

This is my personal academic website built with Jekyll and hosted on GitHub Pages. It showcases my research, publications, teaching experience, and professional background.

## Website Structure

- **Home** (`index.md`): Welcome page with research highlights and recent news
- **Research** (`research.md`): Detailed information about my research directions
- **Publications** (`publications.md`): List of published papers and articles
- **Teaching** (`teaching.md`): Information about modules taught at Solent University
- **CV** (`cv.md`): Curriculum vitae with professional experience and education

## Setup Instructions

### Prerequisites

1. Install Ruby (version 2.7 or higher)
2. Install Jekyll and Bundler:
   ```bash
   gem install jekyll bundler
   ```

### Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/goodluckoguzie/goodluckoguzie.github.io.git
   cd goodluckoguzie.github.io
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Build and serve the site locally:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser and navigate to `http://localhost:4000`

### Customization

1. **Update Personal Information:**
   - Edit `_config.yml` to update your name, email, location, institution, and bio
   - Add your social media links (LinkedIn, GitHub, Google Scholar, ORCID, ResearchGate)

2. **Add Publications:**
   - Edit `publications.md` to add your publications
   - Update PDF links to point to your publication files

3. **Update Research:**
   - Edit `research.md` to describe your research projects
   - Add images or videos by placing them in the `assets/images/` directory

4. **Update Teaching:**
   - Edit `teaching.md` to add module descriptions
   - Update module codes and names as needed

5. **Update CV:**
   - Edit `cv.md` to add your complete CV information
   - Update education, experience, and skills sections

6. **Customize Styling:**
   - Edit `assets/css/style.css` to change colors, fonts, and layout
   - Modify `_layouts/default.html` to change the page structure

### Deployment to GitHub Pages

1. **Create GitHub Repository:**
   - Create a new repository named `goodluckoguzie.github.io` (replace with your GitHub username)
   - Make it public

2. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/goodluckoguzie/goodluckoguzie.github.io.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "main" branch as the source
   - Save changes

4. **Access Your Website:**
   - Your site will be available at `https://goodluckoguzie.github.io` (replace with your username)

## Features

- **Responsive Design:** Works on desktop, tablet, and mobile devices
- **Clean Layout:** Modern, professional design
- **Easy to Update:** Simple Markdown files for content
- **SEO Optimized:** Built-in SEO tags for better discoverability
- **Fast Loading:** Static site generation for optimal performance

## File Structure

```
.
├── _config.yml          # Site configuration
├── _layouts/            # Page layouts
│   └── default.html     # Default layout template
├── assets/              # Static assets
│   └── css/            # Stylesheets
│       └── style.css    # Main stylesheet
├── index.md            # Home page
├── research.md         # Research page
├── publications.md     # Publications page
├── teaching.md         # Teaching page
├── cv.md              # CV page
├── Gemfile            # Ruby dependencies
└── README.md          # This file
```

## Updating Content

To update your website content:

1. Edit the relevant Markdown file (e.g., `publications.md`)
2. Save the changes
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update publications"
   git push
   ```

GitHub Pages will automatically rebuild and deploy your site within a few minutes.

## Support

For issues or questions:
- Check the [Jekyll documentation](https://jekyllrb.com/docs/)
- Review [GitHub Pages documentation](https://docs.github.com/en/pages)
- Contact: [your.email@example.com](mailto:your.email@example.com)

## License

This website template is available for personal and academic use.

