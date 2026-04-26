# Full security test: Raspberry Pi 4 Model B motherboard/SBC

## Test method

- Started the local web app and exercised HTTP API endpoints end to end.
- Indexed the saved corpus with Qwen media enrichment enabled.
- Requested VLM analysis for one saved image and one saved PDF.
- Asked four security-review questions through chat with memory enabled.
- Checked retrieved sources, confidence, and saved conversation memory.

## Runtime status

- Sources indexed: 7
- Chunks indexed: 11
- Local LLM available: False
- Qwen VLM available: False
- Configured VLM model: qwen3.5-vl
- Memory messages saved: 8

## Media analysis checks

### raspberry_pi_4_board.png

Qwen3.5 VLM enrichment pending for raspberry_pi_4_board.png. The source is indexed as image evidence, but no local qwen3.5-vl endpoint was reachable. Start the configured local VLM and rebuild the index with media enrichment enabled.

### raspberry_pi_4_reduced_schematics.pdf

Qwen3.5 VLM enrichment pending for raspberry_pi_4_reduced_schematics.pdf. The source is indexed as pdf evidence, but no local qwen3.5-vl endpoint was reachable. Start the configured local VLM and rebuild the index with media enrichment enabled.

## Security questions and retrieved evidence

### Identify the major physical, data, and wireless interfaces on the Raspberry Pi 4.

