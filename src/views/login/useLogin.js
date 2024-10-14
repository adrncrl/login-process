import serialize from "form-serialize";

const useLogin = (onSubmit) =>{

  const handleLogin = (event)=>{
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity() === false){
        form.clasList.add("was-validated")
        return false;

    }
    const serializedData = serialize(form, { hash: true });
    onSubmit(serializedData);
  }
}