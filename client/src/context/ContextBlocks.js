import React, { useState, createContext } from "react";

export const ContextBlocks = createContext();

export const ContextBlocksProvider = (props) => {
  const [blocks, setBlocks] = useState([]);
  const [selectedBlock, setSelectedBlock] = useState(null);

  const addBlock = (block) => {
    setBlocks(...blocks, block);
  };

  // console.log(blocks);

  return (
    <ContextBlocks.Provider
      value={{
        blocks,
        setBlocks,
        addBlock,
        selectedBlock,
        setSelectedBlock,
      }}
    >
      {props.children}
    </ContextBlocks.Provider>
  );
};
