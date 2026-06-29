// JavaScript 邏輯控制中心 - GMI-DEX 科展視覺化網頁

// 1. 實驗數據庫 (來源自作品說明書報告書)
const DATA_STORE = {
    // MTT 細胞存活率數據
    mtt: {
        gmi: {
            labels: ['對照組 (0)', 'GMI 2.5', 'GMI 5', 'GMI 10', 'GMI 20', 'LPS (100 ng/mL)'],
            data: [100.0, 100.8, 104.5, 106.2, 110.1, 92.5],
            desc: "GMI 單獨處理細胞 24 小時，在 2.5 - 20 µg/mL 濃度下细胞存活率均維持在 100% 左右（甚至略有增長），證實天然 GMI 蛋白無細胞毒性，具備極佳的生物相容性。"
        },
        dex: {
            labels: ['對照組 (0)', 'DEX 2.5', 'DEX 5', 'DEX 10', 'DEX 20', 'DEX 40', 'LPS (100 ng/mL)'],
            data: [100.0, 75.3, 78.2, 75.1, 73.8, 70.2, 92.5],
            desc: "臨床類固醇 DEX 單獨處理 RAW 264.7 細胞時，在無 LPS 的情況下，存活率均有 20% - 30% 左右的顯著下降。說明高劑量或單獨使用 DEX 會對巨噬細胞產生一定的代謝壓力或存活抑制。"
        },
        combo: {
            labels: ['CTL (對照組)', 'G10 (GMI 10)', 'L (LPS單獨)', 'D2.5+G10+L', 'D5+G10+L', 'D10+G10+L', 'D20+G10+L', 'D40+G10+L'],
            data: [100.0, 100.0, 80.0, 91.2, 93.5, 108.2, 109.5, 107.5],
            desc: "在 LPS 刺激發炎環境下，單用 G10 (無 LPS) 細胞存活率為 100%；加入 LPS 後 (L) 存活率因發炎毒性降至約 80.0%。當合併 G10 與不同濃度的 DEX 時，細胞活性顯著回升至 91% 以上，D10 以上更回升至 108% 左右，證實此協同組合能有效保護細胞並抵禦發炎產生的存活壓力。"
        }
    },
    // IL-6 分泌量數據 (pg/mL)
    il6: {
        d25: {
            labels: ['CTL', 'GMI 2.5', 'DEX 2.5', 'LPS (100 ng/mL)', 'DEX 2.5 + L', 'GMI 2.5 + L', 'D2.5 + G2.5 + L'],
            data: [0, 50, 40, 2050, 1650, 1100, 1250],
            desc: "在低劑量組合 (D2.5 + G2.5) 中，LPS 強烈誘導 IL-6 分泌達 2050 pg/mL。單用 DEX 2.5 抑制率約 20%；單用 GMI 2.5 約 46%；合併使用為 1250 pg/mL (抑制率 39%)。在此低濃度下，兩藥尚未展現協同增效，甚至有微幅拮抗。"
        },
        d5: {
            labels: ['CTL', 'GMI 10', 'DEX 5', 'LPS (100 ng/mL)', 'DEX 5 + L', 'GMI 10 + L', 'D5 + G10 + L'],
            data: [0, 50, 40, 2100, 1700, 480, 105],
            desc: "在中劑量組合 (D5 + G10) 中，單用 DEX 5 抑制率約 19%；單用 GMI 10 抑制率約 77%；但兩者合併 (D5 + G10) 後，IL-6 分泌量驟降至 105 pg/mL，抑制率跳躍式達到 95.0%，超越兩藥單用之加總，顯示出極強的協同增效效果。"
        },
        d10: {
            labels: ['CTL', 'GMI 10', 'DEX 10', 'LPS (100 ng/mL)', 'DEX 10 + L', 'GMI 10 + L', 'D10 + G10 + L'],
            data: [0, 50, 40, 2100, 1650, 480, 65],
            desc: "在高劑量組合 (D10 + G10) 中，合併用藥後發炎激素 IL-6 分泌量更被壓制到僅剩 65 pg/mL (抑制率高達 97%)。此時發炎訊號已被完全封鎖，且細胞活性 MTT 維持正常，成功實現高效抗發炎目標。"
        }
    },
    // Bliss 獨立模型對比數據 (Log [DEX] 0.4 到 1.6 代表 DEX 2.5 到 40 ug/mL)
    bliss: {
        g25: {
            labels: ['Log 2.5 (0.4)', 'Log 5 (0.7)', 'Log 10 (1.0)', 'Log 20 (1.3)', 'Log 40 (1.6)'],
            expected: [48.0, 52.5, 56.0, 60.5, 65.0],
            actual: [39.0, 42.0, 50.0, 58.0, 64.0],
            desc: "當 GMI 處於低濃度 2.5 µg/mL 時，經 Bliss 獨立模型驗證，真實抑制率（藍線）大致落於或略小於理論預期極限（紅線），經 Unpaired t-test 檢定無顯著差異，顯示低劑量 GMI 與類固醇之間在此時以加成或微拮抗作用為主。"
        },
        g5: {
            labels: ['Log 2.5 (0.4)', 'Log 5 (0.7)', 'Log 10 (1.0)', 'Log 20 (1.3)', 'Log 40 (1.6)'],
            expected: [68.0, 72.0, 75.0, 78.0, 81.0],
            actual: [65.0, 70.0, 72.0, 74.0, 78.0],
            desc: "當 GMI 提高至中等濃度 5 µg/mL 時，實際發炎抑制率隨著 DEX 濃度上升而平緩增加，但仍略低於 Bliss 理論相加模型之預測，顯示細胞質中游阻斷在此劑量下尚未與核內阻斷產生交互增幅。"
        },
        g10: {
            labels: ['Log 2.5 (0.4)', 'Log 5 (0.7)', 'Log 10 (1.0)', 'Log 20 (1.3)', 'Log 40 (1.6)'],
            expected: [81.6, 83.9, 87.3, 89.6, 91.9],
            actual: [95.0, 95.0, 97.0, 96.0, 97.0],
            desc: "【關鍵發現】當 GMI 達 10 µg/mL 時，合併組實際發炎抑制率（藍線）在所有測試的 DEX 濃度下均高聳地維持在 95% - 97% 的高效平台，顯著超越了 Bliss 理論極限值（紅線，81.6% - 91.9%），且 T 檢定 p < 0.05 具備顯著差異！這提供了確鑿的「協同作用 (Synergy)」細胞藥理學實證。"
        },
        g20: {
            labels: ['Log 2.5 (0.4)', 'Log 5 (0.7)', 'Log 10 (1.0)', 'Log 20 (1.3)', 'Log 40 (1.6)'],
            expected: [88.0, 89.5, 91.8, 93.0, 94.5],
            actual: [94.0, 94.5, 95.0, 94.0, 95.0],
            desc: "GMI 20 µg/mL 條件下，抑制率維持在 94% 左右平台。由於發炎抑制已達平台期，相較於 G10 並沒有帶來更多發炎抑制優勢，符合最小有效協同濃度 GMI 10 的藥理學判定。"
        },
        g40: {
            labels: ['Log 2.5 (0.4)', 'Log 5 (0.7)', 'Log 10 (1.0)', 'Log 20 (1.3)', 'Log 40 (1.6)'],
            expected: [92.0, 93.5, 94.8, 95.5, 96.5],
            actual: [98.0, 98.2, 98.5, 98.0, 98.5],
            desc: "在極高濃度 GMI 40 µg/mL 下，實際發炎抑制率趨近於 100%。然而基於臨床用藥最小有效劑量與成本/生理負荷考量，GMI 10 與 DEX 2.5 的組合被認定為本研究中最具類固醇減量價值之黃金配方。"
        }
    }
};

