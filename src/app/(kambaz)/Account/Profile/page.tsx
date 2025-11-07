"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { redirect } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { RootState } from "../../store";

export default function Profile() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((s: RootState) => s.accountReducer);
  const [profile, setProfile] = useState<any>({});

  useEffect(() => {
    if (!currentUser) {
      redirect("/Account/Signin");
      return;
    }
    setProfile(currentUser);
  }, [currentUser]);

  // Subtle shaded, read-only field styling (no layout/design changes)
  const field: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #e5e9f2",         // softer border
    borderRadius: 8,
    outline: "none",
    marginBottom: 12,
    background: "#f5f7fb",               // low-shaded background
    color: "#495057",
    boxShadow: "inset 0 1px 2px rgba(0,0,0,0.02)",
  };

  const signout = () => {
    dispatch(setCurrentUser(null));
    redirect("/Account/Signin");
  };

  return (
    <div className="container-fluid p-0">
      <div
        className="min-vh-100 d-flex align-items-center justify-content-center"
        style={{ background: "linear-gradient(180deg, #f6f8fa 0%, #eef3ff 100%)" }}
      >
        <div className="w-100" style={{ maxWidth: 520 }}>
          <div className="text-center mb-4">
            <div
              className="d-inline-flex align-items-center justify-content-center rounded-4 mb-2 shadow-sm"
              style={{ width: 64, height: 64, background: "#e9f2ff", color: "#1a73e8", fontWeight: 800 }}
            >
              KZ
            </div>
            <h1 className="h3 mb-1">Profile</h1>
            <p className="text-secondary mb-0">Manage your account details</p>
          </div>

          <div id="wd-profile-screen" className="card border-0 shadow rounded-4">
            <div className="card-body p-4 p-md-5">
              {profile && (
                <>
                  <label htmlFor="wd-username" className="form-label fw-semibold">Username</label>
                  <input id="wd-username" style={field} value={profile.username ?? ""} readOnly />

                  <label htmlFor="wd-password" className="form-label fw-semibold">Password</label>
                  <input id="wd-password" type="password" style={field} value={profile.password ?? ""} readOnly />

                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="wd-firstname" className="form-label fw-semibold">First name</label>
                      <input id="wd-firstname" style={field} value={profile.firstName ?? ""} readOnly />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="wd-lastname" className="form-label fw-semibold">Last name</label>
                      <input id="wd-lastname" style={field} value={profile.lastName ?? ""} readOnly />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="wd-dob" className="form-label fw-semibold">Date of birth</label>
                      <input id="wd-dob" type="date" style={field} value={profile.dob ?? ""} readOnly />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="wd-email" className="form-label fw-semibold">Email</label>
                      <input id="wd-email" type="email" style={field} value={profile.email ?? ""} readOnly />
                    </div>
                  </div>

                  <label htmlFor="wd-role" className="form-label fw-semibold">Role</label>
                  <select
                    id="wd-role"
                    value={profile.role ?? ""}
                    disabled
                    style={{ ...field, appearance: "none" as const }}  // same shade for disabled select
                  >
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="STUDENT">Student</option>
                  </select>

                  <button
                    id="wd-signout-btn"
                    onClick={signout}
                    className="btn w-100 py-2 fw-semibold"
                    style={{ background: "#dc3545", color: "#fff" }}
                  >
                    Sign out
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
