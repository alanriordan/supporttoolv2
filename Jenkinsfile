pipeline {
    agent any

    stages {
         stage('Build') {
              steps {
                  archiveArtifacts artifacts: '**/target/*.jar', fingerprint: true
              }
          }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
