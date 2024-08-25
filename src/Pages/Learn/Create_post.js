import React from 'react';

const Create_post = () => {
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-neutral" onClick={() => document.getElementById('my_modal_5').showModal()}>Create Post</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-4xl mb-8 uppercase">Create Post!</h3>
                    <div>
                        <select className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Pick your favorite Problem</option>
                            <option>Homer</option>
                            <option>Marge</option>
                            <option>Bart</option>
                            <option>Lisa</option>
                            <option>Maggie</option>
                        </select>
                        <select className="select select-bordered w-full max-w-xs my-5">
                            <option disabled selected>Sub Problem</option>
                            <option>Homer</option>
                            <option>Marge</option>
                            <option>Bart</option>
                            <option>Lisa</option>
                            <option>Maggie</option>
                        </select>
                        <textarea
                            placeholder="Description"
                            className="textarea textarea-bordered textarea-sm w-full max-w-xs"></textarea>

                    </div>

                    {/* Modal action buttons */}
                    <div className="modal-action">
                        <form method="dialog">
                            {/* If there is a button in form, it will close the modal */}
                            <button className="btn">Submit</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Create_post;
