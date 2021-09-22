const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]


function superbowlWin(record){
const result=record.find((item)=>(item.result==="W"))
if (result){
    return result.year
}
}
