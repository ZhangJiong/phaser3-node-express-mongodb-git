# cmd
mkdir .env
mkdir .gitignore
md routes
cd routes
type nul>main.js

cd C:\curl-7.68.0-win64-mingw\bin
curl -X POST http://localhost:3000/signup -H 'Content-Type: application/json'   -d  "email=test4@test.com" -d "password=1234" -d "name=test5"
curl -X POST http://localhost:3000/signup -H 'Content-Type: application/json' -d "email=test4@test.com" -d "password=1234" -d "name2=test4"
curl -X POST http://localhost:3000/signup -H 'Content-Type: application/json' -d  "email=test5@test.com" -d "password=1234" -d "name=test5"
curl -X POST http://localhost:3000/login  -H 'Content-Type: application/json'   -d "email=test5@test.com" -d "password=1234"
curl -X POST http://localhost:3000/submit-score  -H 'Content-Type: application/json'   -d "email=test4@test.com" -d "score=100"

# git
git init
git add .
git status
git commit -m "part1-01 http://localhost:3000/  404 - Not Found "
git log
git log --pretty=oneline
git diff
退出 git 英文状态下按 Q
git commit -m "part1-01 change app.js main/routes "
git log --pretty=oneline
git commit -m "part1 done!"
git checkout -- app.js
git commit -m "part1(new readMe.md)"

# npm
npm init -f
cnpm install --save --save-dev express body-parser dotenv
node app.js

cnpm install --save --save-dev mongoose
cnpm install --save --save-dev bcrypt

express body-parser dotenv mongoose bcrypt

# node