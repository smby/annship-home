pipeline {
  environment {
    GIT_COMMITTER = """${sh(
      returnStdout: true,
      script: 'git log --format=%cn -n 1 ${GIT_COMMIT} | tr -d \\042\\047 | xargs'
    )}"""
    GIT_MESSAGE = """${sh(
      returnStdout: true,
      script: 'git log --format=%B -n 1 ${GIT_COMMIT} | tr -d \\042\\047 | xargs'
    )}"""
  }

  agent any

  stages {
    stage('Build and Deploy LandingPage') {
      when {
        branch 'master'
      }
      steps {
        sh "bash ./manifests/deploy-landingpage.sh"
      }
    }
    stage('Build and Deploy MailAPI') {
      when {
        branch 'master'
      }
      steps {
        sh "bash ./manifests/deploy-mailapi.sh"
      }
    }
  }

  post {
    success {
      postNotification('SUCCEED')
      cleanWs()
    }
    failure {
      postNotification('FAILED')
    }
  }
}

def postNotification(String status = 'SUCCEED') {

  status = status ?: 'SUCCEED'
  def statusText = 'FAILED'
  if (status == 'SUCCEED') {
    statusText = 'Succeed'
  }

  def repository = sh(returnStdout: true, script: 'git config --get remote.origin.url | sed -e "s/.git$//" | xargs')
  def updateInfo = sh(returnStdout: true, script: 'git log --format=%B -n 1 ${GIT_COMMIT} | xargs')

  def emailSubject = "[Sparrow] Pipeline ${currentBuild.fullDisplayName} ${statusText}"
  def emailMessage = """
      <p>Code Change: <a href="${repository}/commit/${GIT_COMMIT}">${updateInfo}</a></p>
      <p>Job Details: <a href="${env.BUILD_URL}">${env.JOB_NAME}/${env.BUILD_NUMBER}</a ></p>
  """
  emailext (
      subject: emailSubject,
      body: emailMessage,
      to: "wangpan.cc@gmail.com",
      mimeType: "text/html"
  )
}
