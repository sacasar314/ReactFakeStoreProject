import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function ConfirmModal({ show, title, body, onConfirm, onCancel, loading }) {
  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{body}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel} disabled={loading}>
          Cancel
        </Button>
        <Button variant="danger" onClick={onConfirm} disabled={loading}>
          {loading ? 'Deleting...' : 'Delete'}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ConfirmModal