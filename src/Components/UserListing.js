import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteOneUser, fetchUserList } from "../Redux/Action";
import { connect } from "react-redux";
import { toast } from "react-toastify";

const UserListing = ({ user, loadUser, removeuser }) => {
  useEffect(() => {
    loadUser();
  }, [loadUser]);
  const handleDelete = (id) => {
    if (window.confirm("DO yo want to delete this user")) {
      removeuser(id);
      loadUser();
      toast.success("User Deleted Successfully..");
    }
  };

  return (
    <div>
      <div className="card">
        <div className="card-header">
          <Link to={"/user/add"} className="btn btn-success">
            Add User [+]
          </Link>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>Code</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Role</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {user.userList.map((user, index) => (
                <tr key={index}>
                  <td>{index +1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.contact}</td>
                  <td>{user.role}</td>
                  <td>
                    <Link
                      to={`/user/edit/${user.id}`}
                      className="btn btn-primary"
                    >
                      Edit
                    </Link>
                    |{" "}
                    <Link
                      to={`/user`}
                      onClick={() => {
                        handleDelete(user.id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  loadUser: () => dispatch(fetchUserList()),
  removeuser: (id) => dispatch(deleteOneUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserListing);
