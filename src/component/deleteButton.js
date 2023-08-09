import { Button } from "react-bootstrap";

const DeleteButton = ({id, onDelete}) => {
    return (
      <div>
        <Button onClick={() => onDelete(id)} className="p-1 m-1 btnDelete">Delete</Button>
      </div>
    );
}
export default DeleteButton;