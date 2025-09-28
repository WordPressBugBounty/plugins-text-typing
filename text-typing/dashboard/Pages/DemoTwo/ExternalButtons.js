import { typingIcon } from '../../utils/icons';

const ExternalButtons = ({ content, activeDemo, style = '' }) => {
    const { openDemoLabel, allDemosLabel } = content || {};


    const helpPage = document.getElementById("bplAdminHelpPage");
    const isPremium = helpPage?.getAttribute("data-is-premium") === "1";
    const buyNowUrl = helpPage?.getAttribute("data-upgrade-url");

    return <div className='wp-block-buttons is-layout-flex'>
        <div className={`wp-block-button one ${style}`}>
            <a className='wp-block-button__link wp-element-button' href={activeDemo.url} target='_blank' rel='noreferrer'>{typingIcon} {openDemoLabel}</a>
        </div>

        {(!isPremium || buyNowUrl) && (
            <div className={`wp-block-button two ${style}`}>
                <a
                    className="wp-block-button__link wp-element-button"
                    href={buyNowUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    {allDemosLabel}
                </a>
            </div>
        )}
    </div>
}
export default ExternalButtons;