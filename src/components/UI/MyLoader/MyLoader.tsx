import ContentLoader from "react-content-loader"

const MyLoader = () => (
    <ContentLoader 
        speed={2}
        width={280}
        height={461}
        viewBox="0 0 280 461"
        backgroundColor="#e3dede"
        foregroundColor="#ecebeb"
    >
        <circle cx="136" cy="134" r="118" /> 
        <rect x="7" y="271" rx="0" ry="0" width="268" height="24" /> 
        <rect x="8" y="311" rx="0" ry="0" width="268" height="75" /> 
        <rect x="125" y="402" rx="0" ry="0" width="150" height="44" /> 
        <rect x="8" y="407" rx="0" ry="0" width="88" height="37" />
    </ContentLoader>
)

export default MyLoader