// Citation Tools Functionality
class CitationTools {
    constructor() {
        this.citations = {
            'cglstm': {
                apa: 'Oguzie, D. G. (2024). Cosine-Gated LSTM for Sequential Learning. 2024 IEEE 5th International Conference on Pattern Recognition and Machine Learning (PRML), 8-15.',
                mla: 'Oguzie, Dirichukwu Goodluck. "Cosine-Gated LSTM for Sequential Learning." 2024 IEEE 5th International Conference on Pattern Recognition and Machine Learning (PRML), 2024, pp. 8-15.',
                chicago: 'Oguzie, Dirichukwu Goodluck. "Cosine-Gated LSTM for Sequential Learning." In 2024 IEEE 5th International Conference on Pattern Recognition and Machine Learning (PRML), 8-15. 2024.',
                bibtex: '@inproceedings{oguzie2024cglstm,\n  title={Cosine-Gated LSTM for Sequential Learning},\n  author={Oguzie, Dirichukwu Goodluck},\n  booktitle={2024 IEEE 5th International Conference on Pattern Recognition and Machine Learning (PRML)},\n  pages={8--15},\n  year={2024}\n}'
            },
            'predictive-world': {
                apa: 'Oguzie, D. G. (2023). Predictive World Models for Social Navigation. UKCI 2023 - UK Conference on Intelligent Systems.',
                mla: 'Oguzie, Dirichukwu Goodluck. "Predictive World Models for Social Navigation." UKCI 2023 - UK Conference on Intelligent Systems, 2023.',
                chicago: 'Oguzie, Dirichukwu Goodluck. "Predictive World Models for Social Navigation." UKCI 2023 - UK Conference on Intelligent Systems. 2023.',
                bibtex: '@inproceedings{oguzie2023predictive,\n  title={Predictive World Models for Social Navigation},\n  author={Oguzie, Dirichukwu Goodluck},\n  booktitle={UKCI 2023 - UK Conference on Intelligent Systems},\n  year={2023}\n}'
            },
            'phd-thesis': {
                apa: 'Oguzie, D. G. (2024). Enhancing Robot Social Navigation with Reinforcement Learning and Advanced Predictive Models (Doctoral dissertation, Aston University).',
                mla: 'Oguzie, Dirichukwu Goodluck. "Enhancing Robot Social Navigation with Reinforcement Learning and Advanced Predictive Models." PhD diss., Aston University, 2024.',
                chicago: 'Oguzie, Dirichukwu Goodluck. "Enhancing Robot Social Navigation with Reinforcement Learning and Advanced Predictive Models." PhD diss., Aston University, 2024.',
                bibtex: '@phdthesis{oguzie2024thesis,\n  title={Enhancing Robot Social Navigation with Reinforcement Learning and Advanced Predictive Models},\n  author={Oguzie, Dirichukwu Goodluck},\n  school={Aston University},\n  year={2024},\n  type={PhD Thesis}\n}'
            }
        };
        this.init();
    }

    init() {
        this.addCitationTools();
    }

    addCitationTools() {
        // Add to all publications - enhanced detection
        const publications = document.querySelectorAll('.publication');
        publications.forEach(pub => {
            // Skip if citation tool already exists
            if (pub.querySelector('.citation-tools')) return;
            
            const title = pub.querySelector('h3')?.textContent || '';
            const meta = pub.querySelector('.publication-meta')?.textContent || '';
            const fullText = (title + ' ' + meta).toLowerCase();
            
            // Enhanced detection with multiple keywords
            if (title.includes('Cosine-Gated LSTM') || fullText.includes('cglstm') || fullText.includes('ieee prml 2024')) {
                this.createCitationTool(pub, 'cglstm');
            } else if (title.includes('Predictive World Models') || fullText.includes('ukci 2023') || fullText.includes('2stepahead') || fullText.includes('maspm')) {
                this.createCitationTool(pub, 'predictive-world');
            } else if (title.includes('PhD Thesis') || title.includes('Enhancing Robot Social Navigation') || fullText.includes('doctoral dissertation') || pub.dataset.type === 'thesis') {
                this.createCitationTool(pub, 'phd-thesis');
            }
        });
        
        // Also add to home publication cards
        const homePublications = document.querySelectorAll('.home-publication-card');
        homePublications.forEach(card => {
            const title = card.querySelector('h3')?.textContent || '';
            if (title.includes('Cosine-Gated LSTM')) {
                // Add citation link that opens full publication page
                const citationLink = document.createElement('a');
                citationLink.href = '/publications';
                citationLink.className = 'citation-link-btn';
                citationLink.textContent = '📋 View Citation';
                citationLink.style.cssText = 'display: inline-block; margin-top: 0.5rem; font-size: 0.875rem; color: var(--link); text-decoration: none;';
                const actions = card.querySelector('.home-publication-actions');
                if (actions) {
                    actions.appendChild(citationLink);
                }
            }
        });
    }

    createCitationTool(container, citationKey) {
        const citationData = this.citations[citationKey];
        if (!citationData) return;

        const toolContainer = document.createElement('div');
        toolContainer.className = 'citation-tools';
        toolContainer.innerHTML = `
            <div class="citation-header">
                <h4>Citation</h4>
                <div class="citation-format-selector">
                    <button class="citation-format-btn active" data-format="apa">APA</button>
                    <button class="citation-format-btn" data-format="mla">MLA</button>
                    <button class="citation-format-btn" data-format="chicago">Chicago</button>
                    <button class="citation-format-btn" data-format="bibtex">BibTeX</button>
                </div>
            </div>
            <div class="citation-text" id="citation-text-${citationKey}">${citationData.apa}</div>
            <button class="copy-citation-btn" onclick="citationTools.copyCitation('${citationKey}')">
                Copy Citation
            </button>
        `;

        // Insert after publication content or before links
        const links = container.querySelector('.publication-links');
        if (links) {
            links.parentNode.insertBefore(toolContainer, links);
        } else {
            container.appendChild(toolContainer);
        }

        // Add format switcher
        toolContainer.querySelectorAll('.citation-format-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                toolContainer.querySelectorAll('.citation-format-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const format = btn.dataset.format;
                const citationText = toolContainer.querySelector(`#citation-text-${citationKey}`);
                citationText.textContent = citationData[format];
            });
        });
    }

    copyCitation(key) {
        const citationData = this.citations[key];
        const citationTextEl = document.querySelector(`#citation-text-${key}`);
        if (!citationTextEl) return;
        
        const activeFormat = citationTextEl.textContent;
        if (!activeFormat) return;

        navigator.clipboard.writeText(activeFormat).then(() => {
            const btn = document.querySelector(`#citation-text-${key}`)?.nextElementSibling;
            if (btn && btn.classList.contains('copy-citation-btn')) {
                const originalText = btn.textContent;
                btn.textContent = '✓ Copied!';
                btn.classList.add('copied');
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.classList.remove('copied');
                }, 2000);
            }
        }).catch(err => {
            console.error('Failed to copy citation:', err);
        });
    }
}

// Make citationTools globally accessible
const citationTools = new CitationTools();

