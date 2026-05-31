import { members } from '../data/team';
import MemberCard from '../components/MemberCard';
import MessagePanel from '../components/MessagePanel';

function HomePage() {
    return (
        <div className="container page-stack">
            <section className="section-heading">
                <p className="eyebrow">Equipo</p>
                <h2>Integrantes del proyecto</h2>
            </section>

            <section className="member-grid">
                {members.map((member, index) => (
                    <MemberCard key={member.id} member={member} order={index + 1} />
                ))}
            </section>

            <MessagePanel />
        </div>
    );
}

export default HomePage;