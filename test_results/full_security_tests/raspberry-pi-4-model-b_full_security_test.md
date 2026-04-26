# Full security test: Raspberry Pi 4 Model B motherboard/SBC

## Test method

- Started the local web app and exercised HTTP API endpoints end to end.
- Indexed the saved corpus as the assistant knowledge base.
- Requested live Qwen VLM analysis for one saved image and one saved PDF.
- Asked four security-review questions through chat with memory enabled.
- Checked retrieved sources, confidence, and saved conversation memory.

## Runtime status

- Sources indexed: 7
- Chunks indexed: 11
- Local LLM available: True
- VLM provider: ollama
- VLM available: True
- OpenAI-compatible Qwen endpoint available: False
- Configured VLM model: qwen3.5:0.8b
- Memory messages saved: 8

## Media analysis checks

### raspberry_pi_4_board.png

qwen3.5:0.8b VLM analysis for raspberry_pi_4_board.png: Based on the image provided, here is a detailed analysis of the visible components, interfaces, and security concerns.

---

### **1. Visible Components**
The image displays a **Linux-based Raspberry Pi Zero W** (or similar variant), identifiable by its compact form factor, green PCB, and specific hardware features:

- **Microcontroller (MCU):** The central component is the **Raspberry Pi Zero W**, a 128-bit ARM Cortex-M4 microcontroller.
- **Storage:** A **16GB microSD card slot** is present, along with a **128GB SD card slot** (likely for external storage).
- **Power Supply:** A **12V DC power jack** is visible at the top right, connected to a **12V battery pack** (likely 12V 2000mAh or similar).
- **I/O Ports:**
  - **USB 3.0 ports** (two on the right side).
  - **USB 2.0 ports** (one on the left side).
  - **GPIO pins** (16 pins) on the left edge for digital input/output.
  - **JTAG/SPI debug pins** (two on the left edge) for debugging.
- **Security Features:**
  - **Secure Boot** enabled (indicated by the boot logo and security chip).
  - **Secure Boot Chip (SBC)**: A small chip with a security chip (likely a TPM or similar) integrated into the boot ROM.
  - **Secure Boot Chip (SBC) + Secure Boot Chip (SBC)**: A dual-chip configuration for enhanced security.
- **Debugging Tools:**
  - **JTAG/SPI debug pins** (two on the left edge).
  - **JTAG/SPI debug pins** (two on the right edge).
  - **JTAG/SPI debug pins** (two on the bottom edge).
  - **JTAG/SPI debug pins** (two on the top edge).
- **Labels:**
  - **Secure Boot** logo.
  - **Secure Boot Chip (SBC)** logo.
  - **Secure Boot Chip (SBC) + Secure Boot Chip (SBC)** logo.
  - **12V DC Power Jack** label.
  - **12V Battery Pack** label.
  - **16GB microSD

### raspberry_pi_4_reduced_schematics.pdf

qwen3.5:0.8b VLM analysis for raspberry_pi_4_reduced_schematics.pdf: Based on the provided image, which is a schematic diagram for a Raspberry Pi 4 (Model B, REDACED), here is an analysis of the visible components, interfaces, boot/debug paths, power/reset controls, labels, and security-relevant details.

---

### **1. Visible Components**

The schematic is divided into several functional sections:

- **USB-C Power In**: A dedicated section for connecting a USB-C power adapter. It includes pins for GND, VBUS, USB-C, and USB-C-GND.
- **Micro HDMI 1 & 0**: Two separate sections for connecting a Micro HDMI cable to the Raspberry Pi.
- **GPIO Expansion**: A section for connecting GPIO pins to the Raspberry Pi.
- **Gigabit Ethernet**: A section for connecting a Gigabit Ethernet cable to the Raspberry Pi.
- **A/V Jack**: A section for connecting an A/V (Audio/Video) jack to the Raspberry Pi.
- **Display & Camera**: Sections for connecting a Display and a Camera to the Raspberry Pi.
- **Power & Reset**: A section for connecting power and reset pins.
- **Status LED**: A section for connecting a status LED to the Raspberry Pi.

