import TeamMemberLists from "./TeamMemberList/TeamMemberLists";
import UpCommingEvents from "./UpCommingEvent/UpCommingEvents";


const MyTeem = () => {

    return (
        <div>
            <section>
                <UpCommingEvents></UpCommingEvents>
            </section>
            <section>
                <TeamMemberLists></TeamMemberLists>
            </section>

        </div>

    );
};

export default MyTeem;