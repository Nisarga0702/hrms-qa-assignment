1. What does this HRMS exist to deliver?
This HRMS exists to ensure accurate employee lifecycle and payroll management for organizations, primarily serving HR managers and payroll operators who depend on error-free salary, attendance, and task tracking.

2. Most dangerous bug pattern?
The most dangerous pattern is missing backend validation for business rules, allowing invalid salary, department, or relational data that silently corrupts payroll and cascades into incorrect payslips and reports.

3. Most important test?
The salary-to-payslip flow test is most critical because it ensures correct payroll computation from backend data to UI display, preventing financial errors that directly affect employees and payroll operators.

4. What did you NOT automate?
UI-heavy exploratory checks and visual validation were not automated because they require human judgment and would slow CI without adding reliable signal compared to API-level assertions.

5. One thing you're not fully confident about?
The CI pipeline timing and scalability under larger datasets is something I am not fully confident about, but I included it to demonstrate automated quality enforcement.

6. What changed from first approach?
Initially I focused on basic API checks, but later expanded into full E2E + CI + bug reporting after realizing the assignment evaluates system-level quality thinking.

7. What don't you know yet?
I need deeper understanding of large-scale payroll systems, production-grade test data management, and real HR compliance rules in construction-based workforce systems.

8. If you had one more day?
I would strengthen load testing on payroll and attendance APIs to ensure system stability for large workforce datasets, which directly impacts payroll accuracy at scale