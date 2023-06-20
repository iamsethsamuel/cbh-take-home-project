# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

-   Data is saved in the database in the Facilities, Agents, and Shifts tables
-   A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
-   A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### _Ticket 1: Allow Facilities to save custom IDs for Agents_

-   **Description**:
    The current system generates reports for Facilities using the internal database IDs of Agents. This ticket proposes an enhancement that would allow Facilities to save their own custom IDs for each Agent they work with. This would give Facilities more flexibility in how they track Agents and would make the reports more user-friendly.

-   **Acceptance Criteria**:
    We propose to add a new field for custom IDs in the Agents table of the database. This will allow Facilities to add and edit custom IDs for Agents they work with. The custom ID will be associated with the respective Agent in the database. The existing functionality of creating and editing Agents will remain intact.
-   **Implementation Details**:
    -   Modify the Agents table schema to include a new field for custom IDs.
    -   Add an API endpoint or UI functionality for Facilities to add and edit custom IDs for Agents.
    -   Update the database queries or ORM models to handle the custom ID field.
-   **Effort Estimate**: 3 story points

### _Ticket 2: Update generateReport to use custom Agent IDs_

-   **Description**: The **generateReport** function currently uses the internal database IDs of Agents to generate PDF reports. This ticket proposes to modify the function to use the custom IDs saved by Facilities instead. This would allow Facilities to generate reports using the IDs that they prefer, which would make the reports more user-friendly.
-   **Acceptance Criteria:**

    -   Modify the **generateReport** function to retrieve the custom IDs for each Agent from the database.
    -   Update the report generation logic to use the custom IDs instead of the internal database IDs.
    -   The generated reports include the custom IDs associated with each Agent.

-   **Implementation Details:**
    -   Update the generateReport function to retrieve the custom IDs for Agents from the database.
    -   Modify the report generation logic to use the custom IDs when populating the Agent information in the reports.
    -   Ensure that the existing functionality of generating PDF reports remains intact.
-   **Effort Estimate:** 2 story points

### _Ticket 3: Unit Tests and Integration Testing_

-   **Description:** To ensure that the new functionality works as expected and remains robust, this ticket focuses on writing comprehensive unit tests that test each individual unit of code in the new functionality and performing integration tests that test how the new functionality interacts with other parts of the system. Additionally, robustness testing will be performed to ensure that the new functionality is stable and can withstand unexpected changes.
-   **Acceptance Criteria:**

    -   _Write unit tests to cover the custom ID functionality in Tickets 1 and 2._
        This means writing unit tests that test the custom ID functionality in both Tickets 1 and 2. The tests should cover both positive and negative cases, meaning that they should test the functionality when it works as expected and when it does not work as expected.
    -   _Design and execute integration tests to validate the end-to-end flow, including custom ID usage and report generation._
        This means designing and executing integration tests that test the end-to-end flow of the custom ID functionality. This includes testing how the custom ID is used in the report generation process.
    -   _Achieve high test coverage for the affected code._ This means writing enough tests to ensure that a high percentage of the affected code is covered by the tests. This will help to ensure that the custom ID functionality is thoroughly tested.
    -   _Update existing tests if necessary to accommodate the changes._ If the custom ID functionality changes, it may be necessary to update existing tests to accommodate the changes. This will ensure that the tests continue to test the functionality correctly.

-   **Implementation Details:**
    -   Write unit tests to cover the added functionality in Tickets 1 and 2, ensuring proper handling of custom IDs.
    -   Design and execute integration tests that simulate the workflow of Facilities saving custom IDs and generating reports.
    -   Update the existing test suite to include the new functionality and maintain comprehensive test coverage.
    -   Utilize testing frameworks and tools to facilitate efficient testing.
-   **Effort Estimate:** Effort Estimate: 3 story points
