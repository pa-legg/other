# Full security test: ESP32-DevKitC V4

## Test method

- Started the local web app and exercised HTTP API endpoints end to end.
- Indexed the saved corpus with Qwen media enrichment enabled.
- Requested VLM analysis for one saved image and one saved PDF.
- Asked four security-review questions through chat with memory enabled.
- Checked retrieved sources, confidence, and saved conversation memory.

## Runtime status

- Sources indexed: 8
- Chunks indexed: 10
- Local LLM available: False
- Qwen VLM available: False
- Configured VLM model: qwen3.5-vl
- Memory messages saved: 8

## Media analysis checks

### esp32_devkitc_v4_functional_overview.png

Qwen3.5 VLM enrichment pending for esp32_devkitc_v4_functional_overview.png. The source is indexed as image evidence, but no local qwen3.5-vl endpoint was reachable. Start the configured local VLM and rebuild the index with media enrichment enabled.

### esp32_devkitc_v4_schematic.pdf

Qwen3.5 VLM enrichment pending for esp32_devkitc_v4_schematic.pdf. The source is indexed as pdf evidence, but no local qwen3.5-vl endpoint was reachable. Start the configured local VLM and rebuild the index with media enrichment enabled.

## Security questions and retrieved evidence

### Identify the highest risk physical and data interfaces on the ESP32 board.

Assessment
- [S1] # ESP32-DevKitC V4 security review ## Evidence used - `esp32_devkitc_v4_schematic.pdf` - `esp32_devkitc_v4_pcb_layout.pdf` - `esp32_devkitc_v4_functional_overview.png` - `esp32_devkitc_v4_pinlayout.png` - `esp32_devkitc_v4_c15_location.png` - Espressif ESP32-DevKitC V4 user guide content summarised in `README.md` ## Architecture summary ESP32-DevKitC V4 is a development board built around an ESP32-WROOM module. The public documentation and board imagery identify these security-relevant elements:...
- [S2] # ESP32-DevKitC V4 test corpus This corpus was assembled to test the offline assistant against public documentation and images for an ESP32 development board. ## Saved sources - `esp32_devkitc_v4_schematic.pdf` - Espressif ESP32-DevKitC V4 schematic. - `esp32_devkitc_v4_pcb_layout.pdf` - Espressif PCB layout. - `esp32_devkitc_v4_functional_overview.png` - annotated board image from the Espressif user guide. - `esp32_devkitc_v4_pinlayout.png` - pin layout image from the Espressif user guide. - `e...
- [S3] ct firmware does not enable secure boot and flash encryption, an attacker with physical access can attempt firmware extraction, replacement, or bootloader abuse through the ROM serial downloader. 2. **Header pins expose a broad attack surface.** GPIO headers expose UART RX/TX, SPI-flash-related labels, boot strap pins, power rails, reset, and many peripheral-capable pins. A product using this board or derivative should threat-model malicious peripherals, unintended debug access, glitching, and b...
- [S4] oard depends on a single USB-to-UART bridge for programming. Host-side tooling, serial permissions, and firmware flashing workflows should be controlled to prevent unauthorised updates or leakage over console logs. ## Recommended analyst checks - Confirm whether secure boot and flash encryption are enabled on any assessed target using this board or a derivative. - Attempt ROM downloader access only within authorised test scope; document whether GPIO0/EN/serial access is exposed in the final encl...

Evidence
- [S1] security_review.md
- [S2] README.md
- [S3] security_review.md
- [S4] security_review.md

Confidence
Medium if the cited sources are authoritative; low where the evidence comes from notes, forums, or image placeholders.

More data needed
Use the local LLM for synthesis, run VLM analysis on diagrams/photos, and add manufacturer or standards references for cross-checking.

- Confidence: 0.95
- More source data needed: True
- Top retrieved sources:
  - `security_review.md`
  - `README.md`
  - `security_review.md`
  - `security_review.md`

### Review firmware download, boot strap, UART, GPIO0, and reset security risks.

