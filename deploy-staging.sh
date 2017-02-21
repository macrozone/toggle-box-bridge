cd app
apt-get update -yq
apt-get install -y ruby-dev
gem install dpl
dpl --provider=heroku --app=gba-mantra-boilerplate --api-key=$HEROKU_API_KEY