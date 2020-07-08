# InventoryBox_Server

# gitignore 돼 있는지 항상 확인 !


## Commit convention rule : 날짜 - 내용 - 상태

```
2020-06-30  로그인 기능 수정  ADD
```



# git 명령어

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
```

```
github branch 가져오기

1. git remote update
2. git branch -r 목록보기
3. git checkout -t [branch -r 해서 뜨는 branch 명]
```

```
github branch 삭제하기

1. git branch [브랜치명]: 지울 branch명 확인
2. git branch -D [브랜치명] : local에서 branch 삭제
3. git push : push후 삭제가 되는 듯
4. git push origin :[브랜치명] : local에서 branch 삭제 후 github에 남아 있는 branch 지우기
```

```
처음 branch 만들었을 시 저장소에 push

현재 로컬에서만 branch를 생성한 상태이기 때문에 아래 명령을 입력해서 upstream branch로 만들어 준다 -
git push --set-upstream origin [branch name]
```

```
원격지에서 다른 branch 가져오기

git pull origin {branch name}

```

```
master branch에서 작업할때는 pull을 먼저 해주어야 된다
branch를 바꿀때는 commit을 해야 변경이 된다
```

```
git branch 해서 지금 어디 branch에 있는지 자주 확인해보기
(develop이나 master branch에 push하는 것을 방지하기 위해)
```


[SQL JOIN문 참조한 링크](https://www.techonthenet.com/mysql/joins.php#:~:text=MySQL%20JOINS%20are%20used%20to,or%20sometimes%20called%20LEFT%20JOIN)
```
SQL JOIN 문

기본 개념:
SELECT columns
FROM table1 
INNER JOIN table2
ON table1.column = table2.column;

test, test2 table이 있다고 가정
test : id,name
test2 : id,name,title column 있을 때

SELECT test.name test.id
FROM test
INNER JOIN test2
ON test.id=test2.id
(↑ 예제로 적합x이지만 그냥 기록용으로 )
LEFT, RIGHT JOIN 은 INNER 위치에 LEFT, RIGHT가 들어가는 형태

```
#### table s

| s_id | s_name | 
| ------ | ---- | 
| 1 | 임얼쑤 | 
| 2 | 김정욱 |
|3 | 백선혜|

#### table o

| o_id | s_id | o_date      |
| ------ | ------- | --------- |
| 5 | 1| 2013/05/12|
| 6 | 2 | 2013/05/13|
|7|3|2013/05/14|

```
SELECT s.s_id, s.s_name, o.o_date
FROM s
INNER JOIN o
ON o.s_id = s.s_id;
```

#### RESULT

| s_id | s_name | o_date      |
| ------ | ------- | --------- |
| 1 | 임얼쑤| 2013/05/12|
| 2 | 김정욱 | 2013/05/13|
|3|백선혜|2013/05/14|


```
일반적으로 JOIN문 = INNER JOIN

LEFT JOIN / RIGHT JOIN 차이
결과가 왼쪽 테이블 '전체' 데이터 대상이라면 LEFT
결과가 오른쪽 테이블 '전체' 데이터 대상이라면 RIGHT

LEFT OUTER JOIN , RIGHT OUTER JOIN 은 왼쪽, 오른쪽 테이블에 조인시킬 컬럼의 값이 NULL 이 있는 경우 사용한다.

```

```
NATURAL JOIN

SELECT * FROM s JOIN o ON s.s_id=o.s_id;

ON s.s_id = o.o_id
자연 조인에서는 조인 조건을 기술하지 않아도 자동으로 공통 컬럼을 찾아서 조인한다. 또 SELECT 절에 테이블 명을 기술하지 않고 검색하는 것이 가능하다.

```

```
위의 예제에서
SELECT * FROM s NATURAL JOIN o
(근데 natural join은 위험하다는 글이 많이 보인다)
```

```
3개 테이블 JOIN

SELECT * FROM s JOIN o ON s.s_id=o.s_id JOIN a ON a.s_id=s.s_id;

(JOIN table 이름 ON 접속할 컬럼 속성)
```

#### RESULT

| s_id | s_name | o_id| o_date      |
| ------ | ------- | ---- |--------- |
| 1 | 임얼쑤|5 |2013/05/12|
| 2 | 김정욱 |6 |2013/05/13|
|3|백선혜|7 |2013/05/14|

(이미지)[https://github.com/AppJam-Test/test/blob/master/JOIN.JPG]

### project board
* todo이슈는 done으로 넘기기
* inprogress이슈는 코드리뷰후 삭제하기
