# Negative Testing Report – HRMS System

## 1. Objective
This document captures negative testing performed on HRMS APIs and forms to evaluate system robustness, input validation, error handling, and edge case behavior.

---

## 2. Areas Tested
- Employee API
- Payment API
- Promotion API
- Attendance API
- Task API
- Frontend form validations

---

## 3. Employee API – Negative Tests

### Test 1: Missing Required Fields
- Endpoint: POST /insertEmployee
- Input: Empty request body
- Expected: Validation error / rejection
- Actual: Depends on backend handling (may accept or fail)

---

### Test 2: Invalid Salary Format
- Input: salary = "abc"
- Expected: Reject request with validation error
- Actual: System behavior observed during test execution

---

### Test 3: Large Input Overflow
- Input: Extremely long name (1000+ characters)
- Expected: Input validation failure or truncation
- Actual: Needs verification in system

---

## 4. Payment API – Negative Tests

### Test 1: Invalid Employee ID
- Endpoint: GET /payment/999999
- Expected: 404 or empty response
- Actual: API returns empty or undefined data

---

### Test 2: Undefined Payment Fields (Frontend Risk)
- Scenario: BaseSalary / OTamount undefined
- Expected: Safe fallback values (0)
- Actual: Previously caused frontend crash, now handled with fallback fix

---

## 5. Promotion API – Negative Tests

### Test 1: Invalid Department ID (Foreign Key Violation)
- Endpoint: POST /promotion
- Input: Non-existing DprtID
- Expected: Foreign key validation error
- Actual: MySQL error (ER_NO_REFERENCED_ROW_2)

---

### Test 2: Missing Employee Reference
- Expected: Request should fail validation
- Actual: Depends on backend implementation

---

## 6. Attendance API – Negative Tests

### Test 1: Invalid Attendance Status
- Input: Status = "X"
- Expected: Reject invalid status
- Actual: Needs validation check

---

### Test 2: Duplicate Attendance Entry
- Scenario: Multiple entries for same employee same day
- Expected: Prevent duplicates
- Actual: Depends on backend constraints

---

## 7. Boundary Testing

- Overtime = 0 → should reject or warn
- Overtime = -5 → should reject
- Overtime = 9999 → should reject
- Empty strings in required fields → should reject
- Very large numeric values → should be capped or rejected

---

## 8. Security Testing

- SQL Injection attempt: `' OR 1=1 --`
- XSS attempt: `<script>alert("test")</script>`
- Expected: Input sanitization or rejection
- Actual: Depends on backend validation

---

## 9. Observations

- Some APIs lack consistent validation handling
- Foreign key constraints work but expose raw DB errors
- Frontend crash occurred earlier due to undefined API response (now fixed)
- Error handling is inconsistent across modules

---

## 10. Conclusion

The HRMS system demonstrates basic functional stability but requires improved validation, consistent error handling, and better input sanitization to be production ready.