# WSDOT Crash Data Analysis Pipeline

Clients: **Multiple MPOs, for example, PSRC, SCOG, etc.**

> **Proprietary note:** This tool was developed as part of my work at **WSP USA Inc.**. The source code, datasets, and client-specific implementation details cannot be publicly shared. The descriptions below focus on the problem, technical approach, solution design, and impact of each project.

## TL;DR

A reusable R `targets` pipeline that standardizes crash-data ETL, analysis, visualization, and reporting across transportation safety projects and study areas.

## Problem

Transportation safety projects frequently require similar crash-data analyses: filtering records, summarizing crash characteristics, identifying high-crash locations, and producing visualizations.

When each project is handled independently, the same analytical workflow has to be repeatedly recreated. This creates unnecessary manual effort and makes it harder to maintain consistency across projects.

## Thought Process

I recognized that the core analytical workflow was relatively consistent even though the study areas and project requirements changed.

Instead of building a new script for every project, I structured the analysis as a reusable pipeline with modular steps.

The goal was to make the workflow:

* **Repeatable** — the same process can be applied to different study areas
* **Scalable** — larger geographic areas can be processed without rebuilding the workflow
* **Traceable** — dependencies between processing steps are explicit
* **Reusable** — standardized functions can support future projects
* **Client-ready** — outputs are generated in formats that can be directly used by project teams

## Solution

I developed an R `targets` pipeline that standardizes the workflow from raw crash data through final analysis and visualization.

The pipeline handles:

**ETL → Filtering → Spatial processing → Analysis → Summary tables → Visualization**

Depending on the project, the resulting analysis can examine crash characteristics such as:

* Contributing factors
* Injury severity
* Lighting conditions
* Roadway characteristics
* Crash type
* Geographic location
* Other project-specific safety indicators

The pipeline produces standardized Excel summary tables as well as self-contained HTML visualizations showing high-crash locations with interactive pop-up information.

Some of these HTML visualization outputs have been hosted by **PSRC** as part of regional safety planning work, and analysis results have contributed to safety indices.

## Impact

* Reduced repeated manual analysis across safety projects
* Standardized crash-data processing across different study areas
* Enabled project-level analysis to be completed in **approximately 15 minutes or less** for many study areas
* Made the workflow easier to scale and reproduce
* Reduced repeated analytical labor from hours to a much shorter automated workflow
* Produced client-ready tables and interactive visualizations from the same pipeline

## Tool

**R · targets · sf · Data Analysis · Spatial Analysis · HTML Visualization**

## Role

Designed and developed the reusable R pipeline, including ETL, functionalized analysis modules, spatial processing, standardized reporting outputs, and interactive visualization generation.
