import { withTranslation } from "../i18n";
import { FlexDirectionProperty } from "csstype";

const imgStyle = {
    maxWidth: "100%",
    maxHeight: "100%"
};

const figureStyle = {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column" as FlexDirectionProperty
};

const CustomError: any = ({ status, t }: any) => (
    <>
        <figure style={figureStyle}>
            <figcaption>
                <h1>
                    {status
                        ? t('error-with-status', { status })
                        : t('error-without-status')}
                </h1>
            </figcaption>
            <img
                alt="Showing a properly cat according the status code"
                src={`https://http.cat/${status}`}
                style={imgStyle}
            />
        </figure>
    </>
)

CustomError.getInitialProps = async ({ res, err }: any) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null

    return {
        statusCode: statusCode,
        namespacesRequired: ["common"]
    }
};

export default withTranslation('common')(CustomError);