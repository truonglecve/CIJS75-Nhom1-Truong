import FacebookLogo from '../img/social media/facebook.png';
const SocialMediaItem = [
    {
        imgLink: {FacebookLogo},
        number:`32k`,
        detail: `likes`,
    }
];
const SocialMedia = () => {
    return (
        <div>
            <div>Social media</div>
            <div>
                {SocialMediaItem[0].imgLink}
            </div>
        </div>
    )
}

export default SocialMedia