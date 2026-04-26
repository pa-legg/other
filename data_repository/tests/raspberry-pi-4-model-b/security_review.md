Raspberry Pi 4 Model B motherboard/SBC security review
======================================================

Test objective
--------------

Use saved PDFs and imagery to perform a security-oriented review of a compact
Linux-capable motherboard/SBC. The chosen board is Raspberry Pi 4 Model B
because official documentation exposes a broad set of real-world interfaces:
USB-C power, USB 2.0/3.0, Gigabit Ethernet, Wi-Fi/Bluetooth, HDMI, camera,
display, GPIO, PoE, audio/video, and microSD boot storage.

Saved evidence
--------------

- `raspberry_pi_4_datasheet.pdf`
- `raspberry_pi_4_reduced_schematics.pdf`
- `raspberry_pi_4_product_brief.pdf`
- `raspberry_pi_4_board.png`
- `source_manifest.json`

Architecture summary from documents and image
---------------------------------------------

- The board is built around a Broadcom BCM2711 quad-core ARM Cortex-A72 SoC.
- RAM is LPDDR4, with model variants up to 8 GB.
- Boot and data storage are on a removable microSD card.
- External interfaces include Gigabit Ethernet, 2.4/5 GHz Wi-Fi, Bluetooth 5.0
  BLE, two USB 3.0 ports, two USB 2.0 ports, USB-C power input, two micro-HDMI
  outputs, a 40-pin GPIO header, MIPI CSI camera, MIPI DSI display, audio/video
  jack, and optional PoE HAT support.
- The reduced schematic identifies USB-C as USB2-only for the power/input
  connector, Ethernet magnetics/signals, HDMI differential pairs, global enable,
  RUN, GPIO expansion, and multiple test points.
- The board image confirms exposed connectors and headers, making physical
  access assumptions important in the threat model.

Security concerns
-----------------

1. Removable boot media
   - The microSD card is a high-impact trust boundary. If an attacker can remove
     or replace it, they may modify the operating system, implant credentials,
     alter boot configuration, or extract sensitive data.
   - Mitigations: full-disk encryption where feasible, measured boot strategy,
     secure provisioning, tamper-evident enclosures, and strict asset handling.

2. Broad external interface surface
   - USB 3.0, USB 2.0, Ethernet, Wi-Fi, Bluetooth, HDMI, camera/display, GPIO,
     and PoE provide many attack paths.
   - Mitigations: disable unused kernel modules and radios, restrict USB device
     classes, lock down network services, and physically block unused ports.

3. GPIO expansion header
   - The 40-pin header exposes GPIO and alternate functions. In deployed
     systems it may permit bus sniffing, fault injection support circuitry, or
     unintended control of connected peripherals.
   - Mitigations: remove or shroud headers, disable unused overlays, validate
     HAT EEPROM trust assumptions, and treat attached boards as part of the
     system security boundary.

4. HAT / ID EEPROM automation
   - The schematic references ID_SC/ID_SD used by attached boards for automatic
     setup. A malicious HAT could influence configuration or load unexpected
     overlays if policy is weak.
   - Mitigations: whitelist overlays, review EEPROM contents, and disable
     automatic HAT configuration in high-assurance deployments.

5. Wireless exposure
   - Integrated Wi-Fi/Bluetooth/BLE increase remote attack surface and can leak
     information through pairing, beaconing, or misconfiguration.
   - Mitigations: disable wireless where not required, enforce strong hostapd
     and Bluetooth policy, and monitor RF behaviour during acceptance testing.

6. Power and reset controls
   - USB-C 5 V input, 5 V GPIO power, PoE, RUN, and GLOBAL_EN signals affect
     availability and may support fault-injection experiments under physical
     access.
   - Mitigations: power-path hardening, enclosure controls, watchdog policy,
     brownout testing, and logging of unexpected resets.

7. Camera/display interfaces
   - CSI and DSI are high-bandwidth internal interfaces. If connected to sensors
     or displays in an appliance, they may carry sensitive data or accept
     untrusted peripheral input.
   - Mitigations: secure flex cables, verify peripheral provenance, and disable
     unused interfaces.

8. Test points and exposed traces
   - The reduced schematic and board image show a dense physical board with
     accessible connectors and likely test pads. These are useful for debugging
     but also for probing and fault injection.
   - Mitigations: inspect physical boards for debug/test access, pot or shield
     high-risk areas, and apply tamper-evident controls for field deployment.

Recommended follow-up questions for the assistant
-------------------------------------------------

- Which Raspberry Pi 4 interfaces cross a physical trust boundary?
- What evidence identifies the HAT EEPROM trust path?
- Which controls reduce risk from removable microSD boot media?
- Which unused interfaces should be disabled for a headless deployment?

Confidence
----------

Medium-high. Findings are grounded in official Raspberry Pi specifications,
product brief, reduced schematic labels, and the saved board image. Confidence
would improve with full BCM2711 boot-chain documentation, firmware configuration
for the target deployment, and physical inspection of the exact board revision.
