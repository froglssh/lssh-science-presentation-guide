# 專題與科展 LLM Wiki 代理人作業規範

本文件定義代理人 (Antigravity) 在此工作區（Workspace）內維護、更新及檢索「專題與科展知識庫」的行為準則與標準工作流程（Workflows）。

---

## 知識庫架構與路徑規範

知識庫由三個層級組成：
1. **Immutable Raw Sources** (原始文獻)：存放於 `sources/`（如：`sources/presentations/`、`sources/guides/`、`sources/templates/`）。
2. **Compiled Wiki** (編譯知識庫)：存放於 `wiki/`（包含子目錄 `concepts/`、`entities/`、`summaries/`）。
3. **Special Files** (索引與日誌)：`wiki/index.md` 與 `wiki/log.md`。

---

## 三大核心作業流程 (Workflows)

### 1. Ingest (導入新文獻)
當使用者要求「導入」、「新增」或「處理」`sources/` 下的新檔案時，請執行以下步驟：

#### 步驟 1.1: 讀取與分析原始檔案
- 完整讀取原始檔案內容，識別其學術/教學意圖、核心觀念、相關實體（如賽事規則、評分規準）及可用範本。

#### 步驟 1.2: 生成文獻摘要頁面
- 在 `wiki/summaries/` 下建立對應的 Markdown 檔案，檔名與原始檔一致（例如 `wiki/summaries/AI輔助專題研究＿教師教學指南.md`）。
- 必須包含 YAML Frontmatter 格式：
  ```yaml
  ---
  title: "檔案名稱或標題"
  type: "guide | presentation | template | article"
  source_path: "sources/相對路徑"
  date: "YYYY-MM-DD"
  tags: [專題研究, 科展, AI工具, 寫作指導]
  ---
  ```
- 內文應包含：
  - **簡介與背景**：該文獻的目標受眾與主要目的。
  - **核心要點 (Key Takeaways)**：結構清晰的條列式說明。
  - **相關概念與連結 (Links)**：列出本文提及並應關聯的 `wiki/concepts/` 或 `wiki/entities/`。

#### 步驟 1.3: 更新 Concepts 與 Entities 頁面
- 根據分析結果，若有提及核心概念（如題目擬定、實驗設計），請更新或建立對應的 `wiki/concepts/<概念名稱>.md`。
- 若提及賽事或機構（如全國科展、小論文），請更新或建立 `wiki/entities/<實體名稱>.md`。
- 在這些頁面中，以條列方式**增補**從新文獻中獲得的洞見，並以 Markdown 連結回摘要頁面（例：`- 麗山高中教師教學指南 ([摘要](file:///Users/froglssh/Library/CloudStorage/GoogleDrive-frog%40lssh.tp.edu.tw/%E6%88%91%E7%9A%84%E9%9B%B2%E7%AB%AF%E5%BE%B5%E9%9B%A2/0AI%E6%87%89%E7%94%A8/0%20AI%E8%BC%94%E5%8A%A9%E5%B0%88%E9%A1%8C%E8%88%87%E7%A7%91%E5%B1%95/wiki/summaries/AI%E8%BC%94%E5%8A%A9%E5%B0%88%E9%A1%8C%E7%A2%98%E7%A9%B6%EF%BC%BF%E6%95%99%E5%B8%AB%E6%95%99%E5%AD%B8%E6%8C%87%E5%8D%97.md)) 建議...`）。

#### 步驟 1.4: 更新索引 (wiki/index.md)
- 將新摘要頁面加入 `wiki/index.md` 的「原始文獻摘要」分類中。
- 將新建立的概念或實體頁面加入相應分類。

#### 步驟 1.5: 寫入日誌 (wiki/log.md)
- 於 `wiki/log.md` 最上方（採倒序記錄）新增一筆日誌：
  `## [YYYY-MM-DD] ingest | 標題 (file:///絕對路徑)`

---

### 2. Query (檢索與問答)
當使用者詢問關於專題或科展的具體問題時，請遵循以下步驟：

1. **查閱索引**：首先讀取 `wiki/index.md`，尋找可能相關的 Wiki 頁面。
2. **多頁面檢索**：讀取相關的 summary/concept/entity 檔案。
3. **合成回答**：基於已編譯的 Wiki 進行交叉分析與合成，並在回答中附上 Wiki 連結及原始檔案連結。
4. **回饋知識庫**：若回答包含高度價值的綜合分析（如「生物科展主題設計方法論」），應詢問使用者是否將其寫成一個新的 concept 頁面。

---

### 3. Lint (知識庫健全度檢查)
當執行「Lint」或知識庫健康檢查時，請掃描並列出以下問題：
- **死連結 (Broken Links)**：檢查所有 `[文字](file:///...)` 連結，確認目標檔案是否存在。
- **孤立頁面 (Orphans)**：存在於 `wiki/` 內但未在 `wiki/index.md` 中被列出的頁面。
- **懸空概念 (Dangling Concepts)**：在摘要中被提到並標示為連結，但尚未在 `wiki/concepts/` 中建立實際檔案的條目。
- **觀點衝突 (Contradictions)**：不同文獻摘要之間，是否存在規則或建議上的邏輯衝突（例如：某文獻說字數限制 3000 字，另一文獻說 5000 字）。

---

## 格式與連結規範

1. **檔案連結格式**：所有連結必須使用**絕對路徑**與 `file:///` 協定，避免使用相對路徑，以確保在不同層級的目錄中皆能正確點擊。
2. **路徑轉義**：若路徑中含有中文字元，請注意轉義（Escape）或直接使用 macOS 絕對路徑的字面表示。例如：
   `[教學指南](file:///Users/froglssh/Library/CloudStorage/GoogleDrive-frog@lssh.tp.edu.tw/我的雲端硬碟/0AI應用/0 AI輔助專題與科展/wiki/summaries/AI輔助專題研究＿教師教學指南.md)`
3. **語言要求**：Wiki 所有內容與代理人回應一律使用**繁體中文 (Traditional Chinese)**。
