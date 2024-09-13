# Declarative AI Application Template

This repository serves as a template for creating Declarative AI Applications. It utilizes a combination of template files and instruction files to guide an AI in creating and modifying your application.

## Features

- Streamlined process for AI-assisted application development
- Customizable templates for pull requests and tasks
- Built-in style guide for consistent code quality

## Repository Structure

- `readme.md`: This file, containing project overview and usage instructions
- `.github/.pr.md`: Template file for pull request descriptions
- `.github/.instruct.0.md`: Instructions for creating a draft pull request
- `.github/.instruct.1.md`: Instructions for creating and fulfilling pull requests
- `.github/.task.md`: File for specific tasks and requirements
- `.github/.style.md`: Style guide for consistent code style and conventions

- `.gitignore`: Specifies intentionally untracked files to ignore

## How to Use This Template

### Step 1: Clone the Repository

```shell
git clone https://github.com/yourusername/declarative-ai-application-template.git
cd declarative-ai-application-template
```

### Step 2: Prepare Your Application Description

Edit the `.github/.pr.md` file to describe the application you want to build. This file serves as the template for your pull request.

### Step 3: Create Your Task File

Edit the `.github/.task.md` file in the root of the repository. This file should contain the specific tasks and requirements for your application.

### Step 4: Instruct Your AI

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

Alternatively, you can do both steps in one go:

```
do .github/.instruct.0.md then do .github/.instruct.1.md
```

### Step 5: Review and Iterate

Review the AI's output, make any necessary adjustments, and iterate as needed. You can continue to use the `.instruct.md` files to guide the AI through additional changes or refinements.

### Step 6: Finalize Your Application

Once you're satisfied with the changes and the pull request is ready, merge it into your main branch.

## Contributing

To contribute to this project, please follow the guidelines in `.github/.style.md` for code style and commit messages.

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add new feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Create a new Pull Request

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
