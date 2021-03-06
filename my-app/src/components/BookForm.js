import { Form , Field} from 'react-final-form';
import React from 'react';
import {Form as Rform , ControlLabel , ButtonToolbar , Button , Input } from 'rsuite';
const TextFieldAdapter = ({input , meta , ...rest}) => (
    <Input {...input} {...rest} onChange = {value => input.onChange(value)}
    errorText={meta.touched ? meta.error : ""} />
)
const BookForm = props => {
    const validate = values => (
        values ? undefined : 'Required'
    );
    return (
        <>
        <h2>{props.editing ? 'Edit Book Form' : 'Add Book'}</h2>
        <Form 
            onSubmit={props.onSubmit}
            initialValues = {props.book}
            validate={validate}
            render={({ handleSubmit , submitting , values , pristine, form }) => {
                console.log(values);
                console.log(submitting);
                console.log(form);
                return (
                <Rform onSubmit={handleSubmit}>
                    <div style={{margin:'1rem auto'}}>
                    <ControlLabel>Book Name</ControlLabel>
                        <Field name="name" 
                        component={TextFieldAdapter}
                        validate={validate}>
                        </Field>
                    </div>
                    <div style={{margin:'1rem auto'}}>
                    <ControlLabel>Book Category</ControlLabel>
                        <Field name="category"
                        component={TextFieldAdapter}
                        validate={validate}>
                        </Field>
                    </div>
                    <div style={{margin:'1rem auto'}}>
                    <ControlLabel>Book Price</ControlLabel>
                        <Field name="price" 
                        component={TextFieldAdapter}
                        validate={validate}>
                        </Field>
                    </div>
                    <div style={{margin:'1rem auto'}}>
                    <ControlLabel>Book Author</ControlLabel>
                        <Field name="author" 
                            component={TextFieldAdapter}
                            validate={validate}>
                        </Field>
                    </div>
                    <div className="buttons">
                    <ButtonToolbar>
                        <Button appearance="primary" type="submit"  disabled={submitting || pristine}>{props.editing ? 'Edit Book' : 'Add Book'}</Button>
                      {props.editing ? (<Button appearance="default" onClick={() => props.setEditing(false)}>Cancel</Button>) : (<Button appearance="default" onClick={form.reset} disabled={submitting || pristine}>Reset</Button>)}  
                    </ButtonToolbar>
                    </div>
                    <pre>{JSON.stringify(values,0,2)}</pre>
                </Rform>
            )}
        }
        />
        </>
        )
    }
    export default BookForm;