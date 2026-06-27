# Bug 3: Employee API allows invalid input data

## Severity: Medium

## Description
Employee creation API does not properly validate input types.

## Steps to Reproduce
1. Call /insertEmployee
2. Pass salary as string ("abc")
3. Submit request

## Expected Result
Validation error should be returned.

## Actual Result
Request is accepted or causes inconsistent behavior.

## Impact
Data corruption risk in HRMS database.

## Root Cause
Missing strict schema validation in backend.