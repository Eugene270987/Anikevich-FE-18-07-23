import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function CreateModal ({ show, onClose, onDelete }) {
    const handleDelete = () => {
        onDelete();
        onClose();
    };

    return (
        <div>
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to delete this contact?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        No
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CreateModal;