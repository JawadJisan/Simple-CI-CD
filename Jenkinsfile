pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // Checkout the repository
                git(url: 'https://github.com/JawadJisan/Simple-CI-CD.git', branch: 'main')
            }
        }
        stage('Build') {
            steps {
                // Build your project
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                // Run your tests
                sh 'npx playwright test'
            }
        }
        stage('Report') {
            steps {
                // Generate test reports
            }
        }
    }
}
