import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "../Components/AdminSidebar";
import { Supabase } from "../config/supabase-config";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      setError("");

      try {
        const { data, error } = await Supabase.from("messy-data") // Replace 'messy-data' with your actual table name
          .select("id, fullname, email, phone, country");

        if (error) {
          throw error;
        }

        setUsers(data);
      } catch (err) {
        console.error("Error fetching users:", err.message);
        setError("Unable to fetch users. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <div className="dash">
        <AdminSidebar />

        <div className="courses-overview" id="dataset">
          <div className="text">
            <h2>All Users</h2>

            {isLoading ? (
              <p>Loading users...</p>
            ) : error ? (
              <p style={{ color: "red" }}>{error}</p>
            ) : (
              <div className="table-container">
                <table className="styled-table">
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone no.</th>
                      <th>Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.fullname}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.country}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