// 2. 配方模擬器對應表 (DEX vs GMI 實際配對的實驗數值)
const SIMULATOR_DATABASE = {
    // 抑制率數據矩陣 [GMI_INDEX][DEX_INDEX]
    // GMI Tick 索引: 0=0, 1=2.5, 2=5, 3=10, 4=20 (ug/mL)
    // DEX Tick 索引: 0=0, 1=2.5, 2=5, 3=10, 4=20, 5=40 (ug/mL)
    inhibition: [
        [0.0, 20.0, 19.0, 21.0, 45.0, 65.0],    // GMI 0
        [46.0, 39.0, 42.0, 50.0, 58.0, 64.0],   // GMI 2.5
        [60.0, 65.0, 70.0, 72.0, 74.0, 78.0],   // GMI 5
        [77.0, 95.0, 95.0, 97.0, 96.0, 97.0],   // GMI 10 (協同平台)
        [85.0, 94.0, 94.5, 95.0, 94.0, 95.0]    // GMI 20
    ],
    // MTT 存活率數據矩陣 [GMI_INDEX][DEX_INDEX]
    viability: [
        [92.5, 102.4, 112.5, 110.8, 112.1, 109.5],  // GMI 0 (單用 DEX + LPS，來自圖六)
        [97.2, 101.5, 100.2, 100.5, 98.5, 92.4],   // GMI 2.5 (G2.5 + DEX + LPS，來自圖七)
        [78.8, 92.4, 95.8, 102.1, 100.5, 92.2],    // GMI 5 (G5 + DEX + LPS，來自圖八)
        [81.2, 91.2, 93.5, 108.2, 109.5, 107.5],   // GMI 10 (G10 + DEX + LPS，來自圖九)
        [78.9, 93.0, 94.0, 106.5, 108.0, 105.0]    // GMI 20 (G20 + DEX + LPS，估算趨勢)
    ]
};

