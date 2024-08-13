import { nanoid } from "nanoid";
import { liveblocks } from "../liveblocks";

export const createDocument = async ({
  userId,
  email,
}: CreateDocumentParams) => {
  const roomId = nanoid();

  try {
    const metadata = { creadtorId: userId, email, title: "Untitled" };

    const usersAccesses: RoomAccesses = { [email]: ["room:write"] };

    const room = await liveblocks.createRoom(roomId, {
      metadata,
      usersAccesses,
      defaultAccesses: [],
    });
  } catch (error) {
    console.log("Error creating a room", error);
  }
};
