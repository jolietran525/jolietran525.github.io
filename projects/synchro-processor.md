# Synchro Processor

Clients: **Internal users, for multiple projects around the US**

> An automation tool (.exe application) that extracts traffic operations results from Synchro outputs (.txt) and compiles them into a structured Excel workbook.

> **Proprietary note:** This tool was developed as part of my work at **WSP USA Inc.**. The source code, datasets, and client-specific implementation details cannot be publicly shared. The descriptions below focus on the problem, technical approach, solution design, and impact of each project.

## TL;DR

Synchro Processor automates the extraction and consolidation of traffic operations results from large collections of Synchro output files.

It replaces a repetitive copy-and-paste workflow with a batch-processing pipeline that allows traffic engineers to quickly select and compile the results they need — without writing code.

## Problem

Traffic engineers frequently work with Synchro outputs when evaluating intersection operations across multiple intersections and scenarios.

However, Synchro results are commonly provided as `.txt` or `.pdf` files, requiring engineers to manually:

1. Open individual output files
2. Locate the relevant summary tables
3. Find the required metrics
4. Copy the results
5. Paste them into an Excel workbook
6. Repeat the process across intersections and scenarios

This workflow becomes increasingly time-consuming as the number of files grows, while manual copy-and-paste also introduces opportunities for errors.

## Thought Process

The underlying workflow was highly repetitive, but engineers typically only needed a subset of the information contained in each Synchro output.

I designed the tool around three principles:

* **Batch processing** — process many output files in one run.
* **Relevant information** — extract only the summary tables and metrics needed for analysis.
* **No programming required** — make the tool accessible to engineers without requiring Python or other programming knowledge.

The goal was not simply to automate file parsing, but to package the automation into something that fit naturally into the engineer's existing workflow.

## Solution

I developed a Python-based desktop application that allows the user to provide a folder containing Synchro output files.

The tool automatically scans the supplied files, identifies the available summary tables, and allows the user to select which tables should be included in the final Excel output.

Relevant traffic operations measures can include:

* Queue
* Movement delay
* Volume-to-capacity ratio
* Approach delay
* Other Synchro and HCM summary measures

The application is packaged as a standalone `.exe`, so users do not need a Python environment or programming experience to run the workflow.

### Workflow

```text
Synchro output files
        ↓
   Folder selection
        ↓
  File / table detection
        ↓
  Relevant data extraction
        ↓
   Table consolidation
        ↓
   Formatted Excel output
```

## Impact

The tool reduced manual data preparation effort by approximately **95%** and eliminated the repetitive copy-and-paste portion of the workflow.

This allowed engineers to:

* Process multiple intersections and scenarios much faster
* Reduce opportunities for transcription errors
* Spend less time extracting data
* Spend more time interpreting and analyzing results

The broader goal was to turn a repetitive engineering task into a **repeatable, scalable data workflow**.

## Technology

**Python · Pandas · Tkinter · Excel · Standalone Executable**

## My Role

I designed and developed the processing workflow end-to-end, including:

* File ingestion
* Synchro output parsing
* Data extraction
* Table selection logic
* Data transformation
* Excel output generation
* User interface
* Executable packaging

The project required both the underlying data-processing pipeline and the design of a usable interface for non-programming users.
