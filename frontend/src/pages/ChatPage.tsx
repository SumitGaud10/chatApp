import { authClient } from "#lib/auth-client";
import React from "react";

function ChatPage() {
  const { data: session } = authClient.useSession();

  return <div className="p-4">{session?.user.name}</div>;
}

export default ChatPage;
