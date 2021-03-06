import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import GetData from "./GetData";
import IUser from "../interfaces/IUser.interface";

export default function PaintUser() {
  const user: IUser[] = useFetch("http://localhost:3001/jw-users");

  return (
    <div className="users">
      <h2
        style={{
          marginBottom: "3%",
        }}
      >
        π μ μ λ€ π
      </h2>
      <table>
        <thead>
          <tr>
            <th>μμ΄λ</th>
            <th>μ΄λ©μΌ</th>
            <th>νΈμ§</th>
          </tr>
        </thead>
        {user.map((users: IUser) => (
          <GetData user={users} key={users._id} />
        ))}
      </table>
    </div>
  );
}
