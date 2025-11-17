# BambuLab 3D Printing Mastery Course

## Course Overview
- **Audience:** Home hobbyists seeking creative projects, and professionals needing repeatable, production-ready workflows.
- **Format:** 12 modules blending text, printable checklists, and starter project briefs. Each module ends with quick wins and practice prompts for both audiences.
- **Goal:** Bring learners from unboxing to confident multi-material production, with a clear path for ongoing improvement.

## Module 1 – Welcome & Orientation
- **Objectives:** Understand course flow, gather required tools, learn safety basics.
- **Key Topics:** Hardware checklist, workspace preparation, personal protective equipment (PPE) guidelines.
- **Step-by-step:**
  1. Read the BambuLab quick-start leaflet and compare it with our expanded checklist.
  2. Clear a stable surface with access to power and ventilation.
  3. Watch (or review a transcript of) the assigned orientation video; note any questions.
- **Visual Aid:** Diagram showing ideal printer placement with ventilation arrows and cable management.
- **Hobbyist Example:** Set up a “maker corner” that doubles as display space for finished prints.
- **Professional Example:** Position the printer near prototyping benches with ESD-safe mats and labeled material bins.
- **Quick Wins:** Verify toolkit completeness; photograph workspace to identify clutter spots.

## Module 2 – Unboxing & Hardware Assembly
- **Objectives:** Safely unbox BambuLab printers (e.g., P1S, X1C), attach accessories, perform initial checks.
- **Step-by-step:**
  1. Document package condition before opening for warranty records.
  2. Remove printer; use foam supports to avoid frame stress.
  3. Install build plate, spool holder, AMS (if included), camera, and silicone sock.
  4. Connect power, Ethernet/Wi-Fi, and update firmware via touch screen.
- **Visual Aid:** Exploded diagram of major components with attachment points labeled.
- **Troubleshooting:** If the toolhead wobbles, tighten the belt tensioners using the included hex wrench until belting deflects ~5 mm under light pressure.
- **Hobbyist Tip:** Save foam inserts to fashion a travel case for workshops.
- **Professional Tip:** Log serial numbers and firmware versions in maintenance software.

## Module 3 – Software Installation & Accounts
- **Objectives:** Install Bambu Studio, Bambu Handy app, and sync cloud services.
- **Step-by-step:**
  1. Download Bambu Studio for Windows/Mac/Linux; install using default path.
  2. Create or log into the Bambu account; verify email.
  3. Pair printer via LAN or cloud; confirm handshake using QR code.
  4. Install Bambu Handy on mobile for remote monitoring.
- **Visual Aid:** Flowchart showing data path from CAD → Bambu Studio → Printer → Mobile monitoring.
- **Hobbyist Tip:** Enable “Smart Reminder” notifications for fun surprise prints when away from the desk.
- **Professional Tip:** Create a shared team account with role-based access; disable auto-firmware updates without QA approval.

## Module 4 – First Test Print & Calibration
- **Objectives:** Run starter calibration prints to baseline performance.
- **Step-by-step:**
  1. Load PLA into AMS or single spool holder; purge old filament if needed.
  2. In Bambu Studio, open the built-in “Calibration Cube” project.
  3. Use recommended profile (0.2 mm layer height); slice and preview toolpaths.
  4. Start the print; watch first layer via camera.
  5. Measure cube dimensions with calipers and record deviations.
- **Troubleshooting:** If first layer does not stick, run the automatic bed leveling sequence and re-clean with isopropyl alcohol.
- **Visual Aid:** Table linking dimensional error to compensation values in Bambu Studio’s tuning panel.
- **Hobbyist Prompt:** Paint the cube with acrylics to practice finishing techniques.
- **Professional Prompt:** Use measurements to generate a QA baseline sheet for future audits.

