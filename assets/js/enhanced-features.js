// Enhanced Features - Additional Utilities
class EnhancedFeatures {
    constructor() {
        this.init();
    }

    init() {
        this.addPrintShortcut();
        this.addKeyboardShortcuts();
        this.addScrollProgress();
        this.addCopyCodeBlocks();
    }

    // Print shortcut (Ctrl+P)
    addPrintShortcut() {
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
                // Add print-friendly class
                document.body.classList.add('printing');
            }
        });
    }

    // Keyboard shortcuts
    addKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Don't trigger if typing in input/textarea
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }

            // H - Go to Home
            if (e.key === 'h' && !e.ctrlKey && !e.metaKey) {
                window.location.href = '/';
            }

            // P - Go to Publications
            if (e.key === 'p' && !e.ctrlKey && !e.metaKey) {
                window.location.href = '/publications';
            }

            // R - Go to Research/Portfolio
            if (e.key === 'r' && !e.ctrlKey && !e.metaKey) {
                window.location.href = '/portfolio';
            }
        });
    }

    // Scroll progress indicator
    addScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.setAttribute('role', 'progressbar');
        progressBar.setAttribute('aria-label', 'Scroll progress');
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            progressBar.style.width = scrolled + '%';
        });
    }

    // Copy code blocks
    addCopyCodeBlocks() {
        document.querySelectorAll('pre code, code').forEach(codeBlock => {
            // Skip if already has copy button
            if (codeBlock.parentElement.querySelector('.copy-code-btn')) return;

            const pre = codeBlock.parentElement.tagName === 'PRE' ? codeBlock.parentElement : codeBlock;
            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-code-btn';
            copyBtn.setAttribute('aria-label', 'Copy code');
            copyBtn.textContent = 'Copy';
            copyBtn.title = 'Copy code to clipboard';

            copyBtn.addEventListener('click', () => {
                const text = codeBlock.textContent || codeBlock.innerText;
                navigator.clipboard.writeText(text).then(() => {
                    copyBtn.textContent = 'Copied!';
                    copyBtn.classList.add('copied');
                    setTimeout(() => {
                        copyBtn.textContent = 'Copy';
                        copyBtn.classList.remove('copied');
                    }, 2000);
                });
            });

            pre.style.position = 'relative';
            pre.appendChild(copyBtn);
        });
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new EnhancedFeatures();
    });
} else {
    new EnhancedFeatures();
}

