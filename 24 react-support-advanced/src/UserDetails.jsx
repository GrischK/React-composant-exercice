const UserDetails = ({ user, weight, isVisible }) => {
  if (!isVisible) {
    return <p>INVISIBLE</p>;
  }

  return (
    <div>
      <h3>{user.name}</h3>
      <img src={user.avatar} />
      <p>
        {user.address.street},{user.address.city}
      </p>
      <p>{weight} kg</p>
      <button onClick={user.shout}>Make {user.name} shout</button>
    </div>
  );
};

export default UserDetails;
