# IDAX Processor

Clients: **Internal users, for multiple projects around the US**

> An automation tool (.exe application) that reads and combines IDAX traffic counts data from multiple files/intersections (.xlsx) and compiles them into a structured Excel workbook.

> **Proprietary note:** This tool was developed as part of my work at **WSP USA Inc.**. The source code, datasets, and client-specific implementation details cannot be publicly shared. The descriptions below focus on the problem, technical approach, solution design, and impact of each project.

## TL;DR

A Python desktop application that automatically consolidates intersection-level IDAX traffic count files into a single structured Excel output.

## Problem

Traffic count data from IDAX is typically delivered as separate Excel files for individual intersections. When an analysis involves many intersections, engineers have to open each file, locate the relevant movement counts, and manually consolidate them into a project-level table.

This creates a repetitive workflow that becomes increasingly inefficient as the number of intersections grows.

## Thought Process

The structure of the IDAX files was sufficiently standardized to make the workflow highly automatable.

Instead of asking engineers to manually open and consolidate each file, I built a batch-processing workflow that could:

1. Scan a folder for available IDAX files
2. Read and interpret each file
3. Extract the relevant intersection and movement information
4. Standardize the extracted data
5. Combine all intersections into a single formatted output

The tool was designed around the engineer's existing workflow rather than requiring them to interact with a programming environment.

## Solution

I developed a standalone Python application that allows users to provide a folder containing IDAX Excel outputs.

The application automatically identifies the available files, extracts intersection-level movement counts, and compiles the results into a single formatted Excel workbook.

## Impact

* Eliminated the manual process of opening and consolidating individual files
* Removed repetitive copy-and-paste work
* Reduced opportunities for transcription errors
* Enabled project-level traffic count data to be assembled much more quickly
* Allowed engineers to focus on interpreting traffic conditions rather than preparing datasets

## Tool

**Python · Tkinter · Pandas · Standalone Executable**

## Role

Designed and developed the scalable batch-processing pipeline, including Excel ingestion, extraction, transformation, consolidation, and executable packaging.
