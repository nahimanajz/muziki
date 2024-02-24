import { toast } from "react-toastify";

export const checkValidations =(errors, toggleShow)=>{
    if (!errors) {
        toggleShow();
        toast(`${data.name} is updated successfully`);
    }
}