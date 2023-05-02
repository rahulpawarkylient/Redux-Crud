import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddUser } from "../Redux/Action";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [role, setRole] = useState("staff");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userobj = { name, email, contact, role };
    dispatch(FunctionAddUser(userobj));
    navigate("/user");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header" style={{ textAlign: "left" }}>
            <h2>Add User</h2>
          </div>
          <div className="card-body" style={{ textAlign: "left" }}>
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="contact">Phone</label>
                  <input
                    type="tel"
                    name="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label htmlFor="role">Role</label>
                  <select
                    name="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="form-control"
                  >
                    <option value="admin">Admin</option>
                    <option value="staff">Staff</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer" style={{ textAlign: "left" }}>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>{" "}
            |
            <Link className="btn btn-danger" to={"/user"}>
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
