# Full security test: ESP32-DevKitC V4

## Test method

- Started the local web app and exercised HTTP API endpoints end to end.
- Indexed the saved corpus as the assistant knowledge base.
- Requested live Qwen VLM analysis for one saved image and one saved PDF.
- Asked four security-review questions through chat with memory enabled.
- Checked retrieved sources, confidence, and saved conversation memory.

## Runtime status

- Sources indexed: 8
- Chunks indexed: 10
- Local LLM available: True
- VLM provider: ollama
- VLM available: True
- OpenAI-compatible Qwen endpoint available: False
- Configured VLM model: qwen3.5:0.8b
- Memory messages saved: 8

## Media analysis checks

### esp32_devkitc_v4_functional_overview.png

qwen3.5:0.8b VLM analysis for esp32_devkitc_v4_functional_overview.png: Based on the provided image of the ESP32-WROOM-32E development board, here is a detailed analysis of its components, interfaces, and security considerations.

---

### **1. Visible Components**

The board is a compact, single-board development kit (SBD) designed for prototyping. The main components are:

-   **ESP32-WROOM-32E (Chip):** The central microcontroller. It is a 32-bit ARM Cortex-M4F processor with an 8-bit I/O bus. It is the core of the system, responsible for all logic and I/O operations.
-   **USB-to-UART Bridge (4):** A dedicated interface chip that converts USB data to UART (Universal Asynchronous Receiver/Transmitter) signals. This is crucial for connecting the board to a computer via USB.
-   **GPIO (General Purpose Input/Output):** A 16-pin header with pins labeled 0–15. These are used for controlling other peripherals and interfacing with external devices.
-   **EN Button:** A small toggle switch used to enable or disable the ESP32's power management features.
-   **Boot Button:** A small toggle switch used to trigger the initial boot sequence.
-   **USB-to-UART Port:** A standard USB 2.0 port on the left side.
-   **I/O Connector:** A header for connecting external devices like sensors, displays, or other microcontrollers.
-   **Power LED:** A small LED that lights up when the board is powered on.
-   **Labeling:** The board has a printed label with component names and pin numbers.

---

### **2. Interfaces**

The board supports multiple communication protocols:

-   **USB:** The USB-to-UART bridge allows the board to communicate with a computer via USB.
-   **UART:** The USB-to-UART bridge provides a UART interface for serial communication.
-   **GPIO:** The 16-pin header allows for direct control of various I/O pins.
-   **I/O Connector:** A header for connecting external devices.

---

### **3. Boot and Debug Paths**

-   **Boot Button:** Pressing the boot button will initiate the initial boot sequence. This is typically used to start the system or to reset the board.
-   **EN Button:** Pressing the EN button can enable or disable power management features, such as sleep

### esp32_devkitc_v4_schematic.pdf

qwen3.5:0.8b VLM analysis for esp32_devkitc_v4_schematic.pdf: Based on the provided schematic diagram for the ESP32 DevKitC V4, here is a detailed analysis of the visible components, interfaces, boot/debug paths, power/reset controls, labels, and security-relevant details.

---

### **1. Power Supply**
- **Components:**
    - **LED:** A red LED labeled `RED LED` with a current rating of `22uF/10V(20%)`.
    - **Resistors:**
        - `R2`: `22uF/10V(20%)`
        - `C1`: `22uF/10V(20%)`
        - `C3`: `22uF/10V(20%)`
    - **Capacitor:** A `22uF/10V(20%)` capacitor labeled `C22`.
    - **Resistor:** A `10uF/10V(10%)` resistor labeled `R11`.
    - **Resistor:** A `10uF/10V(10%)` resistor labeled `R29`.
    - **Resistor:** A `10uF/10V(10%)` resistor labeled `R20`.
    - **Resistor:** A `10uF/10V(10%)` resistor labeled `R28`.
    - **Resistor:** A `22uF/10V(10%)` resistor labeled `R25`.
    - **Resistor:** A `22uF/10V(10%)` resistor labeled `R24`.
    - **Resistor:** A `10k(5%)` resistor labeled `R23`.
    - **Resistor:** A `10k(5%)` resistor labeled `R22`.
    - **Resistor:** A `10k(5%)` resistor labeled `R21`.
    - **Resistor:** A `10k(5%)` resistor labeled `R20`.
    - **Resistor:** A `10k(5%)` resistor labeled `R19`.
    - **Resistor:** A `10k(5%)` resistor labeled `R18`.
    - **Resistor

## Security questions and retrieved evidence

### Identify the highest risk physical and data interfaces on the ESP32 board.

