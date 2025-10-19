# My Website

A demo that builds on **Section 7: Continuous Integration and Deployment with AWS**, from Stephen Grider's _Docker and Kubernetes: The Complete Guide_.

## Objectives include

1. Using [Vite](https://vite.dev/) to build a simple Vue frontend with tests.
2. Setup a git develop branch along with the main branch.
   - Only develop branches are committed locally, all updates to main are made through a pull request.
3. Setting up a development container that provides live updates (map src folder to container).
   - Using volumes and bookmarks across local and container environments.
   - Delete the local copy of node_modules and rely on dependencies inside the container.
4. Setting up a testing container from the development image for live updates.
5. Setting up a docker compose file, using both of the dev and testing containers built earlier for local development.
6. Using GitHub actions for testing
   - Is it acceptable to only run tests on the develop branch when pushed to the repo?
   - Should tests be run again when branches are merged to main?
7. Setting up a production container via multi-step builds using Nginx server
8. Extending GitHub actions for testing and deployment to AWS Elastic Beanstalk
