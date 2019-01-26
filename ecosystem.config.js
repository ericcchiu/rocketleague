module.exports = {
  apps: [
    {
      name: 'projectView',
      script: './server/index.js'
    }
  ],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-15-73-206.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/projectView.pem',
      ref: 'origin/master',
      repo: 'git@github.com:ericcchiu/Eric_Services_Projects.git',
      path: '/home/ubuntu/projectView',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};