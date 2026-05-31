import SectionIntro from './SectionIntro';
import SectionList from './SectionList';
import TechStack from './TechStack';
import SectionFocus from './SectionFocus';
import SectionFlip from './SectionFlip';
import SectionFavorites from './SectionFavorites';
import SectionProgress from './SectionProgress';
import SectionProjects from './SectionProjects';
import SectionExtra from './SectionExtra';

const RENDERERS = {
    intro: SectionIntro,
    list: SectionList,
    techstack: TechStack,
    focus: SectionFocus,
    flip: SectionFlip,
    favorites: SectionFavorites,
    progress: SectionProgress,
    projects: SectionProjects,
    extra: SectionExtra
};

function SectionRenderer({ section }) {
    const Component = RENDERERS[section.type];
    if (!Component) return null;
    return <Component section={section} />;
}

export default SectionRenderer;