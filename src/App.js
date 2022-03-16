import './App.css';

import {Header} from './stories/components/Header';
import {Input} from './stories/components/Input';
import {Button} from './stories/components/Button';
import {Footer} from './stories/components/Footer';
import {useState} from 'react';
import {List} from './stories/components/List';
import {Alert} from "./stories/components/Alert";
import {FollowerList} from "./stories/components/FollowerList";
import {Loadingindicator} from "./stories/components/Loadingindicator";


function App() {
    const [users, setUsers] = useState();
    const [followers, setFollowers] = useState();
    const [searchString, setSearchString] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');

    const handleTextChange = e => {
        setSearchString(e.target.value);
    };

    // reset knop, input leegmaken, lijst verwijderen
    const handleResetClick = () => {
        setSearchString('');
        setUsers(null)
        setFollowers(null)
        setUsername(null)
    }

    return (
        <div className='maincontainer'>
            <div className={'Header'}>
                <Header/>
            </div>
            <div className={'Title'}>
                <h1>zoeken</h1>
            </div>
            <div className={'SearchRow'}>
                <Input setSearchString={handleTextChange} searchString={searchString}/>
                <Button onClick={() => FetchUsers(searchString)} backgroundColor={'#7e96ff'} label={'Search'}/>
                <Button backgroundColor={'#fc4848'} label={'Reset'} onClick={() => handleResetClick()}/>
            </div>
            {loading && <Loadingindicator/>}
            {error && <Alert/>}
            <div className={'list-flexbox'}>
                {users && users.length > 0 &&
                    <div className='list'>
                        <List fetchFollowers={fetchFollowers} users={users}/>
                    </div>}
                {followers && followers.length > 0 &&
                    <div>
                        <div className='Followers'>
                            <div className='color_folowers'>
                            {followers.length} Followers
                            </div>
                            <FollowerList followers={followers}/>
                        </div>
                    </div>
                }
            </div>
            <div className={'Footer'}>
                <Footer/>
            </div>
        </div>
    );

    //Haalt de followers op
    async function fetchFollowers(username) {
        setUsername(username);
        const response = await fetch('https://api.github.com/users/' + username + '/followers', {
            headers: {
                'Authorization': 'token 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'
            }
        });
        //resultaat van de call
        const myJson = await response.json();
        setFollowers(myJson)
    }

    async function FetchUsers(searchString) {
        //Checkt of de string zeker 4 karakters heeft.
        if (searchString.length < 4) {
            setError(true)
        } else {
            setLoading(true);
            setError(false);

            const response = await fetch('https://api.github.com/search/users?q=' + searchString, {
                headers: {
                    'Authorization': 'token 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'
                }
            });
            const myJson = await response.json();
            // Kijkt na of het resultaat niet undefined is en of dat er meer dan 0 resultaten zijn.
            if (myJson.items === undefined || myJson.items.size === 0) {
                setError(true);
            } else {
                setError(false)
            }
            setLoading(false)
            setUsers(myJson.items);
        }
    }
}


export default App;
