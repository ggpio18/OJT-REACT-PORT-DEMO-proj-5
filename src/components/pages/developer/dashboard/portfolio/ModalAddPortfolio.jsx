import React from 'react'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import { LiaTimesSolid } from 'react-icons/lia'
import { Formik, Form } from 'formik'
import { InputText, InputTextArea } from '../../../../helpers/FormInputs'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'
import { setIsAdd } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'

const ModalAddPortfolio = () => {
    const {dispatch} = React.useContext(StoreContext)
    const handleClose = () => dispatch(setIsAdd(false));
    
  return (
    <div>
      <ModalWrapper>
      <div className="main-modal w-[300px] bg-secondary text-content h-full">
                <div className="modal-header p-4 relative">
                    <h2>New Student</h2>
                    <button className='absolute top-[25px] right-4' onClick={handleClose}><LiaTimesSolid/></button>
                </div>
                <div className="modal-body p-4">
                    <Formik
                        // initialValues={initVal}
                        // validationSchema={yupSchema}
                        // onSubmit={async (values) => {
                        //     mutation.mutate(values)
                        // }}
                    >
                        {(props) => {
                            return (
                            <Form  className='flex flex-col h-[calc(100vh-110px)]'>
                        <div className='grow overflow-y-auto'>
                            
                        <div className="input-wrap">
                            <InputTextArea
                                label="Name"
                                type="text"
                                name="student_name"
                            />
                        </div>

                        <div className="input-wrap">
                        <InputText
                                label="Class"
                                type="text"
                                name="student_class"
                            />
                        </div>
                                
                                {/* edit here */}
                       

                        <div className="input-wrap">
                        <InputText
                                label="Age"
                                type="number"
                                name="student_age"
                            />
                        </div>

                        <div className="input-wrap">
                        <InputText
                                label="email"
                                type="text"
                                name="student_email"
                            />
                        </div>

                        </div>

                        <div className='form-action'>
                            <button className='btn btn-form btn--accent' type="submit"> <SpinnerButton/>add</button>
                            <button className='btn btn-form btn--cancel' type="button" onClick={handleClose} >Cancel</button>
                        </div>
                    </Form>)}}
                    
                    </Formik>
                </div>
        </div>
    </ModalWrapper>
    </div>
  )
}

export default ModalAddPortfolio
