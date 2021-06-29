import useUser from '../../hooks/use-user';
import User from './user';
import Suggestions from './suggestions';

const Sidebar = () => {
    const { activeUser }   = useUser();


    return (
      <div className="p-4">
        <User username={activeUser?.username} fullname={activeUser?.fullName}/>
        <Suggestions userId={activeUser?.userId} following={activeUser?.following} loggedInUserDocId={activeUser?.docId}/>
      </div>
    )
}

export default Sidebar;