## Module 5 – Materials & Profile Management
- **Objectives:** Understand filament types, moisture control, and custom profile tuning.
- **Key Topics:** PLA, PETG, ABS/ASA, PA-CF; temperature and humidity targets.
- **Step-by-step:**
  1. Catalog filaments with color, material, lot number.
  2. Store hygroscopic filaments in airtight bins with desiccant; log humidity weekly.
  3. Duplicate and edit Bambu default profiles; adjust temperature towers to find optimal nozzle temps.
- **Visual Aid:** Matrix comparing filament type vs. nozzle temp, bed temp, enclosure needs.
- **Troubleshooting:** For stringing in PETG, raise retraction speed to 35 mm/s and lower nozzle temp by 5 °C.
- **Hobbyist Tip:** Use leftover PLA to print color swatches and label them.
- **Professional Tip:** Implement Kanban cards for filament inventory and reorder thresholds.

## Module 6 – Speed Optimization & Vibration Control
- **Objectives:** Increase throughput without sacrificing quality.
- **Step-by-step:**
  1. Activate “Sport” or “Ludicrous” mode cautiously; note baseline cycle time.
  2. Use resonance compensation (input shaping) features within Bambu Studio.
  3. Reduce infill percentage or switch to gyroid for strength-to-speed balance.
  4. Print a “speed tower” sample to evaluate ringing.
- **Visual Aid:** Annotated graph relating acceleration to surface ripple amplitude.
- **Troubleshooting:** If ghosting appears, lower max acceleration by 500 mm/s² increments.
- **Hobbyist Tip:** Batch small figurines on a single plate; stagger start times using queueing.
- **Professional Tip:** Create time studies in spreadsheets to justify throughput improvements.

## Module 7 – Surface Quality & Defect Troubleshooting
- **Objectives:** Diagnose stringing, warping, layer shifts, under-extrusion.
- **Step-by-step:**
  1. Review print logs and camera timelapses for failure clues.
  2. Use the Bambu Studio “Process Diagnosis” panel to adjust flow rate.
  3. Apply brim or raft when warping is detected; enclose the printer for ABS/ASA.
  4. For layer shifts, inspect belt tension and lubricate linear rails.
- **Visual Aid:** Troubleshooting decision tree starting from defect symptom.
- **Hobbyist Example:** Fix stringing on cosplay accessories by tuning retraction distance and using PLA+.
- **Professional Example:** Resolve warping on functional ABS brackets by enabling chamber preheat and PA mesh leveling.

## Module 8 – Multi-Material & AMS Mastery
- **Objectives:** Leverage the Automatic Material System (AMS) for color, support, and material swaps.
- **Step-by-step:**
  1. Calibrate AMS filament IDs; assign color chips for quick recognition.
  2. Configure purge volumes and waste chute; print purge buckets with segmented walls.
  3. Slice dual-material models; map filaments to extruders in the “Plate” tab.
  4. Use “Sequential Printing” for rigid + flexible combos.
- **Visual Aid:** Layer diagram showing support interface vs. model filament transitions.
- **Troubleshooting:** If AMS misfeeds, clean the gear path and verify the filament tip is sharply cut at 45°.
- **Hobbyist Tip:** Design multi-color badges using simple SVG imports.
- **Professional Tip:** Alternate soluble supports with engineering materials for complex jigs.

## Module 9 – Support Strategies & Custom Structures
- **Objectives:** Optimize automatic supports, tree supports, and manual supports.
- **Step-by-step:**
  1. Evaluate auto-support preview; delete unnecessary pillars manually.
  2. Add custom support blockers/painting to protect cosmetic surfaces.
  3. Experiment with interface layers for cleaner removal.
  4. Document best settings per material (e.g., PETG requires higher support Z distance).
- **Visual Aid:** Side-by-side render of default vs. painted supports with annotations.
- **Hobbyist Example:** Support a fantasy mini without scars using organic supports.
- **Professional Example:** Print tooling fixtures with dissolvable interfaces to preserve tolerances.

