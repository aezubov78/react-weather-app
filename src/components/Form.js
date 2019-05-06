import React from 'react'


const Form = props => (

        <form onSubmit={props.getWeather}>

              <input type='text' name="city" placeholder="Мiсто..." /> 
              <input type='text' name="country" placeholder="Країна..."/>
              <button>Дізнатися яка погода</button>

        </form>

)


export default Form