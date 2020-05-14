import React, { FC } from 'react';
import FormPerfilModel from '../model/Form/form-perfil.model';

const Form: FC<FormPerfilModel> = ( { handleSubmit, onChangeInput, placeholder = '', title = '' }) => (
    <div className=" profile-input-container">
    <div><h1>{title}</h1></div>
    <form onSubmit={handleSubmit} className="in-center">
        <input onChange={onChangeInput} className="profile-input " placeholder={placeholder} type="search"/> 
        <button type="submit" className="profile-button"></button>
    </form>   
    </div> 
);

export default Form;