import { useState } from "react";
import users from "../users.json";


const Cards = () => {
  const [index, setIndex] = useState(Math.floor(Math.random() * users.length));

  const onChange = () => {
    setIndex(Math.floor(Math.random() * users.length));
  };

  console.log(users);
  return (
    <div className="container__cards">
      <div className="card">
        <div className="cover">
          <img src={users[index].picture} alt="" />
          <div className="img__back"></div>
        </div>
        <div className="description">
            <h3> {users[index].name}</h3>
            <p>{users[index].email}</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Molestiae quae cumque et iusto nesciunt totam quas repellat. Hic
              fuga cumque dolor culpa repellendus totam error recusandae, earum,
              deleniti doloribus assumenda.
            </p>
            <button onClick={onChange}>Next</button>
            <input type="button" value="Leer mas" />
          </div>
      </div>
    </div>
  );
};

export default Cards;
