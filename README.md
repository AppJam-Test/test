# InventoryBox_Server

# gitignore 돼 있는지 항상 확인 !


## Commit convention rule : 날짜 - 내용 - 상태

```
2020-06-30  로그인 기능 수정  ADD
```



### git 명령어

```
git branch -r : 원격저장소의 모든 브랜치 보이기

git checkout -t origin/develop

git push origin :id( branch 추가 )

git branch -r ( 원격제어중인 branch 띄우기 )

git push origin/id 

git checkout -t origin/develop

git push --set-upstream origin/브랜치이름 ( 브랜치 github에 올리기 )

git branch -D 브랜치 이름 ( 삭제 )
git -checkout -b {이름} // branch를 만들고 바로 checkout 하는 명령어를 합친 것!

git log --branches --graph --decorate --oneline // git branch 그래프로 보기?

git config --global user.name {이름}
git config --global user.email {이메일} 

git push origin :[브랜치명] : local에서 branch 삭제 후 github에 남아 있는 branch 지우기

```

```
github branch 가져오기

1. git remote update
2. git branch -r 목록보기
3. git checkout -t [branch -r 해서 뜨는 branch 명]
```

### project board
* todo이슈는 done으로 넘기기
* inprogress이슈는 코드리뷰후 삭제하기
