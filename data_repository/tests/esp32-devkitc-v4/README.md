# ESP32-DevKitC V4 test corpus

This corpus was assembled to test the offline assistant against public
documentation and images for an ESP32 development board.

## Saved sources

- `esp32_devkitc_v4_schematic.pdf` - Espressif ESP32-DevKitC V4 schematic.
- `esp32_devkitc_v4_pcb_layout.pdf` - Espressif PCB layout.
- `esp32_devkitc_v4_functional_overview.png` - annotated board image from the
  Espressif user guide.
- `esp32_devkitc_v4_pinlayout.png` - pin layout image from the Espressif user
  guide.
- `esp32_devkitc_v4_c15_location.png` - C15 location image from the Espressif
  user guide.
- `source_notes.md` - source URLs and extracted high-confidence facts.
- `security_review.md` - grounded security review produced for this test.

## Intended VLM coverage

When `Use VLM during indexing` is enabled and
`SECURITY_ASSISTANT_VLM_MODEL` points at a local Qwen3.5 VLM-compatible model,
the assistant should add searchable analysis chunks for all PNG and PDF files
in this folder.
