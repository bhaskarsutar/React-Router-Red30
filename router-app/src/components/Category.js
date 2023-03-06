import { useParams, NavLink, Outlet } from "react-router-dom";
import {getCategory } from "../api";

export default function Category() {
  const {catId}=useParams()
  const category = getCategory(catId)
    return (
      <>
        <h2>{category.name} Sessions</h2>

        <ul className="session-list">
          {category?.sessions.map(sessions=>(
            <li className="session" key={sessions.id}>
              <NavLink 
                className={({isActive})=>(isActive?"session-active":null)}
                to={sessions.id}>
                <p className="session-name">{sessions.name}</p>
                <p>
                  {sessions.speaker.name} | {sessions.speaker.org}
                </p>
              </NavLink>
        
            </li>
          ))}
        </ul>
        <Outlet/>
      </>
    );
  }