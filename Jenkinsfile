pipeline {
    agent any
    tools { nodejs 'Node' }
    stages {
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }
        stage('test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('deploy') {
            steps {
                sh 'npm start'
            }
        }
    }
}

