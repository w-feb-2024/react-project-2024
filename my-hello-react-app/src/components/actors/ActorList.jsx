import styles from './Actor.module.css';
import ActorItem from './ActorItem';

function ActorList(){
    // array of javascript objects
    const allActors = [
        {
            actorId: 5001,
            actorRealName: "Daniel Radcliff",
            actorCharacterName: "Harry Potter"
        },
        {
            actorId: 5002,
            actorRealName: "Rupert Grint",
            actorCharacterName: "Ron Weasely"
        },
        {
            actorId: 5003,
            actorRealName: "Tom Cruise",
            actorCharacterName: "007"
        }
    ];

    const allActorsDisplay = allActors.map((eachActor, index)=><ActorItem 
                                                                    key={eachActor.actorId}
                                                                    actId={eachActor.actorId} 
                                                                    actReal={eachActor.actorRealName}
                                                                    actChar={eachActor.actorCharacterName}></ActorItem>);
    return(
        <>
        <h2 className={styles.head2}>List of all Actors</h2>
        {
            allActors.map((eachActor, index)=><ActorItem 
            key={eachActor.actorId}
            actId={eachActor.actorId} 
            actReal={eachActor.actorRealName}
            actChar={eachActor.actorCharacterName}></ActorItem>)
        }

        {/* {allActorsDisplay} */}

        {/* <ActorItem 
            actId={allActors[0].actorId} 
            actReal={allActors[0].actorRealName}
            actChar={allActors[0].actorCharacterName}></ActorItem>
        <ActorItem 
            actId={allActors[1].actorId} 
            actReal={allActors[1].actorRealName}
            actChar={allActors[1].actorCharacterName}></ActorItem>
        <ActorItem 
            actId={allActors[2].actorId} 
            actReal={allActors[2].actorRealName}
            actChar={allActors[2].actorCharacterName}></ActorItem> */}
        </>
    );
}
export default ActorList;