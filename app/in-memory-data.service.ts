import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 1, name: 'Mr. Nice' , price: 1 ,description: "hola"},
      { id: 2, name: 'Narco', price: 2 ,description: "hola" },
      { id: 3, name: 'Bombasto', price: 3 ,description: "hola" },
      { id: 4, name: 'Celeritas', price: 4 ,description: "hola" },
      { id: 5, name: 'Magneta', price: 5 ,description: "hola" },
      { id: 6, name: 'RubberMan', price: 6 ,description: "hola" },
      { id: 7, name: 'Dynama', price: 7 ,description: "hola" },
      { id: 8, name: 'Dr IQ', price: 8 ,description: "hola" },
      { id: 9, name: 'Magma', price: 9 ,description: "hola" },
      { id: 10, name: 'Tornado', price: 190 ,description: "hola" }
    ];
    const users = [
      { username: "pedro", lastname: "rodriguez", role:"admi" },
      { username: "juan", lastname: "escobar", role:"client" },
      { username: "alejandro", lastname: "mesa", role:"cient" },
      { username: "sofia", lastname: "bagattin", role:"admi" },
      { username: "laura", lastname: "cespedes", role:"client" }
    ];
    const car = [
      { id: 1, username : "juan", listP : [{id : 12 ,name : "sdasdf",price : "456", description:"hoasdf"},{id : 11 ,name : "sdaf",price : "456", description:"hoasdf"}]}
    ];
    const orders= [
       { id: 1, username : "juan", listP : [{id : 12 ,name : "sdasdf",price : "456", description:"hoasdf"},{id : 11 ,name : "sdaf",price : "456", description:"hoasdf"}]},
       { id: 2, username : "juan", listP : [{id : 14 ,name : "sdafdfh",price : "345", description:"ghjh"},{id : 11 ,name : "sdaf",price : "456", description:"hoasdf"}]}
    ];

    return {products, users,car,orders};
  }
}

/*export class InMemoryDataServiceUser implements InMemoryDbServiceUser {
  createDb() { 
    const users = [
      {id : 1, name: "pedro", lastname: "rodriguez", role:"admi" },
      {id : 2, name: "juan", lastname: "escobar", role:"client" },
      {id : 3, name: "alejandro", lastname: "mesa", role:"cient" },
      {id : 4, name: "sofia", lastname: "bagattin", role:"admi" },
      {id : 5, name: "laura", lastname: "cespedes", role:"client" }
    ];
    return {users}
  }
}*/

