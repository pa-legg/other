Raspberry Pi 4 Model B test corpus
==================================

This corpus is the second requested test set. It uses Raspberry Pi 4 Model B as
a compact motherboard / single-board-computer example with multiple external
interfaces and published schematics.

Saved evidence
--------------

- `raspberry_pi_4_reduced_schematics.pdf` - manufacturer reduced schematic.
- `raspberry_pi_4_datasheet.pdf` - manufacturer datasheet.
- `raspberry_pi_4_product_brief.pdf` - manufacturer product brief.
- `raspberry_pi_4_board.png` - public-domain board image from Wikimedia
  Commons.
- `security_review.md` - security assessment derived from the saved evidence.
- `source_manifest.json` - source URLs, retrieval notes, and licence notes.

Suggested assistant test prompt
-------------------------------

> Review the Raspberry Pi 4 Model B evidence. Identify externally reachable
> attack surfaces, board-level debug or control signals, data storage risks,
> and security concerns visible in the image and PDFs.
