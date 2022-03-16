import {ListItem} from "./ListItem";

export const FollowerList = ({followers}) => {
    return(
        <div>
            {followers.map((item,index) =>
            <ListItem key={index} username={item.login} photoUrl={item.avatar_url}/>
            ) }
        </div>
    )
}