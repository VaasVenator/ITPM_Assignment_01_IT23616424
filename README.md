

# ITPM Assignment 01 – Swift Translator Automation Tests

This repository contains automated test cases implemented using **Playwright** for testing the Swift Translator web application.

---

## Prerequisites

Before running the tests, ensure you have the following installed on your system:

- Node.js (version 16 or higher recommended)
- npm (comes with Node.js)
- A modern web browser (Chromium will be installed automatically by Playwright)

---

## How to Run the Tests

Follow the steps below to execute the Playwright test cases:

### 1. Clone the Repository
```bash
git clone https://github.com/VaasVenator/ITPM_Assignment_01_IT23616424.git
```

### 2. Navigate to the Project Folder
```bash
cd ITPM_Assignment_01_IT23616424/Playwright
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Install Playwright Browsers
```bash
npx playwright install
```

### 5. Run All Tests
```bash
npx playwright test
```

### 6. Run Tests with UI Mode (Optional)
```bash
npx playwright test --ui
```

---

## Test Structure

- **Positive Functional Test Cases**: Pos_Fun_0001 – Pos_Fun_0025  
- **Negative Functional Test Cases**: Neg_Fun_0001 – Neg_Fun_0010  
- **UI Test Case**: Pos_UI_0001  

All test cases are implemented in the `tests/swifttranslator.spec.js` file.

---

## Notes

- Ensure a stable internet connection while running the tests.
- The application under test: https://www.swifttranslator.com/
- Test execution time may vary depending on network speed and system performance.

---

## Author

Sahan Vaas  
IT23616424