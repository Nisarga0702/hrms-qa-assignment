# Bug 1: Payment API causes frontend crash due to undefined fields

## Severity: High

## Description
When the payment API returns an empty or undefined response, the frontend attempts to access BaseSalary, OTamount, and BonusAmount directly, causing a runtime crash.

## Steps to Reproduce
1. Open employee view page
2. Navigate to payment section
3. Ensure API returns empty or missing data
4. Observe frontend error

## Expected Result
System should handle missing values safely and display default values (0).

## Actual Result
Frontend crashes with:
TypeError: Cannot read properties of undefined (reading 'BaseSalary')

## Impact
Breaks employee view page and prevents HR users from accessing payroll data.

## Root Cause
No null/undefined safety checks in frontend before accessing API response.

## Fix Applied
Added fallback default object for EmployeePayment.