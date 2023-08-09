import { Button } from "react-bootstrap";

const EditButton = ({ id, onEdit }) => {
  return (
    <div className="divBtnEdit">
      <Button onClick={() => onEdit(id)} className="p-1 m-2 btnEdit">
        Edit
      </Button>
    </div>
  );
};

export default EditButton
