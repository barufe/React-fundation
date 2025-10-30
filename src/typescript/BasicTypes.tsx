
export const BasicTypes = () => {
 
    const name: string = "Belkis"
    const age: number = 30;
    const isActive: boolean = true;

    const powers: string[] = ["React", "React Native", "Angular", "Vue"];
    powers.push("TypeScript");

  return (
    <>
    <h3>Tipos Basicos</h3>
    {name} {age} {isActive ? 'Activo' : 'Inactivo'}
    <br />
    {powers.join(", ")} 

    </>
  )
}
