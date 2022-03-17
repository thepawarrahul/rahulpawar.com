import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Profile = () => {
    return <>
        <div>
        <div className="grid grid-rows-1 place-items-center">
            <ProfilePicture />
            <SocailMedia />
            <ProfileSummary />
        </div>
    </div>
    </>
}

const ProfilePicture = () => {
    return <>
        <div className="mt-20">
                <img className="rounded-full" src="./profileImage1.png" alt="profile"/>
        </div>
        <div className="p-5">
            <h1 className="text-5xl">Rahul Pawar</h1>
        </div>
    </>
}

const SocailMedia = () => {
    return <>
        <div className="text-3xl">
            <ol>
                <li className="float-right p-2"><a href="https://twitter.com/the_pawarRahul"><AiFillTwitterCircle /></a></li>
                <li className="float-right p-2"><a href="https://github.com/thepawarrahul"><AiFillGithub /></a></li>
                <li className="float-right p-2"><a href="https://www.linkedin.com/in/rahul-pawar-1992b2115"><AiFillLinkedin /></a></li>
            </ol>
        </div>
    </>
}

const ProfileSummary = () => {
    return <>
        <div className="md:mx-96 xs:p-5">
            <p className="text-center">
                I'm a Software developer who loves to build and design systems. I'm also intrested in UI/UX.
            </p>
        </div>
    </>
}
export default Profile;