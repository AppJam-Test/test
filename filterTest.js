const result = [
    {
        "idx": 2,
        "name": "액체류",
        "unit": "개",
        "alarmCnt": 9,
        "memoCnt": 27,
        "presentCnt": 0,
        "icon_idx": 1,
        "category_idx": 2,
        "user_idx": 13
    },
    {
        "idx": 3,
        "name": "액체류",
        "unit": "통",
        "alarmCnt": 5,
        "memoCnt": 3,
        "presentCnt": 0,
        "icon_idx": 3,
        "category_idx": 2,
        "user_idx": 13
    },
    {
        "idx": 4,
        "name": "액체류",
        "unit": "통",
        "alarmCnt": 2,
        "memoCnt": 3,
        "presentCnt": 2,
        "icon_idx": 2,
        "category_idx": 3,
        "user_idx": 13
    },   {
        "idx": 5,
        "name": "액체류",
        "unit": "통",
        "alarmCnt": 3,
        "memoCnt": 3,
        "presentCnt": 2,
        "icon_idx": 2,
        "category_idx": 4,
        "user_idx": 13
    }
]

const resultFilterCategory = result.filter(item=>item.category_idx===2)
console.log(resultFilterCategory)
console.log("====")
const resultFilterUserIdx = resultFilterCategory.filter(item=>item.idx===2)
console.log(resultFilterUserIdx)
console.log("====")
const resultFilterAlarmCnt = resultFilterUserIdx.filter(item=>item.alarmCnt>4)
console.log(resultFilterAlarmCnt)
console.log("====")
const a = result.filter(item=>item.category_idx===2).filter(item=>item.idx===2).filter(item=>item.alarmCnt>4)
console.log(a)