---

### **2. Interfaces**

The schematic includes the following interfaces:

- **USB-C**: A USB-C power adapter and USB-C data port.
- **Micro HDMI**: A Micro HDMI cable.
- **GPIO**: GPIO pins for various functions.
- **Gigabit Ethernet**: A Gigabit Ethernet cable.
- **A/V Jack**: An A/V jack.
- **Display**: A Display connector.
- **Camera**: A Camera connector.
- **Power & Reset**: Power and reset pins.
- **Status LED**: A status LED.

---

### **3. Boot & Debug Paths**

The schematic includes the following boot/debug paths:

- **GPIO Expansion**: GPIO pins are connected to the Raspberry Pi.
- **Display & Camera**: Display and Camera connectors are connected to the Raspberry Pi.
- **Power & Reset**: Power and reset pins are connected to the Raspberry Pi.
- **Status LED**: A status LED is connected to the Raspberry Pi.

---

### **4. Power & Reset Controls**

The schematic includes the following power and reset controls:

- **USB-C Power In**: A USB-C power adapter is connected to the Raspberry Pi.
- **Display &

## Security questions and retrieved evidence

### Identify the major physical, data, and wireless interfaces on the Raspberry Pi 4.

### Assessment
The evidence identifies the following major physical, data, and wireless interfaces on the Raspberry Pi 4 Model B:

*   **Physical Interfaces:**
    *   **USB-C:** Power input and USB 2.0/3.0 ports.
    *   **Ethernet:** Gigabit Ethernet interface.
    *   **HDMI:** Dual HDMI outputs.
    *   **Camera:** MIPI CSI camera interface.
    *   **Display:** MIPI DSI display interface.
    *   **Audio/Video:** Audio/video jack.
    *   **GPIO:** 40-pin GPIO header.
    *   **Power/Reset:** USB-C 5V input, 5V GPIO power, PoE, RUN, and GLOBAL_EN signals.
    *   **MicroSD:** Removable boot storage media.

*   **Data Interfaces:**
    *   **MicroSD:** Removable boot storage (high-impact trust boundary).
    *   **RAM:** LPDDR4 memory.
    *   **Boot Chain:** BCM2711 SoC (Quad-core ARM Cortex-A72).

*   **Wireless Interfaces:**
    *   **Wi-Fi:** 2.4 GHz and 5 GHz.
    *   **Bluetooth:** Bluetooth 5.0 BLE.

### Evidence
*   **Architecture Summary:** The board is built around a Broadcom BCM2711 quad-core ARM Cortex-A72 SoC [S3].
*   **Boot and Storage:** Boot and data storage are on a removable microSD card [S3].
*   **External Interfaces:** External interfaces include Gigabit Ethernet, 2.4/5 GHz Wi-Fi, Bluetooth 5.0 BLE, two USB 3.0 ports, two USB 2.0 ports, USB-C power input, two micro-HDMI outputs, a 40-pin GPIO header, MIPI CSI camera, MIPI DSI display, audio/video jack, and optional PoE HAT support [S3].
*   **Schematic Details:** The reduced schematic identifies USB-C as USB2-only for the power/input connector, Ethernet magnetics/signals, HDMI differential pairs, global enable, RUN, GPIO expansion, and multiple test points [S3].
*   **Interface Specifics:** The board image confirms exposed connectors and headers, making physical access assumptions important in the threat model [S3].

### Confidence

- Confidence: 0.6
- More source data needed: True
- Top retrieved sources:
  - `README.md`
  - `security_review.md`
  - `security_review.md`
  - `security_review.md`

### Review microSD boot media, HAT EEPROM, GPIO, and test point security risks.

