# WSDOT Toll Data Request Form

Client: **WSDOT Toll Divition** 

> **Proprietary note:** This tool was developed as part of my work at **WSP USA Inc.**. The source code, datasets, and client-specific implementation details cannot be publicly shared. The descriptions below focus on the problem, technical approach, solution design, and impact of each project.


## TL;DR

A password-protected Streamlit request-management application that transformed an email- and spreadsheet-based client request process into a centralized workflow for submitting, tracking, commenting on, and completing data requests.

## Problem

As a consultant working with the client, the team did not have direct access to the client's internal drive. Data requests were primarily handled through email, making it difficult to maintain a centralized record of requests and track the level of effort associated with each one.

Using a shared Excel file also created workflow problems:

* Requests could be accidentally modified
* Request history was difficult to track
* Status updates were not centralized
* Hours spent on individual requests were difficult to manage
* Communication was distributed across email threads

## Thought Process

Rather than trying to improve the spreadsheet-based process, I treated the request itself as a structured data object.

Each request could have:

* A requester
* A description
* A status
* Comments
* Administrative notes
* Hours spent
* Creation and completion information

This made it possible to create a lightweight request-management system specifically designed around the client's workflow.

## Solution

I developed a password-protected Streamlit application where users can:

* Submit new data requests
* View existing requests
* View detailed request information
* Add comments to existing requests
* Create similar requests from previous requests
* Track request status

Administrators can additionally:

* Update request status
* Record level of effort
* Track hours spent
* Manage the request lifecycle

The application also supports automated system notifications so relevant users and administrators can be notified when requests are created or completed.

## Impact

* Centralized the client request workflow
* Reduced reliance on email and shared spreadsheets
* Improved visibility into request status
* Made level-of-effort tracking more structured
* Created a transparent record of request activity
* Streamlined communication between client and consultant teams

## Tool

**Python · Streamlit · Database · Automated Email Notifications**

## Role

Designed and developed the application workflow and scalable Python backend, translating a loosely structured email/spreadsheet process into a structured web-based request-management system.