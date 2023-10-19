import Friend from "./Friend";

export default function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          name={friend.name}
          id={friend.id}
          image={friend.image}
          balance={friend.balance}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
