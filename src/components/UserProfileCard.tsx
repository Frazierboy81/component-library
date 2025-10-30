// types/index.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string;
}
 
export interface UserProfileCardProps {
  user: User;
  showEmail?: boolean;
  showRole?: boolean;
  onEdit?: (userId: string) => void;
  children?: React.ReactNode;
}

function UserProfileCard({user, showEmail, showRole, onEdit, children}: UserProfileCardProps) {

  return (
  <div className="flex justify-center">
    <div className="bg-white text-black w-72 h-48 rounded-md flex justify-center">
      <img className='p-7 pr-4 h-24' src="https://i.fbcd.co/products/resized/resized-750-500/d4c961732ba6ec52c0bbde63c9cb9e5dd6593826ee788080599f68920224e27d.jpg" alt="profile pic" />
      <div className="">
        <h2 className="pt-6 text-xl font-bold pb-">{user.name}</h2>
        <h2 className="">{user.email}</h2>
        <h2 className="p-4">{user.role}</h2>
        {showEmail && <div>{user.email}</div>}
        {showRole && <div>{user.role}</div>}
      
      <button className="flex outline items-center justify-center bg-blue-700 text-white w-48 h-10 rounded-md mr-12" onClick={() => onEdit && onEdit(user.id)}>Edit</button>
      </div>
</div>
      {children}
    </div>
  )

}

export default UserProfileCard;