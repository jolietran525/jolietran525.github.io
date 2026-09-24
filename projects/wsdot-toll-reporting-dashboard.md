# WSDOT Toll Reporting Dashboard

Client: **WSDOT Toll Divition** 

> An live server dashboard tool that streamlined and automated WSDOT toll disposition report workflow.

> **Proprietary note:** This tool was developed as part of my work at **WSP USA Inc.**. The source code, datasets, and client-specific implementation details cannot be publicly shared. The descriptions below focus on the problem, technical approach, solution design, and impact of each project.


## TL;DR

A password-protected Streamlit dashboard that automated a recurring WSDOT toll reporting workflow, replacing a manual weekly query → CSV → Excel → email process with an interactive reporting application.

## Problem

A recurring reporting workflow required an analyst to manually:

1. Run a database query every Monday
2. Export the results to CSV
3. Copy the results into an Excel reporting template
4. Prepare and distribute the report by email

The workflow required recurring manual effort and introduced opportunities for errors during data transfer and formatting.

## Thought Process

The reporting process was already structured and repeatable, making it a strong candidate for automation.

Rather than simply automating the Excel generation, I considered how the reporting process could become a **self-service data product**.

The goal was to separate the data pipeline from the presentation layer:

**Source data → automated query → secondary reporting database → dashboard → user**

A secondary database also allowed the reporting environment to contain only the information necessary for reporting, rather than exposing the underlying source system.

## Solution

I developed a password-protected Streamlit application that automatically presents summarized toll reporting results in a format aligned with the existing Excel reporting workflow.

Users can access the dashboard and explore reporting results for the time period of interest without manually running queries, downloading data, or manipulating large Excel workbooks.

The architecture separates the data extraction process from the dashboard layer, allowing the reporting workflow to be refreshed independently of the user interface.

## Impact

* Eliminated the recurring manual query/export/copy-paste workflow
* Reduced opportunities for reporting errors
* Enabled self-service access to reporting results
* Reduced dependence on large Excel workbooks
* Made recurring reporting more scalable and maintainable

## Tool

**Python · Streamlit · SQL / Database Pipeline**

## Role

Designed and developed the automated data-processing workflow and Streamlit reporting application, including translating the existing Excel reporting logic into a scalable web-based interface.