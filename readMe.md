
This source code is from https://phasertutorials.com 
- [Phaser Leaderboard with User Authentication using Node + Express + MongoDB – Part 1](https://phasertutorials.com/creating-a-phaser-3-leaderboard-with-user-authentication-using-node-js-express-mongodb-part-1/)
- [Phaser Leaderboard with User Authentication using Node + Express + MongoDB – Part 2](https://phasertutorials.com/creating-a-phaser-3-leaderboard-with-user-authentication-using-node-express-mongodb-part-2/)
- [Phaser Leaderboard with User Authentication using Node + Express + MongoDB – Part 3](https://phasertutorials.com/phaser-leaderboard-with-user-authentication-using-node-express-mongodb-part-3/)
- [Phaser Leaderboard with User Authentication using Node + Express + MongoDB – Part 4](https://phasertutorials.com/phaser-leaderboard-with-user-authentication-using-node-express-mongodb-part-4/)
- [Phaser Leaderboard with User Authentication using Node + Express + MongoDB – Part 5](https://phasertutorials.com/phaser-leaderboard-with-user-authentication-using-node-express-mongodb-part-5/)

# cmd
```bash
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
```

# git
## master 
```bash
git init
git add .
git status
git commit -m "part1-01 http://localhost:3000/  404 - Not Found "
git log
git log --pretty=oneline
git diff
```

## quit git press Q
```bash
git commit -m "part1-01 change app.js main/routes "
git log --pretty=oneline
git reflog
git commit -m "part1 done!"
git checkout -- app.js
git commit -m "part1(new readMe.md)"
git commit -m "part2 1.connect mongodb ok; 2.add mongoose & bcrypt"
git commit -m "Part 3 end!"
git clone 
```

## branch
```bash
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

git commit -m "git branch"
git commit -m ""
git commit -m "Part 4 add client assets done!"
git commit -m "Part 5 add forget-password page"
git commit -m "Part 5 end!"
git commit -m "push to github"
git commit -m "readMe.md update"

git remote add origin git@github.com:ZhangJiong/phaser3-node-express-mongodb-git.git
git pull
git push
git branch --set-upstream-to=origin/master
git push -u origin master -f
```

# npm
```bash
npm init -f
cnpm install --save --save-dev express body-parser dotenv
node app.js
cnpm install --save --save-dev mongoose
cnpm install --save --save-dev bcrypt
cnpm install --save --save-dev cookie-parser passport passport-local passport-jwt jsonwebtoken
cnpm install --save --save-dev nodemailer-express-handlebars nodemailer

express body-parser dotenv mongoose bcrypt cookie-parser passport passport-local passport-jwt jsonwebtoken nodemailer-express-handlebars nodemailer
```

# node
```bash
node app.js
```