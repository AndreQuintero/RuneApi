import React from 'react';
import Form from '../components/form-perfil';
import { action } from '@storybook/addon-actions';
import RuneContainer from '../components/rune-container';

export default {
    title: 'Form',
    component: Form,
  };
  

  export const form = () => (
    <RuneContainer>
        <Form handleSubmit={action('Submited')}  
        onChangeInput={action('on changed') }
        placeholder='Busque aqui'
        title='Buscar'
        />
    </RuneContainer>
      
  )