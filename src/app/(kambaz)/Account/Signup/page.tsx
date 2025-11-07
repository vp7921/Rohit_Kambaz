"use client";

import Link from "next/link";
import { FormControl } from "react-bootstrap";

export default function Signup() {
  return (
    <div className="container-fluid p-0" style={{ paddingLeft: 0 }}>
      <div
        className="min-vh-100 d-flex align-items-center justify-content-center"
        style={{ background: "linear-gradient(180deg, #f6f8fa 0%, #eef3ff 100%)" }}
      >
        <div className="w-100" style={{ maxWidth: 460 }}>
          
          <div className="text-center mb-4">
            <div
              className="d-inline-flex align-items-center justify-content-center rounded-4 mb-2 shadow-sm"
              style={{ width: 64, height: 64, background: "#e9f2ff", color: "#1a73e8", fontWeight: 800 }}
            >
              KZ
            </div>
            <h1 className="h3 mb-1">Create your Kambaz account</h1>
            <p className="text-secondary mb-0">It only takes a minute.</p>
          </div>

          
          <div className="card border-0 shadow rounded-4">
            <div className="card-body p-4 p-md-5">
              
              <label htmlFor="signup-username" className="form-label fw-semibold">
                Username
              </label>
              <div className="input-group mb-3">
                
                <FormControl
                  id="signup-username"
                  placeholder="rohit"
                  className="border-start-0 wd-username"
                />
              </div>

              
              <label htmlFor="signup-password" className="form-label fw-semibold">
                Password
              </label>
              <div className="input-group mb-3">
                
                <FormControl
                  id="signup-password"
                  type="password"
                  placeholder="password"
                  className="border-start-0 wd-password"
                />
              </div>

              
              <label htmlFor="signup-password-verify" className="form-label fw-semibold">
                Verify password
              </label>
              <div className="input-group mb-4">
                
                <FormControl
                  id="signup-password-verify"
                  type="password"
                  placeholder="verify password"
                  className="border-start-0 wd-password-verify"
                />
              </div>

              <Link
                href="Profile"
                className="btn btn-primary w-100 py-2 fw-semibold"
                style={{ background: "#1a73e8" }}
              >
                Sign up
              </Link>
            </div>
          </div>

          <div className="text-center mt-3">
            <span className="text-secondary me-1">Already have an account?</span>
            <Link href="Signin" className="fw-semibold text-decoration-none">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
