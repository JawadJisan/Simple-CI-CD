pipeline {
    agent any

    tools {
        nodejs 'NodeJS 14.x'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git url: 'https://github.com/JawadJisan/Simple-CI-CD.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test'
            }
        }

        stage('Generate Report') {
            steps {
                bat 'npx playwright show-report'
                archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo 'Tests passed!'
        }
        failure {
            echo 'Tests failed!'
        }
    }
}
