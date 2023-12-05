// type Point = {
//   x : number;
//   y : number;
// };

// const point : Point = { x : 5, y : 3 };

// console.log(point);

type Point = {
  x : string;
  y : object;
  z : number;
};

const point : Point = { x : "하이", y : { name : "Bang" } , z : 3};

console.log(point);
// { x: '하이', y: { name: 'Bang' }, z: 3 }