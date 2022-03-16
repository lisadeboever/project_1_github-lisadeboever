export const Card = ({username, photoUrl}) => {
    return (
        <span className={'Card'}>
            <img className={'Avatar'} src={photoUrl}/>
            {username}
        </span>
    )
}