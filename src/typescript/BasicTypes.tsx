

export const BasicTypes = () => {

  const name: string = 'Jesus';
  const age: number = 26;
  const isActive: boolean = true;
  const power: string[] = ['React', 'ReactNative', 'Angular.'];

  return (
    <>
      <h3>Tipos Basicos</h3>

      {name}
      {age}
      {isActive ? 'true' : 'false'}
      <br />
      {power.join(', ')}

    </>
  )
}
