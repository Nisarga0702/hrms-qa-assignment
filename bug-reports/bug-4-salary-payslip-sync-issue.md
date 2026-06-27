# BUG 4: Salary Changes Not Consistently Reflected in Payslip Generation (Regression Risk)

## Severity: High

---

## Description
When an employee’s salary is updated, the changes are not always consistently reflected in the generated payslip. This indicates a regression risk in the salary → payslip data pipeline.

---

## Steps to Reproduce
1. Open Employee module
2. Update Base Salary for an employee (e.g., 10000 → 12000)
3. Save changes
4. Generate payslip for the same month
5. Compare salary shown in employee profile vs payslip

---

## Actual Result
- Payslip may show old salary OR inconsistent updated salary
- No guarantee of synchronization between modules

---

## Expected Result
- Any salary update should be immediately or correctly reflected in payslip generation
- Salary → Payslip pipeline should always remain consistent

---

## Impact
- Incorrect salary payouts to workers
- Payroll disputes and financial loss
- Loss of trust in HRMS system
- High-risk production issue in construction payroll systems

---

## Root Cause
- Missing regression protection between:
  - Employee salary update module
  - Payslip generation module
- No automated tests enforcing data consistency

---

## Suggested Fix
- Introduce regression test for salary update → payslip flow
- Ensure payslip always pulls latest approved salary
- Add event-driven update or DB consistency check

---

## Evidence
Observed pattern risk based on system behavior and previous production incident class (salary mismatch type issues).