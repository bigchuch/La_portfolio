#!/usr/bin/env groovy 

// Load the shared library from the specified Git repository
library identifier: 'my-jenkins-library-project@main', retriever: modernSCM(
    [$class: 'GitSCMSource',
    remote: 'https://gitlab.com/bigchuch-devops-bootcamp/09-aws/my-jenkins-library-project.git',
    credentialsId: 'docker-hub-repo' ]
)

pipeline {
    agent any 
    tools {
        nodejs 'my-nodejs'
    } 
    environment {
        // VERSION = "1.0.0" // or use a parameter if needed
        IMAGE_NAME = "bigchuch/demo-app:NEXTjs-${BUILD_NUMBER}"
    }
    stages {
        stage ('build app') {
            steps {
                script {
                    echo 'building app'
                    sh 'npm install'
                    sh 'npm run build' 
                }
            }
        }
        stage ('Build image') {
            steps {
                script {
                    echo "building image"
                    
                    dockerLogin()
                    buildNodeJsImage(IMAGE_NAME)
                    dockerPush(IMAGE_NAME)
                }
            }
        }
    }
}
