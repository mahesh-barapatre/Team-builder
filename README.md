# Team Builder

This project is a web application built with React that allows users to upload an Excel file with three sheets: Developer, Business Analyst, and QA. The application then creates teams of 2 Developers, 2 Business Analysts, and 1 QA, and generates a PDF with the team information.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Demo

![Team Builder Screenshot](screenshot.png)

## Features

- Upload an Excel file to create teams
- Supports files with three sheets: Developer, Business Analyst, and QA
- Generates a PDF with the team information
- Styled with Tailwind CSS for a modern look

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/team-builder.git
    cd team-builder
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Install Tailwind CSS:

    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

4. Configure `tailwind.config.js`:

    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

5. Add Tailwind CSS to your `src/index.css` file:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

6. Start the development server:

    ```bash
    npm start
    ```

## Usage

1. Open the application in your browser (usually at `http://localhost:3000`).

2. Upload an Excel file with three sheets named `Developer`, `Business Analyst`, and `QA`.

3. Click on the "Generate PDF" button to create and download the PDF with team information.

## Technologies Used

- React
- Tailwind CSS
- xlsx
- jsPDF
- jsPDF-AutoTable

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

