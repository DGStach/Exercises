// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promis = new Promise((resolve, reject)=>{
  setTimeout(resolve, 4000, "success")
})

// #2) Run the above promise and make it console.log "success"
promis.then(res => console.log(res))
// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
Promise.resolve("success").then(console.log)
Promise.reject("error").then(console.log)

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed').catch(console.log('Ooops something went wrong'))

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]
const a = function(url) {
  fetch(url)
      .then(res => res.json())
      .then(res=>console.log(url, res))
      .catch(()=> console.log('error'))
}

Promise.all(urls.map((url)=>a(url)))


