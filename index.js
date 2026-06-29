// AI-assisted Science Presentation Guide Database - Core JS Logic

document.addEventListener('DOMContentLoaded', () => {
    // FEATURED ONLINE PLATFORMS & INTERACTIVE WEBPAGES
    const FEATURED_LINKS = [
        {
            name: "專題 Padlet 討論板",
            url: "https://padlet.com/linxiansheng2_1/ai-lj9p3810agu50miv",
            desc: "線上專題提問、討論與想法分享平台",
            icon: "bi-clipboard2-data-fill"
        },
        {
            name: "AI輔助專題研究研討會",
            url: "https://froglssh.github.io/ai-assisted-science-project-presentation/research_workshop.html",
            desc: "專題研討成果展示與互動研討平台",
            icon: "bi-people-fill"
        },
        {
            name: "AI輔助專題研究 教學網頁",
            url: "https://froglssh.github.io/lssh-science-presentation-guide/AI%E8%BC%94%E5%8A%A9%E5%B0%88%E9%A1%8C%E7%A0%94%E7%A9%B6%EF%BC%BF%E9%BA%97%E5%B1%B1%E6%9E%97%E7%8D%BB%E5%8D%87_%E6%95%99%E5%AD%B8%E7%B0%A1%E5%A0%B1/AI%E8%BC%94%E5%8A%A9%E5%B0%88%E9%A1%8C%E7%A0%94%E7%A9%B6%EF%BC%BF%E9%BA%97%E5%B1%B1%E6%9E%97%E7%8D%BB%E5%8D%87_%E6%95%99%E5%AD%B8%E7%B6%B2%E9%A0%81.html",
            desc: "臺北麗山高中林獻升老師主講系列教學網站",
            icon: "bi-laptop-fill"
        },
        {
            name: "AI輔助專題研究 教師教學指南",
            url: "https://froglssh.github.io/ai-assisted-science-project-teacher-guide/",
            desc: "專為指導老師設計的 AI 輔助教學資源網",
            icon: "bi-person-badge-fill"
        },
        {
            name: "AI輔助專題研究與科展競賽 教學網頁",
            url: "https://froglssh.github.io/ai-assisted-science-project-presentation/",
            desc: "引導學生運用 AI 工具進行科學探究的教學站",
            icon: "bi-rocket-takeoff-fill"
        },
        {
            name: "科展參賽經驗全方位解析",
            url: "https://froglssh.github.io/lssh-science-presentation-guide/%E6%95%99%E5%AD%B8%E6%96%87%E7%AB%A0/10%E5%8F%83%E8%B3%BD%E7%B6%93%E9%A9%97/%E7%A7%91%E5%B1%95%E5%8F%83%E8%B3%BD%E7%B6%93%E9%A9%97%E5%85%A8%E6%96%B9%E4%BD%8D%E8%A7%A3%E6%9E%90.html",
            desc: "學長姐參賽心路歷程與各科評審評語優缺點統整",
            icon: "bi-chat-square-quote-fill"
        },
        {
            name: "科學探究與科展競賽指導手冊",
            url: "https://froglssh.github.io/lssh-science-presentation-guide/%E6%95%99%E5%AD%B8%E6%96%87%E7%AB%A0/1%E7%A7%91%E5%B1%95%E6%8C%87%E5%B0%8E/%E7%A7%91%E5%AD%B8%E6%8E%A2%E7%A9%B6%E8%88%87%E7%A7%91%E5%B1%95%E7%AB%B6%E8%B3%BD%E6%8C%87%E5%B0%8E%E6%89%8B%E5%86%8A.html",
            desc: "手把手引導探究流程與科展參賽基礎攻略",
            icon: "bi-book-half"
        },
        {
            name: "AI輔助教學_科學探究與競賽",
            url: "https://froglssh.github.io/lssh-science-presentation-guide/%E7%A7%91%E5%B1%95%E6%83%85%E5%A2%83%E6%95%99%E5%AD%B8%E7%B0%A1%E5%A0%B1/AI%E8%BC%94%E5%8A%A9%E6%95%99%E5%AD%B8_%E7%A7%91%E5%AD%B8%E6%8E%A2%E7%A9%B6%E8%88%87%E7%AB%B6%E8%B3%BD.html",
            desc: "麗山高中科學探究與 AI 教學投影片成果",
            icon: "bi-easel3-fill"
        },
        {
            name: "科展報告撰寫教學站",
            url: "https://froglssh.github.io/lssh-science-presentation-guide/%E6%95%99%E5%AD%B8%E6%96%87%E7%AB%A0/2%E5%A0%B1%E5%91%8A%E6%92%B0%E5%AF%AB/%E7%A7%91%E5%B1%95%E5%A0%B1%E5%91%8A%E6%92%B0%E5%AF%AB%E6%95%99%E5%AD%B8%E7%AB%99.html",
            desc: "引註格式、參考文獻與寫作邏輯線上教學站",
            icon: "bi-pencil-square"
        },
        {
            name: "科學簡報製作指南_互動網頁",
            url: "https://froglssh.github.io/lssh-science-presentation-guide/%E6%95%99%E5%AD%B8%E6%96%87%E7%AB%A0/3%E7%B0%A1%E5%A0%B1%E8%A3%BD%E4%BD%9C/%E7%A7%91%E5%AD%B8%E7%B0%A1%E5%A0%B1%E8%A3%BD%E4%BD%9C%E6%8C%87%E5%8D%97_%E4%BA%92%E5%8B%95%E7%B6%B2%E9%A0%81.html",
            desc: "簡報版型、配色與結構化敘事互動網頁",
            icon: "bi-bezier"
        },
        {
            name: "科展海報製作完全攻略",
            url: "https://froglssh.github.io/lssh-science-presentation-guide/%E6%95%99%E5%AD%B8%E6%96%87%E7%AB%A0/4%E6%B5%B7%E5%A0%B1%E8%A3%BD%E4%BD%9C/%E7%A7%91%E5%B1%95%E6%B5%B7%E5%A0%B1%E8%A3%BD%E4%BD%9C%E5%AE%8C%E5%85%A8%E6%94%BB%E7%95%A5.html",
            desc: "展示海報（Panel）排版設計與字型規範指南",
            icon: "bi-image"
        },
        {
            name: "科展生物領域得獎策略全解析",
            url: "https://froglssh.github.io/lssh-science-presentation-guide/%E6%95%99%E5%AD%B8%E6%96%87%E7%AB%A0/6%E4%BD%9C%E5%93%81%E5%88%86%E6%9E%90/0%E7%94%9F%E7%89%A9%E9%A0%98%E5%9F%9F/%E7%A7%91%E5%B1%95%E7%94%9F%E7%89%A9%E9%A0%98%E5%9F%9F%E5%BE%97%E7%8D%8E%E7%AD%96%E7%95%A5%E5%85%A8%E8%A7%A3%E6%9E%90.html",
            desc: "全國科展與北市科展生物科得獎作品深度解析",
            icon: "bi-heart-pulse-fill"
        },
        {
            name: "科展得獎策略全攻略－生物領域",
            url: "https://froglssh.github.io/lssh-science-presentation-guide/%E6%95%99%E5%AD%B8%E6%96%87%E7%AB%A0/6%E4%BD%9C%E5%93%81%E5%88%86%E6%9E%90/0%E7%94%9F%E7%89%A9%E9%A0%98%E5%9F%9F/%E7%A7%91%E5%B1%95%E5%BE%97%E7%8D%8E%E7%AD%96%E7%95%A5%E5%85%A8%E6%94%BB%E7%95%A5%EF%BC%8D%E7%94%9F%E7%89%A9%E9%A0%98%E5%9F%9F.html",
            desc: "生物科展作品的優劣勢、主題分佈與評審偏好分析",
            icon: "bi-clipboard2-pulse-fill"
        },
        {
            name: "台灣科展得獎策略完全攻略",
            url: "https://froglssh.github.io/lssh-science-presentation-guide/%E6%95%99%E5%AD%B8%E6%96%87%E7%AB%A0/6%E4%BD%9C%E5%93%81%E5%88%86%E6%9E%90/0%E7%A7%91%E5%B1%95%E6%94%BB%E7%95%A5/%E5%8F%B0%E7%81%A3%E7%A7%91%E5%B1%95%E5%BE%97%E7%8D%8E%E7%AD%96%E7%95%A5%E5%AE%8C%E5%85%A8%E6%94%BB%E7%95%A5.html",
            desc: "全國與北市科展得獎策略大數據分析精進指南",
            icon: "bi-graph-up-arrow"
        },
        {
            name: "科展競賽賽前總提點",
            url: "https://froglssh.github.io/lssh-science-presentation-guide/%E6%95%99%E5%AD%B8%E6%96%87%E7%AB%A0/9%E8%B3%BD%E5%89%8D%E6%8F%90%E9%BB%9E/%E7%A7%91%E5%B1%95%E7%AB%B6%E8%B3%BD%E8%B3%BD%E5%89%8D%E7%B8%BD%E6%8F%90%E9%BB%9E.html",
            desc: "賽前答辯、服裝、心態與高壓簡報實戰策略",
            icon: "bi-megaphone-fill"
        }
    ];

    // 1. Core State
    let currentCategory = 'all';    // 'all' or top-level folder names
    let currentSubCategory = 'all'; // 'all' or path strings
    let currentFileType = 'all';   // 'all' or 'pdf', 'presentation', etc.
    let searchQuery = '';

    // 2. DOM Elements
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search');
    const typeFilter = document.getElementById('type-filter');
    const resetFiltersBtn = document.getElementById('reset-filters');
    const dynamicCatsNav = document.getElementById('dynamic-categories-nav');
    const filesContainer = document.getElementById('files-list-container');
    const subCatWrapper = document.getElementById('sub-cat-wrapper');
    const subCatPills = document.getElementById('sub-cat-pills');
    const activeFiltersInfo = document.getElementById('active-filters-info');
    const filterDesc = document.getElementById('filter-desc');
    const clearActiveFilterBtn = document.getElementById('clear-active-filter');
    
    // Category description card elements
    const catTitle = document.getElementById('cat-title');
    const catEnglish = document.getElementById('cat-english');
    const catDescription = document.getElementById('cat-description');
    
    // Theme Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    
    // Floating Player
    const floatingPlayer = document.getElementById('floating-player');
    const audioElement = document.getElementById('media-element');
    const videoElement = document.getElementById('video-element');
    const playerTitle = document.getElementById('player-title');
    const playerSub = document.getElementById('player-sub');
    const playerMediaIcon = document.getElementById('player-media-icon');
    const closePlayerBtn = document.getElementById('close-player');
    
    // Modal Preview
    const previewModal = document.getElementById('preview-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalTypeBadge = document.getElementById('modal-type-badge');
    const modalBody = document.getElementById('modal-body');
    const modalOpenNew = document.getElementById('modal-open-new');
    const closeModalBtn = document.getElementById('close-modal');
    
    // Featured Links Elements
    const featuredSection = document.getElementById('featured-links-section');
    const featuredGrid = document.getElementById('featured-links-grid');

    // 3. Init Database & Sidebar
    initApp();

    function initApp() {
        // Setup initial badge counts
        document.getElementById('count-all').textContent = FILES_DATA.length;
        
        // Render Top-Level Categories in Sidebar
        renderSidebarCategories();
        
        // Render Initial File List
        renderFiles();
        
        // Register Event Listeners
        registerEvents();
    }

    // 4. Sidebar Rendering
    function renderSidebarCategories() {
        dynamicCatsNav.innerHTML = '';
        
        // Count files per category
        const counts = {};
        FILES_DATA.forEach(file => {
            const topCat = file.categories[0];
            if (topCat) {
                counts[topCat] = (counts[topCat] || 0) + 1;
            }
        });

        // Loop through our categories info definitions
        Object.keys(CATEGORIES_INFO).forEach(key => {
            const info = CATEGORIES_INFO[key];
            const fileCount = counts[key] || 0;
            
            // If the category has files, display it
            if (fileCount > 0) {
                const button = document.createElement('button');
                button.className = 'nav-item';
                button.setAttribute('data-category', key);
                
                // Represent colors
                button.innerHTML = `
                    <i class="bi ${info.icon}"></i>
                    <span>${info.title}</span>
                    <span class="badge">${fileCount}</span>
                `;
                
                button.addEventListener('click', () => {
                    selectCategory(key);
                });
                
                dynamicCatsNav.appendChild(button);
            }
        });
    }

    // 5. Category Selection
    function selectCategory(categoryKey) {
        // Update active class in sidebar
        document.querySelectorAll('.nav-item').forEach(btn => {
            if (btn.getAttribute('data-category') === categoryKey) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        currentCategory = categoryKey;
        currentSubCategory = 'all'; // reset sub-category on change
        
        // Update Category Info Panel
        if (categoryKey === 'all') {
            catTitle.textContent = '全部資源';
            catEnglish.textContent = 'All Resources';
            catDescription.textContent = '本資料庫系統化整理了由臺北麗山高中林獻升老師指導的 AI 輔助專題研究與科展文獻、研習教材、實作案例及教學文章。您可以使用上方搜尋框即時檢索 390+ 個檔案，並直接進行線上預覽或下載。';
            subCatWrapper.style.display = 'none';
        } else {
            const info = CATEGORIES_INFO[categoryKey];
            catTitle.textContent = info.title;
            catEnglish.textContent = info.english;
            catDescription.textContent = info.description;
            
            // Adjust card color accent
            const accentColor = `var(--color-${info.color || 'other'})`;
            document.getElementById('category-info-panel').style.borderLeftColor = accentColor;
            
            // Render sub-category pills
            renderSubCategoryPills(categoryKey);
        }

        renderFiles();
        updateActiveFilterBar();
    }

    // 6. Sub-category Pills Rendering
    function renderSubCategoryPills(categoryKey) {
        subCatPills.innerHTML = '';
        
        // Find all sub-categories (depth level 2) for this category
        const subCats = new Set();
        FILES_DATA.forEach(file => {
            if (file.categories[0] === categoryKey && file.categories.length > 1) {
                // Join path components to form a unique string
                subCats.add(file.categories.slice(0, 2).join(' / '));
            }
        });

        if (subCats.size > 0) {
            subCatWrapper.style.display = 'flex';
            
            // Add "All" Pill
            const allPill = document.createElement('button');
            allPill.className = `pill-item ${currentSubCategory === 'all' ? 'active' : ''}`;
            allPill.textContent = '全部子分類';
            allPill.addEventListener('click', () => {
                selectSubCategory('all');
            });
            subCatPills.appendChild(allPill);

            // Add other pills
            Array.from(subCats).sort().forEach(subCatPath => {
                // Show only the childmost category name in the pill
                const parts = subCatPath.split(' / ');
                const displayLabel = parts[parts.length - 1];
                
                const pill = document.createElement('button');
                pill.className = `pill-item ${currentSubCategory === subCatPath ? 'active' : ''}`;
                pill.textContent = displayLabel;
                pill.addEventListener('click', () => {
                    selectSubCategory(subCatPath);
                });
                subCatPills.appendChild(pill);
            });
        } else {
            subCatWrapper.style.display = 'none';
        }
    }

    function selectSubCategory(subCatPath) {
        currentSubCategory = subCatPath;
        
        // Update Pills styling
        const pills = subCatPills.querySelectorAll('.pill-item');
        pills.forEach(pill => {
            const label = pill.textContent;
            if (subCatPath === 'all' && label === '全部子分類') {
                pill.classList.add('active');
            } else if (subCatPath !== 'all' && subCatPath.endsWith(label)) {
                pill.classList.add('active');
            } else {
                pill.classList.remove('active');
            }
        });

        renderFiles();
        updateActiveFilterBar();
    }

    // 7. Render Files List (Dynamic Filtering & Grouping)
    function renderFiles() {
        filesContainer.innerHTML = '';
        
        // Show/Hide Featured Links Section based on filter state
        if (currentCategory === 'all' && !searchQuery && currentFileType === 'all') {
            featuredSection.style.display = 'block';
            renderFeaturedLinks();
        } else {
            featuredSection.style.display = 'none';
        }
        
        // Filter files based on state
        const filteredFiles = FILES_DATA.filter(file => {
            // 1. Top Category Filter
            if (currentCategory !== 'all' && file.categories[0] !== currentCategory) {
                return false;
            }
            
            // 2. Sub-category Filter
            if (currentSubCategory !== 'all') {
                const pathStr = file.categories.slice(0, 2).join(' / ');
                if (pathStr !== currentSubCategory) {
                    return false;
                }
            }
            
            // 3. File Type Filter
            if (currentFileType !== 'all' && file.type !== currentFileType) {
                return false;
            }
            
            // 4. Search Filter
            if (searchQuery) {
                const lowerQuery = searchQuery.toLowerCase();
                const nameMatch = file.name.toLowerCase().includes(lowerQuery);
                const catMatch = file.categories.some(cat => cat.toLowerCase().includes(lowerQuery));
                const extMatch = file.ext.toLowerCase().includes(lowerQuery);
                
                if (!nameMatch && !catMatch && !extMatch) {
                    return false;
                }
            }
            
            return true;
        });

        if (filteredFiles.length === 0) {
            renderEmptyState();
            return;
        }

        // Group files by Category Path for better structure
        const grouped = {};
        filteredFiles.forEach(file => {
            // Group path string, e.g., "教學文章 > 8安全審查"
            const groupName = file.categories.join(' > ') || '根目錄';
            if (!grouped[groupName]) {
                grouped[groupName] = [];
            }
            grouped[groupName].push(file);
        });

        // Render Grouped Sections
        // Sort groups so that they show up systematically
        Object.keys(grouped).sort().forEach(groupName => {
            const groupSection = document.createElement('section');
            groupSection.className = 'file-group-section';
            
            // Group Header
            const header = document.createElement('div');
            header.className = 'group-title';
            header.innerHTML = `<i class="bi bi-folder-fill"></i> ${groupName}`;
            groupSection.appendChild(header);
            
            // Group Grid
            const grid = document.createElement('div');
            grid.className = 'files-grid';
            
            grouped[groupName].forEach(file => {
                grid.appendChild(createFileCard(file));
            });
            
            groupSection.appendChild(grid);
            filesContainer.appendChild(groupSection);
        });
    }

    // Create single file card
    function createFileCard(file) {
        const card = document.createElement('div');
        card.className = 'file-card';
        
        // Define colors/icons dynamically
        const fileTypeMeta = getFileTypeConfig(file.type);
        card.style.setProperty('--type-color', fileTypeMeta.color);
        card.style.setProperty('--type-color-alpha', fileTypeMeta.alphaColor);
        
        // Highlight logic
        let displayName = file.name;
        if (searchQuery) {
            const regex = new RegExp(`(${escapeRegExp(searchQuery)})`, 'gi');
            displayName = file.name.replace(regex, '<span class="highlight-text">$1</span>');
        }

        const sizeStr = formatBytes(file.size);
        
        // Construct Action Buttons
        let previewBtn = '';
        if (file.type === 'audio') {
            previewBtn = `
                <button class="btn-primary-sm btn-play" title="播放音訊">
                    <i class="bi bi-play-fill"></i> 播放
                </button>
            `;
        } else if (file.type === 'video') {
            previewBtn = `
                <button class="btn-primary-sm btn-play" title="播放影片">
                    <i class="bi bi-play-fill"></i> 播放
                </button>
            `;
        } else if (file.type === 'pdf' || file.type === 'web') {
            previewBtn = `
                <button class="btn-primary-sm btn-preview" title="線上預覽">
                    <i class="bi bi-eye-fill"></i> 預覽
                </button>
            `;
        } else {
            // For other files, the preview button is just an open button in a new window
            previewBtn = `
                <a href="${file.path}" target="_blank" class="btn-secondary" style="padding: 8px 12px; font-size: 0.82rem;" title="在新分頁開啟/下載">
                    <i class="bi bi-box-arrow-up-right"></i> 開啟
                </a>
            `;
        }

        card.innerHTML = `
            <div class="file-icon-box">
                <i class="bi ${fileTypeMeta.icon}"></i>
            </div>
            <div class="file-meta">
                <div class="file-name" title="${file.name}">${displayName}</div>
                <div class="file-subtext">
                    <span class="file-size-badge">${sizeStr}</span>
                    <span>${file.ext.toUpperCase()}</span>
                </div>
            </div>
            <div class="file-actions-row">
                ${previewBtn}
                <button class="btn-icon-sm btn-cloud-download" title="打開 Google Drive 雲端檔案">
                    <i class="bi bi-cloud-arrow-down-fill"></i>
                </button>
            </div>
        `;

        // Attach event actions
        const cloudBtn = card.querySelector('.btn-cloud-download');
        cloudBtn.addEventListener('click', () => {
            handleCloudDownload(file);
        });

        if (file.type === 'audio' || file.type === 'video') {
            const playBtn = card.querySelector('.btn-play');
            playBtn.addEventListener('click', () => {
                handlePlayMedia(file);
            });
        } else if (file.type === 'pdf' || file.type === 'web') {
            const previewAction = card.querySelector('.btn-preview');
            previewAction.addEventListener('click', () => {
                handleOpenPreview(file);
            });
        }

        return card;
    }

    function renderEmptyState() {
        filesContainer.innerHTML = `
            <div class="empty-state">
                <i class="bi bi-folder-x"></i>
                <h3>未找到相符的資源</h3>
                <p>找不到符合目前搜尋關鍵字或篩選條件的檔案，請嘗試調整條件或重新輸入關鍵字。</p>
                <button id="btn-reset-empty" class="btn-secondary" style="margin-top: 8px;">
                    <i class="bi bi-arrow-counterclockwise"></i> 重設所有篩選
                </button>
            </div>
        `;
        document.getElementById('btn-reset-empty').addEventListener('click', resetAllFilters);
    }

    // 8. File Types Config Mapping
    function getFileTypeConfig(type) {
        switch (type) {
            case 'pdf':
                return { icon: 'bi-file-earmark-pdf-fill', color: 'var(--color-pdf)', alphaColor: 'rgba(239, 68, 68, 0.15)' };
            case 'presentation':
                return { icon: 'bi-file-earmark-slides-fill', color: 'var(--color-ppt)', alphaColor: 'rgba(249, 115, 22, 0.15)' };
            case 'document':
                return { icon: 'bi-file-earmark-word-fill', color: 'var(--color-doc)', alphaColor: 'rgba(59, 130, 246, 0.15)' };
            case 'spreadsheet':
                return { icon: 'bi-file-earmark-excel-fill', color: 'var(--color-sheet)', alphaColor: 'rgba(16, 185, 129, 0.15)' };
            case 'web':
                return { icon: 'bi-globe', color: 'var(--color-web)', alphaColor: 'rgba(234, 179, 8, 0.15)' };
            case 'audio':
                return { icon: 'bi-file-earmark-music-fill', color: 'var(--color-audio)', alphaColor: 'rgba(168, 85, 247, 0.15)' };
            case 'video':
                return { icon: 'bi-file-earmark-play-fill', color: 'var(--color-video)', alphaColor: 'rgba(6, 182, 212, 0.15)' };
            case 'image':
                return { icon: 'bi-file-earmark-image-fill', color: 'var(--color-image)', alphaColor: 'rgba(236, 72, 153, 0.15)' };
            default:
                return { icon: 'bi-file-earmark-fill', color: 'var(--color-other)', alphaColor: 'rgba(107, 114, 128, 0.15)' };
        }
    }

    // 9. Actions Handler
    // A. Open direct Google Drive link
    function handleCloudDownload(file) {
        if (file.drive_url) {
            showToast(`正在前往雲端硬碟檢視/下載：<br><span style="font-size:0.75rem;opacity:0.8;">${file.name}</span>`);
            setTimeout(() => {
                window.open(file.drive_url, '_blank');
            }, 500);
        } else {
            // Fallback if no direct link
            const cloudPath = `0 AI輔助專題與科展/${file.path}`;
            navigator.clipboard.writeText(cloudPath).then(() => {
                showToast(`已複製雲端路徑！正在前往 Google Drive...`);
                setTimeout(() => {
                    window.open('https://drive.google.com/drive/folders/1j5nV08TqqqkSgQvmwo3hT-T7pEk6goYy?usp=drive_link', '_blank');
                }, 1000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                window.open('https://drive.google.com/drive/folders/1j5nV08TqqqkSgQvmwo3hT-T7pEk6goYy?usp=drive_link', '_blank');
            });
        }
    }

    // B. Media playback handler
    function handlePlayMedia(file) {
        // Reset elements
        audioElement.style.display = 'none';
        videoElement.style.display = 'none';
        audioElement.src = '';
        videoElement.src = '';
        floatingPlayer.classList.remove('playing');

        playerTitle.textContent = file.name;
        playerSub.textContent = file.categories.join(' > ');
        
        // Show player
        floatingPlayer.style.display = 'block';
        setTimeout(() => {
            floatingPlayer.classList.add('active');
        }, 10);

        if (file.type === 'audio') {
            audioElement.style.display = 'block';
            audioElement.src = file.path;
            playerMediaIcon.className = 'bi bi-music-note-beamed player-icon';
            audioElement.play();
            floatingPlayer.classList.add('playing');
        } else if (file.type === 'video') {
            // For video, we can also play in floating player or expand to a bigger view
            // Here we play in the floating area, but if user wants bigger screen they have native controls
            videoElement.style.display = 'block';
            videoElement.src = file.path;
            playerMediaIcon.className = 'bi bi-film player-icon';
            videoElement.play();
            floatingPlayer.classList.add('playing');
        }
    }

    // C. Preview Handler
    function handleOpenPreview(file) {
        // Stop any background videos or audio in the modal before resetting
        modalBody.innerHTML = '';
        
        // Display Modal overlay
        previewModal.style.display = 'flex';
        setTimeout(() => {
            previewModal.classList.add('active');
        }, 10);

        modalTitle.textContent = file.name;
        modalTypeBadge.textContent = file.type.toUpperCase();
        
        // Set badge color
        const typeMeta = getFileTypeConfig(file.type);
        modalTypeBadge.style.backgroundColor = typeMeta.color;

        // Set Open New Tab link
        modalOpenNew.href = file.path;

        // Load content via iframe
        const iframe = document.createElement('iframe');
        iframe.src = file.path;
        modalBody.appendChild(iframe);
    }

    function handleClosePreview() {
        previewModal.classList.remove('active');
        setTimeout(() => {
            previewModal.style.display = 'none';
            modalBody.innerHTML = ''; // clear iframe
        }, 300);
    }

    // 10. Filter Helpers & Events Registration
    function registerEvents() {
        // A. Search Bar Input
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            if (searchQuery) {
                clearSearchBtn.style.display = 'flex';
            } else {
                clearSearchBtn.style.display = 'none';
            }
            renderFiles();
            updateActiveFilterBar();
        });

        // B. Clear Search Button
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            searchQuery = '';
            clearSearchBtn.style.display = 'none';
            renderFiles();
            updateActiveFilterBar();
        });

        // C. Select Type Filter change
        typeFilter.addEventListener('change', (e) => {
            currentFileType = e.target.value;
            renderFiles();
            updateActiveFilterBar();
        });

        // D. Reset Filters
        resetFiltersBtn.addEventListener('click', resetAllFilters);

        // E. Active Filter Info reset
        clearActiveFilterBtn.addEventListener('click', resetAllFilters);

        // F. Theme Toggle
        themeToggleBtn.addEventListener('click', toggleTheme);

        // G. Close Player
        closePlayerBtn.addEventListener('click', () => {
            floatingPlayer.classList.remove('active');
            audioElement.pause();
            videoElement.pause();
            setTimeout(() => {
                floatingPlayer.style.display = 'none';
            }, 500);
        });

        // H. Close Modal Preview
        closeModalBtn.addEventListener('click', handleClosePreview);
        previewModal.addEventListener('click', (e) => {
            if (e.target === previewModal) {
                handleClosePreview();
            }
        });
    }

    function resetAllFilters() {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.style.display = 'none';
        
        typeFilter.value = 'all';
        currentFileType = 'all';
        
        // Reset category to all
        selectCategory('all');
    }

    function updateActiveFilterBar() {
        const filters = [];
        
        if (currentCategory !== 'all') {
            const info = CATEGORIES_INFO[currentCategory];
            filters.push(`主分類: ${info.title}`);
        }
        if (currentSubCategory !== 'all') {
            const label = currentSubCategory.split(' / ').pop();
            filters.push(`子分類: ${label}`);
        }
        if (currentFileType !== 'all') {
            const opt = typeFilter.querySelector(`option[value="${currentFileType}"]`);
            filters.push(`檔案類型: ${opt.textContent}`);
        }
        if (searchQuery) {
            filters.push(`關鍵字: "${searchQuery}"`);
        }

        if (filters.length > 0) {
            filterDesc.textContent = filters.join(' ＋ ');
            activeFiltersInfo.style.display = 'flex';
        } else {
            activeFiltersInfo.style.display = 'none';
        }
    }

    // Theme switching
    function toggleTheme() {
        const body = document.body;
        const icon = themeToggleBtn.querySelector('i');
        
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            icon.className = 'bi bi-moon-fill';
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            icon.className = 'bi bi-sun-fill';
        }
    }

    // 11. Toast System implementation
    function showToast(message) {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            container.className = 'toast-wrapper';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = 'toast-message';
        toast.innerHTML = `
            <i class="bi bi-check2-circle"></i>
            <div class="toast-body">${message}</div>
        `;

        container.appendChild(toast);
        
        // trigger animation
        setTimeout(() => {
            toast.classList.add('active');
        }, 10);

        // remove after 3s
        setTimeout(() => {
            toast.classList.remove('active');
            setTimeout(() => {
                toast.remove();
            }, 400);
        }, 4000);
    }

    function renderFeaturedLinks() {
        featuredGrid.innerHTML = '';
        FEATURED_LINKS.forEach(link => {
            const card = document.createElement('a');
            card.className = 'featured-link-card';
            card.href = link.url;
            card.target = '_blank';
            card.innerHTML = `
                <div class="featured-card-icon">
                    <i class="bi ${link.icon}"></i>
                </div>
                <div class="featured-card-meta">
                    <div class="featured-card-name">${link.name}</div>
                    <div class="featured-card-desc">${link.desc}</div>
                </div>
                <div class="featured-card-action">
                    <i class="bi bi-arrow-right-short"></i>
                </div>
            `;
            featuredGrid.appendChild(card);
        });
    }

    // 12. Helper Utilities
    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
    }
});
