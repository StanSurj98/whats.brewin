import React from "react";

const FormUsers = (props) => {
  return (
    <div className="card rounded flex flex-col items-center  ">
      <h1 className="text-black">Please {props.children}</h1>
      <form>
        <div className="card rounded flex flex-col items-center p-20">
          {props.children === "Register" && (
            <>
              <label htmlFor="name">User Name</label>
              <input type="text" placeholder="User Name" />
            </>
          )}
          <label htmlFor="name">Email</label>
          <input type="text" placeholder="Email" />
          <label htmlFor="name">Password</label>
          <input type="text" placeholder="Password" />
          {props.children === "Register" && (
            <>
              <label htmlFor="name">Confirm Password</label>
              <input type="text" placeholder="Confirm Password" />
            </>
          )}
          <button className="bg-sky-500 border-1 border-black rounded-full p-2 text-white hover:bg-sky-700 m-3">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormUsers;