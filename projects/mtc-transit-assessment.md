# MTC Regional Transit Assessment

Client: **Metropolitan Transportation Commission · California**

> **Proprietary note:** This tool was developed as part of my work at **WSP USA Inc.**. The source code, datasets, and client-specific implementation details cannot be publicly shared. The descriptions below focus on the problem, technical approach, solution design, and impact of each project.

## TL;DR

A scalable transportation data workflow and packaged dashboard that compares transit performance metrics from multiple data sources, helping users explore differences between probe and open-source transportation datasets.

## Problem

Transit performance can be represented differently depending on the underlying data source. For a regional transit assessment, the team needed a practical way to process and compare data from different providers while preserving a consistent analytical framework.

The challenge was not simply extracting the data, but creating a workflow that could handle multiple agencies, time periods, routes, and data sources in a consistent way.

## Thought Process

I approached the problem as a data integration and exploration workflow:

**Multiple data sources → standardized processing → comparable metrics → interactive exploration**

Rather than generating a static report for each comparison, I built a reusable workflow that allowed users to dynamically investigate differences between datasets.

This made it possible to move from a one-time analysis toward a reusable analytical tool.

## Solution

I developed a streamlined workflow for extracting and transforming transportation data from sources including **Cal-ITP and Swiftly**.

The workflow standardized the data and generated comparable transit performance metrics across the two sources.

I then packaged the analysis into an interactive dashboard where users could explore differences by dimensions such as:

* Agency
* Route
* Corridor
* Stop pair
* Time period
* Performance metric
* Data source

The dashboard allows users to interactively compare results rather than relying solely on pre-generated static tables.

## Impact

* Streamlined processing of multiple transportation data sources
* Created a consistent framework for comparing data providers
* Reduced repetitive analysis and data preparation
* Enabled client users to dynamically explore differences between datasets
* Turned a complex multi-source data analysis into a reusable analytical tool

## Tool

**Python · DuckDB · GeoParquet · Streamlit · Spatial Data Processing · Transportation APIs**

## Role

**Data Scientist** — developed the data extraction and transformation workflow, standardized multiple transportation data sources, implemented analytical comparisons, and packaged the results into an interactive client-facing dashboard.

---

# What These Projects Demonstrate

Across these projects, my work has generally followed the same pattern:

**Identify repetitive work → understand the user's workflow → automate the data pipeline → build an accessible interface → deliver measurable time savings**

Rather than building automation purely for automation's sake, I focus on making technical workflows usable by the people who actually need them — including engineers, analysts, planners, and clients who may not have programming experience.

My experience spans:

* **Data engineering & ETL**
* **Transportation data analysis**
* **Spatial data processing**
* **Workflow automation**
* **Python & R development**
* **Interactive dashboards**
* **Database-backed applications**
* **Batch processing**
* **Executable desktop tools**
* **Client-facing data products**
* **Reproducible analytical pipelines**
* **Designing tools for non-technical users**

> **Note:** The source code, proprietary datasets, client information, and internal implementation details for these projects are not publicly available because they were developed as part of my work at WSP. The portfolio focuses on the engineering approach, capabilities, and outcomes rather than exposing proprietary implementation details.