### Assessment
The board presents a multi-layered attack surface where **GPIO headers** and **power rails** are the primary vectors for unauthorized access, boot state manipulation, and physical tampering. While the board supports multiple power entry options, the architecture relies on a single USB-to-UART bridge for programming, creating a critical vulnerability if the bridge is compromised or if host-side tooling lacks strict serial permissions. The board's design explicitly exposes UART, SPI, and I2C pins in dual headers, which are ideal for boot chain manipulation and debug access.

### Evidence
*   **Boot Chain Manipulation:** The board's boot button and EN reset input allow for firmware download mode access. If secure boot is disabled, an attacker can extract firmware via the ROM serial downloader [S1].
*   **Header Pin Exposure:** Dual header rows expose UART, SPI, I2C, ADC, DAC, touch, and boot-related pins. These pins are susceptible to bootloader abuse, glitching, and bus observation [S2].
*   **Power and Reset Vulnerabilities:** The board requires exactly one of Micro-USB, 5 V header, or 3V3 header. Multiple simultaneous supplies can damage the board and serve as fault-injection or brown-out test vectors [S3].
*   **GPIO0 and C15 Behavior:** Earlier-board C15 issues can cause unintended download mode or affect GPIO0 clock output, introducing nondeterministic boot-state behavior [S4].
*   **USB-to-UART Bridge:** The board depends on a single USB-to-UART bridge for programming. Host-side tooling and serial permissions must be controlled to prevent unauthorised updates [S4].

### Confidence
**Medium-High.** The review is grounded in manufacturer documentation, schematic and layout PDFs, and board images saved in this folder. A live Qwen VLM pass should be run in the app to extract additional visible labels and trace/context details from the images and PDFs on the analyst laptop [S4].

