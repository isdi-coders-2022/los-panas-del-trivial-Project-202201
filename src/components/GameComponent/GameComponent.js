const GameComponent = ({ game }) => {
  return (
    <article>
      <div>
        <h2>Game name</h2>
        <p>{`Difficulty: ${game.difficulty}`}</p>
        <p>{`Questions: ${game.questrions.length}`}</p>
        <p>{game.creator}</p>
      </div>
      <div></div>
    </article>
  );
};

export default GameComponent;
