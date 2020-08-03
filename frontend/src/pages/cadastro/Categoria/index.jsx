import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PagesBasis/index.jsx';
import FormField from '../../../components/FormField/index.jsx';
import Button from '../../../components/Button/index.jsx';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '#000000'
  }
  const [ category, setCategory ] = useState( initialValues );
  const [ categories, setCategories ] = useState( [] );
  
  function setValue ( key, value ) {
    setCategory({
      ...category,
      [ key ]: value
    });
  }

  function handleChange ( event ) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: { category.name }</h1>

      <form onSubmit={ event => {
        event.preventDefault();
        setCategories( [ ...categories, category ] );

        setCategory( initialValues );
      }}>

        <FormField 
          labelText={ 'Nome da Categoria' }
          type={ 'text' }
          value={ category.name }
          name={ 'name' }
          placeHolder={ 'Categoria' }
          onChange={ handleChange }
        />

        <FormField
          labelText={ 'Descrição' }
          type={ 'text' }
          value={ category.description }
          name={ 'description' }
          placeHolder={ 'Descrição' }
          onChange={ handleChange }
        />
        
        <FormField
          labelText={ 'Cor' }
          type={ 'color' }
          value={ category.color }
          name='color'
          onChange={ handleChange }
        />

        <Button to='/'>
          Cadastrar
        </Button>
      </form>

      <ul>
        { categories.map( (category, index) => {
            return (
              <li key={`${ index }`}>
                { category.name }
              </li>
            );
          })
        }
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;
