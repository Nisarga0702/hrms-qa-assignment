# BUG 5: Duplicate Promotion Entries Allowed Without Conflict Detection

## Severity: High

---

## Description
The system allows multiple promotion entries for the same employee without checking for existing pending or approved promotions, leading to duplicate or conflicting records.

---

## Steps to Reproduce
1. Open Promotion module
2. Enter Employee ID (e.g., 1004)
3. Enter Role ID and Department ID
4. Submit promotion
5. Repeat the same promotion with identical values
6. Check database / promotion history

---

## Actual Result
- Multiple promotion records are created for the same employee with same data
- No warning or conflict detection is shown

---

## Expected Result
- System should detect existing active/pending promotion
- Prevent duplicate entries OR require override approval
- Show message like: "Promotion already exists for this employee"

---

## Impact
- Duplicate HR records
- Incorrect employee role history
- Payroll and role inconsistencies
- Data integrity issues in HR system

---

## Root Cause
- Missing uniqueness validation on promotion entries
- No constraint or business rule check before insert
- No duplicate detection logic in backend

---

## Suggested Fix
- Add backend check:
  - SELECT * FROM promotionhistory WHERE EmployeeID = ?
- Block or merge duplicates
- Add DB constraint or composite unique key
- Add UI warning before submission

---

## Evidence
Observed during repeated manual testing of promotion module.