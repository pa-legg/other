# ESP32-DevKitC V4 security review

## Evidence used

- `esp32_devkitc_v4_schematic.pdf`
- `esp32_devkitc_v4_pcb_layout.pdf`
- `esp32_devkitc_v4_functional_overview.png`
- `esp32_devkitc_v4_pinlayout.png`
- `esp32_devkitc_v4_c15_location.png`
- Espressif ESP32-DevKitC V4 user guide content summarised in `README.md`

## Architecture summary

ESP32-DevKitC V4 is a development board built around an ESP32-WROOM module. The
public documentation and board imagery identify these security-relevant
elements:

- Micro-USB power and USB-to-UART programming/debug path.
- Boot button that places the module into firmware download mode when used with
  EN/reset.
- EN reset input and GPIO0 boot strap exposure.
- Dual header rows that break out most ESP32 pins, including UART, SPI, I2C,
  ADC, DAC, touch, boot-related pins, and power rails.
- Multiple power entry options: Micro-USB 5 V, 5 V header, or 3V3 header.
- Earlier-board C15 issue that can cause unintended download mode or affect
  GPIO0 clock behaviour.

## Security concerns

1. **Serial firmware download mode is physically easy to reach.**
   The Boot and EN buttons, Micro-USB connector, and UART pins are accessible.
   If deployed product firmware does not enable secure boot and flash
   encryption, an attacker with physical access can attempt firmware extraction,
   replacement, or bootloader abuse through the ROM serial downloader.

2. **Header pins expose a broad attack surface.**
   GPIO headers expose UART RX/TX, SPI-flash-related labels, boot strap pins,
   power rails, reset, and many peripheral-capable pins. A product using this
   board or derivative should threat-model malicious peripherals, unintended
   debug access, glitching, and bus observation.

3. **Power injection and back-powering risk.**
   Espressif documents that the board must be powered by exactly one of
   Micro-USB, 5 V header, or 3V3 header. Multiple simultaneous supplies can
   damage the board and can also become a fault-injection or brown-out test
   vector during security assessment.

4. **GPIO0 / C15 behaviour can affect boot state.**
   The documentation warns that C15 on earlier boards may cause download mode or
   affect GPIO0 clock output. For security testing, this is a useful source of
   nondeterministic boot-state behaviour and should be inspected against the
   exact board revision.

5. **USB-to-UART bridge path has host trust implications.**
   The board depends on a single USB-to-UART bridge for programming. Host-side
   tooling, serial permissions, and firmware flashing workflows should be
   controlled to prevent unauthorised updates or leakage over console logs.

## Recommended analyst checks

- Confirm whether secure boot and flash encryption are enabled on any assessed
  target using this board or a derivative.
- Attempt ROM downloader access only within authorised test scope; document
  whether GPIO0/EN/serial access is exposed in the final enclosure.
- Probe UART TX/RX for boot logs, debug shells, panic traces, and credentials.
- Review boot strap pin pulls and external circuitry for glitching or mode
  forcing.
- Verify that production hardware removes or protects unnecessary headers,
  buttons, and exposed test pads.
- Validate power-path protections and brown-out/reset behaviour.

## Confidence

Medium-high. The review is grounded in manufacturer documentation, schematic and
layout PDFs, and board images saved in this folder. A live Qwen VLM pass should
be run in the app to extract additional visible labels and trace/context details
from the images and PDFs on the analyst laptop.
