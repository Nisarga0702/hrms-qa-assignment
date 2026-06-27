# Bug 2: Promotion API fails due to foreign key constraint

## Severity: Medium

## Description
Promotion insertion fails when invalid department ID is provided.

## Steps to Reproduce
1. Call /promotion API
2. Provide invalid DprtID
3. Submit request

## Expected Result
System should return validation error message.

## Actual Result
MySQL error: ER_NO_REFERENCED_ROW_2

## Impact
Breaks user experience and exposes database error to frontend.

## Root Cause
Missing validation before DB insert.

## Recommendation
Add backend validation for foreign keys before insert.