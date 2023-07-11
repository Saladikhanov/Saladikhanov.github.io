// export const handleChangeInput = (e, formData, setFormData) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setFormData({ ...formData, [name]: value });
//   };

export const handleChangeInput = (e, formData, setFormData) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
};