Assessment
- [S1] # ESP32-DevKitC V4 security review ## Evidence used - `esp32_devkitc_v4_schematic.pdf` - `esp32_devkitc_v4_pcb_layout.pdf` - `esp32_devkitc_v4_functional_overview.png` - `esp32_devkitc_v4_pinlayout.png` - `esp32_devkitc_v4_c15_location.png` - Espressif ESP32-DevKitC V4 user guide content summarised in `README.md` ## Architecture summary ESP32-DevKitC V4 is a development board built around an ESP32-WROOM module. The public documentation and board imagery identify these security-relevant elements:...
- [S2] ct firmware does not enable secure boot and flash encryption, an attacker with physical access can attempt firmware extraction, replacement, or bootloader abuse through the ROM serial downloader. 2. **Header pins expose a broad attack surface.** GPIO headers expose UART RX/TX, SPI-flash-related labels, boot strap pins, power rails, reset, and many peripheral-capable pins. A product using this board or derivative should threat-model malicious peripherals, unintended debug access, glitching, and b...
- [S3] oard depends on a single USB-to-UART bridge for programming. Host-side tooling, serial permissions, and firmware flashing workflows should be controlled to prevent unauthorised updates or leakage over console logs. ## Recommended analyst checks - Confirm whether secure boot and flash encryption are enabled on any assessed target using this board or a derivative. - Attempt ROM downloader access only within authorised test scope; document whether GPIO0/EN/serial access is exposed in the final encl...
- [S4] # ESP32-DevKitC V4 test corpus This corpus was assembled to test the offline assistant against public documentation and images for an ESP32 development board. ## Saved sources - `esp32_devkitc_v4_schematic.pdf` - Espressif ESP32-DevKitC V4 schematic. - `esp32_devkitc_v4_pcb_layout.pdf` - Espressif PCB layout. - `esp32_devkitc_v4_functional_overview.png` - annotated board image from the Espressif user guide. - `esp32_devkitc_v4_pinlayout.png` - pin layout image from the Espressif user guide. - `e...

Evidence
- [S1] security_review.md
- [S2] security_review.md
- [S3] security_review.md
- [S4] README.md

Confidence
Medium if the cited sources are authoritative; low where the evidence comes from notes, forums, or image placeholders.

More data needed
Use the local LLM for synthesis, run VLM analysis on diagrams/photos, and add manufacturer or standards references for cross-checking.

- Confidence: 0.95
- More source data needed: True
- Top retrieved sources:
  - `security_review.md`
  - `security_review.md`
  - `security_review.md`
  - `README.md`

### Assess power injection, brown-out, and fault-injection concerns for the ESP32 board.

Assessment
- [S1] ct firmware does not enable secure boot and flash encryption, an attacker with physical access can attempt firmware extraction, replacement, or bootloader abuse through the ROM serial downloader. 2. **Header pins expose a broad attack surface.** GPIO headers expose UART RX/TX, SPI-flash-related labels, boot strap pins, power rails, reset, and many peripheral-capable pins. A product using this board or derivative should threat-model malicious peripherals, unintended debug access, glitching, and b...
- [S2] # ESP32-DevKitC V4 test corpus This corpus was assembled to test the offline assistant against public documentation and images for an ESP32 development board. ## Saved sources - `esp32_devkitc_v4_schematic.pdf` - Espressif ESP32-DevKitC V4 schematic. - `esp32_devkitc_v4_pcb_layout.pdf` - Espressif PCB layout. - `esp32_devkitc_v4_functional_overview.png` - annotated board image from the Espressif user guide. - `esp32_devkitc_v4_pinlayout.png` - pin layout image from the Espressif user guide. - `e...
- [S3] # ESP32-DevKitC V4 security review ## Evidence used - `esp32_devkitc_v4_schematic.pdf` - `esp32_devkitc_v4_pcb_layout.pdf` - `esp32_devkitc_v4_functional_overview.png` - `esp32_devkitc_v4_pinlayout.png` - `esp32_devkitc_v4_c15_location.png` - Espressif ESP32-DevKitC V4 user guide content summarised in `README.md` ## Architecture summary ESP32-DevKitC V4 is a development board built around an ESP32-WROOM module. The public documentation and board imagery identify these security-relevant elements:...
- [S4] oard depends on a single USB-to-UART bridge for programming. Host-side tooling, serial permissions, and firmware flashing workflows should be controlled to prevent unauthorised updates or leakage over console logs. ## Recommended analyst checks - Confirm whether secure boot and flash encryption are enabled on any assessed target using this board or a derivative. - Attempt ROM downloader access only within authorised test scope; document whether GPIO0/EN/serial access is exposed in the final encl...

