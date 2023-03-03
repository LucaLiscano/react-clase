import Proptypes from 'prop-types'

export function Button({text, name}){
    console.log(text)

    if(!text){
        console.error('el texto es requerido')
    }
   return <button>{text}-{name}</button>;
}
Button.propTypes={
    text:Proptypes.string.isRequired
}

Button.defaulProps={
    name:"user"
}