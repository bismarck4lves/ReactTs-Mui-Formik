import * as Yup from "yup";

export const filesValidator =Yup.object().shape({
    files: Yup.mixed().required(),
})