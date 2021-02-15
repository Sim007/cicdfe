# CI/CD FrontEnd Demo - Cypress + GitHub actions

## Content
In this repo you find:
- Run Cypress from this repo on your laptop
- GitHub Actions

Started with workshop clone: 
 https://github.com/emilebosch/e2e-demo   
Change the remote to: 
 https://github.com/Sim007/cicdfe 

## Cypress: learn
Add several specs.js in integration/examples 
1) actions.js workshop from emile
2) myfirsttest.js - example from cypress.io  
3) visitpage.js on centric.eu

Notes:  
- To run cypress you need:
- npm
- node_modules
- cypress
- yarn

## GitHub Actions

Actions in: https://github.com/Sim007/cicdfe/actions  
You can switch workflow action on and off in the hamburger menu of the action.

## Cypress: Run on your laptop from this repo
You need to have node and npm on you loptop.  
Clone the this repo in a directory:
``git clone https://github.com/Sim007/cicdfe``

Install npm modules (package json):  
``npm install``

You also need yarn to run cypress:  
``npm install --global yarn``

Now you can run cypress with:   
``yarn run cypress open``
## Cypress: run from a docker container (laptop)
### Goal
Run cypress from a container so you are absolute sure that you have the same node_modules with each run
### Prereq
Docker on your laptop
Directory cypressd (d from docker)
Note: 
- output will be written to the mount volume
- only the cypress.json and specs are going the remote - .gitignore

### Sources
- https://docs.cypress.io/examples/examples/docker.html#Images 
- https://github.com/cypress-io/cypress-docker-images

### Scenario local on laptop
- Test specs on your laptop  
- Use container image from DockerHub (https://hub.docker.com/r/cypress/included)   
- Directory cypressd
  - cypress.json (with correct BaseURl)
  - in ./integrations the specs 

Goto directory cypressd:  
`` cd cypressd ``  

Docker comand:  
``
docker container run -it -v ${PWD}:/e2e -w /e2e cypress/included:6.4.0
``
- -it: interactive
- -v volume on laptop (for windows: ${PWD} , for Linux: $PWD 
- w workdirectory 

Note: 
- container image form docker hub maintain by cypress.io
- image with complete cypress and used version 6.4.0

Output:
Cypress output test on the laptop.
Written files are on the laptop directory (done with mount) 

## Cypress + GitHub action build + run docker cypress container

![Build and push testcontainer](https://github.com/Sim007/cicdfe/workflows/Build%20and%20push%20testcontainer/badge.svg)
### Goal
Two actions build + push and run
- Build and push container with Cypress test (GitHub action)
- Run Cypress test container (GitHub action)
Everything done in the browser. No software needed on laptop
### Prereq
- this repo
- in cypress/cypressd a Dockerfile with base image (cypress complete) + cypress json + tests

Build manually and run:
''
cd ./cypress/cypressd
docker build -t testcontainer .
docker container run -it -w /e2e testcontainer

### Sources
### Scenario 

## <Case>

### Goal
### Prereq

### Sources
### Scenario 




