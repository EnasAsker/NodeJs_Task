const fs = require("fs")
const allData = require("./allData")

const addPerson = (id, fname, lname, age, city) => {
     const allData = loadData()

      const duplicatedData= allData.filter((obj) => {
          return obj.id === id
      })
      if (duplicatedData.length == 0) {
      allData.push ({
          id: id,
          fname: fname,
          lname: lname,
          age: age,
          city: city,
      })

      saveData(allData)
  } 
  else 
  {
      console.log("--Error! duplicated ID--")
  }
}
const loadData= () => {
  try { const jsonData = fs.readFileSync ("data2.json").toString()
      return JSON.parse (jsonData)
  } 
  catch {
          return []
  }

}

const saveData= (allData) => {
    const saveJsonData = JSON.stringify(allData) 
    fs.writeFileSync("data2.json" , saveJsonData)
}

const deleteData= (id) => {
      const allData = loadData()

      const dataToKeep = allData.filter((obj) => {
           return obj.id !== id 
      })
      saveData(dataToKeep)
}


const deleteData2= ()=> {
      const allData = loadData()

      const dataToKeep = allData.filter((obj) => {
           return (obj.id != 4 && obj.id != 5 && obj.id != 6)
      })
      saveData(dataToKeep)
      console.log(dataToKeep)
}
    
const readData= () => {
      const allData = loadData()

      const personData = allData.find((obj) => {
              return obj.id == 5
          })
          console.log(personData)
      }

  const listData = () => {
      const allData = loadData()

      allData.forEach ((obj) => {
          console.log(obj.fname , obj.lname, obj.city)
      })
  }
   

module.exports= {
  addPerson,
  deleteData,
  deleteData2, 
  readData,
  listData,
}