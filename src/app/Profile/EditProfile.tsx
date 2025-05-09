import { useContextStore } from "../Store/Context";

const EditProfile = () => {
    const { user } = useContextStore();
     // const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setEditValues({ ...editValues, [name]: value });
  // };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   if (e.target.files && e.target.files[0]) {
  //     const file = e.target.files[0];
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setEditValues({ ...editValues, avatarUrl: reader.result as string });
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  // const handleSave = () => {
  //   if (editValues.password !== editValues.confirmPassword) {
  //     alert("Passwords do not match.");
  //     return;
  //   }

  //   setUser({
  //     ...user,
  //     firstName: editValues.firstName,
  //     lastName: editValues.lastName,
  //     email: editValues.email,
  //     phoneNumber: editValues.phoneNumber,
  //     avatarUrl: editValues.avatarUrl,
  //   });

  //   setIsEditing(false);
  // };
  return ( 
    <div>
      <div className="bg-white  rounded-lg shadow-md space-y-4 px-10 max-md:px-7 py-4">
      <div>
        <h2 className='text-3xl text-navy-blue font-bold mt-5 mb-9'>Edit Profile</h2>
      </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div>
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={user?.userProfile?.firstName}
                // onChange={handleEditChange}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={user?.userProfile?.lastName}
                // onChange={handleEditChange}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={user?.userProfile?.email}
                // onChange={handleEditChange}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={user?.userProfile?.phoneNumber}
                // onChange={handleEditChange}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
       
            <div className="md:col-span-2">
              <label className="block text-gray-700">Profile Picture</label>
              <input
                type="file"
                accept="image/*"
                // onChange={handleFileChange}
                className="border rounded px-2 py-1 w-full"
              />
            </div>
          </div>
          <div className="mt-8 w-full">
            <button
              // onClick={handleSave}
              className="bg-blue-600 text-white px-4 w-full py-2 rounded hover:bg-blue-700 max-lg:hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </div>
    </div>
  )
}

export default EditProfile
