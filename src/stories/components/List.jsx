import {ListItem} from "./ListItem";

export const List = ({users,fetchFollowers}) => {
    return (
        <div className={'List'}>
            {users.length} Users
            {
                users.map((user,index) => {
                    return (
                        <span onClick={() => fetchFollowers(user.login)}>
                            <ListItem fetchFollowers={fetchFollowers} key={index} username={user.login} photoUrl={user.avatar_url}/>
                        </span>
                    )
                })
            }
        </div>
    )

}