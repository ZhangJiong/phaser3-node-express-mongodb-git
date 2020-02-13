# cmd
mkdir .env
mkdir .gitignore
md routes
cd routes
type nul>main.js

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

# npm
npm init -f
cnpm install --save --save-dev express body-parser dotenv
node app.js

# node