// 劑量真實數值對照陣列
const GMI_DOSES = [0, 2.5, 5, 10, 20];
const DEX_DOSES = [0, 2.5, 5, 10, 20, 40];

// 3. 全域變數
let myChart = null;
let currentChartType = 'mtt';
let currentSubTab = 'gmi';

// 4. 初始化函數
document.addEventListener("DOMContentLoaded", () => {
    initChart();
    setupEventListeners();
    updateSimulator(); // 初始更新模擬器與 SVG 動畫
});

// 5. 初始化與更新 Chart.js
function initChart() {
    const ctx = document.getElementById('researchChart').getContext('2d');
    
    // 設定 Chart.js 全域字型與色彩
    Chart.defaults.color = '#94a3b8';
    Chart.defaults.font.family = "'Inter', 'Noto Sans TC', sans-serif";
    
    // 初始化空圖表，隨後靠更新載入數據
    myChart = new Chart(ctx, {
        type: 'bar',
        data: { labels: [], datasets: [] },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { boxWidth: 12, padding: 15, color: '#f8fafc' }
                },
                tooltip: {
                    backgroundColor: '#1e293b',
                    titleColor: '#fff',
                    bodyColor: '#cbd5e1',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: 1
                }
            },
            scales: {
                y: {
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#94a3b8' },
                    border: { dash: [5, 5] }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#94a3b8' }
                }
            }
        }
    });
    
    updateChartData();
}

