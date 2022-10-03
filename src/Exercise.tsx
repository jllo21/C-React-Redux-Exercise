import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import { Form } from 'react-final-form';
import { composeValidators } from './composeValidators';
import {validateEmail} from './validate/validateEmail'
import {validateEmpty} from './validate/validateEmpty'
import { useSelector } from 'react-redux';
import {RootState, store} from './app/store';
import {Provider} from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateName, updateEmail, submitForm } from './features/submit/SubmitSlice';

const ACTIONS ={
  HANDLE_NAME_CHANGE: 'handleNameChange',
  HANDLE_EMAIL_CHANGE: 'handleEmailChange',
  HANDLE_SUBMIT: 'handleSubmit'
}

function ExerciseComponent() { 
  const fullName = useSelector((state: RootState) => state.submit.fullName)
  const email = useSelector((state: RootState) => state.submit.email) 
  const submittedName = useSelector((state: RootState) => state.submit.submittedName)
  const submittedEmail = useSelector((state: RootState) => state.submit.submittedEmail) 
  const dispatch = useDispatch();

  //Update values as typed
  const updateInputChange = (event: any, action: any) =>{
    switch (action.type){
      case ACTIONS.HANDLE_NAME_CHANGE:
        dispatch(updateName(event.target.value))
        return
      case ACTIONS.HANDLE_EMAIL_CHANGE:
        dispatch(updateEmail(event.target.value))
        return
      default:
        return 
    }
  }

  const handleSubmit = () => {
    //if email field valid 
    if(composeValidators(validateEmpty, validateEmail)(email)){
      //update submitted form
      dispatch(submitForm())
    }
  };

  
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Form
          onSubmit={handleSubmit}
          render={({ form, handleSubmit }) => {
            return (
              //Could remove noValidate and that would handle a lot
              //Would defeat purpose of excerise
              <form onSubmit={handleSubmit} noValidate>
                <Card>
                  <CardHeader title="Form" />
                  <CardContent>
                    <Provider store={store}>
                    <TextField 
                      name="fullName"
                      label="Full Name" 
                      type="text" 
                      placeholder="Full Name" 
                      value={fullName} 
                      onChange={(e)=>updateInputChange(e,{type:ACTIONS.HANDLE_NAME_CHANGE})}
                    >
                    </TextField>
                    <TextField 
                      name="email" 
                      label="Email" 
                      type="email" 
                      required={true} 
                      placeholder="Email" 
                      value={email}
                      onChange={(e)=>updateInputChange(e,{type:ACTIONS.HANDLE_EMAIL_CHANGE})}
                    >
                    </TextField>
                    </Provider>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth variant="contained" type="submit">
                      Submit
                    </Button>
                  </CardActions>
                </Card>
              </form>
            );
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardHeader title="Submitted Form" />
          <CardContent>
            <Provider store={store}>
            <Typography>
              <strong>Full Name: {submittedName}</strong>
            </Typography>
            <Typography>
              <strong>Email: {submittedEmail}</strong>
            </Typography>
            </Provider>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export const Exercise = ExerciseComponent;
