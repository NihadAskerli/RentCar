pipeline {
    agent any

    stages {
        stage("Build Docker image") {
            when { changeset "car/*"}
                steps {
                    dir('car'){
                        script{
                            withCredentials([<object of type com.cloudbees.jenkins.plugins.awscredentials.AmazonWebServicesCredentialsBinding>]) {
                                sh 'echo ${BUILD_ID}'
                                sh 'docker login -u'
                                sh 'docker build -t public.ecr.aws/e1s9c4x9/rentcarfront:${BUILD_ID} . && docker push public.ecr.aws/e1s9c4x9/rentcarfront:${BUILD_ID}'
                                sh 'docker build -t public.ecr.aws/e1s9c4x9/rentcarfront:latest . && docker push public.ecr.aws/e1s9c4x9/rentcarfront:latest'
                                sh 'docker rmi public.ecr.aws/e1s9c4x9/rentcarfront:${BUILD_ID}'
                                sh 'docker rmi public.ecr.aws/e1s9c4x9/rentcarfront:latest'                                
                            }
        
        stage("Deploy to the AppServer") {
            sshagent(['c6df5891-4666-440e-be5a-0e4e90d3b45e']) {
                sh 'docker rm -f $(docker ps -q -f name=rentcarfront)'
                sh 'docker run -p 3000:3000 --name rentcar public.ecr.aws/e1s9c4x9/rentcarfront:${BUILD_ID}'                
            }
        }