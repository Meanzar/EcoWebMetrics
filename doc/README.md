# EcoWebMetrics

EcoWebMetrics is a JavaScript library that provides developers with feedback on their code, helping them write more sustainable and environmentally friendly code. It leverages data collected from unit tests to generate a score and provide insights into the ecological impact of the code.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Commands](#commands)
5. [Contributing](#contributing)
6. [License](#license)

## Features

- Calculate a sustainability score for your code.
- Provide feedback on how to improve the environmental impact of your code.
- Integration with popular unit testing frameworks.

## Installation

You can install EcoWebMetrics via npm:

```bash
npm install ecowebmetrics
```

## Usage

To get started with EcoWebMetrics, follow these steps:

1. **Initialize the library in your project**:

   In your JavaScript project, import EcoWebMetrics and initialize it:

   ```javascript
   import EcoWebMetrics from "ecowebmetrics"

   // Initialize EcoWebMetrics
   const metrics = new EcoWebMetrics();
   ```

2. **Run EWM**:

    The EcoWebMetrics library can be executed independently, but it is designed to work in conjunction with your unit tests for more accurate results. While it can run as a standalone tool, its precision and effectiveness are maximized when used alongside your unit tests

3. **Generate a sustainability score**:

   Run EcoWebMetrics to generate a sustainability score for your code:

   ```bash
   npm run ecowebmetrics
   ```

4. **Review the feedback**:

   After running the command, you'll receive feedback and suggestions for improving the environmental impact of your code.


## Contributing

We welcome contributions from the community. If you'd like to contribute to EcoWebMetrics, please follow these steps:

1. Fork the repository on GitHub.

2. Clone your forked repository to your local machine.

3. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

4. Make your changes and commit them.

5. Push your changes to your fork on GitHub.

6. Create a pull request on the main repository.

7. We'll review your pull request and merge it if it aligns with our guidelines and goals.

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

## License

EcoWebMetrics is released under the [MIT License](LICENSE).

This library has been made for a school project at the IIM DIGITAL SCHOOL.

For any question, contact ecowebmetrics@gmail.com