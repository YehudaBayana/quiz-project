import './App.css';
import { useState } from 'react';
import SideBar from './Components/Features/sideBar/SideBar';
import StudentList from './Components/Features/students/StudentList';
import Login from './Components/Pages/login/Login';

function App() {
  const [user, setUser] = useState();
  // const [token, setToken] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState();

  const postStudent = () => {
    fetch('http://localhost:8080/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: 'asi',
        lastName: 'alena',
        email: email,
        description: 'jnfkdsskdf fdsj  dfj sdf sd a sdkjs ad askd',
      }),
    })
      .then((res) => {
        console.log(res.body);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function loginForm() {
    fetch('http://localhost:8080/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        pass: pass,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.token) {
          fetch('http://localhost:8080/users/userInfo', {
            headers: {
              'x-api-key': data.token,
            },
          })
            .then((res) => res.json())
            .then((data) => setUser(data))
            .catch((err) => {
              console.log(err);
            });
        }
        // console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      {!user ? (
        <>
          <Login setPass={setPass} setEmail={setEmail} loginForm={loginForm} />
          {/* <form onSubmit={loginForm}>
            <input
              type='email'
              placeholder='email'
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='pass'
              onChange={(e) => setPass(e.target.value)}
            />
            <button>login</button>
          </form> */}
        </>
      ) : (
        <div className='App'>
          <SideBar fullName={user.fullName} />
          <StudentList />
          <form
            onSubmit={postStudent}
            style={{ width: '500px', margin: '0 auto' }}
          >
            <input
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              placeholder='enter email'
            />
            <button>send</button>
          </form>
        </div>
      )}
    </>
  );
}

export default App;
