const Player = (props) => {
  const { player, onDeletePlayer } = props;
  const { name, position, age, id, avatar } = player;

  return (
    <div className="player__wrapper">
      <div className="player__avatar">
        <img src={avatar} alt="{name}picture" />
      </div>
      <h1>{name}</h1>
      <p>{position}</p>
      <p>{age}</p>
      <div className="player__delerte-btn" onClick={() => onDeletePlayer(id)}>
        X
      </div>
    </div>
  );
};

export default Player;

/*
    Remove Player from UI

    UI
        - Create UI
        - Remove Player component from Component Tree

    Logic
        - Find index player that we want to remove
        - Create new state without 
        - Set new state
*/
