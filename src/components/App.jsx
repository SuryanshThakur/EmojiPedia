import React from "react";
import Entry from "./Entry";
import emojipedia from "../Emojipedia";

function createEntry(emojiTerm) {
    return(
    <Entry
        
        ey={emojiTerm.id}
        emoji={emojiTerm.emoji}
        name={emojiTerm.name}
        description={emojiTerm.meaning}
    />)
}



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

          <dl className="dictionary">
              {emojipedia.map(createEntry)};
              
              
      </dl>
    </div>
  );
}

export default App;
