# EKNM Hub

## Introduction

EKNM Hub is a private web service used by EKNM organization for various projects. This repository is a frontend of a publicly available website. It's not meant for copying or reusing as a whole, but some code parts or architectural decisions may be useful.

More details about EKNM, as well as this code running, are available at [eknm.in](https://eknm.in)

## Running frontend

This project uses Angular framwork and multiple 3rd party libraries. Regular Angular commands can be used for building and running:  
`ng build`  
`ng serve`   
  
Alternatively docker can be used:  
`docker build -t hub-frontend .`  
`docker run -dp 127.0.0.1:PORT:5004 hub-frontend`  

## Website in self-hosted configuration

Backend: custom python server powered by [Flask](https://github.com/pallets/flask)  
Database: [MongoDB](https://github.com/mongodb/mongo)  
Resource storage: [OwnCloud](https://github.com/owncloud-docker/server)  
Database management: [Mongo Express](https://github.com/mongo-express/mongo-express)  

## Website in AWS configuration

Backend: Amazon Lambda  
Database: Amazon DynamoDB  
Resource storage: Amazon S3  
Database management: Interface provided by Amazon DynamoDB 