const UserCard = ({ user }) => {
  const { firstName, lastName, About, age, Gender, photoUrl } = user;
  return (
    <div className="card bg-base-200 w-64  shadow-sm">
      <figure>
        <img className="rounded-2xl w-60 p-2" src={photoUrl} alt="user img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && Gender && <p>{age + " | " + Gender}</p>}
        <p>{About}</p>
        <div className="card-actions justify-between mt-1">
          <button className="btn btn-primary text-sm font-bold">
            Interested
          </button>
          <button className="btn btn-primary text-sm font-bold bg-amber-300">
            Ignored
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
