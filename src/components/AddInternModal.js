
export default function AddInternModal({ onClose }) {
  return (
    <div className='modal-container fixed top-0 left-0 w-full h-full flex items-center justify-center' onClick={() => onClose()}>
        <div className='modal-form-container max-w-md bg-white rounded p-6' onClick={e => e.stopPropagation()}>
          <div className="mb-2">
            <h6 className="font-bold text-xl font-sans">Intern details</h6>
          </div>
          <form className="flex flex-col justify-center">

            <label htmlFor='name' className="intern-form-label">
              <p>Name</p>
              <input type='text' name='name' id='name' className="intern-form-input"/>
            </label>

            <label htmlFor='email' className="intern-form-label"> 
              <p>Email</p>
              <input type='email' name='email' id='email' className="intern-form-input"/>
            </label>

            <div className="date-container flex">
              <label htmlFor='join' className="intern-form-label">
                <p>Joined date</p>
                <input type='text' name='join' id='join' className="intern-form-input"/>
              </label>
              <label htmlFor='end' className="intern-form-label ml-2">
                <p>End date</p>
                <input type='text' name='end' id='end' className="intern-form-input"/>
              </label>
            </div>

            <label htmlFor='notes' className="intern-form-label">
              <p>Notes</p>
              <textarea type='text' name='notes' id='notes' className="intern-form-input max-h-24"/>
            </label>

            <button type="submit" className="w-full bg-black mt-4 text-white p-2 rounded">Add intern</button>
          </form>
        </div>
    </div>
  )
}
