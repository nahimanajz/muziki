import React from 'react';
import { FaTrash, FaEdit, FaInfoCircle } from 'react-icons/fa';

const ActionIcons = ({onDelete, onEdit, onShowDetail}) => {
  return (
    <div className='flex justify-between gap-[12px]'>
     
      <FaTrash size={20} color="red" onClick={onDelete} />
      
      <FaEdit size={20} color="blue" onClick={onEdit}/>
      
      <FaInfoCircle size={20} color="green" onClick={onShowDetail}/>
    </div>
  );
};

export default ActionIcons;