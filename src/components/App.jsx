import { Fragment } from "react";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import user from '../data/user'
import data from '../data/data'


export const App = () => {
  return (
    <Fragment>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </Fragment>
  );
};
