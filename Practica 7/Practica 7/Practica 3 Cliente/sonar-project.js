const scanner = require('sonarqube-scanner');
 
scanner(
  {
    serverUrl : 'http://localhost:9000/',
    token : " 8d91b06bc6e246eb9c4d4868beb279a0ae0154c1",
    options: {
      'sonar.projectName': 'PracticaSA5',
      'sonar.projectDescription': 'Description for "My App" project...',
      'sonar.sources': '.',
      'sonar.login':'admin',
      'sonar.password':'admin',
      'sonar.tests': 'spec'
    }
  },
  () => process.exit()
)