function updateChartData() {
    const activeData = DATA_STORE[currentChartType][currentSubTab];
    
    // 更新圖表解讀文字描述
    document.getElementById('chart-description-text').innerText = activeData.desc;
    
    if (currentChartType === 'mtt') {
        myChart.config.type = 'bar';
        myChart.data.labels = activeData.labels;
        myChart.data.datasets = [{
            label: '細胞存活率 (Viability % of CTL)',
            data: activeData.data,
            backgroundColor: activeData.data.map(val => val < 90 ? 'rgba(244, 63, 94, 0.65)' : 'rgba(59, 130, 246, 0.65)'),
            borderColor: activeData.data.map(val => val < 90 ? '#f43f5e' : '#3b82f6'),
            borderWidth: 1.5,
            borderRadius: 6,
            barThickness: 28
        }];
        myChart.options.scales.y.title = { display: true, text: '存活率 (% of CTL)', color: '#94a3b8' };
        myChart.options.scales.y.min = 0;
        myChart.options.scales.y.max = 140;
        
    } else if (currentChartType === 'il6') {
        myChart.config.type = 'bar';
        myChart.data.labels = activeData.labels;
        myChart.data.datasets = [{
            label: 'IL-6 分泌量 (pg/mL)',
            data: activeData.data,
            backgroundColor: activeData.data.map((val, idx) => {
                if (idx === 3) return 'rgba(244, 63, 94, 0.7)'; // LPS 發炎對照紅色
                if (idx === 6) return 'rgba(16, 185, 129, 0.7)'; // 合併組綠色
                return 'rgba(148, 163, 184, 0.5)'; // 單獨組灰色
            }),
            borderColor: activeData.data.map((val, idx) => {
                if (idx === 3) return '#f43f5e';
                if (idx === 6) return '#10b981';
                return '#94a3b8';
            }),
            borderWidth: 1.5,
            borderRadius: 6,
            barThickness: 28
        }];
        myChart.options.scales.y.title = { display: true, text: 'IL-6 濃度 (pg/mL)', color: '#94a3b8' };
        myChart.options.scales.y.min = 0;
        myChart.options.scales.y.max = 2500;
        
    } else if (currentChartType === 'bliss') {
        myChart.config.type = 'line';
        myChart.data.labels = activeData.labels;
        myChart.data.datasets = [
            {
                label: 'Bliss 理論預期值 (加成效應極限)',
                data: activeData.expected,
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                borderWidth: 2,
                borderDash: [5, 5],
                tension: 0.1,
                fill: false
            },
            {
                label: '實驗真實抑制率',
                data: activeData.actual,
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                borderWidth: 3,
                pointRadius: 5,
                pointBackgroundColor: '#10b981',
                tension: 0.1,
                fill: true
            }
        ];
        myChart.options.scales.y.title = { display: true, text: 'IL-6 發炎抑制率 (%)', color: '#94a3b8' };
        myChart.options.scales.y.min = 0;
        myChart.options.scales.y.max = 120;
    }
    
    myChart.update();
}

// 6. 設定事件監聽器
function setupEventListeners() {
    // 圖表主分頁 (Tab) 切換
    const tabButtons = document.querySelectorAll('.btn-tab');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentChartType = btn.dataset.chart;
            
            // 隱藏全部 sub controls，顯示當前對應的
            document.getElementById('mtt-controls').classList.add('d-none');
            document.getElementById('il6-controls').classList.add('d-none');
            document.getElementById('bliss-controls').classList.add('d-none');
            
            const subCtrl = document.getElementById(`${currentChartType}-controls`);
            subCtrl.classList.remove('d-none');
            
            // 設首個 sub-tab 為 active
            const firstSubTab = subCtrl.querySelector('.btn-sub-tab');
            subCtrl.querySelectorAll('.btn-sub-tab').forEach(b => b.classList.remove('active'));
            firstSubTab.classList.add('active');
            currentSubTab = firstSubTab.dataset.sub;
            
            updateChartData();
        });
    });

    // 圖表子分頁 (Sub-Tab) 切換
    const subTabButtons = document.querySelectorAll('.btn-sub-tab');
    subTabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const parent = btn.parentElement;
            parent.querySelectorAll('.btn-sub-tab').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentSubTab = btn.dataset.sub;
            updateChartData();
        });
    });

    // 模擬器滑桿監聽
    const sliderGmi = document.getElementById('slider-gmi');
    const sliderDex = document.getElementById('slider-dex');
    
    sliderGmi.addEventListener('input', () => {
        const val = GMI_DOSES[sliderGmi.value];
        document.getElementById('value-gmi').innerText = `${val} µg/mL`;
        updateSimulator();
    });
    
    sliderDex.addEventListener('input', () => {
        const val = DEX_DOSES[sliderDex.value];
        document.getElementById('value-dex').innerText = `${val} µg/mL`;
        updateSimulator();
    });
}

