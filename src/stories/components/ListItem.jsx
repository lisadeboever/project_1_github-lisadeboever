import {Card} from "./Card";

export const ListItem = ({username, photoUrl}) => {
    return (
        <span className={'ListItem'}>
            <Card username={username} photoUrl={photoUrl}/>
        </span>
    )
}