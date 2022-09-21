import React from 'react'
import '../styles/Noti.css'
import NotiData from '../../data.json'

function Noti() {
    function convertLongNote(event) {
        if ( event === "react" ) {
            return "reacted to your recent post";
        } else if ( event === "follow" ) {
            return "followed you";
        } else if ( event === "join group" ) {
            return "has joined your group";
        } else if ( event === "sent private message" ) {
            return "sent you a private message";
        } else if ( event === "comment" ) {
            return "commented on your picture";
        } else if ( event === "leave" ) {
            return "left the group";
        }
    }
    const [notiCount, setNotiCount] = React.useState(0);
    
    React.useEffect(() => {
        NotiData.map(notiData => {
            if(notiData.checked === false) {
                setNotiCount(prevNotiCount => prevNotiCount + 1);
            }
        })
    }, [])
  return (
    <main>
        <div className='header-container'>
            <header>
                <h2>Notifications</h2>
                <h2 className='noti-amount'>{notiCount}</h2>
            </header>
            <button>Mark all as read</button>
        </div>
        {
            NotiData && NotiData.map(noti => {
                return (
                    <section key={noti.userName} className={noti.checked ? "noti-containerChecked": "noti-containerNoChecked"}>
                        <div className='avatarAndNoti'>
                            <img src={noti.avatar} alt="Mark's avatar" className='avatar' />
                            <div>
                                <div className='noti-line'>
                                    <p>
                                        <strong className='userName'>{noti.userName} </strong>
                                        {convertLongNote(noti.event)}
                                        {
                                            noti.eventTarget &&
                                            <strong className='eventTarget'> {noti.eventTarget}</strong>
                                        }
                                    </p>
                                    <div className='unCheckedDot'></div>
                                </div>
                                <p>{noti.time}</p>
                                {
                                    noti.message && <div className='message'>{noti.message}</div>
                                }
                            </div>
                        </div>
                        {
                            noti.image && <img src={noti.image} alt="img" className='img' />
                        }
                    </section>
                )
            })
        }
    </main>
  )
}

export default Noti