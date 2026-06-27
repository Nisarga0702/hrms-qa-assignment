# Test Strategy Document – HRMS System

## 1. Introduction

This document defines the test strategy for the HRMS system. The approach is based on risk, business impact, and failure consequences rather than coverage for its own sake.

The goal is to ensure that critical HR and payroll workflows do not break in production, since failures directly affect employee salary, attendance, and organizational trust.

---

## 2. Top 5 Critical Flows (Ranked by Business Impact)

### 1. Salary → Payslip Calculation Flow
This is the most critical flow in the system.

- If this breaks: employees receive incorrect or missing salary.
- Impacted users: All employees, HR, finance team.
- Consequence: Financial loss, trust breakdown, legal risk.

---

### 2. Employee Creation and Onboarding Flow
- If this breaks: new employees cannot be added to system or assigned tasks.
- Impacted users: HR admins, new employees.
- Consequence: onboarding failure, operational delay.

---

### 3. Attendance Tracking Flow
- If this breaks: incorrect attendance leads to wrong salary deductions.
- Impacted users: employees, payroll system.
- Consequence: incorrect payment calculation and disputes.

---

### 4. Promotion and Role Update Flow
- If this breaks: employees may not receive correct designation or salary updates.
- Impacted users: employees, managers, HR.
- Consequence: salary mismatch, internal conflicts.

---

### 5. Employee Exit / Deactivation Flow
- If this breaks: inactive employees may still receive salary or system access.
- Impacted users: finance team, security, HR.
- Consequence: financial leakage and security risk.

---

## 3. Automation vs Manual Testing Strategy

### What will be automated

- API testing (employee, payment, attendance endpoints)
- Regression tests for salary → payslip pipeline
- Smoke tests (server health, core endpoints)
- Negative API validation tests

**Reason:** These are repetitive, stable, and critical for CI safety.

---

### What will be tested manually

- UI/UX flows (employee onboarding screens, forms)
- Exploratory testing for edge cases
- Cross-device responsiveness (mobile vs desktop behavior)
- Complex business rule validation during early development

**Reason:** UI behavior changes frequently and requires human judgment.

---

### CI Speed Strategy

To avoid slowing down developers:

- CI runs only:
  - smoke tests
  - core API tests
  - small regression suite

Full test suite runs in staging environment only.

This keeps CI fast (<5 minutes) while still ensuring safety.

---

## 4. What Will NOT Be Tested (Deliberately)

- UI pixel-perfect layout checks (low business value)
- Rare admin-only edge features with low usage
- Third-party library internals
- Exhaustive combinational input testing

**Reason:** These provide low return on effort and slow down delivery.

---

## 5. Risk-Based Quality Philosophy

This system is tested based on one principle:

> “If it fails, who gets hurt and how badly?”

Higher priority is given to:
- financial flows (salary, payslip)
- system integrity (employee records)
- dependency chains (salary → bonus → payslip)

Lower priority is given to:
- UI styling
- non-critical admin views
- rarely used features

---

## 6. Conclusion

This test strategy ensures that the HRMS system is protected where it matters most: payroll correctness, employee lifecycle integrity, and data consistency. It balances automation speed with manual exploration to maintain both reliability and development efficiency.