import './DeleteExpenseModal.css';

export const DeleteExpenseModal = ({ setShowExpenseDeleteModal }: any) => {
    return (
        <div id="portal">
            <div className="container">
                <div className="modal">
                    <div className="modal-body">
                        Are you sure you want to delete this expense?
                    </div>
                    <div className="modal-footer">
                        <button type="button" data-dismiss="modal" id="delete">Delete</button>
                        <button type="button" data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
//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