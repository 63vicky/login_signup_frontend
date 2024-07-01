import React from 'react';

const SignUp = () => {
  return (
    <div className="sign-up-container flex justify-center items-center absolute w-1/2 bg-slate-100 h-full">
      <form action="" method="post">
        <div className="flex flex-col w-full">
          {/* <label htmlFor="email">Email: </label> */}
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            id="email"
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col w-full">
          {/* <label htmlFor="password">Password: </label> */}
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
          />
        </div>
        <div className="flex flex-col w-full">
          {/* <label htmlFor="conPass">Confirm Password: </label> */}
          <input
            type="password"
            placeholder="Confirm Password"
            name="conPass"
            id="conPass"
          />
        </div>

        <button className="mt-6 w-full">Create Account</button>

        <p className="mt-6 text-opacity-80 tNc antialiased w-3/4 text-center absolute bottom-1">
          By creating an account or signing you agree to our
          <a href="/" className="font-semibold text-xs text-black">
            {' '}
            Terms and Conditions
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
