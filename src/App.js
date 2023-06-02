import { Formik, Form, Field, ErrorMessage } from 'formik'
import TextInput from './components/TextInput'
import Checkbox from './components/Checkbox'
import Select from './components/Select'
import Radio from './components/Radio'

const validate = (values) => {
    const errors = {}

    if(!values.name){
      errors.name = 'requerido'
    } else if (values.name.length < 5) {
      errors.name = 'El Nombre es muy corto'
    }
    if(!values.lastname){
      errors.lastname = 'requerido'
    } else if (values.lastname.length < 8) {
      errors.lastname = 'El Nombre es muy corto'
    }

    if(!values.radio) {
      errors.radio = 'Reqerido'
    }
      
    return errors
  }


function App() {
  return (
    <Formik
    initialValues={{ name: '', lastname: '', email: '', radio: '' }}
    validate={validate}
    onSubmit={values => console.log(values)}
    >
      <Form>
        <TextInput name='name' label='Nombre'/>
        <br/>
        <TextInput name='lastname' label='Apellido'/>
        <br/>
        <TextInput name='email' label='Email'/>
        <br/>
        <Select label= 'Sexo' name='sexo'>
          <option value= ''>Seleccione Sexo</option>
          <option value= 'hombre'>Hombre</option>
          <option value= 'mujer'>Mujer</option>
          <option value= 'indefinido'>Indefinido</option>
        </Select>
        <Checkbox name='accept'>
          Aceptar terminos y Condiciones
        </Checkbox>
        <Radio name= 'radio' value='pelota' label='Pelota' />
        <Radio name= 'radio' value='palo' label='Palo' />
        <Radio name= 'radio' value='escalera' label='escalera' />
        <ErrorMessage name='radio'/>
        <button type='submit'>Enviar</button>
      </Form>
     
    </Formik>
  );
}

export default App;
