# Valli

## Скиллы

### `skills/seedance-russian-speech`

Русская речь и липсинк в Seedance 2.5 / 2.0: три пути (нативный, TTS → @Audio, пост-дубляж), подготовка реплики (ударения, ё, числа словами, омографы), кадр для липсинка, шаблоны промптов, разбор брака, A/B-тест кириллица против транслита. Пара к скиллу `seedance-2-5`.

Установка:

- **Claude Code:** `cp -R skills/seedance-russian-speech ~/.claude/skills/` (или в `.claude/skills/` проекта).
- **Claude.ai / Desktop:** Settings → Capabilities → Skills → загрузить `dist/seedance-russian-speech.skill`.

### `skills/ai-video-edit`

ИИ-монтаж с Claude от записи до рендера: расшифровка GigaAM v3, автонарезка дублей и пауз, таблица покрытия, сборка в DaVinci Resolve Studio через MCP (или FCPXML), раскладка вставок скриптом по словам, плашки HyperFrames на пружинах, −16 LUFS, проверка стыков. Сырой рез говорящей головы через Whisper — `talking-head-edit`.

Установка:

- **Claude Code:** `cp -R skills/ai-video-edit ~/.claude/skills/` (или в `.claude/skills/` проекта).
- **Claude.ai / Desktop:** Settings → Capabilities → Skills → загрузить `dist/ai-video-edit.skill`.

## Готовые Seedance-скиллы на GitHub (проверено 2026-10-10)

| Репозиторий | Версии | Русский | Комментарий |
|---|---|---|---|
| [Emily2040/seedance-2.0](https://github.com/Emily2040/seedance-2.0) | 2.0 | Есть `seedance-vocab-ru` (лексика, без практики озвучки) | Самый большой и аккуратный по источникам, тяжёлый |
| [gbeyrouti/seedance-prompting-claude-skill](https://github.com/gbeyrouti/seedance-prompting-claude-skill) | 2.5 / 2.0 | Нет (кейс французского — лучший образец для не заявленного языка) | Документация на французском, промпты на английском |
| [jeurtr/seedance-skill](https://github.com/jeurtr/seedance-skill) | 2.5 / 2.0 | Нет | Один SKILL.md, сборка из 6 репо, шаблон липсинка к @Audio |
| [OSideMedia/higgsfield-ai-prompt-skill](https://github.com/OSideMedia/higgsfield-ai-prompt-skill) | 2.5 / 2.0 | Нет | Под Higgsfield |
| [dexhunter/seedance2-skill](https://github.com/dexhunter/seedance2-skill) | 2.0 | Нет | EN/ZH |
| [songguoxs/seedance-prompt-skill](https://github.com/songguoxs/seedance-prompt-skill) | 2.0 | Нет | ZH |