Assessment
- [S1] Raspberry Pi 4 Model B test corpus ================================== This corpus is the second requested test set. It uses Raspberry Pi 4 Model B as a compact motherboard / single-board-computer example with multiple external interfaces and published schematics. Saved evidence -------------- - `raspberry_pi_4_reduced_schematics.pdf` - manufacturer reduced schematic. - `raspberry_pi_4_datasheet.pdf` - manufacturer datasheet. - `raspberry_pi_4_product_brief.pdf` - manufacturer product brief. - `r...
- [S2]  controls, watchdog policy, brownout testing, and logging of unexpected resets. 7. Camera/display interfaces - CSI and DSI are high-bandwidth internal interfaces. If connected to sensors or displays in an appliance, they may carry sensitive data or accept untrusted peripheral input. - Mitigations: secure flex cables, verify peripheral provenance, and disable unused interfaces. 8. Test points and exposed traces - The reduced schematic and board image show a dense physical board with accessible co...
- [S3] Raspberry Pi 4 Model B motherboard/SBC security review ====================================================== Test objective -------------- Use saved PDFs and imagery to perform a security-oriented review of a compact Linux-capable motherboard/SBC. The chosen board is Raspberry Pi 4 Model B because official documentation exposes a broad set of real-world interfaces: USB-C power, USB 2.0/3.0, Gigabit Ethernet, Wi-Fi/Bluetooth, HDMI, camera, display, GPIO, PoE, audio/video, and microSD boot storag...
- [S4] ns. In deployed systems it may permit bus sniffing, fault injection support circuitry, or unintended control of connected peripherals. - Mitigations: remove or shroud headers, disable unused overlays, validate HAT EEPROM trust assumptions, and treat attached boards as part of the system security boundary. 4. HAT / ID EEPROM automation - The schematic references ID_SC/ID_SD used by attached boards for automatic setup. A malicious HAT could influence configuration or load unexpected overlays if po...

Evidence
- [S1] README.md
- [S2] security_review.md
- [S3] security_review.md
- [S4] security_review.md

Confidence
Medium if the cited sources are authoritative; low where the evidence comes from notes, forums, or image placeholders.

More data needed
Use the local LLM for synthesis, run VLM analysis on diagrams/photos, and add manufacturer or standards references for cross-checking.

- Confidence: 1.0
- More source data needed: True
- Top retrieved sources:
  - `README.md`
  - `security_review.md`
  - `security_review.md`
  - `security_review.md`

### Review microSD boot media, HAT EEPROM, GPIO, and test point security risks.

Assessment
- [S1] PI DSI display, audio/video jack, and optional PoE HAT support. - The reduced schematic identifies USB-C as USB2-only for the power/input connector, Ethernet magnetics/signals, HDMI differential pairs, global enable, RUN, GPIO expansion, and multiple test points. - The board image confirms exposed connectors and headers, making physical access assumptions important in the threat model. Security concerns ----------------- 1. Removable boot media - The microSD card is a high-impact trust boundary....
- [S2] Raspberry Pi 4 Model B motherboard/SBC security review ====================================================== Test objective -------------- Use saved PDFs and imagery to perform a security-oriented review of a compact Linux-capable motherboard/SBC. The chosen board is Raspberry Pi 4 Model B because official documentation exposes a broad set of real-world interfaces: USB-C power, USB 2.0/3.0, Gigabit Ethernet, Wi-Fi/Bluetooth, HDMI, camera, display, GPIO, PoE, audio/video, and microSD boot storag...
- [S3]  controls, watchdog policy, brownout testing, and logging of unexpected resets. 7. Camera/display interfaces - CSI and DSI are high-bandwidth internal interfaces. If connected to sensors or displays in an appliance, they may carry sensitive data or accept untrusted peripheral input. - Mitigations: secure flex cables, verify peripheral provenance, and disable unused interfaces. 8. Test points and exposed traces - The reduced schematic and board image show a dense physical board with accessible co...
- [S4] ns. In deployed systems it may permit bus sniffing, fault injection support circuitry, or unintended control of connected peripherals. - Mitigations: remove or shroud headers, disable unused overlays, validate HAT EEPROM trust assumptions, and treat attached boards as part of the system security boundary. 4. HAT / ID EEPROM automation - The schematic references ID_SC/ID_SD used by attached boards for automatic setup. A malicious HAT could influence configuration or load unexpected overlays if po...

Evidence
- [S1] security_review.md
- [S2] security_review.md
- [S3] security_review.md
- [S4] security_review.md

Confidence
Medium if the cited sources are authoritative; low where the evidence comes from notes, forums, or image placeholders.

More data needed
Use the local LLM for synthesis, run VLM analysis on diagrams/photos, and add manufacturer or standards references for cross-checking.

- Confidence: 1.0
- More source data needed: True
- Top retrieved sources:
  - `security_review.md`
  - `security_review.md`
  - `security_review.md`
  - `security_review.md`

### Assess USB-C power, PoE, RUN, GLOBAL_EN, and fault-injection concerns.

Assessment
- [S1] ns. In deployed systems it may permit bus sniffing, fault injection support circuitry, or unintended control of connected peripherals. - Mitigations: remove or shroud headers, disable unused overlays, validate HAT EEPROM trust assumptions, and treat attached boards as part of the system security boundary. 4. HAT / ID EEPROM automation - The schematic references ID_SC/ID_SD used by attached boards for automatic setup. A malicious HAT could influence configuration or load unexpected overlays if po...
- [S2] Raspberry Pi 4 Model B motherboard/SBC security review ====================================================== Test objective -------------- Use saved PDFs and imagery to perform a security-oriented review of a compact Linux-capable motherboard/SBC. The chosen board is Raspberry Pi 4 Model B because official documentation exposes a broad set of real-world interfaces: USB-C power, USB 2.0/3.0, Gigabit Ethernet, Wi-Fi/Bluetooth, HDMI, camera, display, GPIO, PoE, audio/video, and microSD boot storag...
- [S3] PI DSI display, audio/video jack, and optional PoE HAT support. - The reduced schematic identifies USB-C as USB2-only for the power/input connector, Ethernet magnetics/signals, HDMI differential pairs, global enable, RUN, GPIO expansion, and multiple test points. - The board image confirms exposed connectors and headers, making physical access assumptions important in the threat model. Security concerns ----------------- 1. Removable boot media - The microSD card is a high-impact trust boundary....
- [S4] Qwen3.5 VLM enrichment pending for raspberry_pi_4_datasheet.pdf. The source is indexed as pdf evidence, but no local qwen3.5-vl endpoint was reachable. Start the configured local VLM and rebuild the index with media enrichment enabled.

Evidence
- [S1] security_review.md
- [S2] security_review.md
- [S3] security_review.md
- [S4] raspberry_pi_4_datasheet.pdf

Confidence
Medium if the cited sources are authoritative; low where the evidence comes from notes, forums, or image placeholders.

More data needed
Use the local LLM for synthesis, run VLM analysis on diagrams/photos, and add manufacturer or standards references for cross-checking.

- Confidence: 1.0
- More source data needed: True
- Top retrieved sources:
  - `security_review.md`
  - `security_review.md`
  - `security_review.md`
  - `raspberry_pi_4_datasheet.pdf`

### Recommend hardening controls for a headless high-assurance Raspberry Pi deployment.

Assessment
- [S1]  controls, watchdog policy, brownout testing, and logging of unexpected resets. 7. Camera/display interfaces - CSI and DSI are high-bandwidth internal interfaces. If connected to sensors or displays in an appliance, they may carry sensitive data or accept untrusted peripheral input. - Mitigations: secure flex cables, verify peripheral provenance, and disable unused interfaces. 8. Test points and exposed traces - The reduced schematic and board image show a dense physical board with accessible co...
- [S2] ns. In deployed systems it may permit bus sniffing, fault injection support circuitry, or unintended control of connected peripherals. - Mitigations: remove or shroud headers, disable unused overlays, validate HAT EEPROM trust assumptions, and treat attached boards as part of the system security boundary. 4. HAT / ID EEPROM automation - The schematic references ID_SC/ID_SD used by attached boards for automatic setup. A malicious HAT could influence configuration or load unexpected overlays if po...
- [S3] Raspberry Pi 4 Model B motherboard/SBC security review ====================================================== Test objective -------------- Use saved PDFs and imagery to perform a security-oriented review of a compact Linux-capable motherboard/SBC. The chosen board is Raspberry Pi 4 Model B because official documentation exposes a broad set of real-world interfaces: USB-C power, USB 2.0/3.0, Gigabit Ethernet, Wi-Fi/Bluetooth, HDMI, camera, display, GPIO, PoE, audio/video, and microSD boot storag...
- [S4] Qwen3.5 VLM enrichment pending for raspberry_pi_4_datasheet.pdf. The source is indexed as pdf evidence, but no local qwen3.5-vl endpoint was reachable. Start the configured local VLM and rebuild the index with media enrichment enabled.

Evidence
- [S1] security_review.md
- [S2] security_review.md
- [S3] security_review.md
- [S4] raspberry_pi_4_datasheet.pdf

Confidence
Medium if the cited sources are authoritative; low where the evidence comes from notes, forums, or image placeholders.

More data needed
Use the local LLM for synthesis, run VLM analysis on diagrams/photos, and add manufacturer or standards references for cross-checking.

- Confidence: 1.0
- More source data needed: True
- Top retrieved sources:
  - `security_review.md`
  - `security_review.md`
  - `security_review.md`
  - `raspberry_pi_4_datasheet.pdf`

## Consolidated security findings

- Removable microSD is a high-impact boot and data trust boundary.
- USB, Ethernet, Wi-Fi, Bluetooth, HDMI, CSI/DSI, GPIO, and PoE broaden the attack surface.
- HAT ID EEPROM and GPIO alternate functions require configuration policy controls.
- Disable unused interfaces, protect boot media, constrain USB, and inspect test/debug access.

## Test verdict

PASS with caveats. The workflow successfully indexed the corpus, searched evidence, answered security-review questions with citations and confidence scoring, and persisted conversation memory. In this execution environment the local Qwen endpoint was not available, so media checks recorded explicit pending enrichment chunks instead of live model-generated image/PDF analysis.
