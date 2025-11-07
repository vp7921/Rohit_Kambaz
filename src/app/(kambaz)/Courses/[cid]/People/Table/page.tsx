"use client";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import * as db from "../../../../Database";
import { useParams } from "next/navigation";

export default function PeopleTable() {
  const p = useParams<{ cid: string }>();
  const cid = Array.isArray(p?.cid) ? p.cid[0] : p?.cid;

  const { users = [], enrollments = [] } = db;

  const rows = users.filter((u) =>
    enrollments.some(
      (e) => String(e.user) === String(u._id) && String(e.course) === String(cid)
    )
  );

  return (
    <div id="wd-people-table">
      <Table striped hover bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((user) => (
            <tr key={String(user._id)}>
              <td className="wd-full-name text-nowrap">
                <FaUserCircle className="me-2 fs-1 text-secondary" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id">{user.loginId}</td>
              <td className="wd-section">{user.section}</td>
              <td className="wd-role">{user.role}</td>
              <td className="wd-last-activity">{user.lastActivity}</td>
              <td className="wd-total-activity">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
