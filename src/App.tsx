import React, { useEffect, useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

export type Form = {
  email: string;
  password: string;
};

function App() {
  const { loginWithRedirect, isLoading, user } = useAuth0();
  const [toggle, setToggle] = useState(false);
  const [formData, setFormData] = useState<Form>({
    email: '',
    password: '',
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Sign In successfuly');
  };

  useEffect(() => {
    if (user) {
      // here I could make an axios or fectch request to send the user data to backend
      console.log(user);
    }
  }, [user]);

  const clickToGoogle = () => {
    loginWithRedirect({ connection: 'google-oauth2' });
  };

  const clickToFacebook = () => {
    loginWithRedirect({ connection: 'facebook' });
  };

  const clickToGitHub = () => {
    loginWithRedirect({ connection: 'github' });
  };

  const toggleEvent = () => {
    setToggle(!toggle);
  };

  const Buttons = () => {
    return (
      <div className='buttons__container'>
        <Button handleClick={clickToGoogle}>Continue with Google</Button>
        <Button handleClick={clickToFacebook}>Continue with Facebook</Button>
        <Button handleClick={clickToGitHub}>Continue with GitHub</Button>
      </div>
    );
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='App'>
      <div className='container'>
        <h1>Sign In</h1>
        {toggle ? (
          <form onSubmit={handleSubmit}>
            <Input
              name='email'
              value={formData.email}
              setFormData={setFormData}
            />
            <Input
              name='password'
              value={formData.password}
              setFormData={setFormData}
            />
            <Button>Sign Up</Button>
          </form>
        ) : (
          <Buttons />
        )}
        <Button handleClick={toggleEvent}>
          {toggle ? 'Go back' : 'Continue with email'}
        </Button>
      </div>
    </div>
  );
}

export default App;
