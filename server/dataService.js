export const dataService ={
  getVoteInfo() {
    return {
      question:'Esta Usted De Acuerdo con la creacion de los plugins?',
      options:'1',
      choices:[{id:'1',answer:'Si'},{id:'2',answer:'No'}]
    }
  },
  getAnswers(){
    return [
      {
        "id": "651db4fca75e1b4f89cc304d",
        "name": "Bradshaw Silva",
        "choice": {
          "answer": "Si",
          "id": 1
        },
        "porcent": 0.776,
        "attendant": true,
        "absent": false,
        "qr": 4896
      },
      {
        "id": "651db4fc987306f997b5b9d1",
        "name": "Lourdes Glass",
        "choice": {
          "answer": "No",
          "id": 2
        },
        "porcent": 0.777,
        "attendant": true,
        "absent": false,
        "qr": 2131
      },
      {
        "id": "651db4fcf290c45410e3c4c9",
        "name": "Blair Knight",
        "choice": {
          "answer": "No",
          "id": 1
        },
        "porcent": 0.873,
        "attendant": true,
        "absent": false,
        "qr": 4053
      },
      {
        "id": "651db4fc4b173e24a008eed9",
        "name": "Hodges Hendrix",
        "choice": {
          "answer": "Si",
          "id": 1
        },
        "porcent": 0.043,
        "attendant": true,
        "absent": false,
        "qr": 4090
      },
      {
        "id": "651db4fc4c6b2e3b610a7b6e",
        "name": "Delaney Freeman",
        "choice": {
          "answer": "Si",
          "id": 1
        },
        "porcent": 0.857,
        "attendant": true,
        "absent": false,
        "qr": 2500
      },
      {
        "id": "651db4fc252b8ca1bb3c3d2e",
        "name": "Herrera Morrow",
        "choice": {
          "answer": "No",
          "id": 2
        },
        "porcent": 0.447,
        "attendant": true,
        "absent": false,
        "qr": 4486
      },
      {
        "id": "651db4fc235a15c64b834b3b",
        "name": "Florence Rivas",
        "choice": {
          "answer": "No",
          "id": 2
        },
        "porcent": 0.749,
        "attendant": true,
        "absent": false,
        "qr": 3032
      },
      {
        "id": "651db4fc3b11ed469fc53315",
        "name": "Estella Whitley",
        "choice": {
          "answer": "No",
          "id": 2
        },
        "porcent": 0.923,
        "attendant": true,
        "absent": false,
        "qr": 3157
      },
      {
        "id": "651db4fcfc5f0ebd5c079baa",
        "name": "Celia Gutierrez",
        "choice": {
          "answer": "No",
          "id": 2
        },
        "porcent": 0.825,
        "attendant": true,
        "absent": false,
        "qr": 3572
      },
      {
        "id": "651db4fc12fd49c441d671cb",
        "name": "Keri Davenport",
        "choice": {
          "answer": "Si",
          "id": 1
        },
        "porcent": 0.971,
        "attendant": true,
        "absent": false,
        "qr": 2599
      }
    ]
  },
  getresults(){
    var result =[]
    for (const qChoise of this.getVoteInfo().choices) {
      let temp = {
        id:qChoise.id,
        answer:qChoise.answer,
        count:0,
        porcent:0
      }
      for (const userChoice of this.getAnswers()) {
        if(userChoice.choice.id == qChoise.id){
          temp.count+=1
          temp.porcent+=parseFloat(userChoice.porcent)
        }
      }
      result.push(temp)
    }
    return Promise.resolve(result)
  },
  getPluginAdmin(){
     return {
      plugin1:{
        isActive:false,
        props:'',
      },
      plugin2:{
        isActive:false,
        props:'',
      }
    }
  }
}