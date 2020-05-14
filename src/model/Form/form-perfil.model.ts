import React from 'react';

export default interface FormPerfilModel {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    onChangeInput: (event: React.FormEvent<HTMLInputElement>) => void;
    placeholder?: string;
    title?: string;
}