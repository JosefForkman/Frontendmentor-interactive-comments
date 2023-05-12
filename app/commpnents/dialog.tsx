'use client';
export default function () {
    const dialog = document.querySelector('dialog');
    dialog?.showModal();
    // console.log(dialog?.showModal());

    return (
        <>
            <button className="btn" onClick={e => {
                e.target.nextElementSibling.showModal()
            }}>show</button>
            <dialog className="alert-box bg-Neutral-White">
                <h2>Delete comment</h2>
                <p>Are you sure to delete this comment? This will remove the comment and can't be undone.</p>
                <button className='btn bg-Neutral-Grayish-Blue text-Neutral-White bg-Neutral-Light-gray-hover text-Neutral-Grayish-Blue-hover'>No, cancel</button>
                <button className='btn bg-Primary-Soft-Red text-Neutral-White bg-Primary-Pale-red-hover'>Yes, delete</button>
            </dialog>
        </>
    )
}