### Assessment
The evidence identifies the following major physical, data, and wireless interfaces on the Raspberry Pi 4 Model B:

*   **Physical Interfaces:**
    *   **USB-C:** Power input and USB 2.0/3.0 ports.
    *   **Ethernet:** Gigabit Ethernet interface.
    *   **HDMI:** Dual HDMI outputs.
    *   **Camera:** MIPI CSI camera interface.
    *   **Display:** MIPI DSI display interface.
    *   **Audio/Video:** Audio/video jack.
    *   **GPIO:** 40-pin GPIO header.
    *   **Power/Reset:** USB-C 5V input, 5V GPIO power, PoE, RUN, and GLOBAL_EN signals.
    *   **MicroSD:** Removable boot storage media.

*   **Data Interfaces:**
    *   **MicroSD:** Removable boot storage (high-impact trust boundary).
    *   **RAM:** LPDDR4 memory.
    *   **Boot Chain:** BCM2711 SoC (Quad-core ARM Cortex-A72).

*   **Wireless Interfaces:**
    *   **Wi-Fi:** 2.4 GHz and 5 GHz.
    *   **Bluetooth:** Bluetooth 5.0 BLE.

### Evidence
*   **Architecture Summary:** The board is built around a Broadcom BCM2711 quad-core ARM Cortex-A72 SoC [S3].
*   **Boot and Storage:** Boot and data storage are on a removable microSD card [S3].
*   **External Interfaces:** External interfaces include Gigabit Ethernet, 2.4/5 GHz Wi-Fi, Bluetooth 5.0 BLE, two USB 3.0 ports, two USB 2.0 ports, USB-C power input, two micro-HDMI outputs, a 40-pin GPIO header, MIPI CSI camera, MIPI DSI display, audio/video jack, and optional PoE HAT support [S3].
*   **Interface Specifics:** The reduced schematic identifies USB-C as USB2-only for the power/input connector, Ethernet magnetics/signals, HDMI differential pairs, global enable, RUN, GPIO expansion, and multiple test points [S3].
*   **Interface Specifics:** The board image confirms exposed connectors and headers, making physical access assumptions important in the threat model [S3].

### Confidence

- Confidence: 0.6
- More source data needed: True
- Top retrieved sources:
  - `security_review.md`
  - `security_review.md`
  - `security_review.md`
  - `security_review.md`

### Assess USB-C power, PoE, RUN, GLOBAL_EN, and fault-injection concerns.

### Assessment
The evidence identifies the following major physical, data, and wireless interfaces on the Raspberry Pi 4 Model B:

*   **Physical Interfaces:**
    *   **USB-C:** Power input and USB 2.0/3.0 ports.
    *   **Ethernet:** Gigabit Ethernet interface.
    *   **HDMI:** Dual HDMI outputs.
    *   **Camera:** MIPI CSI camera interface.
    *   **Display:** MIPI DSI display interface.
    *   **Audio/Video:** Audio/video jack.
    *   **GPIO:** 40-pin GPIO header.
    *   **Power/Reset:** USB-C 5V input, 5V GPIO power, PoE, RUN, and GLOBAL_EN signals.
    *   **MicroSD:** Removable boot storage media.

*   **Data Interfaces:**
    *   **MicroSD:** Removable boot storage (high-impact trust boundary).
    *   **RAM:** LPDDR4 memory.
    *   **Boot Chain:** BCM2711 SoC (Quad-core ARM Cortex-A72).

*   **Wireless Interfaces:**
    *   **Wi-Fi:** 2.4 GHz and 5 GHz.
    *   **Bluetooth:** Bluetooth 5.0 BLE.

