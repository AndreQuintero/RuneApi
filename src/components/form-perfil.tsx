import React, { FC } from 'react';
import FormPerfilModel from '../model/Form/form-perfil.model';
import styles from '../css/search.module.css';

const Form: FC<FormPerfilModel> = ( { handleSubmit, onChangeInput, placeholder = '', title = '' }) => (
    <div className={styles.profileInputContainer}>
        <div><h1>{title}</h1></div>
        <form onSubmit={handleSubmit} className={styles.inCenter}>
            <input onChange={onChangeInput} className={styles.profileInput} placeholder={placeholder} type="search"/> 
            <button type="submit" className={styles.profileButton}></button>
        </form>   
    </div> 
);

export default Form;