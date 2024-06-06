pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/JawadJisan/Simple-CI-CD.git'
            }
        }
        stage('Build') {
            steps {
                sh 'npm install' // Or any other build command
            }
        }
        stage('Test') {
            steps {
                sh 'npx playwright test' // Or any other test command
            }
        }
        stage('Report') {
            steps {
                // Generate test reports
            }
        }
    }
}
