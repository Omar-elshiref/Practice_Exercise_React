import { useState } from 'react';

const useForm2 = (initialValues) => {
    const [data, setData] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevValues => ({ ...prevValues, [name]: value }));
    };

    const resetForm = (e) => {
        e.preventDefault();
        setData(initialValues)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
      };

    return {
        data,
        handleChange,
        resetForm,
        handleSubmit
    };
};

export default useForm2;