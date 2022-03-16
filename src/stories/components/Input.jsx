export const Input = ({ setSearchString,searchString }) => {
    return (
        <div className="input">
            <input onChange={setSearchString} type={'text'} value={searchString}/>
        </div>
    )

}