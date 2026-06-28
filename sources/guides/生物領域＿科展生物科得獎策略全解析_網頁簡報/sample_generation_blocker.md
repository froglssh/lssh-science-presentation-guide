# 樣張生成阻擋紀錄

- 階段：單頁樣張生成
- 投影片：Slide 28「因果驗證黃金標準」
- 後端：`scripts/image_gen.py --backend auto` → Codex OAuth
- 模型：`gpt-image-2`
- 輸出規格：2048 × 1152、quality medium
- 結果：未生成 `origin_image/slide_28.png`
- 錯誤：HTTP 429 `usage_limit_reached`
- 方案：Plus
- 後端回報重置時間：2026-06-28 22:35:06 CST
- 規範處置：不改用未核准或低品質替代後端；待額度重置後，以相同後端與相同風格重新生成。
