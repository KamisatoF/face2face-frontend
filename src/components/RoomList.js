import { RoomsContainer } from "../styles/RoomsContainer";
import { RoomItem } from "./RoomItem";

export const RoomList = (props) => (
    <RoomsContainer>
        <ul>
            {props.rooms.map(r => <RoomItem title={r.roomName}/>)}
        </ul>
    </RoomsContainer>
)