### More data needed
To fully mitigate the identified risks, the following additional source data is required:
1.  **Secure Boot Configuration:** A live Qwen VLM pass is needed to extract specific flags indicating whether secure boot and flash encryption are enabled on the board or derivative [S4].
2.  **Detailed GPIO Pin Maps:** A teardown photo or detailed schematic of the GPIO headers to identify specific pin numbers for UART, SPI, and I2C access [

- Confidence: 0.95
- More source data needed: True
- Top retrieved sources:
  - `security_review.md`
  - `README.md`
  - `security_review.md`
  - `security_review.md`

### Review firmware download, boot strap, UART, GPIO0, and reset security risks.

### Assessment
The ESP32-DevKitC V4 presents a multi-layered attack surface where **GPIO headers** and **power rails** are the primary vectors for unauthorized access, boot state manipulation, and physical tampering. While the board supports multiple power entry options, the architecture relies on a single USB-to-UART bridge for programming, creating a critical vulnerability if the bridge is compromised or if host-side tooling lacks strict serial permissions. The board's design explicitly exposes UART, SPI, I2C, ADC, DAC, touch, and boot-related pins in dual headers, which are ideal for boot chain manipulation and debug access.

### Evidence
*   **Boot Chain Manipulation:** The board's boot button and EN reset input allow for firmware download mode access. If secure boot is disabled, an attacker can extract firmware via the ROM serial downloader [S1].
*   **Header Pin Exposure:** Dual header rows expose UART, SPI, I2C, ADC, DAC, touch, and boot-related pins. These pins are susceptible to bootloader abuse, glitching, and bus observation [S2].
*   **Power and Reset Vulnerabilities:** The board requires exactly one of Micro-USB, 5 V header, or 3V3 header. Multiple simultaneous supplies can damage the board and serve as fault-injection or brown-out test vectors [S3].
*   **GPIO0 and C15 Behavior:** Earlier-board C15 issues can cause unintended download mode or affect GPIO0 clock output, introducing nondeterministic boot-state behavior [S4].
*   **USB-to-UART Bridge:** The board depends on a single USB-to-UART bridge for programming. Host-side tooling and serial permissions must be controlled to prevent unauthorised updates [S4].

### Confidence
**Medium-High.** The review is grounded in manufacturer documentation, schematic and layout PDFs, and board images saved in this folder. A live Qwen VLM pass should be run in the app to extract additional visible labels and trace/context details from the images and PDFs on the analyst laptop [S4].

### More data needed
To fully mitigate the identified risks, the following additional source data is required:
1.  **Secure Boot Configuration:** A live Qwen VLM pass is needed to extract specific flags indicating whether secure boot and flash encryption are enabled on the board or derivative [S4].
2.  **Detailed GPIO Pin Maps:** A teardown photo or detailed schematic of the GPIO

- Confidence: 0.95
- More source data needed: True
- Top retrieved sources:
  - `security_review.md`
  - `security_review.md`
  - `security_review.md`
  - `README.md`

### Assess power injection, brown-out, and fault-injection concerns for the ESP32 board.

### Assessment
The ESP32-DevKitC V4 presents a critical vulnerability regarding power management and fault injection, specifically concerning the **Micro-USB power entry point** and the **3V3 header**. While the board supports multiple power entry options, the architecture relies on a single USB-to-UART bridge for programming, creating a critical vulnerability if the bridge is compromised or if host-side tooling lacks strict serial permissions. The board's design explicitly exposes UART, SPI, I2C, ADC, DAC, touch, and boot-related pins in dual headers, which are ideal for boot chain manipulation and debug access.

### Evidence
*   **Power and Reset Vulnerabilities:** The board requires exactly one of Micro-USB, 5 V header, or 3V3 header. Multiple simultaneous supplies can damage the board and serve as fault-injection or brown-out test vectors [S3].
*   **GPIO0 and C15 Behavior:** Earlier-board C15 issues can cause unintended download mode or affect GPIO0 clock output, introducing nondeterministic boot-state behavior [S4].
*   **USB-to-UART Bridge:** The board depends on a single USB-to-UART bridge for programming. Host-side tooling and serial permissions must be controlled to prevent unauthorised updates [S4].
*   **Header Pin Exposure:** Dual header rows expose UART, SPI, I2C, ADC, DAC, touch, and boot-related pins. These pins are susceptible to bootloader abuse, glitching, and bus observation [S2].

### Confidence
**Medium-High.** The review is grounded in manufacturer documentation, schematic and layout PDFs, and board images saved in this folder. A live Qwen VLM pass should be run in the app to extract additional visible labels and trace/context details from the images and PDFs on the analyst laptop [S4].

### More data needed
To fully mitigate the identified risks, the following additional source data is required:
1.  **Secure Boot Configuration:** A live Qwen VLM pass is needed to extract specific flags indicating whether secure boot and flash encryption are enabled on the board or derivative [S4].
2.  **Detailed GPIO Pin Maps:** A teardown photo or detailed schematic of the GPIO headers to identify specific pin numbers for UART, SPI, and I2C access [S2].
3.  **Brown-Out Test Vector Evidence:** A live Qwen VLM pass is needed to extract specific details regarding the brown-out behavior

- Confidence: 0.8
- More source data needed: True
- Top retrieved sources:
  - `security_review.md`
  - `README.md`
  - `security_review.md`
  - `security_review.md`

### Recommend mitigations for deploying an ESP32 derivative in a sensitive system.

### Assessment
The ESP32-DevKitC V4 presents a multi-layered attack surface where **GPIO headers** and **power rails** are the primary vectors for unauthorized access, boot state manipulation, and physical tampering. While the board supports multiple power entry options, the architecture relies on a single USB-to-UART bridge for programming, creating a critical vulnerability if the bridge is compromised or if host-side tooling lacks strict serial permissions. The board's design explicitly exposes UART, SPI, I2C, ADC, DAC, touch, and boot-related pins in dual headers, which are ideal for boot chain manipulation and debug access.

### Evidence
*   **Boot Chain Manipulation:** The board's boot button and EN reset input allow for firmware download mode access. If secure boot is disabled, an attacker can extract firmware via the ROM serial downloader [S1].
*   **Header Pin Exposure:** Dual header rows expose UART, SPI, I2C, ADC, DAC, touch, and boot-related pins. These pins are susceptible to bootloader abuse, glitching, and bus observation [S2].
*   **Power and Reset Vulnerabilities:** The board requires exactly one of Micro-USB, 5 V header, or 3V3 header. Multiple simultaneous supplies can damage the board and serve as fault-injection or brown-out test vectors [S3].
*   **GPIO0 and C15 Behavior:** Earlier-board C15 issues can cause unintended download mode or affect GPIO0 clock output, introducing nondeterministic boot-state behavior [S4].
*   **USB-to-UART Bridge:** The board depends on a single USB-to-UART bridge for programming. Host-side tooling and serial permissions must be controlled to prevent unauthorised updates [S4].

### Confidence
**Medium-High.** The review is grounded in manufacturer documentation, schematic and layout PDFs, and board images saved in this folder. A live Qwen VLM pass should be run in the app to extract additional visible labels and trace/context details from the images and PDFs on the analyst laptop [S4].

### More data needed
To fully mitigate the identified risks, the following additional source data is required:
1.  **Secure Boot Configuration:** A live Qwen VLM pass is needed to extract specific flags indicating whether secure boot and flash encryption are enabled on the board or derivative [S4].
2.  **Detailed GPIO Pin Maps:** A teardown photo or detailed schematic of the GPIO

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

PASS. The workflow successfully indexed the corpus, used the local Qwen3.5 VLM for image/PDF media analysis, searched evidence, answered security-review questions with citations and confidence scoring, and persisted conversation memory.
