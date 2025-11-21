
        // Language mode management
        const languageToggle = document.querySelectorAll('.lang-btn');
        let currentLanguageMode = localStorage.getItem('languageMode') || 'de';

        function setLanguageMode(mode) {
            currentLanguageMode = mode;
            localStorage.setItem('languageMode', mode);
            updateLanguageDisplay();
            languageToggle.forEach(btn => btn.classList.remove('active'));
            document.querySelector(`[data-lang="${mode}"]`).classList.add('active');
        }

        function updateLanguageDisplay() {
            document.querySelectorAll('.text-ar-phonetic').forEach(el => {
                if (currentLanguageMode === 'de') {
                    el.classList.remove('show');
                } else {
                    el.classList.add('show');
                }
            });

            document.querySelectorAll('.text-en').forEach(el => {
                if (currentLanguageMode === 'de-ar-en') {
                    el.classList.add('show');
                } else {
                    el.classList.remove('show');
                }
            });
        }

        languageToggle.forEach(btn => {
            btn.addEventListener('click', () => setLanguageMode(btn.dataset.lang));
        });

        // Initialize language mode
        document.querySelector(`[data-lang="${currentLanguageMode}"]`).classList.add('active');
        updateLanguageDisplay();

        // Level switching
        const levelBtns = document.querySelectorAll('.level-btn');
        const levelContents = document.querySelectorAll('.level-content');

        levelBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const level = btn.dataset.level;
                levelBtns.forEach(b => b.classList.remove('active'));
                levelContents.forEach(c => c.classList.remove('active'));
                btn.classList.add('active');
                document.querySelector(`[data-level="${level}"]`).classList.add('active');
                window.scrollTo(0, 0);
            });
        });

        // Section collapse/expand
        const sectionHeaders = document.querySelectorAll('.section-header');
        sectionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                header.closest('.section').classList.toggle('collapsed');
            });
        });

        // Exercise answer checking
        function checkAnswer(btn, isCorrect, message) {
            const feedback = btn.closest('.exercise-question').querySelector('.feedback');
            const allOptions = btn.closest('.exercise-options').querySelectorAll('.option-btn');
            
            allOptions.forEach(opt => opt.classList.remove('selected', 'correct', 'wrong'));
            
            if (isCorrect) {
                btn.classList.add('correct');
                feedback.className = 'feedback show correct';
                feedback.textContent = '✓ ' + message;
            } else {
                btn.classList.add('wrong');
                feedback.className = 'feedback show wrong';
                feedback.textContent = '✗ ' + message;
            }
        }

        // Search functionality
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const tables = document.querySelectorAll('.dict-table tbody tr');
            tables.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(query) ? '' : 'none';
            });
        });

        // Keyboard accessibility
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.querySelectorAll('.section').forEach(s => s.classList.add('collapsed'));
            }
        });

        console.log('German Learning Hub loaded successfully!');
    