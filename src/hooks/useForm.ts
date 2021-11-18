import { ChangeEvent, FormEvent, useState } from "react";

/**
 * Custom hook who handle form (React Hook Form like).
 *
 * @params { intialValues? }
 * @returns { as, handleSubmit, onChange, values }
 */
const useForm = <T>(intialValues: T) => {
  const [values, setValues] = useState(intialValues);

  /** onChange works differently according on the type.
   * If you need to access to name and value, you must choose different param :
   * e => input, textarea
   * args => select
   */
  const onChange = (
    e: ChangeEvent<HTMLInputElement>,
    args: ChangeEvent<HTMLSelectElement>
  ) => {
    if (e.target) {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    } else {
      const { name, value } = args.target;
      setValues({ ...values, [name]: (value as any).value });
    }
  };

  const handleReset = () => {
    setValues(intialValues);
  };

  const handleSubmit =
    (onSubmit: (v: T) => void) => (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSubmit(values);
    };

  const as = (name: string) => {
    return { name, onChange, value: (values as any)[name] };
  };

  return { as, handleReset, handleSubmit, onChange, values };
};

export default useForm;
