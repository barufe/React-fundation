
interface Person {
    fullname: string;
    lastName: string;
    age: number;
    adress: Address;
    isAlive?: boolean;
}
interface Address {
    street: string;
    city: string;
    country: string;
}

export const ObjectLiterals = () => {

const person: Person = {
    fullname: "Belkis",
    lastName: "Lopez",
    age: 30,
    adress: {
        street: "Calle 123",
        city: "Ciudad",
        country: "País"
    },
    isAlive: undefined,
};

  return (
    <>  
    <h3>Object Literals</h3>
    <pre>
    {JSON.stringify(person, null, 2)}
    </pre>
    </>
  )
}