// 7. 模擬器核心邏輯與 SVG 連動
function updateSimulator() {
    const gmiIdx = parseInt(document.getElementById('slider-gmi').value);
    const dexIdx = parseInt(document.getElementById('slider-dex').value);
    
    const gmiVal = GMI_DOSES[gmiIdx];
    const dexVal = DEX_DOSES[dexIdx];
    
    // 從矩陣獲取實驗值
    const actualInhibition = SIMULATOR_DATABASE.inhibition[gmiIdx][dexIdx];
    const actualViability = SIMULATOR_DATABASE.viability[gmiIdx][dexIdx];
    
    // 計算 Bliss 理論值：
    // E_D 為單用 DEX 的抑制率 (當 GMI = 0 時的對應 DEX 抑制率)
    // E_G 為單用 GMI 的抑制率 (當 DEX = 0 時的對應 GMI 抑制率)
    const eD = SIMULATOR_DATABASE.inhibition[0][dexIdx] / 100.0;
    const eG = SIMULATOR_DATABASE.inhibition[gmiIdx][0] / 100.0;
    const blissExpected = (eD + eG - (eD * eG)) * 100.0;
    
    // 更新 UI 數據指標
    document.getElementById('metric-inhibition').innerText = `${actualInhibition.toFixed(1)}%`;
    document.getElementById('metric-expected-lbl').innerText = `Bliss 理論極限: ${blissExpected.toFixed(1)}%`;
    document.getElementById('metric-viability').innerText = `${actualViability.toFixed(1)}%`;
    
    // 更新公式詳情
    document.getElementById('val-ed').innerText = `${(eD * 100).toFixed(1)}%`;
    document.getElementById('val-eg').innerText = `${(eG * 100).toFixed(1)}%`;
    document.getElementById('val-eexp').innerText = `${blissExpected.toFixed(1)}%`;
    document.getElementById('val-eact').innerText = `${actualInhibition.toFixed(1)}%`;
    
    // 判定交互關係 (Synergy / Additive / Antagonistic)
    const badge = document.getElementById('badge-synergy');
    const toxicLbl = document.getElementById('metric-toxic-lbl');
    
    // 設定預設樣式
    badge.className = 'synergy-badge';
    toxicLbl.className = 'metric-sub';
    
    // 細胞活性狀態文字
    if (actualViability < 85) {
        toxicLbl.innerText = '具細胞壓力 (存活率下降)';
        toxicLbl.classList.add('text-danger');
    } else {
        toxicLbl.innerText = '安全 (無顯著毒性)';
        toxicLbl.classList.add('text-success');
    }

    // 協同/加成/拮抗判定與配方描述更新
    let statusDesc = "";
    
    if (gmiVal === 0 && dexVal === 0) {
        badge.innerText = '無藥物處理';
        badge.classList.add('badge-glow-danger');
        statusDesc = "細胞處於發炎對照狀態。LPS (100 ng/mL) 刺激引發劇烈的 IL-6 釋放，無任何發炎抑制。";
    } else if (gmiVal === 10 && dexVal === 2.5) {
        // 本研究之黃金配方
        badge.innerText = '黃金協同配方 (減毒增效)';
        badge.className = 'synergy-badge badge-glow-success';
        statusDesc = "【黃金配方】DEX 減量 16 倍，但搭配 GMI 10 可阻斷上游 MAPK，使抑制率激增至 95%。MTT 活性維持 91.2% 安全無毒！";
    } else if (gmiVal >= 10 && dexVal >= 2.5) {
        // 高濃度協同
        badge.innerText = '協同作用 (Synergy)';
        badge.className = 'synergy-badge badge-glow-success';
        statusDesc = `GMI ${gmiVal} 與 DEX ${dexVal} 發揮顯著協同效應。實際抑制率 (${actualInhibition}%) 明顯超越 Bliss 理論極限 (${blissExpected.toFixed(1)}%)。`;
    } else if (gmiVal > 0 && dexVal === 0) {
        badge.innerText = 'GMI 單藥治療';
        badge.classList.add('badge-glow-warning');
        statusDesc = `單獨使用天然 GMI ${gmiVal} µg/mL。上游訊號受到調節，抑制率達 ${actualInhibition}%，無顯著細胞毒性。`;
    } else if (dexVal > 0 && gmiVal === 0) {
        badge.innerText = 'DEX 單藥治療';
        badge.classList.add('badge-glow-danger');
        statusDesc = `單獨使用類固醇 DEX ${dexVal} µg/mL。下游轉錄受阻，抑制率約 ${actualInhibition}%。注意：DEX 單用會對細胞造成較大存活壓力。`;
    } else if (gmiVal < 10 && dexVal > 0) {
        badge.innerText = '加成作用 (Additive)';
        badge.classList.add('badge-glow-warning');
        statusDesc = `低劑量組合。GMI 濃度不足以穩定卡死上游，實際抑制率 (${actualInhibition}%) 與 Bliss 模型相加期望值接近。`;
    } else {
        badge.innerText = '加成作用';
        badge.classList.add('badge-glow-warning');
        statusDesc = `合併用藥。發炎抑制率為 ${actualInhibition}%，與理論預期值接近，展現基本加成效應。`;
    }
    
    document.getElementById('formula-desc').innerText = statusDesc;
    
    // 8. 與 SVG 細胞通路動畫進行連動
    updateSvgPathway(gmiVal, dexVal, actualInhibition);
}

