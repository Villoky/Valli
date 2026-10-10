# Русская речь в Seedance: что известно

Проверено на 2026-10-10. Экосистема вокруг Seedance сильно засорена SEO-статьями; при конфликте источников официальная документация ByteDance / Dreamina / BytePlus важнее сторонних обзоров.

## Подтверждено (официальные или первичные источники)

| Факт | Источник |
|---|---|
| Seedance 2.5 генерирует звук нативно в одном проходе: речь с липсинком, SFX, эмбиенс, музыка | Dreamina, fal, Morphic |
| Официальный список языков речи 2.5: китайский, английский, испанский, индонезийский, малайский, тайский, арабский, португальский, вьетнамский, японский, корейский. **Русского нет** | Dreamina, fal |
| В model card Seedance 2.0 (arXiv 2604.14148, табл. 20) оценены английский, японский, корейский, индонезийский, португальский, испанский. **Русский не оценивался** — это пробел в данных, а не доказательство плохой поддержки | Emily2040/seedance-2.0 → audio-guide |
| До 10 аудио-референсов, суммарно до 30 с, mp3/wav | gbeyrouti, jeurtr |
| Язык речи задаётся тем, что он назван в промпте перед репликой | Runware docs (мультиязычный гайд по 2.5) |

## Полевые данные (повторяются в нескольких источниках, но не гарантированы)

- Русская речь генерируется, но: английский акцент, неестественная интонация, неверные ударения, иногда английские слова вместо русских (vc.ru, Pikabu, Emily2040).
- Короткие реплики (до ~10 слов) сильно надёжнее длинных (Pikabu, Emily2040 ранние версии, gbeyrouti для французского).
- Если язык не назван перед репликой — модель часто уходит в английский (скилл seedance-2-5, gbeyrouti).
- Аудио-референс с репликой может вести липсинк; качество зависит от чистоты записи: сухой, close-mic, без реверба. Запись на ~80% скорости улучшает стабильность губ (gbeyrouti, для французского — перенос на русский не проверен).
- В Seedance 2.0 «немой» липсинк под внешнюю озвучку не получался: речь и артикуляция связаны (vc.ru «Seedance 2.0 и русский язык»).
- На некоторых поверхностях (Jimeng) работают теги тембра после реплики: `{...} [low warm voice]` — не универсально.

## Конфликтующие данные

| Вопрос | Позиция 1 | Позиция 2 | Что делаем |
|---|---|---|---|
| Кириллица или транслит | Кириллица в реплике — сохраняет точный текст (Emily2040, Runware-гайды по нелатинским языкам) | Транслит латиницей читается моделью лучше (vc.ru, гайд по 2.0) | **Кириллица по умолчанию.** Транслит — только как вариант B в A/B-тесте, когда кириллица даёт английские слова |
| Нужен ли тумблер звука | Runware: `settings.audio` включать явно | Часть обзоров: тумблера нет | Проверять UI конкретной платформы |
| Русская речь «из коробки» при русском промпте | Sostav: да | vc.ru, Pikabu: нестабильно | Тест 5 с до серии |

## Не проверено — не продавать как технику

- Знаки ударения (`за́мок`) в нативной реплике.
- Фонетическая орфография для исправления произношения.
- Дословное воспроизведение загруженного голоса из @Audio (а не «по мотивам»).
- Числовые лимиты слов/слогов на секунду для русского — правило «≤ 2 слова/с» в SKILL.md рабочая эвристика, а не измерение.

## Источники

- Dreamina — Seedance 2.5: https://dreamina.capcut.com/seedance/seedance-2-5
- fal — What is Seedance 2.5: https://fal.ai/learn/tools/what-is-seedance-2-5
- Runware — Multilingual video with Seedance 2.5: https://runware.ai/docs/models/bytedance-seedance-2-5/guides/multilingual
- Seedance.tv — Supported languages: https://www.seedance.tv/blog/seedance-2-5-supported-languages
- Oakgen — Seedance 2.5 audio & lip-sync: https://oakgen.ai/blog/seedance-2-5-audio-lip-sync-scene-editing
- Emily2040/seedance-2.0 (audio-guide, vocab/ru): https://github.com/Emily2040/seedance-2.0
- gbeyrouti/seedance-prompting-claude-skill (audio-dialogue, французский кейс): https://github.com/gbeyrouti/seedance-prompting-claude-skill
- jeurtr/seedance-skill: https://github.com/jeurtr/seedance-skill
- vc.ru — Seedance 2.0 и русский язык: https://vc.ru/ai/2872113-seedance-2-0-i-problemy-russkogo-yazyka
- vc.ru — лица, русская речь и промты: https://vc.ru/ai/2817087-seedance-2-0-kak-sozdat-video-neirosetyu
- vc.ru — русская озвучка через ElevenLabs: https://vc.ru/ai/2940002-idealnaya-russkaya-ozvuchka-v-seedance-2-cherez-elevenlabs
- Pikabu — как заставить говорить на русском: https://pikabu.ru/story/neyroset_seedance_2_dlya_video__kak_oboyti_zapret_na_litsa_i_zastavit_ee_govorit_na_russkom_13867957
