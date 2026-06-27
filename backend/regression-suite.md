# QA-304: Regression Suite – Salary to Payslip Pipeline

## Objective
Ensure that changes in employee salary correctly reflect in payslip calculations and prevent regression bugs in payroll system.

---

## 1. Core Regression Test

### Test Case 1: Salary Update Reflects in Payslip

- Given an employee has a base salary
- When salary is updated
- Then next payslip should reflect updated salary

---

## 2. Related Edge Cases

### Test Case 2: New Employee Salary Calculation

- Given a new employee is added
- When payslip is generated
- Then salary should match initial assigned salary

---

### Test Case 3: Salary Updated Twice in Same Period

- Given salary is updated multiple times in same month
- Then system should use latest salary for payslip

---

## 3. Related Dependency Risk Areas

### 3.1 Promotions Affecting Salary

- When promotion is applied
- Salary should update in payslip automatically

---

### 3.2 Deduction Changes

- When deduction is added or modified
- Payslip should reflect correct net salary

---

### 3.3 Bonus Updates

- When bonus is added
- Payslip should include bonus in total earnings

---

## 4. Regression Strategy

- Ensure all payroll-related APIs are tested after any salary modification
- Run automated tests before deployment
- Validate UI reflects backend salary changes

---

## 5. Conclusion

This regression suite ensures that salary-related changes do not break downstream payroll calculations and prevents recurrence of past production bugs.