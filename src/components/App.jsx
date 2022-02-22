import user from './data/user';
import Profile from './Profile/Profile';

import data from './data/data';
import Statistic from './Statistic/Statistic'; 

import friends from './data/friends';
import Friends from './Friends/FriendsList';

import transactions from './data/transactions';
import TransactionHistory  from './Transaction/TransactionHistory';

import Container from './Container/Container'

export const App = () => {
  return (
    <Container>
     <Profile
     avatar={user.avatar}
     username={user.username}
     tag={user.tag}
     location={user.location}
     followers={user.stats.followers}
     views={user.stats.views}
     likes={user.stats.likes}
     />
     <Statistic data = {data}/>
     <Friends friends ={friends}/>
     <TransactionHistory  items ={transactions} />
     </Container>

    
  
  );
};
