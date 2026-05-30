import SectionIntro from './SectionIntro';
import SectionList from './SectionList';
import SectionStack from './SectionStack';
import SectionFocus from './SectionFocus';
import SectionFlip from './SectionFlip';
import SectionFavorites from './SectionFavorites';
import SectionExtra from './SectionExtra';

const RENDERERS = {
    intro: SectionIntro,
    list: SectionList,
    stack: SectionStack,
    focus: SectionFocus,
    flip: SectionFlip,
    favorites: SectionFavorites,
    extra: SectionExtra
};

function SectionRenderer({ section }) {
    const Component = RENDERERS[section.type];
    if (!Component) return null;
    return <Component section={section} />;
}

export default SectionRenderer;