Evidence
- [S1] security_review.md
- [S2] README.md
- [S3] security_review.md
- [S4] security_review.md

Confidence
Medium if the cited sources are authoritative; low where the evidence comes from notes, forums, or image placeholders.

More data needed
Use the local LLM for synthesis, run VLM analysis on diagrams/photos, and add manufacturer or standards references for cross-checking.

- Confidence: 0.95
- More source data needed: True
- Top retrieved sources:
  - `security_review.md`
  - `README.md`
  - `security_review.md`
  - `security_review.md`

### Recommend mitigations for deploying an ESP32 derivative in a sensitive system.

Assessment
- [S1] # ESP32-DevKitC V4 test corpus This corpus was assembled to test the offline assistant against public documentation and images for an ESP32 development board. ## Saved sources - `esp32_devkitc_v4_schematic.pdf` - Espressif ESP32-DevKitC V4 schematic. - `esp32_devkitc_v4_pcb_layout.pdf` - Espressif PCB layout. - `esp32_devkitc_v4_functional_overview.png` - annotated board image from the Espressif user guide. - `esp32_devkitc_v4_pinlayout.png` - pin layout image from the Espressif user guide. - `e...
- [S2] # ESP32-DevKitC V4 security review ## Evidence used - `esp32_devkitc_v4_schematic.pdf` - `esp32_devkitc_v4_pcb_layout.pdf` - `esp32_devkitc_v4_functional_overview.png` - `esp32_devkitc_v4_pinlayout.png` - `esp32_devkitc_v4_c15_location.png` - Espressif ESP32-DevKitC V4 user guide content summarised in `README.md` ## Architecture summary ESP32-DevKitC V4 is a development board built around an ESP32-WROOM module. The public documentation and board imagery identify these security-relevant elements:...
- [S3] ct firmware does not enable secure boot and flash encryption, an attacker with physical access can attempt firmware extraction, replacement, or bootloader abuse through the ROM serial downloader. 2. **Header pins expose a broad attack surface.** GPIO headers expose UART RX/TX, SPI-flash-related labels, boot strap pins, power rails, reset, and many peripheral-capable pins. A product using this board or derivative should threat-model malicious peripherals, unintended debug access, glitching, and b...
- [S4] oard depends on a single USB-to-UART bridge for programming. Host-side tooling, serial permissions, and firmware flashing workflows should be controlled to prevent unauthorised updates or leakage over console logs. ## Recommended analyst checks - Confirm whether secure boot and flash encryption are enabled on any assessed target using this board or a derivative. - Attempt ROM downloader access only within authorised test scope; document whether GPIO0/EN/serial access is exposed in the final encl...

Evidence
- [S1] README.md
- [S2] security_review.md
- [S3] security_review.md
- [S4] security_review.md

Confidence
Medium if the cited sources are authoritative; low where the evidence comes from notes, forums, or image placeholders.

More data needed
Use the local LLM for synthesis, run VLM analysis on diagrams/photos, and add manufacturer or standards references for cross-checking.

- Confidence: 0.95
- More source data needed: True
- Top retrieved sources:
  - `README.md`
  - `security_review.md`
  - `security_review.md`
  - `security_review.md`

## Consolidated security findings

- Serial firmware download mode through Boot/EN and USB-UART is physically accessible.
- Headers expose UART, GPIO, boot strap pins, reset, and power rails.
- Multiple mutually exclusive power entry points create fault and back-powering risks.
- Secure boot, flash encryption, protected headers, and controlled flashing workflows are key mitigations.

## Test verdict

PASS with caveats. The workflow successfully indexed the corpus, searched evidence, answered security-review questions with citations and confidence scoring, and persisted conversation memory. In this execution environment the local Qwen endpoint was not available, so media checks recorded explicit pending enrichment chunks instead of live model-generated image/PDF analysis.