// 動態更新 SVG 機制通路
function updateSvgPathway(gmiVal, dexVal, inhibition) {
    const svg = document.getElementById('cell-pathway');
    if (!svg) return;
    
    // GMI 作用高亮與阻斷 (上游)
    const gmiInhibit = svg.getElementById('gmi-inhibit-line');
    const gmiCircle = gmiInhibit.nextElementSibling;
    const signalLpsMapk = svg.getElementById('signal-lps-mapk');
    const signalLpsNfkb = svg.getElementById('signal-lps-nfkb');
    
    if (gmiVal > 0) {
        gmiInhibit.style.opacity = 1;
        gmiCircle.style.opacity = 1;
        // GMI 阻斷上游，傳導虛線變淡、速度變慢
        const scale = Math.max(0.1, 1 - (gmiVal / 20.0));
        signalLpsMapk.style.opacity = scale;
        signalLpsNfkb.style.opacity = scale;
        signalLpsMapk.style.animationDuration = `${2 / scale}s`;
        signalLpsNfkb.style.animationDuration = `${2 / scale}s`;
    } else {
        gmiInhibit.style.opacity = 0.2;
        gmiCircle.style.opacity = 0.2;
        signalLpsMapk.style.opacity = 1;
        signalLpsNfkb.style.opacity = 1;
        signalLpsMapk.style.animationDuration = '2s';
        signalLpsNfkb.style.animationDuration = '2s';
    }
    
    // DEX 作用高亮與阻斷 (核內)
    const dexInhibit = svg.getElementById('dex-inhibit-line');
    const dexCircle = dexInhibit.nextElementSibling;
    const signalTranslocation = svg.getElementById('signal-translocation');
    
    if (dexVal > 0) {
        dexInhibit.style.opacity = 1;
        dexCircle.style.opacity = 1;
        const scale = Math.max(0.1, 1 - (dexVal / 20.0));
        signalTranslocation.style.opacity = scale;
        signalTranslocation.style.animationDuration = `${2 / scale}s`;
    } else {
        dexInhibit.style.opacity = 0.2;
        dexCircle.style.opacity = 0.2;
        signalTranslocation.style.opacity = 1;
        signalTranslocation.style.animationDuration = '2s';
    }
    
    // IL-6 泡泡釋放數量/透明度連動 (與抑制率成反比)
    const bubble1 = svg.getElementById('bubble-1');
    const bubble2 = svg.getElementById('bubble-2');
    const bubble3 = svg.getElementById('bubble-3');
    
    const activeBubblesOpacity = Math.max(0.05, 1 - (inhibition / 100.0));
    
    bubble1.style.opacity = activeBubblesOpacity;
    bubble2.style.opacity = activeBubblesOpacity * 0.8;
    bubble3.style.opacity = activeBubblesOpacity * 0.9;
    
    // 若抑制率極高，漂浮動畫可減速或隱藏
    if (inhibition > 90) {
        bubble1.style.animationPlayState = 'paused';
        bubble2.style.animationPlayState = 'paused';
        bubble3.style.animationPlayState = 'paused';
    } else {
        bubble1.style.animationPlayState = 'running';
        bubble2.style.animationPlayState = 'running';
        bubble3.style.animationPlayState = 'running';
    }
    
    // DEX 毒性警示 (DEX 40)
    const dexWarning = svg.getElementById('dex-warning');
    if (dexVal >= 40) {
        dexWarning.style.opacity = 1;
    } else {
        dexWarning.style.opacity = 0;
    }
}
