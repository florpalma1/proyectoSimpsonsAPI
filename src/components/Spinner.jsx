import "./spinner.css"
const Spinner = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner">
                <div className="dot1"></div>
                <div className="dot2"></div>
            </div>
        </div>
    );
};

export default Spinner;