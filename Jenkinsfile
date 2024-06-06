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
    }
}
