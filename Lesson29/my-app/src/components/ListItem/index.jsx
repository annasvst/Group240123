import './styles.css';

// export const ListItem = (props) => <li>{title}</li>;


export const ListItem = ({title}) => <li>{title}</li>;

// JS object destructuring (ES6)
const myObject = {
  name: 'Anna',
  surname: 'Atalay',
  age: 30,
};

console.log(myObject.name, myObject.surname, myObject.age);

const {name: myName, surname, age} = myObject;
console.log(myName, surname, age);

