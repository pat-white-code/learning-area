// let promise = fetch('/coffee1.jpg');

// let promise2 = promise.then(response => response.blob());

// let promise3 = promise2.then(myBlob => {
//   let objectURL = URL.createObjectURL(myBlob);
//   let image = document.createElement('img');
//   image.src = objectURL;
//   document.body.appendChild(image);
//   });

//   let errorCase = promise3.catch(err => {
//     console.log('there has been an error with your request: ', err.message)});

let a = fetch('/coffee.jpg');
let b = fetch('tea.jpg');
let c = fetch('drink.txt');


function fetchAndDecode(url, type){
  return fetch(url).then(response => {
    if(type === 'blob') {
      return response.blob();
    } else if(type === 'text') {
      return response.text();
    }
  })
  .catch(err => {
    console.log('There has been a problem with your fetch operation', err.message);
  })
};

let coffee =  fetchAndDecode('coffee.jpg', 'blob');
let tea = fetchAndDecode('tea.jpg', 'blob');
let description = fetchAndDecode('drink.txt', 'text');

Promise.all([coffee, tea, description]).then(values => {
  console.log(values);
  let objectURL1 = URL.createObjectURL(values[0]);
  let objectURL2 = URL.createObjectURL(values[1]);
  let descText = values[2];

  let image1 = document.createElement('img');
  let image2 = document.createElement('img');

  image1.src = objectURL1;
  image2.src = objectURL2;

  document.body.appendChild(image1);
  document.body.appendChild(image2);

  let para = document.createElement('p');
  para.textContent = descText;
  document.body.appendChild(para);
});