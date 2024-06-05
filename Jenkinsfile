pipeline {
    agent any

    environment {
        NODEJS_VERSION = '14.x'
    }

    tools {
        nodejs "${NODEJS_VERSION}"
    }

    stages {
        stage('Clone Test Repository') {
            steps {
                git url: 'https://github.com/JawadJisan/Simple-CI-CD.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    sh 'npx playwright test'
                }
            }
        }

        stage('Generate Report') {
            steps {
                script {
                    sh 'npx playwright show-report'
                }
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