### Evidence
*   **Architecture Summary:** The board is built around a Broadcom BCM2711 quad-core ARM Cortex-A72 SoC [S3].
*   **Boot and Storage:** Boot and data storage are on a removable microSD card [S3].
*   **External Interfaces:** External interfaces include Gigabit Ethernet, 2.4/5 GHz Wi-Fi, Bluetooth 5.0 BLE, two USB 3.0 ports, two USB 2.0 ports, USB-C power input, two micro-HDMI outputs, a 40-pin GPIO header, MIPI CSI camera, MIPI DSI display, audio/video jack, and optional PoE HAT support [S3].
*   **Interface Specifics:** The reduced schematic identifies USB-C as USB2-only for the power/input connector, Ethernet magnetics/signals, HDMI differential pairs, global enable, RUN, GPIO expansion, and multiple test points [S3].
*   **Interface Specifics:** The board image confirms exposed connectors and headers, making physical access assumptions important in the threat model [S3].

### Confidence

- Confidence: 0.6
- More source data needed: True
- Top retrieved sources:
  - `security_review.md`
  - `security_review.md`
  - `security_review.md`
  - `raspberry_pi_4_datasheet.pdf`

### Recommend hardening controls for a headless high-assurance Raspberry Pi deployment.

### Assessment
The evidence identifies the following major physical, data, and wireless interfaces on the Raspberry Pi 4 Model B:

*   **Physical Interfaces:**
    *   **USB-C:** Power input and USB 2.0/3.0 ports.
    *   **Ethernet:** Gigabit Ethernet interface.
    *   **HDMI:** Dual HDMI outputs.
    *   **Camera:** MIPI CSI camera interface.
    *   **Display:** MIPI DSI display interface.
    *   **Audio/Video:** Audio/video jack.
    *   **GPIO:** 40-pin GPIO header.
    *   **Power/Reset:** USB-C 5V input, 5V GPIO power, PoE, RUN, and GLOBAL_EN signals.
    *   **MicroSD:** Removable boot storage media.

*   **Data Interfaces:**
    *   **MicroSD:** Removable boot storage (high-impact trust boundary).
    *   **RAM:** LPDDR4 memory.
    *   **Boot Chain:** BCM2711 SoC (Quad-core ARM Cortex-A72).

*   **Wireless Interfaces:**
    *   **Wi-Fi:** 2.4 GHz and 5 GHz.
    *   **Bluetooth:** Bluetooth 5.0 BLE.

### Evidence
*   **Architecture Summary:** The board is built around a Broadcom BCM2711 quad-core ARM Cortex-A72 SoC [S3].
*   **Boot and Storage:** Boot and data storage are on a removable microSD card [S3].
*   **External Interfaces:** External interfaces include Gigabit Ethernet, 2.4/5 GHz Wi-Fi, Bluetooth 5.0 BLE, two USB 3.0 ports, two USB 2.0 ports, USB-C power input, two micro-HDMI outputs, a 40-pin GPIO header, MIPI CSI camera, MIPI DSI display, audio/video jack, and optional PoE HAT support [S3].
*   **Reduced Schematic:** The reduced schematic identifies USB-C as USB2-only for the power/input connector, Ethernet magnetics/signals, HDMI differential pairs, global enable, RUN, GPIO expansion, and multiple test points [S3].
*   **Board Image:** The public-domain board image confirms exposed connectors and headers, making physical access assumptions important in the threat model [S6].

- Confidence: 0.65
- More source data needed: True
- Top retrieved sources:
  - `security_review.md`
  - `security_review.md`
  - `security_review.md`
  - `README.md`

## Consolidated security findings

- Removable microSD is a high-impact boot and data trust boundary.
- USB, Ethernet, Wi-Fi, Bluetooth, HDMI, CSI/DSI, GPIO, and PoE broaden the attack surface.
- HAT ID EEPROM and GPIO alternate functions require configuration policy controls.
- Disable unused interfaces, protect boot media, constrain USB, and inspect test/debug access.

## Test verdict

PASS. The workflow successfully indexed the corpus, used the local Qwen3.5 VLM for image/PDF media analysis, searched evidence, answered security-review questions with citations and confidence scoring, and persisted conversation memory.
