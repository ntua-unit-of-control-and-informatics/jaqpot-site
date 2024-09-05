
# Jaqpot Site - Developer Guide

Welcome to the Jaqpot project! Below you'll find information on how to set up, run, and contribute to the development of this project.

## Getting Started

Before diving into development, ensure you have the required environment and dependencies installed.

### Prerequisites

- Node.js (v14+)
- npm (v6+)
- PostgreSQL
- Docker (for running services locally)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/upci-ntua/jaqpot-site.git
   cd jaqpot-site
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

### Running the Project

The main application runs with:

```bash
npm run start
```

This will start the server and other necessary services.

## Documentation with Docusaurus

We have introduced Docusaurus to manage our documentation. All the documentation can be found inside the `docusaurus/` folder. Docusaurus makes it easy to maintain and expand the existing documentation.

- To learn how to add or modify documentation, please refer to the [Docusaurus official documentation](https://docusaurus.io/docs).
- When you have updated or added new documentation, you can build the docs by navigating to the `docusaurus/` folder and running:

   ```bash
   npm i
   cd docusaurus/
   npm run build
   ```

- The main website will automatically pick up the updated documentation and display it under the **Docs** link in the navbar.

## Blogging Structure

We have introduced a blog feature inside the `blog/` folder to share updates, tutorials, and news related to Jaqpot.

- Each blog post is organized inside the `blog/(posts)/` folder. The title of each blog post is derived from the folder name. For example, a folder named `my-new-blog-post` will render as a blog post titled "my-new-blog-post."
- Follow the structure of the first post to ensure consistency. Markdown files are fully supported, making it easy to format your posts.

### Example Structure:
```plaintext
blog/
└── posts/
    ├── my-first-blog-post/
    │   ├── index.md  # Markdown file containing the content of the post
    │   └── image.png # Optional images or assets for the post
    ├── another-post/
    │   └── index.md
```

## Contributing

We welcome contributions from the community. Please ensure that you:

1. Fork the repository and create your feature branch (`git checkout -b feature/my-feature`).
2. Commit your changes (`git commit -m 'Add some feature'`).
3. Push to the branch (`git push origin feature/my-feature`).
4. Open a pull request.

### Coding Standards

- Follow the project's code style and conventions.
- Write clear, concise commit messages.
- Add comments to complex or important code blocks.

## Running Tests

To run tests, use:

```bash
npm run test
```

Ensure all tests pass before submitting a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any issues, questions, or feedback, please reach out via our [contact page](mailto:upci.ntua@gmail.com).
