pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                script {
                    echo 'Cloning repository...'
                    git branch: 'main', url: 'https://github.com/JawadJisan/Simple-CI-CD.git'
                    echo 'Finished cloning repository.'
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
                echo 'Finished Installing dependencies...'
            }
        }
        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh 'npx playwright test'
                echo 'Done Running tests...'
                echo 'Done Running tests 2nd times...'
            }
        }
    }

    post {
        success {
            echo 'Build successful!'
            // Add any post-build actions here
        }
        failure {
            echo 'Build failed :('
            // Add any actions to take on failure here
        }
    }
}
