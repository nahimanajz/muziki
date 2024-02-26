import React from 'react';
import { FaTrash, FaEdit, FaInfoCircle } from 'react-icons/fa';

const ActionIcons = ({onDelete, onEdit, detail}) => {
  return (
    <div className='flex justify-around mt-4 space-x-[12px]'>
     
      <FaTrash size={20} color="red" onClick={onDelete} />
      
      <FaEdit size={20} color="blue" onClick={onEdit}/>
      {detail}
      
    </div>
  );
};

export default ActionIcons;