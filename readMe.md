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
## master 主线
git init
git add .
git status
git commit -m "part1-01 http://localhost:3000/  404 - Not Found "
git log
git log --pretty=oneline
git diff

## 退出 git 英文状态下按 Q
git commit -m "part1-01 change app.js main/routes "
git log --pretty=oneline
git reflog
git commit -m "part1 done!"
git checkout -- app.js
git commit -m "part1(new readMe.md)"
git commit -m "part2 1.connect mongodb ok; 2.add mongoose & bcrypt"
git commit -m "Part 3 end!"
git clone 

## branch 分支
git checkout -b dev
git branch dev
git checkout dev
git branch
git commit -m "branch test"
git checkout master
git merge dev
git branch -d dev
git branch
git switch -c dev
git switch master

Git鼓励大量使用分支：
查看分支：git branch
创建分支：git branch <name>
切换分支：git checkout <name>或者git switch <name>
创建+切换分支：git checkout -b <name>或者git switch -c <name>
合并某分支到当前分支：git merge <name>
删除分支：git branch -d <name>

git commit -m "git branch"
git commit -m ""
git commit -m "Part 4 add client assets done!"

# npm
npm init -f
cnpm install --save --save-dev express body-parser dotenv
node app.js
cnpm install --save --save-dev mongoose
cnpm install --save --save-dev bcrypt
cnpm install --save cookie-parser passport passport-local passport-jwt jsonwebtoken

express body-parser dotenv mongoose bcrypt cookie-parser passport passport-local passport-jwt jsonwebtoken

# node