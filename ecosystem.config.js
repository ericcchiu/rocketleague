module.exports = {
  apps: [
    {
      name: 'rocketleague',
      script: './server/index.js'
    }
  ],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-17-133-50.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/rocketleague.pem',
      ref: 'origin/master',
      repo: 'git@github.com:ericcchiu/rocketleague.git',
      path: '/home/ubuntu/rocketleague',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};