// Citation Tools Functionality
class CitationTools {
    constructor() {
        this.citations = {
            'cglstm': {
                apa: 'Oguzie, G. (2024). Cosine-Gated LSTM for Sequential Learning. 2024 IEEE 5th International Conference on Pattern Recognition and Machine Learning (PRML), 8-15.',
                mla: 'Oguzie, Goodluck. "Cosine-Gated LSTM for Sequential Learning." 2024 IEEE 5th International Conference on Pattern Recognition and Machine Learning (PRML), 2024, pp. 8-15.',
                chicago: 'Oguzie, Goodluck. "Cosine-Gated LSTM for Sequential Learning." In 2024 IEEE 5th International Conference on Pattern Recognition and Machine Learning (PRML), 8-15. 2024.',
                bibtex: '@inproceedings{oguzie2024cglstm,\n  title={Cosine-Gated LSTM for Sequential Learning},\n  author={Oguzie, Goodluck},\n  booktitle={2024 IEEE 5th International Conference on Pattern Recognition and Machine Learning (PRML)},\n  pages={8--15},\n  year={2024}\n}'
            },
            'predictive-world': {
                apa: 'Oguzie, G. (2023). Predictive World Models for Social Navigation. UKCI 2023 - UK Conference on Intelligent Systems.',
                mla: 'Oguzie, Goodluck. "Predictive World Models for Social Navigation." UKCI 2023 - UK Conference on Intelligent Systems, 2023.',
                chicago: 'Oguzie, Goodluck. "Predictive World Models for Social Navigation." UKCI 2023 - UK Conference on Intelligent Systems. 2023.',
                bibtex: '@inproceedings{oguzie2023predictive,\n  title={Predictive World Models for Social Navigation},\n  author={Oguzie, Goodluck},\n  booktitle={UKCI 2023 - UK Conference on Intelligent Systems},\n  year={2023}\n}'
            },
            'phd-thesis': {
                apa: 'Oguzie, G. (2024). Enhancing Robot Social Navigation with Reinforcement Learning and Advanced Predictive Models (Doctoral dissertation, Aston University).',
                mla: 'Oguzie, Goodluck. "Enhancing Robot Social Navigation with Reinforcement Learning and Advanced Predictive Models." PhD diss., Aston University, 2024.',
                chicago: 'Oguzie, Goodluck. "Enhancing Robot Social Navigation with Reinforcement Learning and Advanced Predictive Models." PhD diss., Aston University, 2024.',
                bibtex: '@phdthesis{oguzie2024thesis,\n  title={Enhancing Robot Social Navigation with Reinforcement Learning and Advanced Predictive Models},\n  author={Oguzie, Goodluck},\n  school={Aston University},\n  year={2024},\n  type={PhD Thesis}\n}'
            }
        };
        this.init();
    }

    init() {
        this.addCitationTools();
    }

    addCitationTools() {
        // Add to CGLSTM publication
        const publications = document.querySelectorAll('.publication');
        publications.forEach(pub => {
            const title = pub.querySelector('h3')?.textContent || '';
            if (title.includes('Cosine-Gated LSTM')) {
                this.createCitationTool(pub, 'cglstm');
            } else if (title.includes('Predictive World Models')) {
                this.createCitationTool(pub, 'predictive-world');
            } else if (title.includes('PhD Thesis') || title.includes('Enhancing Robot Social Navigation')) {
                this.createCitationTool(pub, 'phd-thesis');
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

