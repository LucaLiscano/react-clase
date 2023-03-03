export function Greating({title,name="user"}){
    console.log(title,name)
    return <h1>{title}, dice {name}</h1>
}

export function UserCard({name,amount,address,married,greet}){
    console.log(name,amount,address,married,greet)
    return (
      <div>
        <h1>{name}</h1>
        <p>${amount}</p>
        <p>{married ? "married" : "single"}</p>
        <ul>
          <li> City{address.city}</li>
          <li>addres:{address.street}</li>
        </ul>
      </div>
    );
}