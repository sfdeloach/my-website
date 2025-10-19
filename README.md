# My Website

A demo that builds on **Section 7: Continuous Integration and Deployment with AWS**, from Stephen Grider's _Docker and Kubernetes: The Complete Guide_.

## Objectives

1. Using [Vite](https://vite.dev/) to build a simple Vue frontend with tests.
2. Setup a git develop branch along with the main branch.
   - Only develop branches are committed locally, all updates to main are made through a pull request.
3. Setting up a development container that provides live updates (map src folder to container).
   - Remember to use the `--host` flag for the vite development server to be exposed outside the container
   - Using volumes and bookmarks across local and container environments.
   - Delete the contents of the local node_modules directory (directory still exists, but is empty) and rely on dependencies inside the container.
4. Setting up a docker compose file, using both of the dev and testing containers built earlier for local development.
   - Setting up a testing container using the same image for development with an overriding command.
5. Using [GitHub Actions](https://docs.github.com/en/actions), run unit tests when new code is pushed to the repository
6. Setting up a production container via multi-stage builds using Nginx server
7. Extending GitHub actions for deployment to AWS Elastic Beanstalk
