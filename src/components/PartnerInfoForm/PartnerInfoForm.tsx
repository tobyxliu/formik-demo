import { FormEvent } from 'react';
import { Label, Input, Button } from 'pcln-design-system';
import { Container, ErrorText, InputSection } from './styled';
import { useFormik } from 'formik';
import { INITIAL_VALUES } from './constants';
import { partnerValidation } from '../../Validations/PartnerInfoValidation';

// liberally copied/stolen from https://github.com/rajgohil07/react-form-validation-using-formik-yup
export const PartnerInfoForm = ({ accountID = '' }: any) => {
  const onSubmit = () => {
    console.log('fsadf');
  };

  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: INITIAL_VALUES,
      validationSchema: partnerValidation,
      onSubmit: onSubmit,
      validateOnBlur: true,
      validateOnChange: true,
    });

  if (accountID) {
    values.accountID = accountID;
  }

  return (
    <Container>
      <h1>Partner Info</h1>

      <InputSection>
        <Label>Partner Name</Label>
        <Input
          name='name'
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name ? (
          <ErrorText>{errors.name}</ErrorText>
        ) : (
          <></>
        )}
      </InputSection>

      <InputSection>
        <Label>Phone Number</Label>
        <Input
          name='phoneNumber'
          value={values.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.phoneNumber && touched.phoneNumber ? (
          <ErrorText>{errors.phoneNumber}</ErrorText>
        ) : (
          <></>
        )}
      </InputSection>

      <InputSection>
        <Label>PLF</Label>
        <Input
          name='plf'
          value={values.plf}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.plf && touched.plf ? (
          <ErrorText>{errors.plf}</ErrorText>
        ) : (
          <></>
        )}
      </InputSection>

      <InputSection>
        <Label>Account ID</Label>
        <Input
          name='accountID'
          value={values.accountID}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={accountID}
        />
        {errors.accountID && touched.accountID ? (
          <ErrorText>{errors.accountID}</ErrorText>
        ) : (
          <></>
        )}
      </InputSection>

      <Button
        onClick={(e: unknown) => {
          handleSubmit(e as FormEvent<HTMLFormElement>);
        }}
        type='submit'
      >
        Create Partner
      </Button>
    </Container>
  );
};

export default PartnerInfoForm;
