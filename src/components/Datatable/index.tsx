import axios from "axios";
import { FC, useEffect, useState } from "react";

interface Users {
  id: number;
  username: string;
  email: string;
  password: string;
}
const Datatable: FC = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const fetchData = async () => {
    const { data } = await axios.get("http://localhost:3000/users");
    setUsers(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="px-20 flex justify-center pt-20">
      <table className="table-fixed text-center w-full">
        <thead>
          <tr>
            <th className="p-10">NAME</th>
            <th className="p-10">EMAIL</th>
            <th className="p-10">PASSWORD</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-green-300" : ""}>
              <td className="py-5">{user.username}</td>
              <td className="py-5">{user.email}</td>
              <td className="py-5">{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
