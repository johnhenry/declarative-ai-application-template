# Declarative AI Application Template

This repository is a template for creating Declarative AI Applications. It uses a combination of template files and instruction files to guide an AI in creating and modifying your application.

## Repository Structure

- `.github/.pr.md`: The main template file for your pull request description.
- `.github/.instruct.0.md`: Instructions for creating a draft pull request.
- `.github/.instruct.1.md`: Instructions for creating and fulfilling pull requests based on `.github/.task.md` and `.github/.pr.md`.

## Timer Application

This repository now includes a timer application built using HTML, CSS, and JavaScript. The timer application provides the following features:

- Set custom timer duration (hours, minutes, seconds)
- Start, pause, and reset functionality
- Visual display of remaining time
- Keyboard shortcuts for easy control (s: start, p: pause, r: reset)
- Accessibility features including ARIA labels
- Responsive design for various screen sizes

To use the timer application, open the `index.html` file in a web browser.

## How to Use This Template

1. **Clone the Repository**

   ```shell
   git clone git@github.com:johnhenry/declarative-ai-application-template.git
   cd declarative-ai-application-template
   ```

2. **Remove This README** (Optional, but recommended)

   ```shell
   rm -rf README.md
   ```

3. **Prepare Your Application Description**

   Edit the `.github/.pr.md` file to describe the application you want to build. This file will serve as the template for your pull request.

4. **Create Your Task File**

   Create a `.github/.task.md` file in the root of the repository. This file should contain the specific tasks and requirements for your application.

5. **Instruct Your AI**

   Use your preferred AI tool (e.g., Claude AI) and instruct it to follow the instructions in the `.github/.instruct.md` files. You can do this by typing:

   ```
   do .github/.instruct.0.md
   ```

   This will guide the AI to create a draft pull request based on your `.pr.md` template.

   After the draft is created, you can then instruct the AI to implement the changes by typing:

   ```
   do .github/.instruct.1.md
   ```

   This will guide the AI to create a new branch, implement the required changes, create and update tests, and prepare the final pull request.

6. **Review and Iterate**

   Review the AI's output, make any necessary adjustments, and iterate as needed. You can continue to use the `.instruct.md` files to guide the AI through additional changes or refinements.

7. **Finalize Your Application**

   Once you're satisfied with the changes and the pull request is ready, the AI will automatically clean up the temporary files (`.github/.task.md`, `.github/.pr.md`, and `.github/.instruct.*.md`) before the final push.

By following these steps, you can leverage AI to help build your application in a declarative manner, using the templates and instructions provided in this repository.

## Running Tests

To run the unit tests for the timer application, you'll need to have Node.js and Jest installed. Follow these steps:

1. Install Jest:

   ```
   npm install --save-dev jest
   ```

2. Run the tests:
   ```
   npx jest test.js
   ```

This will run the unit tests defined in the `test.js` file, which cover the main functionality of the timer application.
