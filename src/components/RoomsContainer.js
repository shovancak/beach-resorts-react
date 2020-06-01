import React from "react";
import RoomsFilter from "./RoomsFilter.js";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      Hello From RoomsContainer
      <RoomsFilter rooms={rooms}></RoomsFilter>
      <RoomList rooms={sortedRooms}></RoomList>
    </div>
  );
}

export default withRoomConsumer(RoomContainer);

// import React from "react";
// import RoomsFilter from "./RoomsFilter.js";
// import RoomList from "./RoomList";
// import { RoomConsumer } from "../Context";
// import Loading from "./Loading";

// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;

//         if (loading) {
//           return <Loading />;
//         }

//         return (
//           <div>
//             Hello From RoomsContainer
//             <RoomsFilter rooms={rooms}></RoomsFilter>
//             <RoomList rooms={sortedRooms}></RoomList>
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
