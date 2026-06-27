# Quality Reflection – HRMS Assignment

---

## 1. Testing Habits in My Projects

In my personal projects, I do not always start with full test coverage. Initially, I focus on building functionality and validating manually through API calls or UI testing.
However, for critical logic (like backend APIs or data processing), I now try to include basic automated tests using Jest or similar frameworks.
This assignment helped me realize that consistent testing habits are important from the beginning, not as an afterthought.
If I improve further, I would start writing tests alongside feature development instead of after completion.

---

## 2. Experience with Bugs or Incomplete Testing

In one of my previous projects, I deployed a feature without fully testing edge cases for invalid inputs. After deployment, users encountered errors when entering unexpected values, which caused the feature to break in production.
The issue could have been avoided with proper negative testing and input validation.
From this, I learned that even small missing validations can lead to production-level failures, especially in systems handling critical data.

---

## 3. Most Important Thing for This Team

The most important thing this team needs is **basic automated regression testing for critical flows**.
Without it, every new change risks breaking existing functionality, especially in core systems like payroll and employee management.
Even a small smoke test suite would significantly reduce production failures while keeping development speed intact.

---

## 4. Handling Senior Developer Who Prefers No QA

I would not directly try to convince the senior developer that QA is necessary.
Instead, I would introduce lightweight tests that solve real problems he already faces — like recurring bugs or regression issues.
For example, if a salary calculation bug reappears, I would create a test that permanently prevents that issue.
Over time, showing that tests save debugging time would naturally build trust without challenging his workflow.

---

## 5. Personal System Building Analogy

Outside coding, I have built simple personal systems like structured study schedules and task tracking habits.
These systems worked not because they were complex, but because they were consistent and easy to follow daily.
Similarly, a good QA system should not feel heavy or complicated. It should fit naturally into the development workflow so that developers actually use it instead of ignoring it.
The goal is not perfection, but reliability and habit.