## Module 10 – CAD Integration & Workflow Automation
- **Objectives:** Build a streamlined pipeline from CAD to print.
- **Step-by-step:**
  1. Install Bambu Studio plugins for Fusion 360 / SolidWorks export.
  2. Configure file naming conventions and revision control.
  3. Use parameter-driven CAD to generate multiple variants and export via STEP → 3MF.
  4. Automate slicing with Bambu’s command-line interface or scripting API.
- **Visual Aid:** Swimlane diagram mapping CAD designer, print operator, QA steps.
- **Hobbyist Tip:** Use Tinkercad’s shape generators, then import 3MF directly.
- **Professional Tip:** Link PDM system metadata to slicer profiles for traceability.

## Module 11 – Maintenance, Calibration & Safety Protocols
- **Objectives:** Keep printers running reliably and safely.
- **Step-by-step:**
  1. Schedule weekly nozzle cleaning and monthly lubrication (use Bambu-approved grease).
  2. Replace PTFE tubes quarterly or after 500 print hours.
  3. Run belt tension test via firmware; adjust to 100–120 Hz using the tension tool.
  4. Inspect HEPA filters; replace when airflow drops.
- **Visual Aid:** Maintenance calendar template with color-coded intervals.
- **Hobbyist Tip:** Set recurring calendar reminders tied to favorite projects.
- **Professional Tip:** Log maintenance in CMMS software; track MTBF metrics.

## Module 12 – Dual Track Projects & Capstone
- **Structure:** Split deliverables for hobbyists vs. professionals while sharing core techniques.
- **Hobbyist Capstone:** Design and print a modular tabletop game organizer incorporating multicolor AMS panels, snap-fit joints, and textured surfaces. Document design iterations with photos and settings.
- **Professional Capstone:** Produce a functional prototype enclosure with threaded inserts, tolerance-critical snap features, and documentation package (slicer profile, inspection report, cost/time analysis).
- **Support Materials:**
  - Checklist for project planning.
  - Template for documenting slicer settings and quality metrics.
  - Peer review rubric encouraging learners to trade feedback.
- **Assessment:** Submit photos/video, slicer project file, and a reflection on lessons learned.

## Real-World Scenarios & Tips Library
- **Scenario Cards:**
  - “Unexpected Power Loss”: Use resume-print feature; test UPS options.
  - “Client Needs Matte Finish”: Use ASA with satin build plate; post-process with light sanding.
  - “Kids’ Workshop”: Pre-slice low-temperature PLA prints; enable child-proof locks.
- **Reference Tables:** Quick lookup for layer height vs. strength, AMS purge cost estimates, recommended Bambu Studio plug-ins.

## Resources & Suggested Visuals
- Printable one-page cheatsheets per module.
- Explainer diagrams showing AMS filament path, first-layer cross-section, support removal angles.
- QR codes linking to curated timelapse playlists and maintenance videos.

## Expansion Ideas
- **Video Tutorials:** Screen capture walkthroughs of Bambu Studio features, multi-camera timelapses highlighting AMS swaps.
- **Interactive Community:** Launch a forum or Discord server with separate channels for hobbyists, professionals, maintenance alerts, and print-of-the-week showcases.
- **Certification Path:** Offer assessments (knowledge quiz + submitted capstone) to earn “BambuLab Operator” badges; partner with local makerspaces for in-person practicums.
- **Live Workshops:** Host quarterly webinars on new firmware features, material releases, or advanced finishing techniques.
- **Resource Library:** Bundle CAD starter files, sample G-code, and troubleshooting flowcharts as downloadable packs.

## Summary & Next Steps
- Start by sharing Module 1 materials with learners and collect baseline surveys.
- Build printable worksheets and diagrams to accompany each module.
- Pilot the capstone projects with a small cohort (one hobbyist, one professional team) to gather feedback.
- Iterate on modules based on learner questions, then expand into video and certification offerings.

