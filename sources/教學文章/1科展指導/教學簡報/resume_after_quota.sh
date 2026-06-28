#!/usr/bin/env bash
set -euo pipefail

DECK_DIR="$(cd "$(dirname "$0")" && pwd)"
SKILL_ROOT="/Users/froglssh/.codex/skills/codex-ppt"
PY="/Users/froglssh/.codex-ppt-skill/.venv/bin/python"
BACKEND="scripts/image_gen.py --backend auto (codex-oauth)"

cd "$DECK_DIR/.."

python3 - <<'PY'
from pathlib import Path
import json

deck = Path("科學探究與競賽全方位指導手冊_教學簡報")
path = deck / "slide_jobs.json"
data = json.loads(path.read_text(encoding="utf-8"))

for slide in data["slides"]:
    if slide["slide_id"] in {"slide_34", "slide_35", "slide_36"} and slide["status"] == "blocked":
        slide["status"] = "pending"
        slide["dispatch"] = None
        slide["result"] = None
        slide["blocker"] = None

if data.get("run_status") == "blocked":
    data["run_status"] = "jobs_prepared"

path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
PY

for n in 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64; do
  id="$(printf "slide_%02d" "$n")"
  prompt="科學探究與競賽全方位指導手冊_教學簡報/prompts/${id}.json"
  candidate="科學探究與競賽全方位指導手冊_教學簡報/drafts/${id}_candidate_parent.png"
  agent="parent-resume-${id}"

  "$PY" "$SKILL_ROOT/scripts/record_slide_dispatch.py" \
    "科學探究與競賽全方位指導手冊_教學簡報" \
    --slide "$id" \
    --agent-id "$agent" \
    --agent-nickname parent-resume \
    --prompt-file "prompts/${id}.json"

  python3 -c "import json, pathlib; print(json.loads(pathlib.Path('$prompt').read_text(encoding='utf-8'))['prompt'])" | \
    "$PY" "$SKILL_ROOT/scripts/image_gen.py" generate \
      --backend auto \
      --model gpt-image-2 \
      --size 2048x1152 \
      --quality medium \
      --prompt-file - \
      --out "$candidate"

  "$PY" "$SKILL_ROOT/scripts/record_slide_result.py" \
    "科學探究與競賽全方位指導手冊_教學簡報" \
    --slide "$id" \
    --agent-id "$agent" \
    --backend-used "$BACKEND" \
    --selected-source "$DECK_DIR/drafts/${id}_candidate_parent.png" \
    --qa-note "Resumed after quota reset with approved Codex OAuth backend; valid generated PNG queued for final QA."
done

"$PY" "$SKILL_ROOT/scripts/slide_job_status.py" "科學探究與競賽全方位指導手冊_教學簡報"
