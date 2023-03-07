import Proptypes from 'prop-types'


export function Button({text, name}){
    console.log(text)

    if(!text){
        console.error('el texto es requerido')
    }
   return (
     <button 
       onClick={function () {
         console.log("hola mundo");
       }}
     >
       {text}-{name}
     </button>
   );
}
Button.propTypes={
    text:Proptypes.string.isRequired
}

Button.defaultProps={
    name:"Some user"
}