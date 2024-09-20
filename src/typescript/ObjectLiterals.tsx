
interface person {
  firsName: string;
  age: number;
  lastName: string;
  address: address;
}

interface address {
  country: string;
  houseNo: number;
}

export const ObjectLiterals = () => {

  const person: person = {
    age: 26,
    firsName: "Jesus",
    lastName: "Duran",

    address: {
      country: 'colombia',
      houseNo: 615
    }
  }

  return (
    <>
      <h3>objetos literales</h3>
      <pre>
        {JSON.stringify(person, null, 2)}
      </pre>

    </>
  )
}
