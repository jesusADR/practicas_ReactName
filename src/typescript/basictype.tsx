

export const BasicTypes = () =>{

    const name : string = 'jesus';
    const age : number = 23;
    const isActive : boolean = true;

    const powers : string[] = ['React','ReactNative','Angular','Vue','Qwik.'];



    return(
       <>
        <h3>Tipos Basicos</h3>
        {name}{age}{isActive ? 'true':'false'}
        <br />

        {powers.join(', ')}

       </>
    )
} 